import { Icon, Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaPlus } from 'react-icons/fa';

export function FloatingButton({ ...rest }: ButtonProps) {
  const router = useRouter();

  return (
    <ChakraButton
      zIndex={5}
      position="fixed"
      right="6"
      bottom="6"
      shadow="lg"
      w="16"
      h="16"
      bg="teal.600"
      borderRadius="50%"
      variant="unstyled"
      onClick={() => { router.push('/Prayer/Add') }}
      {...rest}
    >
      <Icon as={FaPlus} fontSize="30" color="white" />
    </ChakraButton>
  );
}