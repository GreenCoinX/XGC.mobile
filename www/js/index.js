/* index.js */

var domain = "http://greencoinx.com";
var ssldomain = "https://greencoinx.com";
var storage = "XGC";
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
			<h1>Account</h1> \
			<div class="card"> \
<ul class="table-view"> \
    <li class="table-view-cell table-view-divider">Your accounts</li> \
    <li class="table-view-cell">Item 1</li> \
    <li class="table-view-cell">Item 2</li> \
    <li class="table-view-cell">Item 3</li> \
    <li class="table-view-cell">Item 4</li> \
    <li class="table-view-cell">Item 3</li> \
    <li class="table-view-cell">Item 4</li> \
    <li class="table-view-cell">Item 3</li> \
    <li class="table-view-cell">Item 4</li> \
    <li class="table-view-cell">Item 3</li> \
    <li class="table-view-cell">Item 4</li> \
    <li class="table-view-cell">Item 3</li> \
    <li class="table-view-cell">Item 4</li> \
    <li class="table-view-cell">Item 3</li> \
    <li class="table-view-cell">Item 4</li> \
  </ul></div> \
			</div> \
		';
		if(app.is_json(localStorage[storage+'.address']))
		{
//			alert( $.parseJSON(localStorage[storage+'.address']).test);
		}

		
		try{
//			localStorage.setItem(storage+'.settings', JSON.stringify({address:''}));
//			localStorage.removeItem(storage+'.settings');
//			localStorage.setItem(storage+'.settings', JSON.stringify({address:'aaaaaaaa'}));
//			alert( localStorage[storage+'.settings.IP']);
		}catch(e){
			return false;
		}

			
			$("#content").html(html);
	},
	contact: function(){
		html = '<div class="content-padded"> \
			<h1>Contact</h1> \
			</div> \
			';
		$("#content").html(html);
	},
	send: function(){
		html = '<div class="content-padded"> \
			<h1>Send</h1> \
			</div> \
			';

			$("#content").html(html);
	},
	receive: function(){
			html = '<div class="content-padded"> \
			<h1>Receive</h1> \
			</div> \
			';

			$("#content").html(html);
	},
	settings: function(){
			html = '<div class="content-padded"> \
			<h1>Settings</h1> \
			<a href="#" class="btn btn-outlined btn-block" onclick="app.identification();">Identification</a> \
			<a href="#" class="btn btn-outlined btn-block" onclick="app.wallet();">Wallet</a> \
			<a href="#" class="btn btn-outlined btn-block" onclick="app.remove();">Remove</a> \
			<span class="btn btn-outlined btn-block">IP: '+MyIP+'</span>\
			</div> \
			';
			
			$("#content").html(html);
	},
	identification: function(){
			html = '\
			<div class="content-padded"> \
				<h3>Settings</h3><h2>Identification</h2> \
				<form> \
					<a href="#" onclick="app.startverification();" class="btn btn-positive btn-block"><u>S</u>tart Verification</a> \
				</form> \
				<p>GreenCoinX uses email and phone identification on the wallet and addresses for all transactions.</p> \
				<p>You will have to enter your email address, get a verification code and confirm your email address.</p>\
				<p>Similarly, you will have to enter your phone number which can receive SMS, get a verification code and confirm your phone number.</p>\
			</div> \
			';
			$("#content").html(html);
	},	
	startverification: function(){
			var  myURL = "http://hitarth.org/code/index/"+MyIP;
		  $.ajax({
     url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
					myURL
					+'"&format=json&callback=',
					type: 'GET',
					dataType: 'json',
					success: function(data){
						if(data['query']['results']['json']['success']=="1"){
							localStorage.setItem(storage+'.settings.code',data['query']['results']['json']['code']);									
							localStorage.setItem(storage+'.settings.IP',data['query']['results']['json']['IP']);									
							localStorage.setItem(storage+'.settings.city',data['query']['results']['json']['city']);
							localStorage.setItem(storage+'.settings.org',data['query']['results']['json']['org']);
							localStorage.setItem(storage+'.settings.latlon',data['query']['results']['json']['latlon']);
							localStorage.setItem(storage+'.settings.country',data['query']['results']['json']['country']);
							localStorage.setItem(storage+'.settings.phone',data['query']['results']['json']['phone']);
							app.getemailcode();
						}else{
							html='<div class="content-padded"> <h3>Please connect to internet. Oops! Try again later!</h3></div>';
							app.codeerror();
						}
					},
						error: function(data){
							console.log(data);
						}
				});
		$("#content").html(html);
	},
	getemailcode: function(){
			html = '\
			<div class="content-padded"> \
				<h3>Identification</h3><h2>Get Email code</h2> \
				<form> \
					<input type="email" name="email" id="email" placeholder="name@email.com" />\
					<a href="#" onclick="app.emailcode();" class="btn btn-positive btn-block">G<u>e</u>t Code</a> \
				</form> \
				<p>Connected with IP: ' + localStorage[storage+'.settings.IP'] + ', through ' + localStorage[storage+'.settings.org'] + ', '+ localStorage[storage+'.settings.city']+' (' + localStorage[storage+'.settings.latlon']+') ' + localStorage[storage+'.settings.country'] +'. Phone prefix: ' + localStorage[storage+'.settings.phone'] + '</p>\
			</div> \
			';
			$("#content").html(html);
	},
	emailcode: function(){
			var email = $("#email").val();
			var  myURL = "http://hitarth.org/code/email/"+email+"/"+localStorage[storage+'.settings.code'];
		  $.ajax({
     url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+
					myURL
					+'"&format=json&callback=',
					type: 'GET',
					dataType: 'json',
					success: function(data){
						if(data['query']['results']['json']['success']=="1"){
							html = "Please enter the code received by email: "+ email;
							app.verifyemailcode();
						}else{
							html = "Unable to send email, please connect to internet!";
							app.codeerror();
						}
					},
						error: function(data){
							console.log(data);
						}
				});
			$("#content").html(html);
	},
	verifyemailcode: function(){
		html = '\
			<div class="content-padded"> \
				<h3>Identification</h3><h2>Verify Email code</h2> \
				<form> \
					<input type="text" name="emailverify" id="emailverify" placeholder="123456"  />\
					<a href="#" onclick="app.verifythisemailcode();" class="btn btn-positive btn-block">V<u>e</u>rify Email Code</a> \
				</form> \
				<p>Connected with IP: ' + localStorage[storage+'.settings.IP'] + ', through ' + localStorage[storage+'.settings.org'] + ', '+ localStorage[storage+'.settings.city']+' (' + localStorage[storage+'.settings.latlon']+') ' + localStorage[storage+'.settings.country'] +'. Phone prefix: ' + localStorage[storage+'.settings.phone'] + '</p>\
			</div> \
			';
			$("#content").html(html);
	},
	codeerror: function(){
		html = html + '\
		<div class="content-padded"> \
			<form> \
					<a href="#" onclick="app.startverification();" class="btn btn-positive btn-block"><u>S</u>tart Verification</a> \
				</form> \
			</div> \
		';
		$("#content").html(html);
	},
	wallet: function(){
			html = '<div class="content-padded"> \
			<h3>Settings</h3><h2>Identification</h2> \
			</div> \
			';
			$("#content").html(html);
	},	
	remove: function(){
		html = '<div class="content-padded"> \
			<h3>Settings</h3><h2>Remove</h2> \
			</div> \
			<div class="segmented-control"> \
    <a href="#" onclick="app.removed();" class="control-item btn btn-negative">Yes</a> \
    <a href="#" onclick="app.settings();" class="control-item btn btn-positive">No</a> \
   </div> \
			';
			$("#content").html(html);
			;
	},	
	removed: function(){
		localStorage.removeItem(storage);
		app.settings();
	},
	is_json: function(string)
	{
		try {
			if(string) JSON.parse(string);
			else return false;
		} catch (e) {
			return false;
		}
		return true;
	}

};

