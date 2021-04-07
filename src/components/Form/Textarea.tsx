import { Textarea as ChakraTextarea, FormLabel, FormControl, TextareaProps as ChakraTextareaProps, FormErrorMessage } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface TextareaProps extends ChakraTextareaProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const TextareaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps>
  = ({ name, label, error = null, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        { !!label &&
          <FormLabel
            htmlFor={name}
            fontSize="sm"
            mb="0"
            color="gray.400"
          >{label}</FormLabel>}

        <ChakraTextarea
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

export const Textarea = forwardRef(TextareaBase);