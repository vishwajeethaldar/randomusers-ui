import { Table, Tbody, Flex, Th, Thead, Tr, Box, Select, Button, Text, Image } from '@chakra-ui/react'
import React, {useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { Pagination } from '../components/Pagination'
import UsersList from '../components/UsersList'
import { getUsers } from '../store/usersSlice'
import axios from 'axios'
import Loading from '../components/Loading'
import { Show, Hide } from '@chakra-ui/react'

export default function Users() {

  const [queries, setQueries] =  useState({limit:10,country:"", gender:""})

  // state to manage copy of users data
  const [userslist, setUsersList] =  useState({users:[], totalPage:1})
  // COuntry list for filter 
  const [countrylist, setCountryList] =  useState([])
  // State to manage current page 
  const [page, setPage] = useState(1)

  const [loadingState, setLoadingState] =  useState(true)
   

  // function to get the users data  
  const getusers = async()=>{
    setLoadingState(true)
    let data  = await axios.get(`${import.meta.env.VITE_APIURL}/getusers?gender=${queries.gender}&country=${queries.country}&limit=${queries.limit}&page=${page}`)
    setUsersList({users:data.data.users,totalPage:data?.data.totalPages})
    // console.log(data.data);
    setLoadingState(false)
  }

  // updating the country list
  const getAllUsers = async()=>{
    let counry = {}
    try{
      let data = await axios.get(`${import.meta.env.VITE_APIURL}/getusers`)
    data.data.users.forEach(user => {
      counry[user.location.country] = user.location.country 
    });
    setCountryList(Object.values(counry))
    }catch(e){
      console.log(e)
    }
  } 

  // Filter 
  const handleFilter = ()=>{
    // if(queries.country==="" && queries.gender===""){
    //   return
    // }
    setPage(0)
    getusers()
  }


// Initial call to get data  from backend
  useEffect(() => {
    getusers()
    getAllUsers()
    setLoadingState(false)
   }, [])

// get the users data based on new page and update the ui 
   useEffect(()=>{
        getusers()
   },[page])


  return (
    <>
     
    <Flex px={"20px"} py="15px" gap="10px" >
        <Box>
            <Link to="/"><Button colorScheme={"blue"}> Go Back </Button></Link>
        </Box>
        <Box>
            <Select border={"1px solid blue"} outline={"1px solid blue"} onChange={(e)=>setQueries({...queries, gender:e.target.value})}>
                <option value="">filter by gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </Select>
        </Box>

        <Box > 
            <Select outline={"1px solid blue"} onChange={(e)=>setQueries({...queries, country:e.target.value})}>
                <option value="">filter by Country</option>
                {countrylist.map((country)=>{
                  return <option key={country} value={country}>{country}</option>
                })}
            </Select>
        </Box>

        <Button onClick={handleFilter} colorScheme={"facebook"}>
            Filter
        </Button>

    </Flex>

    <Box maxH={"80vh"} overflowY="scroll" scrollPadding={"0px"}>
      {/* Table  */}
    <Table w={"96%"} mx={"auto"} position={"relative"}>
        <Show breakpoint='(min-width: 901px)'>
          <Thead bg={"telegram.800"} >
              <Tr border={"1px solid #555"} >
                  <Th color="#fff" textAlign={"center"}> Sr. </Th>
                  <Th color="#fff" textAlign={"center"}>Title</Th>
                  <Th color="#fff" textAlign={"center"}>First Name.</Th>
                  <Th color="#fff" textAlign={"center"}>Last Name.</Th>
                  <Th color="#fff" textAlign={"center"}> Gender </Th>
                  <Th color="#fff" textAlign={"center"}>Email</Th>
                  <Th color="#fff" textAlign={"center"}> Cell </Th>
                  <Th color="#fff" textAlign={"center"}> Country </Th>
                  <Th color="#fff" textAlign={"center"}> Avtar </Th>
              </Tr>
          </Thead>
        </Show>
        <Tbody>
          { userslist.users.length>0 && <UsersList users={userslist.users}/>}
               
        </Tbody>

        </Table>

        {/* Loader */}
              <Box position={"relative"}>
              <Loading loadingState={loadingState}/>
              </Box>
       {/* Data not found Image */}
            {userslist.users.length===0 && <Box textAlign={"center"} py={"35px"} w={"100%"} fontSize={"48px"} fontWeight={"bold"} >
              {!loadingState&& <Image src='/img/no-result.gif' mx={"auto"}/> } 
            </Box>}

    </Box>

    {/* Pagination Component */}
    <Pagination setPage={setPage} total={userslist.totalPage} current={page}/>
   
    </>
  )
}
