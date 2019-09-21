
function WriteItem (name , url){
	return "<div class=\"item\">"+
				"<div class=\"item__icon\"  style=\"background-image:url("+url+")\"></div>"+
				"<div class=\"item__data\">"+
				"<p>"+(name)+"</p><input type=\"button\" value=\"В корзину\""+
				">"+
				"</div>"+
				"</div>";
}

function OpenHelpGUI () {
	var body = document.getElementById('help__gui');
	//body.className += ' help__gui ';
	body.style.display = '';
}


function Start() {
	var obj = document.getElementById('target_body');
	var name = "Ellement";
	var url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Cannabis_sativa_2.jpg/220px-Cannabis_sativa_2.jpg";
	for (var i = 0; i < 100; i++) {
		obj.innerHTML += WriteItem(name + ' ' + (i+1) , url);
	};


	// Events 
	var bt = document.getElementById('clouse__help__gui');
	bt.onclick = function (){
	var body = document.getElementById('help__gui');
	//body.className = body.className.replace('help__gui');
	body.style.display = 'none';
	}; 
}

