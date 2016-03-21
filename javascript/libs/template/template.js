/**
 *        �򵥵�ģ������
 * @param string template ��Ҫ���滻���ַ���
 * @param object context ģ�����
 * @author jiangbai333
 * @email jiangbai333@Gmail.com
 * @time 2016-03-02 14:27:29
 */
function render(template, context) {
    /** ƥ��ģ�������������ʽ */
    var reg = /(\\)?\{\$([^\{\}\\]+)?\}/g;
    
    return template.replace(reg, function($0, $1, $2, $3) {
        /** �����\\{$.*}��Ϊռλ��, �򲻽����滻 */
        if ( $1 ) {
            return $0.replace('\\', '');
        } else {
            /** ��������ϵ�ָ�ģ����� */
            var $4 = $2.replace(/\s/g, '').split('.'),
                $5 = context;
            
            /** ѭ������ģ����� */
            for ( var $6 in $4 ) {
                $5 = $5[$4[$6]];
                if ( $5 === undefined || $5 === null ) {
                    return '';
                }
            }

            return $5;
        }
    });
}

/** ��ģ��������ص�String��ԭ���� */
String.prototype.render = function (context) {
    return render(this, context);
};


/**
 *        ������
 */
 
String.prototype.templated = function (context) {
    return function(template, context) {
        /** ƥ��ģ�������������ʽ */
        var reg = /(\\)?\{\$([^\{\}\\]+)?\}/g;
        
        return template.replace(reg, function($0, $1, $2, $3) {
            /** �����\\{$.*}��Ϊռλ��, �򲻽����滻 */
            if ( $1 ) {
                return $0.replace('\\', '');
            } else {
                /** ��������ϵ�ָ�ģ����� */
                var $4 = $2.replace(/\s/g, '').split('.'),
                    $5 = context;
                
                /** ѭ������ģ����� */
                for ( var $6 in $4 ) {
                    $5 = $5[$4[$6]];
                    if ( $5 === undefined || $5 === null ) {
                        return '';
                    }
                }

                return $5;
            }
        });
    }(this, context);
};
