import { Icon, Stack, Text } from '@chakra-ui/react';
import { FaPray } from 'react-icons/fa';

interface LogoProps {
  size?: 1 | 2 | 3 | 4 | 5;
}

export function Logo({ size }: LogoProps) {
  let fontSize = "4xl";
  let iconSize = 35;

  switch (size) {
    case 5:
      fontSize = "5xl";
      iconSize = 49;
      break;
    case 4:
      fontSize = "4xl";
      iconSize = 35;
      break;
    case 3:
      fontSize = "3xl";
      iconSize = 30;
      break;
    case 2:
      fontSize = "2xl";
      iconSize = 25;
      break;
    default:
      fontSize = "xl";
      iconSize = 19;
  }

  return (
    <Stack direction="row" spacing="2" align="center" color="white">
      <Icon
        as={FaPray}
        w={iconSize}
        h={iconSize}
      />
      <Text
        fontSize={fontSize}
        fontFamily="Pacifico"
        color="white"
      >
        Pray
      <Text as="span" color="teal.300">list</Text>
      </Text>
    </Stack>
  );
}