export default function() {

  return `
    <div class="md-accordion-content" layout="column">
      <md-button class="md-accordion-toggle" ng-if="$mdAccordionContent.heading" ng-click="$mdAccordionContent.changeState();" ng-class="{ 'md-active': $mdAccordionContent.visible }">
        <div layout="row">
          <md-icon ng-if="$mdAccordionContent.svgIcon" md-svg-icon="$mdAccordionContent.svgIcon"></md-icon>
          <md-icon ng-if="$mdAccordionContent.icon">{{ $mdAccordionContent.icon }}</md-icon>
          <span flex>{{ $mdAccordionContent.heading }}</span>
          <md-icon ng-if="$mdAccordionContent.arrow">keyboard_arrow_down</md-icon>
        </div>
      </md-button>

      <div class="md-accordion-wrapper" md-accordion-disable-animate ng-class="{ 'md-active': $mdAccordionContent.visible, 'md-accordion-wrapper-icons':  $mdAccordionContent.icon }" layout="column" ng-transclude></div>
    </div>
  `;

}
