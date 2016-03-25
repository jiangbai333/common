'use strict';

var messageBox = document.querySelector("#msg");

/**
 * 创建一个用于异步回调的 Promise 对象
 */
var pro = new Promise(function(resolve, reject) {
	/** resolve, reject 作为两个不同场景下的回调函数被传入 */
	/** then 方法通过Promise内回调函数的执行逻辑, 若执行 resolve 则 then 方法默认执行第一个参数对应的回调函数,否则 then 方法执行第二个参数对应的回调函数*/
	
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
 * 链式调用
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