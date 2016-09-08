export default function($element, $attributes) {

  let locked = $attributes.locked && 'md-accordion-locked';

  return `<div class="md-accordion ${ locked }" ng-transclude></div>`;

}
