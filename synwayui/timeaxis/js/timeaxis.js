$.timeaxis={show:function(_23c,divid){
	return _211(_23c,divid);
	},load:function(obj,divid){
	_211(obj,divid);
	}
}
function _211(objs,divid){
	var time="";
	var info="";
	var html_x="<div class='timeaxis_content'>"+
	"<div class='timeaxis_wrapper'>"+
		"<div class='timeaxis_light'><i></i></div>"+
		"<div class='timeaxis_main' id='timeaxis_main'>";
	var year="";
	var obj;
	var list = eval(objs);
	for(var i=0;i<list.length;i++){
		var obj = list[i];
		time=obj.LAST_TIME;
		info=obj.INFO;
		var infos=eval(info);
		if(year==""){
			year=(time+"").substring(0,4);
			html_x+="<h1 class='timeaxis_title' >&nbsp;</h1><div class='timeaxis_year' >"+
			"<h2><a href='#' id='"+year+"'>"+year+"年<i></i></a></h2>"+
			"<div class='timeaxis_list'>" +
			"<ul>";
		}
		if(year==((time+"").substring(0,4))){
			html_x+="<li class='timeaxis_cls' id='"+("li_"+i)+"'>"+
			"<p class='timeaxis_date' id='"+("date_"+i)+"'>"+(obj.LAST_TIME+"").substring(5,7)+"月"+(obj.LAST_TIME+"").substring(8,10)+"日</p>"+
			"<p class='timeaxis_intro' id='"+("intro_"+i)+"' >"+obj.INTRO+"</p>"+
			"<p class='timeaxis_version'>&nbsp;</p>"+
			"<div class='timeaxis_more' id='"+("more_"+i)+"'>";
			for(var j=0;j<infos.length;j++){
				html_x+="<p>"+infos[j]+"</p>";
			}
			html_x+="</div>"+
		"</li>";
		}else{
			year=(time+"").substring(0,4);
			html_x+="</ul></div></div>";
			html_x+="<div class='timeaxis_year'>"+
			"<h2><a href='#' id='"+year+"'>"+year+"年<i></i></a></h2>"+
			"<div class='timeaxis_list'>" +
			"<ul>";
			html_x+="<li class='timeaxis_cls'id='"+("li_"+i)+"' >"+
			"<p class='timeaxis_date' id='"+("date_"+i)+"'>"+(obj.LAST_TIME+"").substring(5,7)+"月"+(obj.LAST_TIME+"").substring(8,10)+"日</p>"+
			"<p class='timeaxis_intro' id='"+("intro_"+i)+"'>"+obj.INTRO+"</p>"+
			"<p class='timeaxis_version'>&nbsp;</p>"+
			"<div class='timeaxis_more' id='"+("more_"+i)+"'>";
			for(var j=0;j<infos.length;j++){
				html_x+="<p>"+infos[j]+"</p>";
			}
			html_x+="</div>"+
		"</li>";
		}
	}
	
	html_x+="</ul></div></div></div></div></div>";
	$("#"+divid).html(html_x);
	$(".timeaxis_main .timeaxis_year .timeaxis_list").each(function(e, target){
		var $target=  $(target),
		$ul = $target.find("ul");
		$target.height($ul.outerHeight()), $ul.css("position", "absolute");
	});
	$(".timeaxis_main .timeaxis_year>h2>a").click(function(e){
		e.preventDefault();
		$(this).parents(".timeaxis_year").toggleClass("timeaxis_closed");
	});
}