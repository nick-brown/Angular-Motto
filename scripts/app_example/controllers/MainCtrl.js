(function() {

    // Use ControllerAs syntax which uses 'this' inside controllers and binds to $scope.
    // Only use $scope as a special use case. Examples of these include:
    // $emit, $broadcast, $on, $watch.
    // Try to keep the use of $scope to a minimum.

    // Presentational logic only inside a controller. Business logic should be delegated to a service.
    function MainCtrl(UserService) {

        // Capture the 'this' context of the controller using vm, standing for ViewModel.
        // Use it to avoid having to call bind and unnecessary scoping issues.
        var vm = this;

        vm.users = [];
        vm.getUsers = function() {
            
            // Business logic being delegated to a service.
            // Controllers should act as a ViewModel and control the data flowing between the Model and
            // the View presentation layer. Business logic in Controllers makes testing Services impossible.
            UserService.getUsers()
            .then(function(response) {
                vm.users = response;
            });
        }
    }

    // Pass functions into module methods rather than assigning a callback.
    // This helps aid with readability and helps reduced the amount of code "wrapped"
    // inside Angular.
    angular.module('app')
    .controller('MainCtrl', MainCtrl);
})();