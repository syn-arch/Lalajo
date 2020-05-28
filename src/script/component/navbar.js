class myNav extends HTMLElement {
   connectedCallback(){
       this.render();
   }
 
   render() {
       this.innerHTML = `<nav class="navbar navbar-expand-lg bg-secondary">
		<a href="index.html" class="navbar-brand text-center text-white m-auto"><i class="fa fa-film"></i> LALAJO.NET</a>
	</nav>

	<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
		<div class="container">

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#my-nav">
				<span class="navbar-toggler-icon"></span>
			</button>
			
			<div class="collapse navbar-collapse" id="my-nav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a href="index.html" class="nav-link">HOME</a>
					</li>
					<li class="nav-item">
						<a href="movies.html" class="nav-link">MOVIES</a>
					</li>
					<li class="nav-item">
						<a href="tv-series.html" class="nav-link">TV SERIES</a>
					</li>
					<li class="nav-item">
						<a href="#about" data-toggle="modal" class="nav-link">ABOUT</a>
					</li>
					<li class="nav-item">
						<a href="#contact-us" data-toggle="modal" class="nav-link">CONTACT US</a>
					</li>
					<li class="nav-item">
						<form class="form-inline search-movies" method="GET" action="search.html">
							<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="query">
							<button class="btn btn-outline-light my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
						</form>
					</li>
				</ul>
			</div>

			<div class="dropdown">
				<a href="" class="nav-link text-white dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i> Dadang Rukmana</a>
				<div class="dropdown-menu" aria-labelledby="dropdownMenu2">
					<button class="dropdown-item" type="button"><i class="fa fa-user"></i> My Profile</button>
					<button class="dropdown-item" type="button"><i class="fa fa-star"></i> My Favorite</button>
					<button class="dropdown-item" type="button"><i class="fa fa-cog"></i> Settings</button>
					<div class="dropdown-divider"></div>
					<button class="dropdown-item" type="button"><i class="fa fa-sign-out-alt"></i> Logout</button>
				</div>
			</div>
		</div>
	</nav>`;
   }
}
 
customElements.define("my-navbar", myNav);