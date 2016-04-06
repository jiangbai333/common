'use strict';

var messageBox = document.querySelector("#msg");

/**
 * ����һ�������첽�ص��� Promise ����
 */
var pro = new Promise(function(resolve, reject) {
	/** resolve, reject ��Ϊ������ͬ�����µĻص����������� */
	/** then ����ͨ��Promise�ڻص�������ִ���߼�, ��ִ�� resolve �� then ����Ĭ��ִ�е�һ��������Ӧ�Ļص�����,���� then ����ִ�еڶ���������Ӧ�Ļص�����*/
	
	setTimeout(function () {
		messageBox.innerHTML += "Promise message<br>";
		//resolve("Promise resolve");
		reject("Promise reject");
	}, 1000);

}).then(function(res) {
	messageBox.innerHTML += "write " + res + " message<br>";
},function(rej){
	messageBox.innerHTML += "write " + rej + " message<br>";
});

messageBox.innerHTML += "write message<br>";


/**
 * ��ʽ����
 */
var pro = new Promise(function(resolve, reject) {

	setTimeout(function () {
		//resolve("Promise resolve");
		reject("Promise reject");
	}, 1000);

}).then(function(res) {

	return res;
},function(rej){

	return rej;
}).then(function(res) {

	console.log(res);
});