class About extends HTMLElement {
   connectedCallback(){
       this.render();
   }
 
   render() {
       this.innerHTML = `<div class="modal fade" id="about">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">About</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						<span class="sr-only">Close</span>
					</button>
				</div>
				<div class="modal-body">
					<h4>Lalajo.NET</h4>
					<p>lalajo net is an website for search movie and tv series, filter movies with upcoming series, popular movie, and latest release movies. this website is for learning purpose</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				</div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->`;
   }
}
 
customElements.define("about-us", About);