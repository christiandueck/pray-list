import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function PrayerList() {
  return (
    <>
      <Header />
      <Sidebar />
      <Flex
        p="6"
        w="100%"
        direction="column"
      >
        <Stack>
          <Text color="teal.200" fontSize="xl">Prayer List</Text>
        </Stack>
      </Flex>
    </>
  );
}