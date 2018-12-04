import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';
import gql from "graphql-tag";

const token = 'XXX';

const client = new ApolloClient({
  link: new BatchHttpLink({
    uri: 'https://graphql.datocms.com/',
    headers: {
      authorization: `Bearer ${token}`
    }
  }),
  cache: new InMemoryCache()
});

client.query({
  query: gql`
    {
      allBlogPosts(first: 4){
        title
        slug
      }
    }
  `
})
.then(result => console.log(result));

client.query({
  query: gql`
    {
      allBlogPosts(first: 4){
        title
        slug
      }
    }
  `
})
.then(result => console.log(result));

client.query({
  query: gql`
    {
      allAuthors(first:2) {
        name
      }
    }
  `
})
.then(result => console.log(result));

// A single request will be made!
