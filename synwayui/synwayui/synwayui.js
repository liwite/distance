/**
 * 给Array附加数组忽略顺序所含元素是否相同的方法
 * 
 * @param a
 *            用于比较的对象
 * @param comparator
 *            比较两个item的function，如果为undefined，则直接使用==比较
 * @returns {Boolean}
 */
Array.prototype.equalsIgnoreOrder = function(a, comparator) {
	if (!a instanceof Array) {
		return false;
	} else if (a.length !== this.length) {
		return false;
	} else {
		if (!comparator || typeof comparator != 'function') {
			comparator = function(a, b) {
				return a == b;
			};
		}
		var test = [].concat(a); // 复制数组
		for (var i = 0; i < this.length; i++) {
			for (var j = 0; j < test.length; j++) {
				if (comparator(this[i], test[j])) {
					test.splice(j, 1);
					break;
				}
			}
		}
		return test.length === 0;
	}
};

/**
 * Array的indexOf
 * 
 * @param item
 * @param comparator
 *            比较两个item的function，如果为undefined，则直接使用==比较
 * @returns {Number}
 */
Array.prototype.indexOf = function(item, comparator) {
	if (!comparator || typeof comparator != 'function') {
		comparator = function(a, b) {
			return a == b;
		};
	}
	for (var i = 0; i < this.length; i++) {
		if (comparator.call(this, item, this[i])) {
			return i;
		}
	}
	return -1;
};

/**
 * 给Array附件contains方法
 * 
 * @param item
 * @param comparator
 *            比较两个item的function，如果为undefined，则直接使用==比较
 * @returns {Boolean}
 */
Array.prototype.contains = function(item, comparator) {
	return this.indexOf(item, comparator) !== -1;
};

/**
 * Array的remove
 * 
 * @param item
 * @param comparator
 *            比较两个item的function，如果为undefined，则直接使用==比较
 * @returns {Boolean}
 */
Array.prototype.remove = function(item, comparator) {
	var index = this.indexOf(item, comparator);
	if (index !== -1) {
		this.splice(index, 1);
		return true;
	}
	return false;
};

/**
 * 给Array扩展clone方法
 * 
 * @returns {Array}
 */
Array.prototype.clone = function() {
	var newArray = [];
	for (var i = 0; i < this.length; i++) {
		newArray.push(this[i]);
	}
	return newArray;
};

/**
 * 动态获取css方法
 */
$.getCss = function(url) {
	$("<link>").attr({
		rel : "stylesheet",
		type : "text/css",
		href : url
	}).appendTo("head");
}

$.getCss("/synwayui/jquery/plugins/alertify/0.3.11/alertify.core.css");
$.getCss("/synwayui/jquery/plugins/alertify/0.3.11/alertify.bootstrap.css");

/**
 * 全局函数封装
 * 
 * @author zhuwei
 */
