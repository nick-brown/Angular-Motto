(function() {
    // All services are singletons, using .service() or .factory() differs the way Objects are created.

    // This file gives an example of using a .service().
    // These act as a constructor function and are instantiated with the 'new' keyword. 
    // Use 'this' for public methods and variables.

    function SomeService() {
        this.someValue = 1;

        this.someMethod = function() {
            return this.someValue + 10;
        }
    }

    angular.module('app')
    .service('SomeService', SomeService);

})();