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
  Meteor.publish("posts", function () {
    var self = this;
    var id = Meteor.uuid();

    self.set("items", id, { message: "Hello from publisher!" });
    self.set("items", Meteor.uuid(), { message: "Last message!" });

    self.complete();
    self.flush();

    Meteor.setTimeout(function () {
      self.unset("items", id, ["message"]);
      self.flush();
    }, 2000);
  });
}
