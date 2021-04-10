import { Flex, Stack, Text, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import { HiPencil } from 'react-icons/hi'
import { FaRegCalendar, FaPray } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { RoundedButton } from "../RoundedButton";
import { Prayer } from "../../models/Prayer";

interface PrayerListCardProps {
  prayer: Prayer;
}

export function PrayListCard({ prayer }: PrayerListCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shadow, setShadow] = useState('md');

  const router = useRouter();

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
          <Text color="teal.300" fontWeight="bold">{prayer.title}</Text>
          {isExpanded &&
            <>
              <Text fontSize="sm">{prayer.description}</Text>
              <Stack spacing="8" direction="row" pt="3" color="gray.500">
                <Flex>
                  <Icon as={FaRegCalendar} mr="2" fontSize="15" /><Text fontSize="xs" >
                    {new Date(prayer.createdAt).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: '2-digit'
                    })} -
                    {new Date(prayer.closing_date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: '2-digit'
                    })}
                  </Text>
                </Flex>

                <Flex>
                  <Icon as={FaPray} mr="2" fontSize="15" /><Text fontSize="xs" >{prayer.records.length}</Text>
                </Flex>
              </Stack>
            </>
          }
        </Stack>

        <Flex ml="auto" flexDir="column" justify="space-between" align="flex-end">
          {isExpanded
            ? <Icon as={IoIosArrowUp} mt="1" color="gray.700" />
            : <Icon as={IoIosArrowDown} mt="1" color="gray.700" />
          }

          {isExpanded && <RoundedButton icon={HiPencil} onClick={(event) => { event.stopPropagation(); router.push(`/Prayer/Edit/${prayer.id}`); }} />}
        </Flex>
      </Flex>

    </Flex>
  );
}