import { Flex, Stack, Text, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, MouseEvent } from "react";

import { HiCheck, HiPencil } from 'react-icons/hi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Button } from "./Button";

export function PrayCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shadow, setShadow] = useState('md');

  const router = useRouter();

  const [isChecked, setIsChecked] = useState(false);

  function toggleCheck(event: MouseEvent) {
    event.stopPropagation();
    setIsChecked(!isChecked);
  }

  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Refert tamen, quo modo. Quid de Pythagora."

  function toggleExpand() {
    setIsExpanded(!isExpanded);
    shadow === 'md' ? setShadow('dark-lg') : setShadow('md');
  }

  return (
    <Flex
      bg="gray.800"
      p="4"
      borderRadius="8"
      flexDir="column"
      align="center"
      shadow={shadow}
      onClick={toggleExpand}
    >
      <Flex w="100%">
        <Stack spacing="1" mr="4">
          <Text color="teal.300" fontWeight="bold">Motivo de oração</Text>
          <Text fontSize="sm">{isExpanded ? description : description.slice(0, 60) + '...'}</Text>
        </Stack>

        <Stack spacing="3" ml="auto">
          <Button icon={HiCheck} onClick={toggleCheck} isChecked={isChecked} />

          {isExpanded && <Button icon={HiPencil} onClick={() => { router.push('/Prayer/Edit/1') }} />}
        </Stack>
      </Flex>

      { isExpanded
        ? <Icon as={IoIosArrowUp} mt="2" mb="-2" color="gray.700" />
        : <Icon as={IoIosArrowDown} mt="2" mb="-2" color="gray.700" />
      }

    </Flex>
  );
}