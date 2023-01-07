import React from 'react'
import { Spinner } from '@chakra-ui/react'

export default function SpinnerCircle({spin}) {
  return (
    spin && <Spinner size='sm' color="blue" mx={"10px"}/>
  )
}
