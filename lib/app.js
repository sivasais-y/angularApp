/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('newApp', ['ui.router','toastr','ngCookies']);

app.constant('baseURL', 'http://localhost:3000/');

app.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');
//    $locationProvider.html5Mode(true);
//    $locationProvider.hashPrefix('!');

    $stateProvider.state('app', {
        //abstract: true,
        url: '/',
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    }).state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    }).state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'signupCtrl'
    }).state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardCtrl'
    }).state('products', {
        url: '/product/:productID',
        templateUrl: 'views/products.html',
        controller: 'productsCtrl'
    }).state('cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'cartCtrl'
    }).state('logout', {
        url: '/login/:status',
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    });
});
