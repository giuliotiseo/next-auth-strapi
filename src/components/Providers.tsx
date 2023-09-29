"use client";
import { ThemeProvider } from 'react-jss';
import { MantineProvider } from '@mantine/core';
import React, { ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";
import NextApolloProvider from '../../graphql/apollo';
import { theme } from '@/theme';
import mantineTheme from '../theme/mantine';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }:Props) => {
  return (
    <ThemeProvider theme={theme({ name: 'light' })}>
      <MantineProvider theme={mantineTheme}>
        <SessionProvider>
          <NextApolloProvider>
            { children }
          </NextApolloProvider>
        </SessionProvider>
      </MantineProvider>
    </ThemeProvider>
  )
}

export default Providers
