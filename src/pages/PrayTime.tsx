import { Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { FloatingButton } from "../components/FloatingButton";
import { Header } from "../components/Header";
import { PrayTimeCard } from "../components/PrayTimeCard";
import { Sidebar } from "../components/Sidebar";

const today = new Intl.DateTimeFormat(
  'pt-BR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(new Date());

export default function PrayTime() {
  return (
    <>
      <Head>
        <title>É tempo de orar | Praylist</title>
      </Head>

      <Header />
      <Sidebar />
      <Flex
        p="8"
        w="100%"
        direction="column"
      >
        <Stack>
          <Text color="teal.200" fontSize="xl">{today.toString()}</Text>
          <Text>É tempo de orar por estes motivos:</Text>
        </Stack>

        <SimpleGrid mt="8" spacing="4">
          <PrayTimeCard />
          <PrayTimeCard />
          <PrayTimeCard />
        </SimpleGrid>
      </Flex>

      <FloatingButton />
    </>
  );
}