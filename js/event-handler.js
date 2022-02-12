// Event Handlers

function cli(args) {
  console.log(args);
}
function set(selector, e) {
  document.querySelector(selector).innerHTML = e;
}
function get(selector) {
  return document.querySelector(selector).innerHTML;
}
function href(url) {
  window.location.href = url;
}

function isLocalhost () {
	let host = window.location.hostname;
  return host === 'localhost' || host === '127.0.0.1';
}
function isEmail (email) {
	let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  return email.match(pattern);
}

function toggleDrawer(self, selector = '#drawer') {
	let doc = document.querySelector(selector), icon, value;
  if (! doc.style.display || doc.style.display == 'none') {
    icon = '&times;';
    value = 'block';	  
  }
  else {
    icon = '&equiv;';
    value = 'none';
  }
  self.innerHTML = icon;
	doc.style.display = value;
}
function togglePassword(selector = 'input[name="password"]') {
	let input = document.querySelector(selector);
	var value = input.type == 'password'? 'text': 'password';
	input.setAttribute('type',value);
}

function handleSubscribe(selector) {
	let input = document.querySelector(selector);
	var email = input.value.trim();
	if (email.length > 0 && isEmail(email)) 
		alert(`Thank you, ${email}!`);
	input.value = '';
}
function handleDelete(id) {
	if (confirm('Delete Record?') == true)
		window.location.assign(`?d=true&q=${id}`);
}
function handleUpload(selector) {
	document.querySelector(selector).click();
}
function handleLogout(page = 'index.html') {
	if (confirm('Exit Application?') == true) {
		window.sessionStorage.clear();
		window.location.assign(page);
	}
}

function ajaxRequest(endpoint, params, callback) {
	let query = endpoint+ '?' +params; // p1=x&p2=y
	let xhttp = window.XMLHttpRequest? new XMLHttpRequest(): new ActiveXObject('Microsoft.XMLHTTP');
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200)
			callback(this.responseText);
	};
	xhttp.open('GET', query, true);
	xhttp.send();
}

function cloneSelector (selector = 'main ul') {
	var card = document.querySelectorAll(selector)[0];
	var cardContent = card.innerHTML;    
	var cardContents = '';
	for (var i = 0; i < 24; i++) {
		cardContents += cardContent;
	}
	card.innerHTML = cardContents;
}