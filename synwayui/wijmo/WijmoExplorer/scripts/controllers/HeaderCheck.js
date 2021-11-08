// define app, include Wijmo 5 directives
var app = angular.module('app', ['wj']);

// controller
app.controller('appCtrl', function ($scope) {

    // create some data
    $scope.data = getData();

    // formatter to add checkboxes to boolean columns
    $scope.itemFormatter = function (panel, r, c, cell) {

        // highlight rows that have 'active' set
        if (panel.cellType == wijmo.grid.CellType.Cell) {
            var flex = panel.grid;
            var row = flex.rows[r];
            if (row.dataItem.active) {
                cell.style.backgroundColor = 'gold';
            }
        }
        
        // add checkbox to header, sync with checkboxes in column
        if (panel.cellType == wijmo.grid.CellType.ColumnHeader) {
            var flex = panel.grid;
            var col = flex.columns[c];

            // check that this is a boolean column
            if (col.dataType == wijmo.DataType.Boolean) {

                // prevent sorting on click
                col.allowSorting = false;

                // count true values to initialize checkbox
                var cnt = 0;
                for (var i = 0; i < flex.rows.length; i++) {
                    if (flex.getCellData(i, c) == true) cnt++;
                }

                // create and initialize checkbox
                cell.innerHTML = '<input type="checkbox"> ' + cell.innerHTML;
                var cb = cell.firstChild;
                cb.checked = cnt > 0;
                cb.indeterminate = cnt > 0 && cnt < flex.rows.length;

                // apply checkbox value to cells
                cb.addEventListener('click', function (e) {
                    flex.beginUpdate();
                    for (var i = 0; i < flex.rows.length; i++) {
                        flex.setCellData(i, c, cb.checked);
                    }
                    flex.endUpdate();
                });
            }
        }
    }
});

// function used to get data for the grid
function getData() {
    return [
        { name: 'Paul', age: 12, active: true },
        { name: 'Ringo', age: 10, active: true },
        { name: 'George', age: 11, active: false },
        { name: 'John', age: 14, active: false }
    ];
}
