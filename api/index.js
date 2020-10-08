const express = require('express');
const bodyParser = require('body-parser');
const logger
const { Nuxt, Builder } = require('nuxt');
const app = express();

const config = require('../nuxt.config');
config.dev = !(process.env.NODE_ENV === 'production');

async function __init__() {
  const nuxt = new Nuxt(config);
  const { host, port } = nuxt.options.server;

  // build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    builder.build();
  } else {
    await nuxt.ready();
  }
  app.use(bodyParser)
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

__init__();
