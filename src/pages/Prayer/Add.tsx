import { Flex, Stack, Text, Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { Textarea } from "../../components/Form/Textarea";

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
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(editUserFormSchema)
  });

  const router = useRouter();

  const handleSave: SubmitHandler<AddPrayerFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values);
    router.push('/Prayer/List');
  }

  return (
    <>
      <Header />
      <Sidebar />
      <Flex
        p="10"
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
            value={today.toString()}
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