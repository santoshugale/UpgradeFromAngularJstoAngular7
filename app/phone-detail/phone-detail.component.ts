class PhoneDetailController {
  public phone: any;
  public mainImageUrl: string;

  static $inject = ['$routeParams', 'Phone'];
  public constructor($routeParams: angular.route.IRouteParamsService, Phone: any) {
    this.phone = Phone.get({ phoneId: $routeParams.phoneId }, (phone: any) => {
      this.setImage(phone.images[0]);
    });
  }
  public setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
  });
