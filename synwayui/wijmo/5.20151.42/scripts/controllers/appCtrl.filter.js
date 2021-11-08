'use strict';

// declare app module
var app = angular.module('app-filter');

// controller
app.controller('appCtrl-Filter', function ($scope) {

    // create a filter and associate it with a grid
    $scope.initialized = function (s, e) {
        // If you want to create filters in code, uncomment the lines below 
        // and comment out the <wj-flex-grid-filter> tag in default.htm.
        //var flex = s;
       // var filter = new wijmo.grid.filter.FlexGridFilter(flex);
        s.collectionView.collectionChanged.addHandler(function (s, e) {
            var xx = e;
        });
    }

    // create some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    
    for (var i = 0; i < 100; i++) {
        data.push({
        	id: i,
        	开始时间: new Date(2015, i % 12, (i + 1) % 25),
        	振铃时间: new Date(2015, i % 12, (i + 1) % 25),
        	挂断时间: new Date(2015, i % 12, (i + 1) % 25),
        	释放时间: new Date(2015, i % 12, (i + 1) % 25),
        	接通时间: new Date(2015, i % 12, (i + 1) % 25, i % 24, i % 60, i % 60),
        	用户号码: '1861234567',
        	用户归属地: '杭州',
        	对方号码:'187465456',
        	IMSI:'dasdsa',
        	IMEI:'dsadsasw',
        	位置区代码:'102313',
        	小区编号:110,
        	经度:'1',
        	纬度:'2',
        	主被叫标识:110,
        	通话时长:50,
        	会话识别号:321321,
        	运营商:'移动',
        	交换机代码:'dsaads',
        	双方归属地:'dasda',
        	结束LAC:'dsa',
        	结束CI:'dsaxc',
        	DTMF:'dsdddd'
         
        });
    }

    $scope.data = new wijmo.collections.CollectionView(data);
    // notify scope when collectionView changes
    $scope.data.collectionChanged.addHandler(function () {
        if (!$scope.$root.$$phase) {
            $scope.$apply();
        }
    });

    // expose countries, country map
    $scope.countries = countries;
    var countryMap = [
        { name: 'US', key: 0 },
        { name: 'Germany', key: 1 },
        { name: 'Japan', key: 2 },
        { name: 'Italy', key: 3 },
        { name: 'Greece', key: 4 },
        { name: 'Spain', key: 5 },
        { name: 'Chile', key: 6 },
        { name: 'China', key: 7 },
        { name: 'Canada', key: 8 },
        { name: 'Astralia', key: 9 },
        { name: 'Austria', key: 10 }
    ];
    $scope.countryMap = new wijmo.grid.DataMap(new wijmo.collections.CollectionView(countryMap), 'key', 'name');

});