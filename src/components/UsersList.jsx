import { Image, Table, Tbody, Td,Th, Tr } from '@chakra-ui/react'
import React from 'react'
import { Show, Hide } from '@chakra-ui/react'

export default function UsersList({users=[]}) {
    // console.log(users[0]);
  return (
   <>
    <Show breakpoint='(min-width:901px)'>
   {users.map((user, i)=>{
       return <Tr key={user._id} textTransform={"uppercase"} fontSize={"14px"} outline={"1px solid rgba(250,200,250,.5)"}>
                   <Td> {i+1} </Td>
                   <Td>{user.name.title}</Td>
                   <Td>{user.name.first}</Td>
                   <Td>{user.name.last}</Td>
                   <Td> {user.gender} </Td>
                   <Td>{user.email}</Td>
                   <Td> {user.cell} </Td>
                   <Td> {user.location.country} </Td>
                   <Td _hover={{transform:"scale(1.1)", transition:".2s all ease-in"}} > 
                       <Image src={user.picture.large} borderRadius={"10px"} border={"1px solid #ccc"}/>
                    </Td>
              </Tr>
   })}
</Show>
<Show breakpoint='(max-width:900px)'>
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
                                 <Td> 
                                         <Image src={user.picture.large}/>
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
   </Show>
    </>
  )
}
