(function($){
	
	var leftCode = 37,
	    rightCode = 39,
		eventRunning = false,
		url = window.location.href,
		isSeeLz = "",
		seeLz = "see_lz",
		url = url.substring(0 , url.indexOf("?")),
		param = window.location.search.replace("?",""),
		currentPn = 0,
		totalThread = $(".l_reply_num>.red").html(),
		totalPageNum = 0,
		config = {};
		
		totalPageNum = Math.ceil(totalThread / 30);
		
		param = splitParam(param);
		
	
	window.addEventListener("keydown", function(evt){
		
		if(eventRunning) return;
			
		var code = evt.keyCode;
		
		if(code == leftCode || code == rightCode){
			go(code);
		}
		
	},false);
	
	
	function splitParam(p){
		var param = p.split("&");
		for(i in param){
			var tmp = param[i].split("=");
			config[tmp[0]] = tmp[1];
		}
		return param;
	}
	
	function go(keyCode) {	
		eventRunning = true;
		
		var pn, see_lz;
		
		pn = (config['pn'] == undefined || isNaN(config["pn"])) ? 1 : config['pn'];
		see_lz = (config['see_lz'] == undefined) ? "" : "&see_lz=1";
		
		if(keyCode == leftCode) {
			pn = (--pn >= 1) ? pn : 1;
		}else if(keyCode == rightCode){
			pn = (++pn <= totalPageNum) ? pn : totalPageNum;
		}
		
		if(config['pn'] != pn) {
			window.location.href = url + "?" + "pn=" + pn + see_lz;
		}else{
			eventRunning = false;
		}
	}
	
})($)