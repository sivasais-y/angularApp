/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
app.factory('loginService', function($http, $q, baseURL) {
    return {
        createNewUser: function(postData) {
            var URL = baseURL + 'createUser';
            return $http.post(URL, postData).then(function(res) {
                return res;
            }, function(errRes) {
                return errRes;
            });
        },
        userLogin: function(userObj) {
            var URL = baseURL + 'login';
            return $http.post(URL,userObj).then(function(res){
                return res;
            }, function(errRes){
                return errRes;
            });
        }
    };
});

