/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller('dashboardCtrl', function($scope, $rootScope, $location, toastr, productsService, $cookies) {

    var loginDetails = $cookies.get('login') ? JSON.parse($cookies.get('login')) : '';
    if (!loginDetails || !loginDetails.status) {
        $location.url('/login');
    } else if (loginDetails && loginDetails.status) {
        $rootScope.cartDetails = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    }

    $rootScope.cartCount = $rootScope.cartDetails ? $rootScope.cartDetails.length : 0;

    productsService.getProductsList().then(function(res) {
        $scope.productsList = res.data;
    }, function(errRes) {
        toastr.clear();
        toastr.error(errRes);
    });

    $scope.addToCart = function(prodObj) {
        var checkIndex = $rootScope.cartDetails.map(function(e) {
            return e.sku;
        }).indexOf(prodObj.sku);
        if (checkIndex < 0) {
            $rootScope.cartDetails.push(prodObj);
        } else {
            $rootScope.cartDetails[checkIndex].cartQty = $rootScope.cartDetails[checkIndex].cartQty ? ($rootScope.cartDetails[checkIndex].cartQty) + 1 : 2;
            console.log($rootScope.cartDetails[checkIndex]);
        }
        localStorage.setItem('cart', JSON.stringify($rootScope.cartDetails));
        $rootScope.cartCount = $rootScope.cartDetails.length;
    };

});

