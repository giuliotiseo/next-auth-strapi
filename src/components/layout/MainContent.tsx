import React, { FC, PropsWithChildren } from 'react'

const MainContent: FC<PropsWithChildren<{ contentClassName?: string }>> = ({
  contentClassName = "",
  children
}) => {
  return (
    <main className={`flex-1 ${contentClassName}`}>
      { children }
    </main>
  )
}

export default MainContent
