/**
 *		利用闭包实现的数据存储
 * @param string key 键名
 * @param mixed value 键值
 */
var db = (function() {
    
    var data = {};
    
    return function(key, value) {
        return value === undefined ? data[key] : data[key] = value;
    }
    
})();
