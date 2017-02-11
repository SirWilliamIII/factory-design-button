var MYFORM = MYFORM || {};

MYFORM.html = {
	button: function(txt) {
		this.add = function(container) {
			var btn = document.createElement('button');
			btn.innerText = txt;
			container.appendChild(btn);
		};
	},
	a: function(txt) {
		this.add = function(container) {
			var a = document.createElement('a');
			a.href = "#";
			a.innerText = txt;
			container.appendChild(a);
		};
	},
	label: function(txt) {
		this.add = function(container) {
			var label = document.createElement('label');
			label.innerText = txt;
			label.style.cssText += "border: 1px solid black; cursor: pointer; padding: 2px;";
			container.appendChild(label);
		};
	},
};
MYFORM.html.btnCreate = document.getElementById('btnCreate');
MYFORM.html.btnCreate.addEventListener('click', function() {
	MYFORM.html.factory = function(type, txt) {
		return new MYFORM.html[type](txt);
	};
	var selectTag = document.getElementById('drpControls');
	var selectedControl = selectTag.options[selectTag.selectedIndex].value;
	var controlText = document.getElementById('txtControlText').value;
	var container = document.getElementById('container');

	var temp = MYFORM.html.factory(selectedControl, controlText);
	temp.add(container);

});
