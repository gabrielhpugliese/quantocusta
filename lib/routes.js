Router.configure({
  layoutTemplate: 'Layout'
});


Router.route('/', {
  name: 'home',
  template: 'Home',
  waitOn: function () {
    return [
      IRLibLoader.load('https://maps.googleapis.com/maps/api/js?v=3.exp&callback=googleMapsLoaded&libraries=places')
    ];
  }
});

Router.route('/perguntas', {
  name: 'questions',
  template: 'QuestionList',
  waitOn: function () {
    return [
      Meteor.subscribe('Questions')
    ];
  }
});

Router.route('/pergunta/:_id', {
  name: 'questionDetails',
  template: 'QuestionDetails',
  data: function () {
    return Questions.findOne();
  },
  waitOn: function () {
    return [
      Meteor.subscribe('Question', this.params._id)
    ];
  }
});
