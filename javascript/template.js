/**
 *		简单的模板引擎
 * @param string template 将要被替换的字符串
 * @param object context 模板变量
 * @author jiangbai333
 * @email jiangbai333@Gmail.com
 * @time 2016-03-02 14:27:29
 */
function render(template, context) {
	/** 匹配模板变量的正则表达式 */
    var reg = /(\\)?\{\$([^\{\}\\]+)?\}/g;
    
    return template.replace(reg, function(str, mark, match, index) {
	    /** 如果以\\{$.*}作为占位符, 则不进行替换 */
        if ( mark ) {
            return str.replace('\\', '');
        } else {
			/** 按所属关系分割模板变量 */
            var variables = match.replace(/\s/g, '').split('.'),
			
                currentObject = context;
            
			/** 循环解析模板变量 */
			for ( var obj in variables ) {
                currentObject = currentObject[variables[obj]];
                if ( currentObject === undefined || currentObject === null ) {
                    return '';
                }
            }

            return currentObject;
        }
    });
}

/** 将模板引擎挂载到String的原型链 */
String.prototype.render = function (context) {
    return render(this, context);
};


/**
 *		升级版
 */
 
String.prototype.templated = function (context) {
    return function(template, context) {
		/** 匹配模板变量的正则表达式 */
		var reg = /(\\)?\{\$([^\{\}\\]+)?\}/g;
		
		return template.replace(reg, function(str, mark, match, index) {
			/** 如果以\\{$.*}作为占位符, 则不进行替换 */
			if ( mark ) {
				return str.replace('\\', '');
			} else {
				/** 按所属关系分割模板变量 */
				var variables = match.replace(/\s/g, '').split('.'),
				
					currentObject = context;
				
				/** 循环解析模板变量 */
				for ( var obj in variables ) {
					currentObject = currentObject[variables[obj]];
					if ( currentObject === undefined || currentObject === null ) {
						return '';
					}
				}

				return currentObject;
			}
		});
	}(this, context);
};
