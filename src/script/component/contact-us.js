class contactUs extends HTMLElement {
   connectedCallback(){
       this.render();
   }
 
   render() {
       this.innerHTML = `<div class="modal fade" id="contact-us">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Contact Us</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						<span class="sr-only">Close</span>
					</button>
				</div>
				<div class="modal-body">
					<p>You can contact us to link above</p>
					<div class="row">
						<div class="col-md-12">
							<a href="" class="text-dark text-decoration-none"><i class="fab fa-facebook"></i> Facebook</a>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<a href="" class="text-dark text-decoration-none"><i class="fab fa-instagram"></i> Instagram</a>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<a href="" class="text-dark text-decoration-none"><i class="fab fa-whatsapp"></i> Whatsapp</a>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<a href="" class="text-dark text-decoration-none"><i class="fab fa-github"></i> Github</a>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<a href="" class="text-dark text-decoration-none"><i class="fab fa-youtube"></i> Youtube</a>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				</div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->`;
   }
}
 
customElements.define("contact-us", contactUs);