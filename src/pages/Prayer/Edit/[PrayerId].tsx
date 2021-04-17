import { Flex, Stack, Text, Button, SimpleGrid, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Input } from "../../../components/Form/Input";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { Textarea } from "../../../components/Form/Textarea";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { api } from "../../../services/api";
import { Prayer } from "../../../models/Prayer";
import { formatDate } from "../../../utils/formateDate";

type AddPrayerFormData = {
  title: string;
  description: string;
  closing_date: Date;
}

const editUserFormSchema = yup.object().shape({
  title: yup.string().required('O título é obrigatório'),
  closing_date: yup.date().required('A data é obrigatória')
})

export default function EditPrayer({ prayer }) {
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(editUserFormSchema)
  });

  const router = useRouter();

  const handleSave: SubmitHandler<AddPrayerFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values);
    router.push('/Prayer/List');
  }

  useEffect(() => {
    setValue('title', prayer.title);
    setValue('description', prayer.description);
    setValue('closing_date', prayer.closing_date.slice(0, 10));
  }, [])

  return (
    <>
      <Head>
        <title>Editar oração | Praylist</title>
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
        <Text color="teal.200" fontSize="xl">Editar pedido de oração</Text>

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

          {prayer.answer &&
            <Textarea
              name="answer"
              label="Resposta da oração"
              error={formState.errors.answer}
              {...register('answer')}
            />
          }

          <Button
            colorScheme="teal"
            size="lg"
            variant="outline"
            fontWeight="normal"
          >Encerrar oração</Button>


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

          <Stack spacing="2" pt="8">
            <Text color="teal.200">Registro de orações</Text>
            {prayer.records.map((record, index) => {
              return (
                <Flex px="4" py="2" bg="gray.800" borderRadius="6" w="100%" align="center" key={index}>
                  <Text><Text as="span" mr="4" fontSize="sm" color="teal.600">{formatDate(record.createdAt)}</Text>{record.comment}</Text>
                </Flex>
              );
            })}
          </Stack>

          <Stack pt="8">
            <Button
              colorScheme="red"
              size="lg"
              fontWeight="normal"
            >Excluir oração</Button>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await api.get(`/prayer/${params.prayerId}`);

  const prayer: Prayer = {
    ...response.data.data,
    id: response.data.ref['@ref'].id
  };

  return {
    props: {
      prayer
    }
  }
}