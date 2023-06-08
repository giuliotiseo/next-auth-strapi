"use client";

import React, { ReactNode } from 'react'
import { SessionProvider } from "next-auth/react"
import NextApolloProvider from '../../graphql/apollo';
import { MantineProvider } from '@mantine/core';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }:Props) => {
  return (
    <SessionProvider>
      <NextApolloProvider>
        <MantineProvider>
          { children }
        </MantineProvider>
      </NextApolloProvider>
    </SessionProvider>
  )
}

export default Providers
