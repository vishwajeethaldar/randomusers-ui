import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Spinner, Box } from '@chakra-ui/react'

export default function Loading({loadingState}) {
   
  return (
    loadingState && <Box position={"absolute"} top={"0%"} left={"0%"} zIndex={"5"} bg={"#fff"} h={"100vh"} w={"100vw"}>
            <Spinner size='xl' color="blue" mx={"10px"} zIndex={"10"} top={"40%"} left={"45%"} position={"fixed"}/>
    </Box>
  )
}
