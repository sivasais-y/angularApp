/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller('loginCtrl', function($scope, $rootScope, $location, $state, toastr, loginService, $cookies) {

    $scope.loginOnline = function() {
        var userObj = {
            emailId: $scope.inputEmail,
            password: $scope.inputPWD
        };
        $scope.showLoading = true;

        if (userObj.emailId == '' || userObj.emailId == null || userObj.emailId == undefined) {
            $scope.showLoading = false;
            toastr.clear();
            toastr.error('Please enter valid Email Id..');
        } else if (userObj.password == '' || userObj.password == null || userObj.password == undefined) {
            $scope.showLoading = false;
            toastr.clear();
            toastr.error('Please enter valid password..');
        } else {
            loginService.userLogin(userObj).then(function(res) {
                $scope.showLoading = false;
                if (res && res.data.status) {
                    userObj.status = 1;

                    $cookies.putObject('login', userObj);

                    toastr.clear();
                    toastr.success('Logged In successfully');
                    $location.url('/dashboard');
                } else {
                    toastr.clear();
                    toastr.error(res.data.message);
                }
            }, function(errRes) {
                $scope.showLoading = false;
                toastr.clear();
                toastr.error('Error while trying Login.. Please try again.','Bad Connectivity / Network Issue');

            });
        }
    };


    var loginDetails = $cookies.get('login') ? JSON.parse($cookies.get('login')) : '';
    if ($state.params.status == 'logout') {
        $rootScope.cartDetails = [];
        localStorage.removeItem('cart');
        $cookies.remove('login');
        $location.url('/login');
    } else if (loginDetails && loginDetails.status) {
        $location.url('/dashboard');
    }

});

