import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"
import MainLayout from "../layouts/MainLayout"
import { projects } from "../data/projects"

export default function ProjectExamples({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <MainLayout>
        <Stack gap={5} align="start" py={16}>
          <Heading as="h1" color="white">Project not found</Heading>
          <Link href="/#projects" _hover={{ textDecoration: "none" }}>
            <Button colorScheme="cyan">Back to projects</Button>
          </Link>
        </Stack>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Box as="header" mb={{ base: 10, md: 16 }}>
        <Link href="/#projects" color="cyan.300" fontSize="sm" _hover={{ color: "white" }}>
          ← Back to projects
        </Link>
      </Box>

      <Box maxW="820px" mx="auto">
        <Text color="cyan.300" fontSize="sm" letterSpacing="0.18em" textTransform="uppercase">
          GitHub project
        </Text>
        <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} color="white" mt={4}>
          {project.title}
        </Heading>
        <Text color="gray.300" mt={5} fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
          {project.summary}
        </Text>

        <HStack wrap="wrap" gap={2} mt={7}>
          {project.technologies.map((technology) => (
            <Badge key={technology} colorScheme="green" variant="subtle" px={3} py={1}>
              {technology}
            </Badge>
          ))}
        </HStack>

        <Flex mt={10} gap={4} wrap="wrap">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
              <Button colorScheme="cyan">Visit website</Button>
            </Link>
          )}
          <Link href={project.repository} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
            <Button variant={project.liveUrl ? "outline" : "solid"} borderColor="cyan.400" color={project.liveUrl ? "white" : undefined}>
              <FaGithub /> View on GitHub
            </Button>
          </Link>
          <Link href="/#projects" _hover={{ textDecoration: "none" }}>
            <Button variant="outline" borderColor="gray.500" color="white">
              All projects
            </Button>
          </Link>
        </Flex>
      </Box>
    </MainLayout>
  )
}
