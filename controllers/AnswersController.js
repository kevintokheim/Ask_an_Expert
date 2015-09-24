experts.controller('AnswersCtrl', function AnswersCtrl($scope, QuestionsFactory, $stateParams, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
  $scope.QuestionsFactory = QuestionsFactory;

  $scope.addAnswer = function() {
    $scope.question.answers.push({ name: $scope.expertAnswer });
    // $scope.question.answers.push("hello");
    $scope.expertAnswer = null;
  }
});
