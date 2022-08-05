import { Hero } from '../component/Hero'
import React from 'react'
import withLeftSideBar from '../hocs/withLeftSideBar'

function Home() {
  return <Hero />
}

export default withLeftSideBar(Home)
