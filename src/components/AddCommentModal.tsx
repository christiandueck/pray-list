import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Stack, SimpleGrid, Button } from "@chakra-ui/react"
import { RoundedButton } from "./RoundedButton"
import { useState, MouseEvent } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { HiCheck } from 'react-icons/hi';
import { Input } from "./Form/Input";

type AddCommentModalFormData = {
  comment: string;
}

const addCommentModalFormSchema = yup.object().shape({
  comment: yup.string()
})

export function AddCommentModal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(addCommentModalFormSchema)
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleSave: SubmitHandler<AddCommentModalFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values);
    setIsChecked(true);
    onClose();
  }

  function checkWithoutComment() {
    setIsChecked(true);
    onClose();
  }

  function uncheck() {
    setIsChecked(false);
    onClose();
  }

  function toggleCheck(event: MouseEvent) {
    event.stopPropagation();
    onOpen();
  }

  return (
    <>
      <RoundedButton icon={HiCheck} onClick={toggleCheck} isChecked={isChecked} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.900" mx="8" my="auto">
          <ModalHeader color="teal.300">Motivo de oração</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="6">
            <Stack spacing="4" as="form" onSubmit={handleSubmit(handleSave)}>
              <Input
                name="comment"
                label="Adicionar comentário"
                error={formState.errors.comment}
                {...register('comment')}
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
                  onClick={checkWithoutComment}
                >Pular</Button>
              </SimpleGrid>
              {isChecked &&
                <Stack pt="4">
                  <Button
                    colorScheme="red"
                    fontWeight="normal"
                    size="md"
                    onClick={uncheck}
                  >Excluir registro</Button>
                </Stack>
              }
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}