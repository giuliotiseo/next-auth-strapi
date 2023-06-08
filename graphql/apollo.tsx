import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { FC, PropsWithChildren } from "react"
import { setContext } from '@apollo/client/link/context'
import { getSession } from "next-auth/react"
const { createUploadLink } = require('apollo-upload-client')

const GRAPHQL_ENDPOINT = "https://strapi.anapiaorienta.it/graphql"

const httpLink = createUploadLink({
  uri: GRAPHQL_ENDPOINT,
  credentials: 'include'
});

const authLink = setContext(async (_, { headers }) => {
  const session = await getSession();
  let accessToken = session ? session.user.accessToken : "";
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${accessToken}`
    }
  }
});

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  connectToDevTools: true
});


const NextApolloProvider:FC<PropsWithChildren<{}>> = ({ children }) => {
  return <ApolloProvider client={client}>
    { children }
  </ApolloProvider>
}

export default NextApolloProvider;