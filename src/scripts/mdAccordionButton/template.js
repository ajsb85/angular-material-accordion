export default function() {

  return `
    <md-button
      class="md-accordion-button"
      layout="column"
      ng-attr-href="{{ $mdAccordionButton.href }}"
      ng-attr-ui-sref="{{ $mdAccordionButton.uiSref }}"
      ng-attr-ui-sref-active="{{ $mdAccordionButton.uiSrefActive }}"
      ng-attr-target="{{ $mdAccordionButton.target }}">
      <div layout="row" layout-fill layout-align="start center" ng-transclude></div>
    </md-button>
  `;

}
