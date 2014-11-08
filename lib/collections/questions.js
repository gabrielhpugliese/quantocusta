Questions = new Meteor.Collection('questions');

Questions.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Título',
    max: 50
  },
  place: {
    type: String,
    label: 'Local'
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
