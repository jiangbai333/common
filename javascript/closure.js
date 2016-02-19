/**
 *		利用闭包实现的数据存储
 * @param string key 键名
 * @param mixed value 键值
 * @author 姜柏超
 * @time 2016-02-18 08:46:29
 */
var db = (function() {
    
    var data = {}; //数据容器对象
    
    /**对外部暴漏 getter、setter 接口*/
    return function(key, value) {
        return value === undefined ? data[key] : data[key] = value;
    }
    
})();
