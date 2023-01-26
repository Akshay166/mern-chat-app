import React from 'react'
import {Container ,Box ,Text ,Tabs,TabList,TabPanel,TabPanels,Tab } from "@chakra-ui/react"
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import { useEffect } from "react";
import { useHistory } from "react-router";
const Homepage = () => {
  
   const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);
  
  
  return (
    <Container maxW="xl" centerContent>

      <Box
      display="flex"
      justifyContent ="center"
      p={3}
      bg={"white"}
      w="100%"
      m="40px 15px 15px 20px"
      borderRadius="lg"
      borderWidth="1px"
      >
     <Text fontSize="4xl" fontFamily="Work Sans" color="black">Talk a Tive</Text>
      </Box>

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">

           <Tabs variant='enclosed'>
  <TabList>
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <Login/>
    </TabPanel>
    <TabPanel>
       <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    
    </Container>
  )
}

export default Homepage