$.synwayui = {
	
	/**
	 * 校验身份证是否合法
	 * @param idcard 用于校验的身份证
	 * @returns 身份证是否合法，合法返回true，否则返回错误信息
	 */
	checkIDCardNumber : function(idcard) {
		var Errors = new Array(true, "身份证号码位数不对!", "身份证号码出生日期超出范围或含有非法字符!",
				"身份证号码校验错误!", "身份证地区非法!");
		var area = {
			11 : "北京",
			12 : "天津",
			13 : "河北",
			14 : "山西",
			15 : "内蒙古",
			21 : "辽宁",
			22 : "吉林",
			23 : "黑龙江",
			31 : "上海",
			32 : "江苏",
			33 : "浙江",
			34 : "安徽",
			35 : "福建",
			36 : "江西",
			37 : "山东",
			41 : "河南",
			42 : "湖北",
			43 : "湖南",
			44 : "广东",
			45 : "广西",
			46 : "海南",
			50 : "重庆",
			51 : "四川",
			52 : "贵州",
			53 : "云南",
			54 : "西藏",
			61 : "陕西",
			62 : "甘肃",
			63 : "青海",
			64 : "宁夏",
			65 : "新疆",
			71 : "台湾",
			81 : "香港",
			82 : "澳门",
			91 : "国外"
		};
		var Y, JYM;
		var S, M;
		var idcard_array = new Array();
		// 兼容小x
		if (idcard && idcard.toUpperCase) {
			idcard = idcard.toUpperCase();
		}
		idcard_array = idcard.split("");
		// 地区检验
		if (area[parseInt(idcard.substr(0, 2))] == null)
			return Errors[4];
		// 身份号码位数及格式检验
		switch (idcard.length) {
		case 15:
			var year = parseInt(idcard.substr(6, 2)) + 1900;
			if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
				ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;// 测试出生日期的合法性
			} else {
				ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;// 测试出生日期的合法性
			}
			if (ereg.test(idcard)) {
				return Errors[0];
			} else {
				return Errors[2];
			}
			break;
		case 18:
			// 18位身份号码检测
			// 出生日期的合法性检查
			// 闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
			// 平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
			var year = parseInt(idcard.substr(6, 4));
			if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
				ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;// 闰年出生日期的合法性正则表达式
			} else {
				ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;// 平年出生日期的合法性正则表达式
			}
			if (ereg.test(idcard)) {// 测试出生日期的合法性
				// 计算校验位
				S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10]))
						* 7
						+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11]))
						* 9
						+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12]))
						* 10
						+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13]))
						* 5
						+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14]))
						* 8
						+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15]))
						* 4
						+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16]))
						* 2 + parseInt(idcard_array[7]) * 1
						+ parseInt(idcard_array[8]) * 6
						+ parseInt(idcard_array[9]) * 3;
				Y = S % 11;
				M = "F";
				JYM = "10X98765432";
				M = JYM.substr(Y, 1);// 判断校验位
				if (M == idcard_array[17])
					return Errors[0]; // 检测ID的校验位
				else
					return Errors[3];
			} else {
				return Errors[2];
			}
			break;
		default:
			return Errors[1];
			break;
		}
	},
	/**
	 * IP转long
	 * @param ipStr
	 * @param isMark 结果为有符号，还是无符号， true：有符号，false，无符号
	 * @return long型的IP
	 */
	convertIPToLong: function(ipStr, isMark) {
		var num = 0;
		var ip = ipStr.split(".");
		num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
		if (isMark) {
			// 有符号右移
			num = num >> 0;
		} else {
			// 无符号右移
			num = num >>> 0;
		}
		return num;
	},

	/**
	 * 将long型的时间转换为yyyy-MM-dd hh:mm:ss格式
	 * @param time long格式的日期
	 * @param callback 回调方法，方法的第一个实参为错误对象，第二个实参为结果数据
	 */
	convertTimeToString: function(time, callback) {
		callback = callback || function() {};
		var d = new Date(time * 1000);
		callback.call(this, null, d.getFullYear() + "-" + addZeroFront(d.getMonth() + 1, 2) + "-" + addZeroFront(d.getDate(), 2)
				+ " " + addZeroFront(d.getHours(), 2) + ":" + addZeroFront(d.getMinutes(), 2) + ":" + addZeroFront(d.getSeconds(), 2));
		function addZeroFront(source, destLength) {
			var less = destLength - (source + "").length;
			if (less > 0) {
				var s = Math.pow(2, less).toString(2).substring(1);
				var result = s + source;
				return result;
			}
			return source;
		}
	},
	
	/**
	 * 将时间转换成long
	 * @param time 2013-12-20 20:30:17格式的日期
	 * @param callback 回调方法，方法的第一个实参为错误对象，第二个实参为结果数据
	 */
	convertTimeToLong: function(time, callback) {
		callback = callback || function() {};
		var pattern = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{2}):(\d{2}):(\d{2})$/;
		if (pattern.test(time)) {
			var g = time.match(pattern);
			var date = new Date();
			date.setFullYear(g[1]);
			date.setMonth(parseInt(g[2], 10) - 1);
			date.setDate(g[3]);
			date.setHours(g[4]);
			date.setMinutes(g[5]);
			date.setSeconds(g[6]);
			callback.call(this, null, Math.floor(date.getTime() / 1000));
		} else {
			callback.call(this, '时间的格式不对，一定要是yyyy-MM-dd hh:mm:ss格式！');
		}
	}
};

/**
 * 使用alertify样式封装消息提示
 */
$.getScript("/synwayui/jquery/plugins/alertify/0.3.11/alertify.js", function() {
	alertify.set({
		delay : 3000,
		labels : {
			ok : "确定",
			cancel : "取消"
		}
	});
	$.extend($.synwayui, {
		confirm : function(content, success, cancel) {
			alertify.confirm(content, function(e) {
				if (e) {
					if (success) {
						success();
					}
				} else {
					if (cancel) {
						cancel();
					}
				}
			});
		},
		/**
		 * 浮动提示框
		 * 
		 * @author zhuwei
		 */
		success : function(content, delay) {
			alertify.success(content, delay);
		},

		/**
		 * 浮动提示框
		 * 
		 * @author zhuwei
		 */
		log : function(content, type, delay) {
			alertify.log(content, type, delay);
		},
		/**
		 * 浮动提示框
		 * 
		 * @author zhuwei
		 */
		error : function(content, delay) {
			alertify.error(content, delay);
		}
	});
});
