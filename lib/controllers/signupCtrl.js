/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller('signupCtrl', function($scope, $rootScope, $location, toastr, loginService) {

    $scope.signupOnline = function() {

        var userObj = {
            username: $scope.inputUsername,
            emailId: $scope.inputEmail,
            password: $scope.inputPWD,
            cpassword: $scope.inputCPWD
        };

        $scope.showLoading = true;

        if (userObj.password !== userObj.cpassword) {

            $scope.showLoading = false;
            toastr.clear();
            toastr.error('Password and confirm Password not matching..', 'Please enter valid password(s)');
        } else if (userObj.emailId == '' || userObj.emailId == null || userObj.emailId == undefined) {
            $scope.showLoading = false;
            toastr.clear();
            toastr.error('Email Id cannot be Empty..', 'Please enter valid Email ID');
        } else if (userObj.username == '' || userObj.username == null || userObj.username == undefined) {

            $scope.showLoading = false;
            toastr.clear();
            toastr.error('Username cannot be Empty..', 'Please enter valid Username');
        } else if (userObj.password == '' || userObj.password == null || userObj.password == undefined) {

            $scope.showLoading = false;
            toastr.clear();
            toastr.error('Password cannot be Empty..', 'Please enter valid password');
        } else if (userObj.cpassword == '' || userObj.cpassword == null || userObj.cpassword == undefined) {

            $scope.showLoading = false;
            toastr.clear();
            toastr.error('Confirm Password cannot be Empty..', 'Please enter valid confirm password');
        } else {

            loginService.createNewUser(userObj).then(function(res) {

                $scope.showLoading = false;
                if (res.data.result && res.data.result.ok) {
                    $location.url('/login');
                    toastr.clear();
                    toastr.success('New user created successfully..', 'Please try login with your credentials..');
                }else if(res.data.status == 0){
                    toastr.clear();
                    toastr.error(res.data.message);
                } else {
                    toastr.clear();
                    toastr.error('Please try again after sometime..Error while creating new user', 'Bad Connectivity / Network Error');
                }
            }, function(errRes) {

                $scope.showLoading = false;
                toastr.clear();
                toastr.error('Please try again after sometime..Error while creating new user', 'Bad Connectivity / Network Error');
            });
        }
    };

});

