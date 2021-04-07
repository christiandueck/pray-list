import { Button, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { FloatingButton } from "../../components/FloatingButton";
import { Header } from "../../components/Header";
import { PrayListCard } from "../../components/PrayListCard";
import { Sidebar } from "../../components/Sidebar";

export default function PrayerList() {
  const [filterActive, setFilterActive] = useState(true);

  const activePrayers = [
    { ref: 1, title: `Oração ativa ${1}` },
    { ref: 2, title: `Oração ativa ${2}` },
    { ref: 3, title: `Oração ativa ${3}` },
    { ref: 4, title: `Oração ativa ${4}` },
    { ref: 5, title: `Oração ativa ${5}` },
    { ref: 6, title: `Oração ativa ${6}` }
  ]

  const finishedPrayers = [
    { ref: 7, title: `Oração encerrada ${1}` },
    { ref: 8, title: `Oração encerrada ${2}` },
    { ref: 9, title: `Oração encerrada ${3}` },
    { ref: 10, title: `Oração encerrada ${4}` },
    { ref: 11, title: `Oração encerrada ${5}` },
  ]


  return (
    <>
      <Head>
        <title>Lista de orações | Praylist</title>
      </Head>

      <Header />
      <Sidebar />
      <Flex
        p="8"
        w="100%"
        direction="column"
      >
        <Stack>
          <Text color="teal.200" fontSize="xl">Lista de orações</Text>
          <SimpleGrid columns={2} spacing="4" pt="4">
            {filterActive
              ? <>
                <Button
                  type="submit"
                  colorScheme="teal"
                  size="md"
                >Ativas</Button>
                <Button
                  colorScheme="teal"
                  fontWeight="normal"
                  variant="outline"
                  size="md"
                  onClick={() => { setFilterActive(!filterActive) }}
                >Encerradas</Button>
              </>
              : <>
                <Button
                  colorScheme="teal"
                  fontWeight="normal"
                  variant="outline"
                  size="md"
                  onClick={() => { setFilterActive(!filterActive) }}
                >Ativas</Button>
                <Button
                  type="submit"
                  colorScheme="teal"
                  size="md"
                >Encerradas</Button>
              </>
            }
          </SimpleGrid>
        </Stack>

        <SimpleGrid mt="8" spacing="4">
          {filterActive ? activePrayers.map((prayer) => (
            <PrayListCard prayer={prayer} />
          )) : finishedPrayers.map((prayer) => (
            <PrayListCard prayer={prayer} />
          ))}
        </SimpleGrid>
      </Flex>

      <FloatingButton />
    </>
  );
}