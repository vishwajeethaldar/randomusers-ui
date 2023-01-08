import { Image, Table, Tbody, Td,Th, Tr } from '@chakra-ui/react'
import React from 'react'
import { Show, Hide } from '@chakra-ui/react'

export default function UsersListM({users=[]}) {
    // console.log(users[0]);
  return (
   <>
      {users.map((user, i)=>{
           return <Tr key={user._id} textTransform={"uppercase"}>
                     <Td>
                         <Table > 
                           <Tbody>
                             <Tr bg={"#ccc"}>
                             <Th colSpan={"2"} fontSize={"18px"}> {i+1}</Th>
                           
                             </Tr>
                             <Tr>
                               <Th> Name </Th>       
                               <Td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Td>
                             </Tr>  
                             <Tr>
                               <Th> Gender</Th>  
                               <Td> {user.gender} </Td>
                                 
                             </Tr>

                             <Tr>
                                 <Th> Avatar</Th> 
                                 <Td  _hover={{transform:"scale(1.1)", transition:".2s all ease-in"}} > 
                                         <Image src={user.picture.large}  borderRadius={"10px"} border={"1px solid #ccc"}/>
                                 </Td>
                             </Tr>

                             <Tr>
                             <Th> Email</Th> 
                             <Td>{user.email}</Td>
                             </Tr>

                             <Tr>
                               <Th> Cell</Th> 
                               <Td> {user.cell} </Td>
                             </Tr>
                             
                             <Tr>
                               <Th> Country</Th> 
                               <Td> {user.location.country} </Td>
                             </Tr>
                             
                           </Tbody>
                         </Table>
                     </Td>
                 </Tr>
       })}

    </>
  )
}
