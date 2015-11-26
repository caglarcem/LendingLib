Lists = new Mongo.Collection('lists');
Lists.remove({});
Lists.insert({Category:"DVDs", items: {Name:"Mission Impossible",Owner:"me",LentTo:"Alice"}});
Lists.insert({Category:"Tools", items: {Name:"Linear Compression Wrench",Owner:"me",LentTo: "STEVE"}});
Lists.insert({Category:"Vinyl Records"});
Lists.insert({Category:"Collectibles"});

if (Meteor.isServer) {
  Lists.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Lists.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
