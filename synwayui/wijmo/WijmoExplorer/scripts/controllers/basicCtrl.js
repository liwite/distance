'use strict';

var app = angular.module('app');

// basic controller: show basic grid functionality
app.controller('basicCtrl', function appCtrl($scope, $compile, dataSvc) {

    // data context
    $scope.ctx = {
        flex: null,
        flexInline: null,
        itemCount: 500,
        data: dataSvc.getData(500),
        filter: '',
        groupBy: '',
        pageSize: 0,
        dataMaps: true,
        formatting: true,
        alwaysEdit: false,
        countries: dataSvc.getCountries(),
        products: dataSvc.getProducts(),
        colors: dataSvc.getColors(),
        culture: 'en'
    };

    // update data when 'itemCount' changes
    $scope.$watch('ctx.itemCount', function () {
        $scope.ctx.data = dataSvc.getData($scope.ctx.itemCount * 1);
        $scope.ctx.groupBy = '';
    });

    // update page size
    $scope.$watch('ctx.pageSize', function () {
        var flex = $scope.ctx.flex;
        if (flex && $scope.ctx.pageSize != null) {
            var cv = flex.collectionView;
            cv.pageSize = $scope.ctx.pageSize;
        }
    });

    // update groups when 'groupBy' changes
    $scope.$watch('ctx.groupBy', function () {
        if ($scope.ctx.flex) {

            // get the collection view, start update
            var cv = $scope.ctx.flex.collectionView;
            cv.beginUpdate();

            // clear existing groups
            cv.groupDescriptions.clear();

            // add new groups
            var groupNames = $scope.ctx.groupBy.split('/'),
                groupDesc;
            for (var i = 0; i < groupNames.length; i++) {
                var propName = groupNames[i].toLowerCase();
                if (propName == 'amount') {

                    // group amounts in ranges
                    // (could use the mapping function to group countries into continents, 
                    // names into initials, etc)
                    groupDesc = new wijmo.collections.PropertyGroupDescription(propName, function (item, prop) {
                        var value = item[prop];
                        if (value > 1000) return 'Large Amounts';
                        if (value > 100) return 'Medium Amounts';
                        if (value > 0) return 'Small Amounts';
                        return 'Negative';
                    });
                    cv.groupDescriptions.push(groupDesc);
                } else if (propName) {

                    // group other properties by their specific values
                    groupDesc = new wijmo.collections.PropertyGroupDescription(propName);
                    cv.groupDescriptions.push(groupDesc);
                }
            }

            // done updating
            cv.endUpdate();
        }
    });

    // ICollectionView filter function
    function filterFunction(item) {
        var f = $scope.ctx.filter;
        if (f && item) {

            // split string into terms to enable multi-field searches such as 'us gadget red'
            var terms = f.toUpperCase().split(' ');

            // look for any term in any string field
            for (var i = 0; i < terms.length; i++) {
                var termFound = false;
                for (var key in item) {
                    var value = item[key];
                    if (angular.isString(value) && value.toUpperCase().indexOf(terms[i]) > -1) {
                        termFound = true;
                        break;
                    }
                }

                // fail if any of the terms is not found
                if (!termFound) {
                    return false;
                }
            }
        }

        // include item in view
        return true;
    }

    // apply filter (applied on a 500 ms timeOut)
    var toFilter;
    $scope.$watch('ctx.filter', function () {
        if (toFilter) {
            clearTimeout(toFilter);
        }
        toFilter = setTimeout(function () {
            toFilter = null;
            if ($scope.ctx.flex) {
                var cv = $scope.ctx.flex.collectionView;
                if (cv) {
                    if (cv.filter != filterFunction) {
                        cv.filter = filterFunction;
                    } else {
                        cv.refresh();
                    }
                    $scope.$apply('ctx.flex.collectionView');
                }
            }
        }, 500);
    });

    // connect to flex when it becomes available to update data maps and formatting
    // Don't remove this watcher or DataMaps won't work in Templates sample
    $scope.$watch('ctx.flex', function () {
        var flex = $scope.ctx.flex;
        if (flex) {
            updateDataMaps();
            updateFormatting();
            
            // 创建自定义右键菜单 added by ljp
            
            //flex.cells.hostElement.oncontextmenu = displayMenu;
            //flex.cells.hostElement.addEventListener('contextmenu',disPlayMenu);
            //createColumnContextMenu();
            
            var imageMenuData =[[{ text: "页面空白处点击是否冲突测试" }]];
            $(flex.cells.hostElement).smartMenu(imageMenuData, {        name: "grid",beforeShow:setCellContextMenu});
            
        }
    });

    function setCellContextMenu(e) {
    	
    	var flex = $scope.ctx.flex;
    	var ht = flex.hitTest(e.pageX, e.pageY);
    	
		if (ht.cellType==wijmo.grid.CellType.Cell) {
			//alert(ht.gridPanel.hostElement);
			flex.select(ht.cellRange,true);
			var imageMenuData = [
			                     [{
			                         text: "图片描边" + wijmo.getElement(e.target).innerText,
			                         data: [[{
			                             text: "5像素深蓝",
			                             func: function() {
			                                 $(this).css("border", "5px solid #34538b");
			                             }
			                         }, {
			                             text: "5像素浅蓝",
			                             func: function() {
			                                 $(this).css("border", "5px solid #a0b3d6");
			                             }
			                         }, {
			                             text: "5像素淡蓝",
			                             func: function() {
			                                 $(this).css("border", "5px solid #cad5eb");
			                             }
			                         }]]
			                     }, {
			                         text: "图片内间距",
			                         func: function() {
			                             $(this).css("padding", "10px");
			                         }
			                     }, {
			                         text: "图片背景色",
			                         func: function() {
			                             $(this).css("background-color", "#beceeb");
			                         }
			                     }],
			                     [{
			                         text: "查看原图",
			                         func: function() {
			                             var src = $(this).attr("src");
			                             window.open(src.replace("/s512", ""));
			                         }
			                     }]
			                 ];
			// 创建需要显示的右键菜单
			$.smartMenu.setMenuData("grid",imageMenuData);
			
		}
    	
    	
    	
    	
    }
    // update data maps, formatting, paging now and when the itemsSource changes
    $scope.itemsSourceChangedHandler = function (sender, args) {
        var flex = $scope.ctx.flex;
        updateDataMaps();
        updateFormatting();
        if (flex.collectionView && $scope.ctx.pageSize != null) {
            flex.collectionView.pageSize = $scope.ctx.pageSize;
        }
    };

    // notify AngularJS of selection changes, keep control in edit mode
    $scope.selectionChangedHandler = function () {
        var flex = $scope.ctx.flex;

        // notify AngularJS of selection changes
        $scope.current = flex.collectionView ? flex.collectionView.currentItem : null;
        if (!$scope.$$phase) {
            $scope.$apply('current');
            $scope.$apply('ctx.flex.selection');
        }

        // keep the control in edit mode
        if ($scope.ctx.alwaysEdit == true && flex.containsFocus()) {
            setTimeout(function () {
                flex.startEditing(false);
            }, 50);
        }
    };

    // when the culture changes, load the new culture, apply, and invalidate
    $scope.$watch('ctx.culture', function () {
        $.ajax({
            url: 'scripts/vendor/wijmo.culture.' + $scope.ctx.culture + '.js',
            dataType: 'script',
            success: function (data) {
                eval(data); // apply new culture
                invalidateAll(); // invalidate all controls to show new culture
            },
        });
    });

    // invalidate all Wijmo controls
    // using a separate function to handle strange IE9 scope issues
    function invalidateAll() {
        wijmo.Control.invalidateAll();
    }

    // update data maps
    $scope.$watch('ctx.dataMaps', function () {
        updateDataMaps();
    });

    // update column formatting
    $scope.$watch('ctx.formatting', function () {
        updateFormatting();
    });

    function disPlayMenu(imageMenuData) {
    	var flex = $scope.ctx.flex;
    	var ht = flex.hitTest(e.pageX, e.pageY);
    	
		if (ht.cellType==wijmo.grid.CellType.Cell) {
			//alert(ht.gridPanel.hostElement);
		}
    	
		
		//alert('ht.row=' + ht.row);
		//alert('ht.col=' + ht.col);
		
		/*
		alert('ht.cellRange.row=' + ht.cellRange.row);
		alert('ht.cellRange.col=' + ht.cellRange.col);
		
		alert('ht.cellRange.row2=' + ht.cellRange.row2);
		alert('ht.cellRange.col2=' + ht.cellRange.col2);
		
		alert('ht.cellRange.leftCol=' + ht.cellRange.leftCol);
		alert('ht.cellRange.rightCol=' + ht.cellRange.rightCol);
		
		alert('ht.cellRange.topRow=' + ht.cellRange.topRow);
		alert('ht.cellRange.bottomRow=' + ht.cellRange.bottomRow);*/
		
		//alert(wijmo.getElement(e.target).innerText);
		
        //menu.owner = flex[0];
        //menu.selectedIndex = -1;
        
        //flex.select = ht.cellRange;
		/*var dropDown = menu.dropDown;
		if (menu.onIsDroppedDownChanging(new wijmo.CancelEventArgs())) {
			wijmo.showPopup(dropDown,  flex.getCellBoundingRect(ht.row, ht.col));
			menu.onIsDroppedDownChanged();
			dropDown.focus();
		}*/
        //alert(flex.hostElement.id);
        //$("#rightmenu_id").smartMenu(imageMenuData, {name: "grid"});
    	//flex.select(ht.cellRange,true);
    	alert(e.target.innerText);
    	$(ht.gridPanel.hostElement).smartMenu(imageMenuData, {        name: "grid"       });
       
    	e.preventDefault();
    } 
    
    // apply/remove data maps
    function updateDataMaps() {
        var flex = $scope.ctx.flex;
        if (flex) {
            var colCountry = flex.columns.getColumn('countryId');
            var colProduct = flex.columns.getColumn('productId');
            var colColor = flex.columns.getColumn('colorId');
            if (colCountry && colProduct && colColor) {
                if ($scope.ctx.dataMaps == true) {
                    colCountry.dataMap = buildDataMap(dataSvc.getCountries());
                    colProduct.dataMap = buildDataMap(dataSvc.getProducts());
                    colColor.dataMap = buildDataMap(dataSvc.getColors());
                } else {
                    colCountry.dataMap = null;
                    colProduct.dataMap = null;
                    colColor.dataMap = null;
                }
            }
        }
    }

    // build a data map from a string array using the indices as keys
    function buildDataMap(items) {
        var map = [];
        for (var i = 0; i < items.length; i++) {
            map.push({ key: i, value: items[i] });
        }
        return new wijmo.grid.DataMap(map, 'key', 'value');
    }

    // apply/remove column formatting
    function updateFormatting() {
        var flex = $scope.ctx.flex;
        if (flex) {
            var fmt = $scope.ctx.formatting;
            setColumnFormat('amount', fmt ? 'c' : null);
            setColumnFormat('amount2', fmt ? 'c' : null);
            setColumnFormat('discount', fmt ? 'p0' : null);
            setColumnFormat('start', fmt ? 'MMM d yy' : null);
            setColumnFormat('end', fmt ? 'HH:mm' : null);
        }
    }
    function setColumnFormat(name, format) {
        var col = $scope.ctx.flex.columns.getColumn(name);
        if (col) {
            col.format = format;
        }
    }

    function createColumnContextMenu() {
    	var flex = $scope.ctx.flex;
    	
    	
    	
    	var oDiv=document.createElement("DIV");
    	document.body.appendChild(oDiv);
    	oDiv.id ="mainmenu1";
    	oDiv.style.display='none';
    	var menu = new wijmo.input.Menu('#mainmenu1');
    	menu.header = 'Main Menu';
    	
    
    	menu.itemsSource = ['option1','option2','','opetion3','opetion4'];
    	menu.itemClicked.addHandler(function(sender, args) {
	    	var menu = sender;
	    	
	    	alert('Thanks for selecting item ' + menu.selectedIndex + ' from menu ' + menu.header + '!');
	    	
	    
	    	
    	});
    	
    	flex.hostElement.addEventListener('contextmenu',
    			function (e) {
    				
	    			var ht = flex.hitTest(e.pageX, e.pageY);
	    			if (ht.cellType==wijmo.grid.CellType.Cell) {
	    				
	    				var imageMenuData =[[{ text: "页面空白处点击是否冲突测试" }]];
	    				alert(ht.gridPanel.hostElement);
	    				//alert('ht.row=' + ht.row);
	    				//alert('ht.col=' + ht.col);
	    				
	    				/*
	    				alert('ht.cellRange.row=' + ht.cellRange.row);
	    				alert('ht.cellRange.col=' + ht.cellRange.col);
	    				
	    				alert('ht.cellRange.row2=' + ht.cellRange.row2);
	    				alert('ht.cellRange.col2=' + ht.cellRange.col2);
	    				
	    				alert('ht.cellRange.leftCol=' + ht.cellRange.leftCol);
	    				alert('ht.cellRange.rightCol=' + ht.cellRange.rightCol);
	    				
	    				alert('ht.cellRange.topRow=' + ht.cellRange.topRow);
	    				alert('ht.cellRange.bottomRow=' + ht.cellRange.bottomRow);*/
	    				
	    				//alert(wijmo.getElement(e.target).innerText);
	    				e.preventDefault();
                        //menu.owner = flex[0];
                        //menu.selectedIndex = -1;
                        flex.select(ht.cellRange,true);
                        //flex.select = ht.cellRange;
	    				/*var dropDown = menu.dropDown;
	    				if (menu.onIsDroppedDownChanging(new wijmo.CancelEventArgs())) {
	    					wijmo.showPopup(dropDown,  flex.getCellBoundingRect(ht.row, ht.col));
	    					menu.onIsDroppedDownChanged();
	    					dropDown.focus();
	    				}*/
                        //alert(flex.hostElement.id);
                        //$("#rightmenu_id").smartMenu(imageMenuData, {name: "grid"});
                        $(ht.gridPanel.hostElement).smartMenu(imageMenuData, {
                            name: "grid"
                        });
	    			}
	    			
    			});
    }
    // test grid's object model
    $scope.toggleColumnVisibility = function () {
        var flex = $scope.ctx.flex;
        var col = flex.columns[0];
        col.visible = !col.visible;
    };
    $scope.changeColumnSize = function () {
        var flex = $scope.ctx.flex;
        var col = flex.columns[0];
        col.visible = true;
        col.width = col.width < 0 ? 60 : -1;
        col = flex.rowHeaders.columns[0];
        col.width = col.width < 0 ? 40 : -1;
    };
    $scope.toggleRowVisibility = function () {
        var flex = $scope.ctx.flex;
        var row = flex.rows[0];
        row.visible = !row.visible;
    };
    $scope.changeRowSize = function () {
        var flex = $scope.ctx.flex;
        var row = flex.rows[0];
        row.visible = true;
        row.height = row.height < 0 ? 80 : -1;
        row = flex.columnHeaders.rows[0];
        row.height = row.height < 0 ? 80 : -1;
    };
    $scope.changeDefaultRowSize = function () {
        var flex = $scope.ctx.flex;
        flex.rows.defaultSize = flex.rows.defaultSize == 28 ? 65 : 28;
    };
    $scope.changeScrollPosition = function () {
        var flex = $scope.ctx.flex;
        if (flex.scrollPosition.y == 0) {
            var sz = flex.scrollSize;
            flex.scrollPosition = new wijmo.Point(-sz.width / 2, -sz.height / 2);
        } else {
            flex.scrollPosition = new wijmo.Point(0, 0);
        }
    };
    $scope.autoSizeColumn = function () {
        var flex = $scope.ctx.flex;
        var sel = flex.selection;
        flex.autoSizeColumns(sel.leftCol, sel.rightCol);
    };
    $scope.autoSizeRow = function () {
        var flex = $scope.ctx.flex;
        var sel = flex.selection;
        flex.autoSizeRows(sel.topRow, sel.bottomRow);
    };

    // ** save/restore column layout
    $scope.saveColumnLayout = function () {
        if (localStorage) {
            var flex = $scope.ctx.flex;
            localStorage['columns'] = flex.columnLayout;
        }
    }
    $scope.loadColumnLayout = function () {
        if (localStorage) {
            var flex = $scope.ctx.flex;
            flex.columnLayout = localStorage['columns'];
        }
    }

    // ** inline editing
    $scope.$watch('ctx.flexInline', function () {
        var flex = $scope.ctx.flexInline;
        if (flex) {

            // prevent default editing
            flex.isReadOnly = true;

            // make rows taller to accommodate edit buttons and input controls
            flex.rows.defaultSize = 44;

            // use formatter to create buttons and custom editors
            flex.itemFormatter = itemFormatter;

            // commit row changes when scrolling the grid
            flex.scrollPositionChanged.addHandler(function () {
                if ($scope.ctx.editIndex > -1) {
                    $scope.commitRow($scope.ctx.editIndex);
                }
            });
        }
    });
    function itemFormatter(panel, r, c, cell) {
        if (panel.cellType == wijmo.grid.CellType.Cell) {
            var col = panel.columns[c],
                html = cell.innerHTML;
            if (r == $scope.ctx.editIndex) {
                switch (col.name) {
                    case 'buttons':
                        html = '<div>' +
                               '&nbsp;&nbsp;' +
                               '<button class="btn btn-primary btn-sm" ng-click="commitRow(' + r + ')">' +
                                   '<span class="glyphicon glyphicon-ok"></span> OK' +
                               '</button>' +
                               '&nbsp;&nbsp;' +
                               '<button class="btn btn-warning btn-sm" ng-click="cancelRow(' + r + ')">' +
                                   '<span class="glyphicon glyphicon-ban-circle"></span> Cancel' +
                               '</button>' +
                           '</div>';
                        break;
                    case 'date':
                        html = '<input id="theDate" class="form-control" value="' + panel.getCellData(r, c, true) + '"/>';
                        break;
                    case 'product':
                        html = '<input id="theProduct" class="form-control" value="' + panel.getCellData(r, c, true) + '"/>';
                        break;
                }
            } else {
                switch (col.name) {
                    case 'buttons':
                        cell.style.padding = '3px';
                        html = '<div>' +
                               '&nbsp;&nbsp;' +
                               '<button class="btn btn-default btn-sm" ng-click="editRow(' + r + ')">' +
                                   '<span class="glyphicon glyphicon-pencil"></span> Edit' +
                               '</button>' +
                               '&nbsp;&nbsp;' +
                               '<button class="btn btn-default btn-sm" ng-click="deleteRow(' + r + ')">' +
                                   '<span class="glyphicon glyphicon-remove"></span> Delete' +
                               '</button>' +
                           '</div>';
                        break;
                }
            }

            // update cell and compile its contents into the scope 
            // (required to wire up the ng-click directives)
            if (html != cell.innerHTML) {
                cell.innerHTML = html;
                cell.style.padding = '3px';
                $compile(cell)($scope);
            }
        }
    }
    $scope.editRow = function (row) {
        $scope.ctx.editIndex = row;
        $scope.ctx.flexInline.invalidate();
    }
    $scope.deleteRow = function (row) {
        var ecv = $scope.ctx.flexInline.collectionView;
        ecv.removeAt(row);
    }
    $scope.commitRow = function (row) {

        // save changes
        var flex = $scope.ctx.flexInline;
        flex.setCellData(row, 'start', $("#theDate").val());
        flex.setCellData(row, 'product', $("#theProduct").val());

        // done editing
        $scope.cancelRow(row);
    }
    $scope.cancelRow = function (row) {
        $scope.ctx.editIndex = -1;
        $scope.ctx.flexInline.invalidate();
    }

    // toggle freezing
    $scope.toggleFreeze = function () {
        var flex = $scope.flex;
        if (flex) {
            if (flex.frozenRows || flex.frozenColumns) {

                // show all rows/columns and unfreeze
                for (var i = 0; i < flex.rows.length; i++) {
                    flex.rows[i].visible = true;
                }
                for (var i = 0; i < flex.columns.length; i++) {
                    flex.columns[i].visible = true;
                }
                flex.frozenRows = flex.frozenColumns = 0;

            } else {

                // hide rows/cols before the viewRange and freeze
                var vr = flex.viewRange;
                for (var i = 0; i < vr.topRow; i++) {
                    flex.rows[i].visible = false;
                }
                for (var i = 0; i < vr.leftCol; i++) {
                    flex.columns[i].visible = false;
                }

                // freeze based on selection; if there is no selection,
                // freeze the first couple of rows/columns
                var sel = flex.selection;
                if (sel.topRow || flex.leftCol) {
                    flex.frozenRows = sel.topRow;
                    flex.frozenColumns = sel.leftCol;
                } else {
                    flex.frozenRows = flex.frozenColumns = 2;
                }
            }
        }
    }
   
    
});
