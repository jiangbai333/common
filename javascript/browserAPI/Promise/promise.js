'use strict';

var messageBox = document.querySelector("#msg");

/**
 * ����һ�������첽�ص��� Promise ����
 */
var pro = new Promise(function(resolve, reject) {
	/** resolve, reject��Ϊ������ͬ�����µĻص����������� */
	setTimeout(function () {
		messageBox.innerHTML += "Promise message<br>";
		resolve("Promise resolve");
	}, 1000);

}).then(function(resolve, reject) {
	/** resolve, reject��Ϊ������ͬ�����µĻص����������� */
	messageBox.innerHTML += "write " + resolve + " message<br>";
},function(resolve, reject){
	/** resolve, reject��Ϊ������ͬ�����µĻص����������� */
	messageBox.innerHTML += "write " + reject + " message<br>";
});

messageBox.innerHTML += "write message<br>";