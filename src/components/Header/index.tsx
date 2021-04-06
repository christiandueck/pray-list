import { Avatar, Flex, Text, Stack, IconButton } from "@chakra-ui/react";
import { Logo } from "../Logo";

import { HiMenuAlt2 } from 'react-icons/hi'

export function Header() {
  return (
    <Flex
      p="6"
      align="center"
      justify="space-between"
    >
      <IconButton aria-label="menu" icon={<HiMenuAlt2 />} variant="unstyled" fontSize="30" />
      <Logo size={2} />
      <Stack as="button" spacing="4" direction="row" p="2" bg="gray.800" borderRadius="6" align="center">
        <Text ml="2">Christian</Text>
        <Avatar size="sm" name="Christian Dueck" src="https://github.com/christiandueck.png" />
      </Stack>
    </Flex>
  );
}