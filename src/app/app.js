if (Meteor.isClient) {
  Posts = new Meteor.Collection("posts");

  Template.posts.helpers({
    posts: function () {
      return Posts.find();
    }
  });

  Meteor.subscribe("posts", [], function () {
    console.log("post subscription complete!");
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Posts.remove({});

    for (var i = 0; i < 3; i += 1) {
      Posts.insert({
        message: "Message " + i
      });
    }
  });

  Meteor.publish("posts", function () {
    var self = this;
    var id = Meteor.uuid();

    self.set("posts", id, { message: "Hello from publisher!" });
    self.set("posts", Meteor.uuid(), { message: "Last message!" });

    self.flush();
  });
}
