/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

app.factory('productsService', function($http, $q, baseURL) {
    return {
        getProductsList: function() {
            var URL = baseURL + 'products';

            return $http.get(URL).then(function(res) {
                return res;
            }, function(errRes) {
                return errRes;
            });
        },
        fetchProductDetails: function(prodId) {
            var URL = baseURL + 'product?id=' + prodId;

            return $http.get(URL).then(function(res) {
                return res;
            }, function(errRes) {
                return errRes;
            });

        }
    };
});