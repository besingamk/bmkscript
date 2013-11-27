// JavaScript Document

var btn = document.getElementById('button'); 
var count = 0;

var p = document.getElementById('text');

function modulo(args) {
	return ( args %  2 === 0 ) ? true : false;
}

btn.addEventListener('click', function() {
	count++;
	if ( modulo(count) === true ){
		p.style.display="none";
	}  else {
		p.style.display="block";
	}
});