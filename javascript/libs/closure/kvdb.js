/**
 *        ���ñհ�ʵ�ֵ����ݴ洢
 * @param string key ����
 * @param mixed value ��ֵ
 * @author jiangbai333
 * @email jiangbai333@Gmail.com
 * @time 2016-02-19 11:17:29
 */
'use strict';

var db = (function() { 
    
    var data = {}; //������������
    
    /**
     *        ��֤�����Ƿ��Ǻ��ʵ���������
     * @param mixed param ��Ҫ��֤�ļ���
     * @throws msg
     * @return boolean
     */
    function verification(param) {
        try {
        /**�жϼ����Ƿ�Ϊ�ַ���*/
            if ( "string" != typeof( param ) ) {
                throw "��������Ϊ�ַ�����ʽ����������������������Ϊ����";
            }
        } catch( e ) {

            console.log(e);
            return false;
        }

        return true;
    }
    
    /**����һ���ɶ������������в����Ķ���*/
    return new function() {
                
        /**
         *        ��ȡ����
         * @param string key ��Ҫ��ȡ�����ݶ�Ӧ�ļ���
         * @return mixed ��ֵ
         */
        this.get = function(key) {
            return data[key];
        }
        
        /**
         *        ��������
         * @param string key ��Ҫ��������ݶ�Ӧ�ļ���
         * @param mixed value ��Ҫ���������
         * @return mixed ���������ݳɹ��򷵻ر����������,���򷵻� false
         */
        this.add = function(key, value) {
            return verification(key) ? data[key] = value : false;
        }

        /**
         *        �Ƴ�����
         * @param string key ��Ҫ�Ƴ������ݶ�Ӧ�ļ���
         */
        this.del = function(key) {
            delete( data[key] );
        }

        /**
         *        ������������е�ԭʼ����
         * @return Object data
         * �˷������ض�data��һ������
         */
        this.initial = function() {
            return data;
        }

        /**
         *        ��¡һ�����������е�ԭʼ���ݵĸ���
         * @return Object clone
         * �˷�������data��һ������
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