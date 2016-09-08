import template from './template';

let directive = () => {

  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template
  };

};

export default {
  name: 'mdAccordionGroup',
  directive
};
