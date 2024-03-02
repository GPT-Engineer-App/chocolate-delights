import { Button } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const MenuButton = () => {
  return (
    <Button colorScheme="teal" variant="outline" leftIcon={<FaBars />} position="absolute" top={4} right={4}>
      Menu
    </Button>
  );
};

export default MenuButton;
