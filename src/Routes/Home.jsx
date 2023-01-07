import { Box } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import HomeBtns from '../components/HomeBtns'
import Loading from '../components/Loading'

export default function Home() {
  const [loadingState, setLoadingState] =  React.useState(true)

  useEffect(()=>{
    setLoadingState(false)
  },[])
  return (
    <Box>
       <Loading loadingState={loadingState}/>
      <HomeBtns/>
    </Box>
  )
}
