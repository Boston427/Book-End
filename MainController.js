app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Books for all Readers';
  $scope.promo = 'All Titles 50% off';
  $scope.products = [ 
  { 
    name: 'Differential Geometry', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'https://s-media-cache-ak0.pinimg.com/736x/0d/e5/1e/0de51e0046f7f38ab0ebadaa25b33f46.jpg',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'The Scorch Trials', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'http://4.bp.blogspot.com/-JUl_q9kPW1M/VWw-kUOiPkI/AAAAAAAAAVo/3Bdzow2jBrc/s1600/9781909489417.jpg',
    likes: 0,
    dislikes: 0
  },
  {
    name: 'Can Anybody help Me?', 
    price: 9, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'https://bumblesofrice.files.wordpress.com/2014/05/book-cover-sinead-crowley.jpg',
    likes: 0,
    dislikes: 0
  },
  {
   	name: "Aesop's Illustrated Fables", 
    price: 9, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'https://s-media-cache-ak0.pinimg.com/736x/09/84/ea/0984ea0a21bc8217d38b15b8722d8a04.jpg',
    likes: 0,
    dislikes: 0
  } 
 ];
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += -1;
  };
  
}]);