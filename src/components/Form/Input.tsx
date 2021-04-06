import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ name, label, error = null, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        { !!label &&
          <FormLabel
            htmlFor={name}
            fontSize="sm"
            mb="0"
            color="gray.50"
          >{label}</FormLabel>}

        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="teal.500"
          bgColor="gray.800"
          variant="filled"
          _hover={{ bgColor: 'gray.500' }}
          size="lg"
          ref={ref}
          {...rest}
        />

        { !!error && (
          <FormErrorMessage mt="0">
            {error.message}
          </FormErrorMessage>
        )}

      </FormControl>
    );
  }

export const Input = forwardRef(InputBase);