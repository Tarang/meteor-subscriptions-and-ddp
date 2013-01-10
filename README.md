Meteor - Subscriptions and DDP
==============================

##http://www.eventedmind.com/posts/meteor-subscriptions-and-ddp

```bash
> git clone --recursive git@github.com:EventedMind/meteor-subscriptions-and-ddp.git
> cd meteor-subscriptions-and-ddp/src/ddp_client
> npm link node-ddp-client
```

To start the Meteor server:

```bash
> cd src/app
> mrt
```

To start the DDP client and start the `posts` subscription:

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
