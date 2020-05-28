$(function(){

	function get(param) {
		var vars = {};
		window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
		);

		if ( param ) {
			return vars[param] ? vars[param] : null;	
		}
		return vars;
	}


	// api configuration
	const api_key = "ea958b9ad33a4a626a2d1d4b0f56801e";
	const base_url = "https://image.tmdb.org/t/p/w500/";

	function getItem(url, el){
		$.ajax({
			mehtod : "GET",
			url : url,
			dataType : 'json',
			success : function(response){
				response.results.forEach(function(value, index){
					$(el).append(`
						<div class="col-md-3">
						<figure class="imghvr-fade mx-1">
						<img src="${base_url}${value.poster_path}">
						<figcaption>
						<p class="title">${value.title}</p>
						<p>Rating ${value.vote_average}</p>
						<p>Release Date ${value.release_date}</p>
						</figcaption>
						<a href="detail.html?movie_id=${value.id}"></a>
						</figure>
						</div>`)
				})
			}
		});
	}

	function getDiscover(url, el, tv_series = false){
		$.ajax({
			mehtod : "GET",
			url : url,
			dataType : 'json',
			success : function(response){
				response.results.forEach(function(value, index){
					let title;
					let link;
					let release ;

					if (tv_series == false) {
						title = value.title
						link = `<a href="detail.html?movie_id=${value.id}"></a>`
						release = `<p>Release Date ${value.release_date}</p>`
					}else{
						title = value.original_name
						link = `<a href="detail_tv.html?tv_id=${value.id}"></a>`
						release = ``;
					}

					$(el).append(`
						<div class="col-md-3 mt-4">
						<figure class="imghvr-fade mx-1">
						<img src="${base_url}${value.poster_path}">
						<figcaption>
						<p class="title">${title}</p>
						<p>Rating ${value.vote_average}</p>
						${release}
						</figcaption>
						${link}
						</figure>
						</div>`)
				})
			}
		});
	}

	function getDetailMovies(url){
		$.ajax({
			mehtod : "GET",
			url : url,
			dataType : 'json',
			success : function(response){
				$('.movie_detail').html(`
					<div class="row">
					<div class="col-md-6">
					<img src="${base_url}${response.poster_path}" alt="" class="img-fluid movie_img">
					</div>
					<div class="col-md-6 pt-4">
					<h2>${response.title}</h2>
					<h5>Popularity ${response.popularity}</h5>
					<h5>Rating ${response.vote_average}</h5>
					<h5>Release Date ${response.release_date}</h5>
					<h5>Overview :</h5>
					<p>${response.overview}</p>
					</div>
					</div>`)
			}
		});
	}

	function getDetailTv(url){
		$.ajax({
			mehtod : "GET",
			url : url,
			dataType : 'json',
			success : function(response){
				$('.tv_detail').html(`
					<div class="row">
					<div class="col-md-6">
					<img src="${base_url}${response.poster_path}" alt="" class="img-fluid movie_img">
					</div>
					<div class="col-md-6 pt-4">
					<h2>${response.name}</h2>
					<h5>Popularity ${response.popularity}</h5>
					<h5>Rating ${response.vote_average}</h5>
					<h5>Episode Runtime ${response.episode_run_time[0]}</h5>
					<h5>Overview :</h5>
					<p>${response.overview}</p>
					</div>
					</div>`)
			}
		});
	}

	function search(query){
		const string = query.replace('+', ' ')
		$.ajax({
			mehtod : "GET",
			url : "https://api.themoviedb.org/3/search/movie?api_key=ea958b9ad33a4a626a2d1d4b0f56801e&language=en-US&query="+string+"&page=1&include_adult=false",
			dataType : 'json',
			success : function(response){
				$('.query').text(string)
				response.results.forEach(function(value, index){
					$('.search_item').append(`
						<div class="col-md-3 mx-3 mt-3" style="height:250px;width:100%; background-image: url(${base_url}${value.poster_path}); background-size: cover; background-position: center;">
					</div>
					<div class="col-md-8 p-4">
					<h2>${value.title}</h2>
					<h5>Rating ${value.vote_average}</h5>
					<h5>Release ${value.release_date}</h5>
					<div class="float-right">
					<a href="detail.html?movie_id=${value.id}" class="btn btn-dark">Detail Movie</a>
					</div>
					</div>`)
				})
			}
		});
	}

	getItem("https://api.themoviedb.org/3/movie/upcoming?api_key="+api_key, '.upcoming-series')
	getItem("https://api.themoviedb.org/3/movie/top_rated?api_key="+api_key, '.top-rated')
	getItem("https://api.themoviedb.org/3/movie/popular?api_key="+api_key, '.popular')

	getDetailMovies(`https://api.themoviedb.org/3/movie/${get('movie_id')}?api_key=${api_key}`)
	getDetailTv(`https://api.themoviedb.org/3/tv/${get('tv_id')}?api_key=${api_key}`)

	getDiscover("https://api.themoviedb.org/3/discover/movie?api_key="+api_key, '.movies')
	getDiscover("https://api.themoviedb.org/3/discover/tv?api_key="+api_key, '.tv-series', true)

	search(get('query'))

})