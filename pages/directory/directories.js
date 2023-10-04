import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import DirectoryGridPagination from '../../components/DirectoryGridPagination'
import Banner from '../../components/Banner'

const directories = () => {
    const blogs = [];
  return (
    <div>
      {" "}
      <Header />
      <Banner />
      <DirectoryGridPagination blogs={blogs} />
      <Footer />
    </div>
  )
}

export default directories