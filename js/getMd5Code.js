/*MD5加密*/
function getMd5Code(data, Key) {
		//获取当前时间
	var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
	if(data.appid == null || data.appid == undefined) {
		var appid = "";
	} else {
		var appid = data.appid;
	}
	if(data.method == null || data.method == undefined) {
		var method = "";
	} else {
		var method = data.method;
	}
	if(data.charset == null || data.charset == undefined) {
		var charset = "";
	} else {
		var charset = data.charset;
	}
	if(data.typeid == null || data.typeid == undefined) {
		var typeid = "";
	} else {
		var typeid = data.typeid;
	}
	if(data.pagesize == null || data.pagesize == undefined) {
		var pagesize = "";
	} else {
		var pagesize = data.pagesize;
	}
	if(data.currentpage == null || data.currentpage == undefined) {
		var currentpage = "";
	} else {
		var currentpage = data.currentpage;
	}
	
	
	if(data.msisdn!=undefined){
		getMd5method_Msisdn_id();
	}
	
	if(data.brand_id == null || data.brand_id == undefined) {
		getMd5method_NoBrand_id();
	} else {
		var brand_id = data.brand_id;
		getMd5method_Brand_id();

	}
	
	
	
	
	return obj;
	//if(key=="C"){
	//	var key = "commodityKey";
	//}else if(key=="U"){
	//	var key = "userKey";
	//}else{

	//	return;
	//}

	function getMd5method_NoBrand_id() {
		var md5SigntypeStrig = "appid=" + appid + "&method=" + method + "&charset=" + charset + Key;

		var signtype = hex_md5(md5SigntypeStrig);
		var md5EncryptStrig = "typeid=" + typeid + "&pagesize=" + pagesize + "&currentpage=" + currentpage + Key;

		var encrypt = hex_md5(md5EncryptStrig);

		
		return obj = {
			'appid': data.appid,
			'method': data.method,
			'charset': data.charset,
			'signtype': signtype,
			'encrypt': encrypt,
			'timestamp': timestamp,
			'version': data.version,
			'typeid': data.typeid,
			'pagesize': data.pagesize,
			'currentpage': data.currentpage,
		};
		

	}

	function getMd5method_Brand_id() {
		var md5SigntypeStrig = "appId=" + appid + "&method=" + method + "&charset=" + charset + Key;

		var signtype = hex_md5(md5SigntypeStrig);
		var md5EncryptStrig = "brand_id=" + brand_id + Key;

		var encrypt = hex_md5(md5EncryptStrig);


		return obj = {
			'appId': data.appid,
			'method': data.method,
			'charset': data.charset,
			'signType': signtype,
			'encrypt': encrypt,
			'timestamp': timestamp,
			'version': data.version,
			'brand_id': data.brand_id
		};
	}
	
	function getMd5method_Msisdn_id() {
		var md5SigntypeStrig = "appId=" + appid + "&method=" + method + "&charset=" + charset + Key;

		var signtype = hex_md5(md5SigntypeStrig);
		var md5EncryptStrig = "brand_id=" + brand_id + "&msisdn=" + data.msisdn + "&pagesize=" + data.pagesize +  "&currentPage=" + data.currentPage +Key;

		var encrypt = hex_md5(md5EncryptStrig);


		return obj = {
			'appId': data.appid,
			'method': data.method,
			'charset': data.charset,
			'signType': signtype,
			'encrypt': encrypt,
			'timestamp': timestamp,
			'version': data.version,
			'brand_id': data.brand_id,
			'msisdn':data.msisdn,
			'pagesize':data.pagesize,
			'currentPage':data.currentPage
		};
	}
}