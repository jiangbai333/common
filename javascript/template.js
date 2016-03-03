/**
 *        简单的模板引擎
 * @param string template 将要被替换的字符串
 * @param object context 模板变量
 * @author jiangbai333
 * @email jiangbai333@Gmail.com
 * @time 2016-03-02 14:27:29
 */
function render(template, context) {
    /** 匹配模板变量的正则表达式 */
    var reg = /(\\)?\{\$([^\{\}\\]+)?\}/g;
    
    return template.replace(reg, function($0, $1, $2, $3) {
        /** 如果以\\{$.*}作为占位符, 则不进行替换 */
        if ( $1 ) {
            return $0.replace('\\', '');
        } else {
            /** 按所属关系分割模板变量 */
            var $4 = $2.replace(/\s/g, '').split('.'),
                $5 = context;
            
            /** 循环解析模板变量 */
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

/** 将模板引擎挂载到String的原型链 */
String.prototype.render = function (context) {
    return render(this, context);
};


/**
 *        升级版
 */
 
String.prototype.templated = function (context) {
    return function(template, context) {
        /** 匹配模板变量的正则表达式 */
        var reg = /(\\)?\{\$([^\{\}\\]+)?\}/g;
        
        return template.replace(reg, function($0, $1, $2, $3) {
            /** 如果以\\{$.*}作为占位符, 则不进行替换 */
            if ( $1 ) {
                return $0.replace('\\', '');
            } else {
                /** 按所属关系分割模板变量 */
                var $4 = $2.replace(/\s/g, '').split('.'),
                    $5 = context;
                
                /** 循环解析模板变量 */
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
