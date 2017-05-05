(function () {
		    'use strict';
		    var app = angular.module('helmesApp', [
	        'helmesApp.ngRoute',
	        'helmesApp.header',
	        'helmesApp.main',
	        'helmesApp.footerWidgets',
	        'helmesApp.footer'
	    ])
	    .controller('mainCtrl', function ($scope,$http) {
	        $http.get('articles.json')
	            .then(function (response) {
			    	$scope.articles = response.data.articles
			});
	    });
	    
	    //routes
	    angular.module('helmesApp.ngRoute', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
           $routeProvider.
               when('/', {
                  templateUrl: 'pages/home.html', controller: 'homeCtrl'
               }).
               when('/articles/:id', {
                  templateUrl: 'pages/articles.html', controller: 'articlesCtrl'
               })
        }]);

        app.controller('homeCtrl', function($scope,$http) {

	    });  

	    app.controller('articlesCtrl', function($scope,$routeParams) {
		  		$scope.article = getById($scope.articles,$routeParams.id);
		  		function getById(arr, id) {
		            for (var d = 0, len = arr.length; d < len; d += 1) {
		                if (arr[d].id === id) {
		                    return arr[d];  
		                }
		            }
		        }	
	    }); 

	    angular.module('helmesApp.header', [])
		    	.directive(
		    		'pageHeader',
		    		function(){
		    			var directive = {
		    				restrict: 'E',
		    				templateUrl: 'shared/header/header.html',
		    			}
		    			return directive;
		    		}
		    	);
		        
		 angular.module('helmesApp.main', [])
		    	.directive(
		    		'main',
		    		function(){
		    			var directive = {
		    				restrict: 'E',
		                    controller: function($scope){
		                    },
		    				templateUrl: 'shared/content/main.html',
		    			}
		    			return directive;
		    		}
		    	);

		 angular.module('helmesApp.footerWidgets', [])
		    	.directive(
		    		'footerWidgets',
		    		function(){
		    			var directive = {
		    				restrict: 'E',
		    				templateUrl: 'shared/footer-widgets/footer-widgets.html',
		    			}
		    			return directive;
		    		}
		    	);

		  angular.module('helmesApp.footer', [])
		    	.directive(
		    		'pageFooter',
		    		function(){
		    			var directive = {
		    				restrict: 'E',
		    				templateUrl: 'shared/footer/footer.html',
		    			}
		    			return directive;
		    		}
		    	);  
})();
