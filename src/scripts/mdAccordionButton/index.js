import controller from './controller';
import template from './template';

let directive = () => {

  return {
    restrict: 'E',
    scope: {
      ngClick: '@?',
      uiSref: '@?',
      uiSrefActive: '@?',
      active: '<?mdActive',
      href: '@?',
      target: '@?'
    },
    transclude: true,
    template,
    controller,
    controllerAs: '$mdAccordionButton',
    bindToController: true
  };

};

export default {
  name: 'mdAccordionButton',
  directive
};
