Router.configure({
  layoutTemplate: 'Layout'
});


Router.route('/', {
  template: 'Home',
  waitOn: function () {
    return [
      IRLibLoader.load('https://maps.googleapis.com/maps/api/js?v=3.exp&callback=googleMapsLoaded&libraries=places')
    ];
  }
});
