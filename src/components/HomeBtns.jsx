import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import SpinnerCircle from './Spinner'

export default function HomeBtns() {
    const [fetchState, setFecthState] = useState(false)
    const [netReq, setNetReq] = useState(false)
    const toast = useToast()
   
   
// Fetching and updating the database
    const fetchUser = async()=>{
        setFecthState(true)
        // setNetReq(true)
        try{
            await axios.post(`${import.meta.env.VITE_APIURL}/addusers`)
            setFecthState(false)
            toast({
                title: 'Data Fetched Successfully',
                description: "Users Data Fetched Successfully.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        }catch(err){
            throw err
        }
    }

// handling fetch request, throw error if one req is pending 
    const handlefetch = async ()=>{
        if(fetchState){
            toast({
                title: 'Error',
                description: "Previous request is not completed.",
                status: 'error',
                duration: 5000,
                isClosable: true,
              })
            return 
        }
        fetchUser()
        
    }

// Delete users from database
const deleteUsers = async()=>{
    setNetReq(true)
    try { 
       let res =  await axios.delete(`${import.meta.env.VITE_APIURL}/deleteusers`)
        setNetReq(false)
        toast({
            title: 'Deleted Successfully',
            description: res.data,
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
       
    } catch (err) {
        setNetReq(false)
        toast({
            title: 'Failed To Delete',
            description: err.response.data,
            status: 'error',
            duration: 5000,
            isClosable: true,
        })

    }
}

// handling delete request, throw error if one req is pending
const handleDelete = ()=>{
    if(netReq){
        toast({
            title: 'Error',
            description: "Previous delete request is in process.",
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        return 
    }else{
        deleteUsers()
    }
    
}

 


  return (
    <Box h={"100%"}>
        <Flex h={"90vh"} justifyContent="center" alignItems={"center"} gap="10px" direction={["column","row","row","row"]}>
            <Button onClick={handlefetch} colorScheme="green" w={["60%", "200px","200px","200px"]} >
                Fetch Users
                <SpinnerCircle spin={fetchState}/>
            </Button>
            <Button colorScheme={"facebook"} w={["60%", "200px","200px","200px"]}>
               <Link to="/users-details"> Users Details  </Link>      
            </Button>
            <Button onClick={handleDelete} colorScheme="red" w={["60%", "200px","200px","200px"]}>
                Delete Users
                <SpinnerCircle spin={netReq}/>
            </Button>
           

        </Flex>

        
    </Box>
  )
}
