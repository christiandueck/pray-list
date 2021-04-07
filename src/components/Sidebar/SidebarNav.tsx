import { Stack } from "@chakra-ui/react";
import { FaPray, FaStepForward, FaPlusCircle, FaUserEdit, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Orações">
        <NavLink icon={FaPlusCircle} href="/Prayer/Add">Adicionar oração</NavLink>
        <NavLink icon={FaStepForward} href="/PrayTime">Próximas orações</NavLink>
        <NavLink icon={FaPray} href="/Prayer/List">Lista de orações</NavLink>s
    </NavSection>

      <NavSection title="Usuário: Christian Dueck">
        <NavLink icon={FaUserEdit} href="/User/Edit" shouldMatchExactHref={false}>Dados pessoais</NavLink>
        <NavLink icon={FaSignOutAlt} href="/">Sair</NavLink>
      </NavSection>
    </Stack>
  );
}