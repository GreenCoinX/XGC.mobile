/* index.js */

var domain = "http://greencoinx.com";
var ssldomain = "https://greencoinx.com";
var html = 'This is a text';
var app = {
initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');
		console.log('Received Event: ' + id);
	},
	index: function(){
			html = '<div class="content-padded"> \
			<h1>Account<h1> \
			<div class="bar bar-standard bar-header-secondary"> \
			<button class="btn btn-block">Block level button</button> \
			</div> \
			</div> \
			';
			$("#content").html(html);
	},
	contact: function(){
		html = '<div class="content-padded"> \
			<h1>Contact<h1> \
			</div> \
			';
			
			$("#content").html(html);
	},
	send: function(){
		html = '<div class="content-padded"> \
			<h1>Send<h1> \
			</div> \
			';

			$("#content").html(html);
	},
	receive: function(){
			html = '<div class="content-padded"> \
			<h1>Receive<h1> \
			</div> \
			';

			$("#content").html(html);
	},
	settings: function(){
			html = '<div class="content-padded"> \
			<h1>Settings<h1> \
			</div> \
			<button class="btn btn-outlined btn-block" onlcick="app.identification();">Identification</button> \
			<button class="btn btn-outlined btn-block" onlcick="app.wallet();">Wallet</button> \
			';
			
			$("#content").html(html);
	},
	identification: function(){
			html = '<div class="content-padded"> \
			<h1>Identification<h1> \
			</div> \
			';

			$("#content").html(html);
	},	
};