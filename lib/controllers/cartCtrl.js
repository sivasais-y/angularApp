/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('cartCtrl', function($scope, $rootScope, $location, toastr, productsService, $cookies) {

    var loginDetails = $cookies.get('login') ? JSON.parse($cookies.get('login')) : '';
    if (!loginDetails || !loginDetails.status) {
        $location.url('/login');
    } else if (loginDetails && loginDetails.status) {
        $rootScope.cartDetails = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    }

    $rootScope.cartCount = $rootScope.cartDetails ? $rootScope.cartDetails.length : 0;
    $scope.cartTotal = 0;

    $.each($rootScope.cartDetails, function(indexCart, valueCart) {
        $scope.cartTotal = $scope.cartTotal + (valueCart.pricing.price * (valueCart.cartQty ? valueCart.cartQty : 1));
    });

    $scope.delCartItem = function(cartIndex) {
        $rootScope.cartDetails.splice(cartIndex, 1);
        localStorage.setItem('cart', JSON.stringify($rootScope.cartDetails));
        $rootScope.cartCount = $rootScope.cartDetails.length;
        $scope.cartTotal = 0;

        $.each($rootScope.cartDetails, function(indexCart, valueCart) {
            $scope.cartTotal = $scope.cartTotal + (valueCart.pricing.price * (valueCart.cartQty ? valueCart.cartQty : 1));
        });
    };

});


