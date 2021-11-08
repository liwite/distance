'use strict';
angular.module('synway-directives', []);
/*
.move {
    cursor:move
}
	使用方式： <emlemt synway-Drag></emlemt>>
*/
angular.module('synway-directives')
  .directive('synwayDrag', function() {
    return {
      link: function(scope, element, attr) {
         $(element).addClass( 'move');
         element.draggable({cursor:'move'});
      }
    };
});