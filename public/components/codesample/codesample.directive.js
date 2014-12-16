var directives = angular.module('labsDirectives', []);

directives.directive('codesample', function() {
    return {
            restrict: 'EA',
            transclude: false,
            scope: {
                templateUrl: '@',
                category: '=categoryObj',
                searchCode: '&'
            },
            template: "<div ng-include='templateUrl'></div>",
            link: function(scope, element, attr, ctrl, transclude){
                
            }

    };
});


