import { Flex, Stack, Text, Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Input } from "../../../components/Form/Input";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

type EditUserFormData = {
  name: string;
  email: string;
  email_confirmation: string;
}

const editUserFormSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  email_confirmation: yup.string().oneOf([
    null, yup.ref('email')
  ], 'O e-mail precisa ser igual ao informado acima')
})

export default function EditUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(editUserFormSchema)
  });

  const router = useRouter();

  const handleSave: SubmitHandler<EditUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values);
    router.back();
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
        <Text color="teal.200" fontSize="xl">Editar dados pessoais</Text>

        <Stack spacing="4" mt="8">
          <Input
            name="name"
            label="Nome"
            value="Christian Dueck"
            error={formState.errors.name}
            {...register('name')}
          />

          <Input
            name="email"
            label="E-mail"
            type="email"
            value="christian@dueck.com.br"
            error={formState.errors.email}
            {...register('email')}
          />

          <Input
            name="email_confirmation"
            label="Confirmação de e-mail"
            type="email"
            value="christian@dueck.com.br"
            error={formState.errors.email_confirmation}
            {...register('email_confirmation')}
          />

          <Button
            colorScheme="teal"
            size="lg"
            variant="outline"
            fontWeight="normal"
            onClick={() => { router.push('/User/Edit/ChangePassword') }}
          >Alterar senha</Button>

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