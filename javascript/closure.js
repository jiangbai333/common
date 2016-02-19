/**
 *		利用闭包实现的数据存储
 * @param string key 键名
 * @param mixed value 键值
 * @author jiangbai333
 * @email jiangbai333@Gmail.com
 * @time 2016-02-18 08:46:29
 */
var db = (function() {
    
    var data = {}; //数据容器对象
    
    /**对外部暴漏 getter、setter 接口*/
    return function(key, value) {
        return value === undefined ? data[key] : data[key] = value;
    }
    
})();

/**
 *		进一步优化的数据存储功能
 * @time 2016-02-19 11:17:29
 */
var db = (function() {
    
    var data = {}; //数据容器对象
    
	/**
	 *		验证键名是否是合适的数据类型
	 * @param mixed param 将要验证的键名
	 * @throws msg
	 * @return boolean
	 */
    function verification(param) {
        try {
			/**判断键名是否为字符串*/
            if ( "string" != typeof( param ) ) {
                throw "键名必须为字符串格式，不允许其它类型数据作为键名";
            }
        } catch( e ) {

            console.log(e);
            return false;
        }

        return true;
    }
    
	/**返回一个可对数据容器进行操作的对象*/
    return new function() {
                
		/**
		 *		读取数据
		 * @param string key 将要读取的数据对应的键名
		 * @return mixed 键值
		 */
        this.get = function(key) {
            return data[key];
        }
		
		/**
		 *		插入数据
		 * @param string key 将要插入的数据对应的键名
		 * @param mixed value 将要插入的数据
		 * @return mixed 若插入数据成功则返回被插入的数据,否则返回 false
		 */
        this.add = function(key, value) {
            return verification(key) ? data[key] = value : false;
        }

		/**
		 *		移除数据
		 * @param string key 将要移除的数据对应的键名
		 */
        this.del = function(key) {
            delete( data[key] );
        }

    }
    
})();