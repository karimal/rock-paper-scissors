angular.module('RPSG', ['ngRoute'])
.controller('gameController', function($scope, $timeout) {
  $scope.gameChoices = { rock: 0, paper: 1, scissors: 2 };
  $scope.results = [];

  $scope.whoWin = function(playerChoice, watsonChoice){
    if(playerChoice === watsonChoice){
      return "Tie";
    }else{
      $scope.playerChoice = $scope.gameChoices[playerChoice];
      $scope.watsonChoice = $scope.gameChoices[watsonChoice];
      var choicesList = [ $scope.playerChoice, $scope.watsonChoice ].sort();
      if(choicesList[0] === 0 && choicesList[1] === 2){
        if($scope.playerChoice === 0){
          return "Sherlock";
        }else{
          return "Watson";
        }
      }else{
        if($scope.playerChoice > $scope.watsonChoice){
          return "Sherlock";
        }else{
          return "Watson";
        }
      }
    }
  };

  $scope.play = function(playerChoice) {
    $scope.watsonChoiceResult = "";
    $scope.watsonChoiceLoader = true;
    $timeout(function() {
        $scope.watsonChoiceLoader = false;
        $scope.watsonChoiceResult = $scope.watsonTurn();
        $scope.result = $scope.whoWin(playerChoice, $scope.watsonChoiceResult);
        $scope.results.push($scope.result);
        console.log($scope.results);
        if($scope.result !== "Tie"){
          $scope.result += " win.";
        }else {
          $scope.result = "Tie";
        }
    }, 1000);
  };

  $scope.watsonTurn = function() {
    var choiceIndex = Math.floor( (Math.random() * Object.keys($scope.gameChoices).length) );
    var randomChoice = Object.keys($scope.gameChoices)[choiceIndex];
    return randomChoice;
  };
});
