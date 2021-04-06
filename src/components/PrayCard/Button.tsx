import { Circle, Icon } from "@chakra-ui/react";
import { ElementType, useState, MouseEvent } from "react";

interface ButtonProps {
  icon: ElementType;
}

export function Button({ icon }: ButtonProps) {
  const [isChecked, setIsChecked] = useState(false);

  function toggleCheck(event: MouseEvent) {
    event.stopPropagation();
    setIsChecked(!isChecked);
  }

  if (isChecked) {
    return (
      <Circle
        as="button"
        size="12"
        bg="teal.600"
        onClick={toggleCheck}
      >
        <Icon as={icon} fontSize="24" color="white" />
      </Circle>
    );
  } else {
    return (
      <Circle
        as="button"
        size="12"
        border="2px"
        borderColor="teal.600"
        onClick={toggleCheck}
      >
        <Icon as={icon} fontSize="24" color="teal.600" />
      </Circle>
    );
  }
}