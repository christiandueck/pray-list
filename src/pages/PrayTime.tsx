import { Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { FloatingButton } from "../components/FloatingButton";
import { Header } from "../components/Header";
import { PrayTimeCard } from "../components/PrayTimeCard";
import { Sidebar } from "../components/Sidebar";
import { Prayer } from "../models/Prayer";

const today = new Intl.DateTimeFormat(
  'pt-BR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(new Date());

export default function PrayTime() {

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
        <title>É tempo de orar | Praylist</title>
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
          <Text color="teal.200" fontSize="xl">{today.toString()}</Text>
          <Text>É tempo de orar por estes motivos:</Text>
        </Stack>

        <SimpleGrid mt="8" spacing="4">
          {prayers.map(prayer => (
            <PrayTimeCard key={prayer.id} prayer={prayer} />
          ))}
        </SimpleGrid>
      </Flex>

      <FloatingButton />
    </>
  );
}