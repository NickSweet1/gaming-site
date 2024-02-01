import React from 'react'
import Layout from '../components/Layout';
import { Box, Grid } from '@radix-ui/themes';
import HomeSideBar from '../components/HomeSideBar';

const Home = () => {
  return (
    <Layout>
    <Grid columns='7' gap='3' className='pt-12 pl-8'>
      <HomeSideBar className='pt-64'/>
    </Grid>
    </Layout>
  )
}

export default Home