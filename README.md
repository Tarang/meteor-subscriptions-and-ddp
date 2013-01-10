Meteor - Subscriptions and DDP
==============================

##http://www.eventedmind.com/posts/meteor-subscriptions-and-ddp

```bash
> git clone --recursive git@github.com:EventedMind/meteor-subscriptions-and-ddp.git
> cd meteor-subscriptions-and-ddp/src/ddp_client
> npm link node-ddp-client
```
The first line clones the repository and pulls the EventedMind node-ddp-client fork into the src/ddp_client directory. The third line first installs the npm package and then creates an node_modules folder and symlinks `ddp` to the newly installed ddp module. This is what allows us to write `var DDPClient = require("ddp");` in our `client.js` file.

To start the Meteor server:

```bash
> cd src/app
> mrt
```

To start the DDP client and subscribe to `posts`

```bash
> cd src/ddp_client
> node client.js
```

If you don't already have MRT installed:

```bash
> npm install -g meteorite
```

You can learn more about Meteorite here:
http://oortcloud.github.com/meteorite/
