'use strict';

var app = angular.module('app');

app.controller('chartMarkerCtrl', function appCtrl($scope) {

    // data context
    $scope.ctx = {
        chart: null,
        itemsSource: []
    };

    // create random data
    var dataCount = 300;
    for (var i = 0; i < dataCount; i++) {
        $scope.ctx.itemsSource.push({
            date: new Date(10, 0, i),
            output: Math.floor(Math.random() * 10),
            input: Math.floor(Math.random() * 10 + 10)
        });
    }

    $scope.$watch('ctx.chart', function () {
        if ($scope.ctx.chart) {
            // store references
            var chart = $scope.ctx.chart,
                pt = new wijmo.Point(),
                marker = new wijmo.chart.LineMarker(chart, {
                    lines: wijmo.chart.LineMarkerLines.Vertical,
                    interaction: wijmo.chart.LineMarkerInteraction.Move,
                    content: function () {
                        var html = '';
                        chart.series.forEach(function (s, i) {
                            var ht = s.hitTest(new wijmo.Point(pt.x, NaN));

                            // find series lines to get its color
                            var polyline = $(s.hostElement).find('polyline')[0];

                            // add series info to the marker content
                            if (ht.x && ht.y !== null) {
                                if (i == 0) {
                                    html += wijmo.Globalize.formatDate(ht.x, 'dd-MMM');
                                }
                                html += '<div style="color:' + polyline.getAttribute('stroke') + '">' + ht.name + ' = ' + ht.y.toFixed(2) + '</div>';
                            }
                        });
                        return html;
                    }
                });

            marker.positionChanged.addHandler(function (marker, point) {
                pt = point;
            });

            chart.axisX.format = "MMM-yy";
        }
    });
});
