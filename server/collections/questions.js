Questions.before.insert(function (doc, userId) {
  doc.owner = userId;
});

Questions.allow({
  insert: function (doc, userId) {
    return doc.owner === userId;
  }
});
