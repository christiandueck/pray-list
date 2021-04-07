import { Flex, Stack, Text, Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Input } from "../../components/Form/Input";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { Logo } from "../../components/Logo";
import Head from "next/head";

type CreateUserFormData = {
  name: string;
  email: string;
  email_confirmation: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  email_confirmation: yup.string().oneOf([
    null, yup.ref('email')
  ], 'O e-mail precisa ser igual ao informado acima'),
  password: yup.string().required('Senha obritatória'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  const router = useRouter();

  const handleRegister: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values);
    router.push('/PrayTime');
  }

  return (
    <>
      <Head>
        <title>Cadastro de usuário | Praylist</title>
      </Head>

      <Flex
        p="8"
        w="100%"
        flexDir="column"
        as="form"
        onSubmit={handleSubmit(handleRegister)}
      >
        <Logo size={3} />
        <Text mt="10" color="teal.200" fontSize="xl">Cadastro de Usuário</Text>

        <Stack spacing="4" mt="8">
          <Input
            name="name"
            label="Nome"
            error={formState.errors.name}
            {...register('name')}
          />

          <Input
            name="email"
            label="E-mail"
            type="email"
            error={formState.errors.email}
            {...register('email')}
          />

          <Input
            name="email_confirmation"
            label="Confirmação de e-mail"
            type="email"
            error={formState.errors.email_confirmation}
            {...register('email_confirmation')}
          />

          <Input
            name="password"
            label="Senha"
            type="password"
            error={formState.errors.password}
            {...register('password')}
          />

          <Input
            name="password_confirmation"
            label="Confirmação de senha"
            type="password"
            error={formState.errors.password_confirmation}
            {...register('password_confirmation')}
          />

          <SimpleGrid columns={2} spacing="4" pt="4">
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              isLoading={formState.isSubmitting}
            >Cadastrar</Button>

            <Button
              colorScheme="whiteAlpha"
              fontWeight="normal"
              size="lg"
              onClick={() => { router.push('/') }}
            >Cancelar</Button>
          </SimpleGrid>
        </Stack>
      </Flex>
    </>
  );
}