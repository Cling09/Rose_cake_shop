/*
 * @Author: Administrator
 * @Date:   2018-09-03 10:29:16
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-03 10:55:42
 */
function no_repeat(arr) {
	var arr1 = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr1.indexOf(arr[i]) == -1) {
			arr1.push(arr[i])
		}
	}
	return arr1;
}

function strim(str){
	// 去除开始的空格
	while(str[0]==' '){
		// 截取字符串
		str=str.substr(1,str.length-1)
	}
	// 去除结尾的空格
	while(str[str.length-1]==' '){
		str=str.substr(0,str.length-1)
	}

	return str
}