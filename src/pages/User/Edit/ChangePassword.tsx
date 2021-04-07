import { Flex, Stack, Text, Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Input } from "../../../components/Form/Input";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

type ChangePasswordFormData = {
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
}

const changePasswordFormSchema = yup.object().shape({
  current_password: yup.string().required('Senha obritatória'),
  new_password: yup.string().required('Senha obritatória'),
  new_password_confirmation: yup.string().oneOf([
    null, yup.ref('new_password')
  ], 'As senhas precisam ser iguais'),
})

export default function ChangePassword() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(changePasswordFormSchema)
  });

  const router = useRouter();

  const handleSave: SubmitHandler<ChangePasswordFormData> = async (values) => {
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
        <Text color="teal.200" fontSize="xl">Alterar senha</Text>

        <Stack spacing="4" mt="8">
          <Input
            name="current_password"
            label="Senha atual"
            type="password"
            error={formState.errors.current_password}
            {...register('current_password')}
          />

          <Input
            name="new_password"
            label="Nova senha"
            type="password"
            error={formState.errors.mew_password}
            {...register('new_password')}
          />

          <Input
            name="new_password_confirmation"
            label="Confirmação de nova senha"
            type="password"
            error={formState.errors.new_password_confirmation}
            {...register('new_password_confirmation')}
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