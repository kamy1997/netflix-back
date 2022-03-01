const express = require('express');
const bodyParser = require('body-parser');
const config = require("../configs");
const cors = require('cors');
const port = config.server.port;
const apiRouter = require('../routes');
const { ApolloServer, gql } = require('apollo-server-express');

const ProductSchema = require('../apollo/schemas/product.schema');
const UserSchema = require('../apollo/schemas/user.schema');
const OrderSchema = require('../apollo/schemas/order.schema');

const productResolvers = require('../apollo/resolvers/product.resolver');
const userResolvers = require('../apollo/resolvers/user.resolver');
const orderResolvers = require('../apollo/resolvers/order.resolver');

const app = express();
app.use(cors());

const graphQlServer = new ApolloServer({
  typeDefs: [ProductSchema,UserSchema,OrderSchema],
  resolvers:[productResolvers,userResolvers,orderResolvers]
});

graphQlServer.applyMiddleware({ app, path: '/graphql' })
// app.use(bodyParser.json());

app.use(function (req, res, next) {
  if (req.originalUrl === '/api/v1/webhooks/stripe') {
    next();
  } else {
    express.json()(req, res, next);
  }
});
app.use('/api/v1/', apiRouter);

exports.start = () => {
  app.listen(port, (err) => {
    if (err) {
      console.log(`Errors: ${err}`);
      process.exit(-1);
    }
    console.log(`app is runnning on port ${port}`);
  });
};
