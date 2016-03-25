'use strict';

var messageBox = document.querySelector("#msg");

/**
 * 创建一个用于异步回调的 Promise 对象
 */
var pro = new Promise(function(resolve, reject) {
	/** resolve, reject作为两个不同场景下的回调函数被传入 */
	setTimeout(function () {
		messageBox.innerHTML += "Promise message<br>";
		resolve("Promise resolve");
	}, 1000);

}).then(function(resolve, reject) {
	/** resolve, reject作为两个不同场景下的回调函数被传入 */
	messageBox.innerHTML += "write " + resolve + " message<br>";
},function(resolve, reject){
	/** resolve, reject作为两个不同场景下的回调函数被传入 */
	messageBox.innerHTML += "write " + reject + " message<br>";
});

messageBox.innerHTML += "write message<br>";