import { Box, Container, Heading, SimpleGrid, Text, Image, VStack, Button } from "@chakra-ui/react";
import MenuButton from "../components/MenuButton";
import { FaHeart, FaUtensils } from "react-icons/fa";

const recipes = [
  {
    id: 1,
    title: "Chocolate Brownies",
    description: "Deliciously fudgy and rich chocolate brownies with a perfectly crackly top.",
    imageUrl: "https://images.unsplash.com/photo-1590841609987-4ac211afdde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBicm93bmllc3xlbnwwfHx8fDE3MDkzOTA1NDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Chocolate Cake",
    description: "Moist and creamy chocolate cake that melts in your mouth with every bite.",
    imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDB8fHx8MTcwOTM5MDU0NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Chocolate Chip Cookies",
    description: "Classic chewy chocolate chip cookies with a golden edge and soft middle.",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjaGlwJTIwY29va2llc3xlbnwwfHx8fDE3MDkzOTA1NDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10} position="relative">
      <MenuButton />
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Totally a legit chocolate brand
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Indulge in our collection of the finest chocolate recipes
        </Text>
        <SimpleGrid columns={[1, null, 3]} spacing={10}>
          {recipes.map((recipe) => (
            <Box key={recipe.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={recipe.imageUrl} alt={recipe.title} borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={3}>
                {recipe.title}
              </Heading>
              <Text mb={4}>{recipe.description}</Text>
              <Button colorScheme="pink" leftIcon={<FaUtensils />}>
                View Recipe
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
