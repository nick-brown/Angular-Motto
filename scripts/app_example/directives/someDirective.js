(function() {

    // Never prefix custom directives with 'ng-*', they might conflict future native directives.
    // Directives and filters are the only providers that have camelCase as a strict naming convention.
    // Angular hyphenates camelCase so dragUpload will become '<div drag-upload></div>'.
    function dragUpload() {
        return {

            // Only use custom element (E) and custom attribute (A) methods for declaring your 
            // directives depending on its role. Comments (M) and classes (C) declarations are confusing 
            // and should be avoided. Attributes give the best cross browser support.
            restrict: 'EA',

            // Use Array.join('') for clean templating. It improves readability as code can be indented properly.
            // It also avoids the + operator which is less clean and can lead to errors if used incorrectly
            // on split lines. 
            template: [
                '<div class="some-directive">',
                    '<h1>{{dragUpload.title}}</h1>',
                '</div>'
            ].join(''),

            // Use the controllerAs syntax inside directives as well.
            // See above in the template for how it is used.
            controllerAs: 'dragUpload',

            // ControllerAs syntax means that the scope is bound to 'this'.
            controller: function() {
                this.title = 'Draggy!';
            },

            // DOM manipulation can take place only inside directives. Do not put this logic into a controller/service.
            link: function($scope, $element, $attrs) {
                $element.on('dragend', function() {
                    // Handle drag functionality
                });
            }
        }
    };

    angular.module('app')
    .directive('dragUpload', dragUpload); 
})();