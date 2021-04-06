import { Avatar, Flex, Text, Stack, IconButton, Circle, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from "../Logo";

import { HiMenuAlt2 } from 'react-icons/hi'

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      p="6"
      align="center"
      justify="space-between"
    >
      <IconButton
        aria-label="menu"
        icon={<HiMenuAlt2 />}
        variant="unstyled"
        fontSize="30"
        onClick={onOpen}
      />
      <Logo size={2} />

      {!isWideVersion
        ?
        <Circle p="2" bg="gray.800">
          <Avatar size="sm" name="Christian Dueck" src="https://github.com/christiandueck.png" />
        </Circle>
        :
        <Stack spacing="4" direction="row" p="2" bg="gray.800" borderRadius="6" align="center">
          <Text ml="2">Christian</Text>
          <Avatar size="sm" name="Christian Dueck" src="https://github.com/christiandueck.png" />
        </Stack>
      }
    </Flex>
  );
}