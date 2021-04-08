import { Flex, Stack, Text, Button, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { Textarea } from "../../components/Form/Textarea";
import Head from "next/head";
import { Prayer } from '../../models/Prayer';

type AddPrayerFormData = {
  title: string;
  description: string;
  closing_date: Date;
}

const editUserFormSchema = yup.object().shape({
  title: yup.string().required('O título é obrigatório'),
  closing_date: yup.date().required('A data é obrigatória')
})

const today = new Date().toISOString().split('T')[0];

export default function AddPrayer() {
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(editUserFormSchema)
  });

  const router = useRouter();

  const handleSave: SubmitHandler<AddPrayerFormData> = async (values) => {
    const prayer: Prayer = {
      user: '295305703231324674',
      title: values.title,
      description: values.description,
      createdAt: new Date(),
      closing_date: values.closing_date,
      active: true,
      records: []
    }

    try {
      await fetch('/api/prayer/create', {
        method: 'POST',
        body: JSON.stringify(prayer),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } catch (err) {
      console.error(err);
    }

    router.push('/Prayer/List');
  }

  useEffect(() => {
    setValue('closing_date', today.toString())
  }, [])

  return (
    <>
      <Head>
        <title>Adicionar oração | Praylist</title>
      </Head>

      <Header />
      <Sidebar />
      <Flex
        p="8"
        w="100%"
        flexDir="column"
        as="form"
        onSubmit={handleSubmit(handleSave)}
      >
        <Text color="teal.200" fontSize="xl">Salvar novo pedido de oração</Text>

        <Stack spacing="4" mt="8">
          <Input
            name="title"
            label="Título"
            error={formState.errors.title}
            {...register('title')}
          />

          <Textarea
            name="description"
            label="Descrição"
            error={formState.errors.description}
            {...register('description')}
          />

          <Input
            name="closing_date"
            label="Data para encerrar oração"
            type="date"
            error={formState.errors.closing_date}
            {...register('closing_date')}
          />

          <SimpleGrid columns={2} spacing="4" pt="4">
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              isLoading={formState.isSubmitting}
            >Salvar</Button>

            <Button
              colorScheme="whiteAlpha"
              fontWeight="normal"
              size="lg"
              onClick={() => { router.back() }}
            >Cancelar</Button>
          </SimpleGrid>
        </Stack>
      </Flex>
    </>
  );
}