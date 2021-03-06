var app = angular.module('app',['ui.router',
    'lbServices','ngAnimate','ui.bootstrap','toastr'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

	$stateProvider
		.state('show',{
			url: '/show',
			templateUrl: 'views/chahua3514/index.html',
			controller: 'showCtrl'
		})
		.state('show.details',{
			url: '/details/:id',
			templateUrl: 'views/chahua3514/one-products.html',
			controller: 'detailsCtrl'
		})
		.state('show.need',{
			url: '/need',
			templateUrl: 'views/chahua3514/blog.html',
			controller: 'needCtrl'
		})
		.state('show.need.details',{
			url: '/details/:id',
			templateUrl: 'views/chahua3514/blog-single.html',
			controller: 'needDetailsCtrl'
		})
		.state('show.give',{
			url: '/give',
			templateUrl: 'views/chahua3514/blog1.html',
			controller: 'giveCtrl'
		})
		.state('show.exchange',{
			url: '/give',
			templateUrl: 'views/chahua3514/blog2.html',
			controller: 'exchangeCtrl'
		})
		.state('admin',{
			url: '/admin',
			templateUrl: 'views/admin/admin.html'
		})
		.state('admin.main',{
			url: '/main',
			templateUrl: 'views/admin/main.html'
		})
		.state('admin.type',{
			url: '/type',
			templateUrl: 'views/admin/type/type.html',
			controller: 'typeCtrl'
		})
}])
