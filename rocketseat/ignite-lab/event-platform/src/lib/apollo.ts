import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rupdsz1lc101zc4jmk2rwj/master',
  cache: new InMemoryCache()
})