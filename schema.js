import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

//_id, title, date , and content are fields in the Note type.
//ID and String are built in scalar types that resolve to a single scalar type and
//appending w/ exclamation mark ! means field is non-nullable,
//GraphQL service promises to always give a value queried
// The type Note declaration is a GraphQL Object Type, a type with some fields. It defines structure of note model

//A root Query type is also defined and it works when you try to fetch all the notes. It will run the allNotes resolver against this Query.
const typeDefs = `
    type Note {
        _id: ID!
        title: String!,
        date: Date,
        content: String!
    }

    scalar Date


    type Query {
        allNotes: [Note]
    }
`;

//makeExecutableSchema expects resolver
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
//created the GraphQL schema and defined our type definitions
//default scalar types inbuilt with GraphQL:
//Int: A signed 32‐bit integer.
//Float: A signed double-precision floating-point value.
//String: A UTF‐8 character sequence.
//Boolean: true or false.
//ID: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache.
