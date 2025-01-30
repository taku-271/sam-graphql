import { graphqlServer } from "@hono/graphql-server";
import { buildSchema } from "graphql";
import { Hono } from "hono";

const app = new Hono();

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const rootResolver = () => {
  return {
    hello: () => "Hello World",
  };
};

app.use("/graphql", graphqlServer({ schema, rootResolver, graphiql: true }));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
