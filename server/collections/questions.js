Questions.before.insert(function (doc, userId) {
  doc.owner = userId;
  doc.prices = [];
});

Questions.allow({
  insert: function (doc, userId) {
    return doc.owner === userId;
  }
});
