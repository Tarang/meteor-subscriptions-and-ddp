if (Meteor.isClient) {
  Items = new Meteor.Collection("items");

  Template.items.helpers({
    items: function () {
      return Items.find();
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
