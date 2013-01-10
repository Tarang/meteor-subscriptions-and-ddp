var DDPClient = require("ddp");

var client = new DDPClient({
  host: "localhost",
  port: 3000
});

client.onMessage(function (data, flags) {
  console.log("[ddp message]: ", data);
});

client.connect(function () {
  client.subscribe("posts", [], function () {
    console.log("[subscription complete]");
  });
});
