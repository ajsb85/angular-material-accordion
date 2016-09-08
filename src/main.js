import mdAccordion from './scripts/mdAccordion';
import mdAccordionGroup from './scripts/mdAccordionGroup';
import mdAccordionContent from './scripts/mdAccordionContent';
import mdAccordionButton from './scripts/mdAccordionButton';

((angular) => {

  angular
    .module('ngMaterialAccordion', [
      'ngMaterial'
    ])
    .directive(mdAccordion.name, mdAccordion.directive)
    .directive(mdAccordionGroup.name, mdAccordionGroup.directive)
    .directive(mdAccordionContent.name, mdAccordionContent.directive)
    .directive(mdAccordionButton.name, mdAccordionButton.directive);

})(angular);
