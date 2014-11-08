Questions = new Meteor.Collection('questions', {
  transform: function (doc) {
    doc.minPrice = function () {
      return _.min(this.prices) || 0;
    };
    doc.maxPrice = function () {
      return _.max(this.prices) || 0;
    };
    doc.avgPrice = function () {
      var sumPrices = _.reduce(this.prices, function (total, price) {
        return total + price;
      }, 0);

      return this.prices.length > 0 && sumPrices / this.prices.length || 0;
    };

    return doc;
  }
});

Questions.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Título',
    max: 50
  },
  place: {
    type: String,
    label: 'Local',
    autoform: {
      class: 'place'
    }
  },
  description: {
    type: String,
    label: 'Descrição',
    max: 1000,
    autoform: {
      type: 'textarea',
      rows: 5
    }
  }
}));
