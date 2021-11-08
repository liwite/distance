<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- ensure IE uses the latest version of IE -->
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- 三汇公用css -->
<link rel="stylesheet" href="/synwayui/themes/default/css/common.css" >

<!-- bootstrap css -->
<link rel="stylesheet" href="/synwayui/bootstrap/3.3.4/css/bootstrap.min.css">
<link rel="stylesheet" href="/synwayui/bootstrap/3.3.4/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="/synwayui/bootstrap/3.3.4/assets/css/font-awesome.min.css">
<!-- end bootstrap css -->

<!--  wijmo css -->
<link rel="stylesheet" href="/synwayui/wijmo/5/styles/wijmo.min.css" />
<!-- end wijmo css -->

<!-- jquery js -->
<script src="/synwayui/jquery/1.11.2/jquery-1.11.2.min.js"></script>
<!-- end jquery js -->

<!-- bootstrap js -->
<script src="/synwayui/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<!-- end bootstrap js -->

<!-- angular js-->
<script src="/synwayui/angular/1.2.5/angular.min.js"></script>
<script src="/synwayui/angular/1.2.5/angular-route.min.js"></script>
<script src="/synwayui/angular/1.2.5/i18n/angular-locale_zh-cn.js"></script>
<!-- end angular js-->

<!-- Wijmo5 js-->
<script src="/synwayui/wijmo/5/controls/wijmo.min.js"></script>
<script src="/synwayui/wijmo/5/controls/wijmo.grid.min.js"></script>
<script src="/synwayui/wijmo/5/controls/wijmo.grid.filter.min.js"></script>
<script src="/synwayui/wijmo/5/controls/wijmo.grid.grouppanel.min.js"></script>
<script src="/synwayui/wijmo/5/controls/wijmo.input.min.js"></script>
<script src="/synwayui/wijmo/5/controls/cultures/wijmo.culture.zh.min.js"></script>
<script src="/synwayui/wijmo/5/interop/angular/wijmo.angular.min.js"></script>
<!-- end Wijmo5 js-->

<!-- 三汇公用js -->
<script src="/synwayui/synwayui/synwayui.js"></script>

<!--link ng-href="{{activeTheme}}" rel="stylesheet" /-->

