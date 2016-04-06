
function Model(value) {
	this._value = typeof value === 'undefined' ? '' : value;
	this._listeners = [];
}

Model.prototype.set = function (value) {
	var self = this;
	self._value = value;
	setTimeout(function () {
		self._listeners.forEach(function (listener) {
			listener.call(self, value);
		});
	});
};

/**
 * 初始化一个监听器
 */
Model.prototype.watch = function (listener) {
	this._listeners.push(listener);
};

/**
 * 将监听程序绑定到监听器
 */
Model.prototype.bind = function (node) {
	this.watch(function (value) {
		node.innerHTML = value;
	});
};


function Controller(callback) {
	var models = {};
	var views = Array.prototype.slice.call(document.querySelectorAll('[bind]'), 0);
	views.forEach(function (view) {
		var modelName = view.getAttribute('bind');
		(models[modelName] = models[modelName] || new Model()).bind(view);
	});
	callback.call(this, models);
}