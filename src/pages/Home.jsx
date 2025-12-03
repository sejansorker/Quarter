import React from 'react'

import Banner from "../components/Banner"
import Loading from "../components/Loading"
import Counter from '../components/Counter'
import Today from '../components/Today'
import Our from '../components/Our'
import List from '../components/List'
import Propertise from '../components/Propertise'
import Plan from '../components/Plan'
import Vedio from '../components/Vedio'
import Readback from '../components/Readback'
import See from '../components/See'
const Home = () => {
  return (
    <div>
     <Banner/>
     <Loading/>
     <Counter/>
     <Today/>
     <Our/>
     <Propertise/>
     <Plan/>
     <Vedio/>
     <List/>
     <Readback/>
     <See/>
    </div>
  )
}

export default Home