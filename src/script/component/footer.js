class myFooter extends HTMLElement {
	connectedCallback(){
		this.render();
	}
	
	render() {
		this.innerHTML = `<div class="footer bg-dark mt-5 py-3">
		<p class="text-center text-white mb-0">copyright &copy; 2020 by Dadang Rukmana</p>
		</div>`;
	}
}

customElements.define("my-footer", myFooter);