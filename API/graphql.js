import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

// Schema (definição dos tipos e queries)
const typeDefs = `#graphql
  type Product {
    id: ID!
    name: String!
    stock: Int!
    demand: Int!
  }

  type Query {
    products: [Product!]!
  }
`;

// Resolvers (como buscar os dados)
const resolvers = {
  Query: {
    products: () => [
      { id: "1", name: "Produto A", stock: 100, demand: 80 },
      { id: "2", name: "Produto B", stock: 50, demand: 60 },
    ],
  },
};

// Cria o servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Exporta como rota da Vercel
export default startServerAndCreateNextHandler(server);
