import controller from './controller';
import template from './template';

let directive = () => {

  return {
    restrict: 'E',
    scope: {
      heading: '@mdHeading',
      icon: '@?mdIcon',
      svgIcon: '@?mdSvgIcon',
      arrow: '@?mdArrow'
    },
    replace: true,
    transclude: true,
    template,
    controller,
    controllerAs: '$mdAccordionContent',
    bindToController: true
  };

};

export default {
  name: 'mdAccordionContent',
  directive
};
