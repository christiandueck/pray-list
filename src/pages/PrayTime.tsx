import { Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { PrayCard } from "../components/PrayCard";

const today = new Intl.DateTimeFormat(
  'pt-BR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(new Date());

export default function PrayTime() {
  return (
    <>
      <Header />

      <Flex
        p="6"
        w="100%"
        direction="column"
      >
        <Stack>
          <Text color="teal.200" fontSize="xl">{today.toString()}</Text>
          <Text>É tempo de orar por estes motivos:</Text>
        </Stack>

        <SimpleGrid mt="8" spacing="4">
          <PrayCard />
          <PrayCard />
          <PrayCard />
        </SimpleGrid>
      </Flex>
    </>
  );
}