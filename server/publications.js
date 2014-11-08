Meteor.publish('Questions', function () {
  return Questions.find();
});

Meteor.publish('Question', function (_id) {
  return Questions.find({ _id: _id });
});
