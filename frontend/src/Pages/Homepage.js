import React, { useEffect } from "react";
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      history.push("/chats");
    }
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        bgColor="rgba(0, 0, 0, 0.1)"
        backdropFilter="blur(10px)" 
        border="1px solid rgba(255, 255, 255, 0.2)"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        _hover={{
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Text
          fontSize="4xl"
          fontFamily="Work sans"
          d="flex"
          textAlign="center"
          fontWeight="extrabold"
          color="white"
          textShadow="2px 2px 10px rgba(0, 0, 0, 0.5)" 
        >
          CONNΞCTIFY
        </Text>
      </Box>

      <Box
        bgColor="rgba(255, 255, 255, 0.15)" // 
        backdropFilter="blur(20px)" 
        color="black"
        w="100%"
        p={4}
        borderRadius="lg"
        border="1px solid rgba(255, 255, 255, 0.2)"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        _hover={{
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab color="rgba(0, 0, 0, 0.7)" _selected={{ color: "black.900", bg: "rgba(255, 255, 255, 0.9)" }}>Login</Tab>
            <Tab color="rgba(0, 0, 0, 0.7)" _selected={{ color: "black", bg: "rgba(255, 255, 255, 0.7)" }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs> 
      </Box>
    </Container>
  );
};

export default Homepage;
