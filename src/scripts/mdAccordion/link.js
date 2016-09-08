export default function($scope, $element, $attributes) {

  $scope.$watch(function() {
    return $attributes.locked;
  }, function(locked) {
    if (locked) {
      $element[0].classList.add('md-accordion-locked');
    } else {
      $element[0].classList.remove('md-accordion-locked');
    }
  });

}
