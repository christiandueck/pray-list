import { Button, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { FloatingButton } from "../../components/FloatingButton";
import { Header } from "../../components/Header";
import { PrayListCard } from "../../components/PrayListCard";
import { Sidebar } from "../../components/Sidebar";
import { Prayer } from "../../models/Prayer"

export default function PrayerList() {
  const [filterActive, setFilterActive] = useState(true);
  const [prayers, setPrayers] = useState<Prayer[]>([]);

  async function updateList() {
    try {
      const response = await fetch('/api/prayer/getList').then(response => response.json())

      const items: Prayer[] = response.data.map(prayer => {
        return {
          id: prayer.ref['@ref'].id,
          user: prayer.data.user,
          title: prayer.data.title,
          description: prayer.data.description,
          createdAt: prayer.data.createdAt,
          closing_date: prayer.data.closing_date,
          answer: prayer.data.answer,
          active: prayer.data.active,
          records: prayer.data.records
        }
      })
      setPrayers(items)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    updateList();
  }, [])

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
        mb="20"
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
          {prayers.map((prayer) => (
            <PrayListCard key={prayer.id} prayer={prayer} />
          ))}
        </SimpleGrid>
      </Flex>

      <FloatingButton />
    </>
  );
}