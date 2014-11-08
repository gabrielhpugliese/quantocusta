// It's for async callback from google maps js api
googleMapsLoaded = function () {
  Session.set('googleMapsLoaded', true);
};

Home = {};

Template.Home.rendered = function () {
  Tracker.autorun(function startGMapsAutocomplete () {
    if (! Meteor.user()) {
      return false;
    }

    if (Session.equals('googleMapsLoaded', true)) {
      _.defer(function () {
        Home.autocomplete = new google.maps.places.Autocomplete(
          this.$('.place').get(0),
          { types: ['geocode'] }
        );
      });
    }
  });
};

AutoForm.hooks({
  'questions-form': {
    before: {
      insert: function (doc, template) {
        var place = Home.autocomplete.getPlace();

        doc.place = place.place_id;

        return doc;
      }
    }
  }
});
