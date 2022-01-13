import React from 'react'
import Header from '../components/organisms/Header/Header'

const BasicPageLayout = ({ hasHeader = true, hasFooter = true, children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>TO DDO: Create footer</footer>
    </>
  )
}

export default BasicPageLayout
