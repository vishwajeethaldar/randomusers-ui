import { Button, Td, Flex } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const Pagination = ({total=1, current, setPage}) => {
   
  
    let pages ;
    const [start,setStart] =  useState(1)
   useEffect(()=>{
    if(current%5===0){
        setStart(current/5)
    }

   },[current])
   
   if(current===0){
        pages = new Array(total).fill(0)
    }else{
        pages = new Array(total).fill(0)
    }

   
    console.log(current,total, pages)
    return (
       total>1 &&<Flex justify={"center"} gap="15px" my="20px">
       <Button colorScheme={"facebook"} disabled={current===0} onClick={()=>{
           setPage(current-1)
       }}>Prev</Button>

       {pages.map((item, i)=>{
              if(current<=4){
               return (i<5) &&<Button colorScheme={"blue"} disabled={i===current} onClick={()=>setPage(i)} key={i+item}> {i+1} </Button>
              }
              else if(current>4 && (total-current)>=5){
               return (i>=current-4 && i<=current) &&<Button colorScheme={"blue"} disabled={i===current} onClick={()=>setPage(i)} key={i+item}> {i+1} </Button>
              }else{
               return (i>=total-5 && current<=total-1) && <Button colorScheme={"blue"} disabled={i===current} onClick={()=>setPage(i)} key={i+item}> {i+1} </Button>
              }
              
       })}
       <Button colorScheme={"facebook"} disabled={current===total-1} onClick={()=>{
           setPage(current+1)
       }}>Next</Button>
   </Flex>
    )
}
