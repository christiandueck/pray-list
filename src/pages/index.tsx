import { Center, Stack, Flex, Button } from '@chakra-ui/react';
import Head from 'next/head'
import { Logo } from '../components/Logo';

import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obritatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values);
  }

  return (
    <>
      <Head>
        <title>É tempo de orar | Praylist</title>
      </Head>


      <Center h="100vh" p="10">
        <Stack w="100%" maxW="360px" spacing="14">
          <Logo size={4} />

          <Flex
            as="form"
            w="100%"
            flexDir="column"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <Stack spacing="4">
              <Input
                name="email"
                label="E-mail"
                type="email"
                error={formState.errors.email}
                {...register('email')}
              />

              <Input
                name="password"
                label="Senha"
                type="password"
                error={formState.errors.password}
                {...register('password')}
              />
            </Stack>
            <Button
              type="submit"
              mt="8"
              colorScheme="teal"
              size="lg"
              isLoading={formState.isSubmitting}
            >Entrar</Button>
            <Button
              colorScheme="whiteAlpha"
              fontWeight="normal"
              mt="4"
              size="lg"
            >Fazer Cadastro</Button>
          </Flex>
        </Stack>
      </Center>
    </>
  )
}