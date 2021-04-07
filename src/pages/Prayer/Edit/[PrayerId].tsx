import { Flex, Stack, Text, Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Input } from "../../../components/Form/Input";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { Textarea } from "../../../components/Form/Textarea";

type AddPrayerFormData = {
  title: string;
  description: string;
  closing_date: Date;
}

const editUserFormSchema = yup.object().shape({
  title: yup.string().required('O título é obrigatório'),
  closing_date: yup.date().required('A data é obrigatória')
})

export default function EditPrayer() {
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
        <Text color="teal.200" fontSize="xl">Editar pedido de oração</Text>

        <Stack spacing="4" mt="8">
          <Input
            name="title"
            label="Título"
            value="Motivo de oração"
            error={formState.errors.title}
            {...register('title')}
          />

          <Textarea
            name="description"
            label="Descrição"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Refert tamen, quo modo. Quid de Pythagora."
            error={formState.errors.description}
            {...register('description')}
          />

          <Input
            name="closing_date"
            label="Data para encerrar oração"
            type="date"
            value="2021-12-31"
            error={formState.errors.closing_date}
            {...register('closing_date')}
          />

          <Textarea
            name="answer"
            label="Resposta da oração"
            error={formState.errors.answer}
            {...register('answer')}
          />

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

            <Flex px="4" py="2" bg="gray.800" borderRadius="6" w="100%" align="center">
              <Text><Text as="span" mr="4" fontSize="sm" color="teal.600">08/03/21</Text>houve melhora</Text>
            </Flex>

            <Flex px="4" py="2" bg="gray.800" borderRadius="6" w="100%" align="center">
              <Text><Text as="span" mr="4" fontSize="sm" color="teal.600">05/03/21</Text>houve melhora</Text>
            </Flex>

            <Flex px="4" py="2" bg="gray.800" borderRadius="6" w="100%" align="center">
              <Text><Text as="span" mr="4" fontSize="sm" color="teal.600">02/03/21</Text>houve melhora</Text>
            </Flex>

            <Flex px="4" py="2" bg="gray.800" borderRadius="6" w="100%" align="center">
              <Text><Text as="span" mr="4" fontSize="sm" color="teal.600">28/02/21</Text>houve melhora</Text>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}