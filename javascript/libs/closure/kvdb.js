/**
 *        利用闭包实现的数据存储
 * @param string key 键名
 * @param mixed value 键值
 * @author jiangbai333
 * @email jiangbai333@Gmail.com
 * @time 2016-02-19 11:17:29
 */
'use strict';

var db = (function() { 
    
    var data = {}; //数据容器对象
    
    /**
     *        验证键名是否是合适的数据类型
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
         *        读取数据
         * @param string key 将要读取的数据对应的键名
         * @return mixed 键值
         */
        this.get = function(key) {
            return data[key];
        }
        
        /**
         *        插入数据
         * @param string key 将要插入的数据对应的键名
         * @param mixed value 将要插入的数据
         * @return mixed 若插入数据成功则返回被插入的数据,否则返回 false
         */
        this.add = function(key, value) {
            return verification(key) ? data[key] = value : false;
        }

        /**
         *        移除数据
         * @param string key 将要移除的数据对应的键名
         */
        this.del = function(key) {
            delete( data[key] );
        }

        /**
         *        获得数据容器中的原始数据
         * @return Object data
         * 此方法返回对data的一个引用
         */
        this.initial = function() {
            return data;
        }

        /**
         *        克隆一个数据容器中的原始数据的副本
         * @return Object clone
         * 此方法返回data的一个副本
         */
        this.clone = function() {
            var r = new Object();
            for( var t in data) {
                r[t] = data[t];
            }
            return r;
        }
    }
})();