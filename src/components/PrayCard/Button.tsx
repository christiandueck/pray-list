import { Icon, Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface ButtonProps extends ChakraButtonProps {
  icon: ElementType;
  isChecked?: boolean;
}

export function Button({ icon, isChecked = false, ...rest }: ButtonProps) {
  if (isChecked) {
    return (
      <ChakraButton
        size="lg"
        bg="teal.600"
        borderRadius="50%"
        variant="unstyled"
        {...rest}
      >
        <Icon as={icon} fontSize="24" color="white" />
      </ChakraButton>
    );
  } else {
    return (
      <ChakraButton
        size="lg"
        border="2px"
        borderRadius="50%"
        borderColor="teal.600"
        variant="unstyled"
        {...rest}
      >
        <Icon as={icon} fontSize="24" color="teal.600" />
      </ChakraButton>
    );
  }
}