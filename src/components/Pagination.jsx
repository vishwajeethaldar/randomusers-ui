import { Button, Td, Flex } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const Pagination = ({total=1, current, setPage}) => {

   const [start,setStart] =  useState(1)
   useEffect(()=>{
    if(current%5===0){
        setStart(current/5)
    }

   },[current])
   
   if(total===1){
      current = 1
  
    }
    let pages = new Array(total).fill(0)
    // console.log(pages,total);
    return (
       total>1 &&<Flex justify={"center"} gap="15px" my="20px">
       <Button colorScheme={"facebook"} disabled={current===0||current===1} onClick={()=>{
           setPage(current-1)
       }}>Prev</Button>

       {pages.map((item, i)=>{
              if(current<=5){
               return (i<5) &&<Button colorScheme={"blue"} disabled={i===current-1} onClick={()=>setPage(i+1)} key={i+item}> {i+1} </Button>
              }else if(current>5 && (total-current)>=5){
               return (i>=current-5 && i<current) &&<Button colorScheme={"blue"} disabled={i===current-1} onClick={()=>setPage(i+1)} key={i+item}> {i+1} </Button>
              }else{
               return (i>=total-5) &&<Button colorScheme={"blue"} disabled={i===current-1} onClick={()=>setPage(i+1)} key={i+item}> {i+1} </Button>
              }
              
       })}
       <Button colorScheme={"facebook"} disabled={current===total-1} onClick={()=>{
           setPage(current+1)
       }}>Next</Button>
   </Flex>
    )
}
