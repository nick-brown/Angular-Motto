//  To avoid polluting the global namespace, wrap all of your functions in an IIFE. 
//  It is advised to have this happen at compilation/concatenation but including it here as an example.
(function() {

    // Avoid setting a variable for the module and rely on getter/setter syntax.
    // Supplying an array as the second argument, sets the module. Leaving them off gets the module.
    // Only set the module once. Use get for all times after that.
    angular.module('app', []);
})();