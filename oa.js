
var bc = '';
$(".j_thread_list").css("position", "relative");

$(".j_thread_list").live("mouseover", function(){
	bc = $(this).css("backgroundColor");
	$(this).css("backgroundColor", "#ADAFDE");
	if(!$(this).children(".oa")[0]){
		$(this).append("<a class='oa' style='position:absolute;top:13px;right:0px;font-size:12px;font-weight:bolder;float:right;color:#333;margin-right:10px;' href='" + $(this).children(1).attr("href") + "?see_lz=1' target='_blank'>只看楼主</a>");
		var thread_id = $(this).attr("data-field").match(/\d+/)[0];
		$(this).find('.oa').attr("href", "http://tieba.baidu.com/p/" + thread_id + "?see_lz=1");
		
		$(this).find('.oa').show();
	}else{
		$(this).children(".oa").css("display", "block");
	}
	
}).live("mouseout", function(event){
	console.log(event.target, event.currentTarget);
	$(this).css("backgroundColor", bc);
	$(this).children(".oa").css("display", "none");
});