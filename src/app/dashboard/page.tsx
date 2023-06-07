"use client";
import { gql, useQuery } from '@apollo/client'
import React from 'react'

const GET_REPORTS = gql`
    query GetReportBySlug {
    reports {
      data {
        id
        __typename
      }
    }
  }
`

const UserPost = () => {
  const { data:reportData, loading: isLoadingReport, error  } = useQuery(GET_REPORTS);
  console.log("vediamo...", reportData);

  return (
    <div className='h-screen flex items-center justify-center'>
      <p>Solo utenti autenticati possono vedere questa pagina</p>
    </div>
  )
}

export default UserPost
