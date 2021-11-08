angular.module('app-filter').controller('appCtrl-Filter', function ($scope,$http) {
	//创建过滤器
    $scope.initialized = function (s, e) {
        new wijmo.grid.valuefilter.FlexGridFilter(s);
    };
    
    //根据任务状态改变任务条目显示的颜色
    $scope.getRowColor = function (taskState) {
        if (taskState == "等待响应") return '#3366FF';
        if (taskState == "协查拒绝") return 'green';
        if (taskState == "已删除") return '#FF0000';
        if (taskState == "协查通过") return '#333366';
    };
    ZeroClipboard.setMoviePath( "js/ZeroClipboard.swf");
	var clip = new ZeroClipboard.Client(); // 新建一个对象
	clip.setHandCursor( true ); // 设置鼠标为手型
	clip.setText(""); // 设置要复制的文本。
	// 注册一个 button，参数为 id。点击这个 button 就会复制。
	//这个 button 不一定要求是一个 input 按钮，也可以是其他 DOM 元素。
	clip.addEventListener( 'load', function(client) {
		 alert( "movie is loaded" );
	} );
	clip.addEventListener( 'complete', function(client, text) {     //复制完成后的监听事件

		alert("Copied text to clipboard: " + text );
		//clip.hide();                                          // 复制一次后，hide()使复制按钮失效，防止重复计算使用次数
	} );



	 $scope.cmdOpen=function(){
		 wijmo.Clipboard.copy($scope.flex.getClipString());
	 };
	 $scope.prompt="";
	 $scope.selectionChanging=function(){
		 $scope.prompt="按住Ctrl+c可进行复制"; 
	 }
    //清空按钮事件
	$('#clear').click(function(e){
        $('#searchForm')[0].reset();
	}) ;  
    
    var rows =20;
    $http({
    	method: 'POST',
    	url: './getdata.json?page=1&rows='+rows
    	}).success(function(data,status,headers,config) {
    		$.each(data.rows,function(i,n){
    			n.checked = false ;
    		}) ;
    		$scope.data = new wijmo.collections.CollectionView(data.rows);
    		var total = data.total;
    		var totalpage = total%rows==0 ? total/rows : total/rows+1 ;
    		var options = {
    				bootstrapMajorVersion: 3,
    	            currentPage: 1,//当前页
    	            totalPages: totalpage,//总页数
    	            numberofPages: 8,//显示的页数
    	            onPageClicked: function (event, originalEvent, type, page) {
    	            	//异步换页
    	                $http({
    	                	method: 'POST',
    	                	url: './getdata.json?page='+page+'&rows='+rows
    	                	}).success(function(data,status,headers,config) {
    	                		$scope.data = new wijmo.collections.CollectionView(data.rows);
    	                	}).error(function(data,status,headers,config) {
    	                    	// 当响应以错误状态返回时调用
    	                    });
    	            },
    	                    
    	    };
			$('#paging').bootstrapPaginator(options);
    	}).error(function(data,status,headers,config) {
    	// 当响应以错误状态返回时调用
    });
    
	
});


window.onresize=function(){
	layout();
} ;
function layout(){
	var height = $(window).height() ;
	var grid_height = $(window).height()-210 ;
	var tree_div_height = $(window).height()-24 ;
	var grid = $("#wjgrid");
	grid.attr("style","height:"+grid_height+"px");
	var tree = $("#dir_tree");
	tree.attr({style:"height:"+height+"px;min-width:150px;"});
	var tree_div = $("#dir_tree_div");
	tree_div.attr({style:"height:"+tree_div_height+"px;border-style: solid;border-width:1px;border-color:#C6C6C6;"});
}

