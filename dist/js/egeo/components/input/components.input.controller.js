(function() {
    'use strict';

    angular
        .module('egeo.forms')
        .controller('EgeoInputController', EgeoInputController);

    function EgeoInputController($scope, $element) {
        var vm = this;

        vm.hasHelp = false;
        vm.isHelpShown = false;
        vm.id = $scope.$id;
        vm.isFocused = false;
        vm.onFocus = onFocus;

        function onFocus() {
            vm.isFocused = true;
        }
    }
})();
