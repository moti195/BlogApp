(function (angular) {
	var myApp=angular.module("myApp",["ngRoute"]);

	myApp.factory('postsReader', function($http, $q) {
		var deferred = $q.defer();

 		$http({method:'Get', url:"./data/posts.json"}).then(function(data) {
			deferred.resolve(data.data.posts);
 		})

		return deferred.promise; 
 	});

 	myApp.controller('postsController', function($scope, postsReader) {
 		postsReader.then(function(data){
 			$scope.posts = data;
 			$scope.template_url = "./templates/post.html"
 		})
 	})





	
}(angular));
