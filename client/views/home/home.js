// It's for async callback from google maps js api
googleMapsLoaded = function () {
  Session.set('googleMapsLoaded', true);
};

Home = {};

Tracker.autorun(function () {
  if (Session.equals('googleMapsLoaded', true)) {
    Home.autocomplete = new google.maps.places.Autocomplete(
        this.$('.place').get(0),
        { types: ['geocode'] }
    );
  }
});

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
