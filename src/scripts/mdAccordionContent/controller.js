export default function() {

  this.collapsed = angular.isDefined(this.collapsed) ? this.collapsed : true;

  this.changeState = function() {
    this.collapsed = !this.collapsed;
  };

}
