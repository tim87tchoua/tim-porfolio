import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"
const profileImage = "/tim.jpeg"
import MainLayout from "../layouts/MainLayout"
import { projects } from "../data/projects"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certs" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "#contact" },
]

const focusAreas = [
  {
    title: "Threat monitoring",
    description: "Monitor security signals to support detection, investigation, and informed response.",
  },
  {
    title: "Cloud environment monitoring",
    description: "Monitor cloud environments for relevant security events and changes.",
  },
  {
    title: "Rapid threat containment",
    description: "Focus on timely, coordinated containment to limit the impact of security incidents.",
  },
]

const certs = ["Google Cybersecurity", "CompTIA Security+"]

export default function Home() {
  return (
    <MainLayout>
      <Box as="header" py={4}>
        <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
          <HStack gap={3} minW={0}>
            <Image
              src="/timlogo.png"
              alt="Timothee DJOUOKEP TCHOUAMOU logo"
              boxSize={{ base: "40px", md: "48px" }}
              objectFit="contain"
              borderRadius="md"
              flexShrink={0}
            />
            <Text fontSize="sm" letterSpacing="0.2em" textTransform="uppercase" color="cyan.300">
              Timothee DJOUOKEP TCHOUAMOU
            </Text>
          </HStack>

          <HStack as="nav" gap={2} wrap="wrap" color="gray.300" fontSize="sm" justify={{ base: "flex-start", sm: "flex-end" }}>
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                px={3}
                py={2}
                borderRadius="md"
                bg="green.700"
                color="white"
                _hover={{ bg: "green.600", color: "white", textDecoration: "none" }}
                _focusVisible={{ outline: "2px solid", outlineColor: "green.300", outlineOffset: "2px" }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>
        </Flex>
      </Box>

      <Stack direction={{ base: "column", lg: "row" }} align="center" justify="space-between" py={{ base: 10, lg: 20 }} gap={{ base: 8, lg: 10 }}>
        <Box flex="1" w="full">
          <Badge
            bg="green.600"
            color="white"
            px={5}
            py={2}
            fontSize={{ base: "md", md: "lg" }}
            borderRadius="full"
          >
            Security Analyst • Blue Team • Threat Containment
          </Badge>
          <Heading as="h1" mt={6} lineHeight="1.05" color="white" fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}>
            Blue team operations, cloud monitoring, and rapid threat containment.
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} mt={6} color="gray.300" maxW="650px">
            I specialize in cloud environment monitoring and rapid threat containment to protect enterprise networks.
          </Text>

          <Stack direction={{ base: "column", sm: "row" }} mt={8} gap={4}>
            <Link href="#projects" _hover={{ textDecoration: "none" }} display="block" width={{ base: "100%", sm: "auto" }}>
              <Button width="100%" size="lg" colorScheme="cyan">
                View projects <FaArrowRight />
              </Button>
            </Link>
            <Link href="/contact" _hover={{ textDecoration: "none" }} display="block" width={{ base: "100%", sm: "auto" }}>
              <Button width="100%" variant="outline" size="lg" borderColor="gray.600" color="white">
                Contact me
              </Button>
            </Link>
          </Stack>
        </Box>

        <Box flex="1" maxW="520px" w="full">
          <Box
            bg="rgba(15, 23, 42, 0.8)"
            border="1px solid"
            borderColor="cyan.500"
            borderRadius="2xl"
            p={6}
            boxShadow="0 0 40px rgba(34, 211, 238, 0.2)"
          >
            <Image src={profileImage} alt="Timothee DJOUOKEP TCHOUAMOU portrait" borderRadius="xl" objectFit="cover" w="full" h="420px" />
          </Box>
        </Box>
      </Stack>

      <Box id="about" py={16}>
        <Box maxW="760px">
          <Text fontSize="sm" letterSpacing="0.18em" textTransform="uppercase" color="cyan.300">
            About
          </Text>
          <Heading as="h2" size="lg" mt={4} color="white">
            Practical security work, backed by public projects and hands-on labs.
          </Heading>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} mt={10}>
          <Box bg="whiteAlpha.100" borderRadius="2xl" p={8} border="1px solid" borderColor="whiteAlpha.200">
            <Text color="gray.200">
              My GitHub portfolio documents hands-on work across SIEM and file integrity monitoring, network traffic analysis, security tooling, and infrastructure labs.
            </Text>
          </Box>
          <Box bg="whiteAlpha.100" borderRadius="2xl" p={8} border="1px solid" borderColor="whiteAlpha.200">
            <Box as="ul" listStyleType="none" p={0} m={0} color="gray.200">
              {[
                "SIEM monitoring and threat detection",
                "Cloud environment monitoring",
                "Threat containment and investigation",
                "Security and systems administration labs",
              ].map((item) => (
                <Box as="li" key={item} mb={3}>
                  • {item}
                </Box>
              ))}
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      <Box id="skills" py={16}>
        <Text fontSize="sm" letterSpacing="0.18em" textTransform="uppercase" color="cyan.300">
          Focus areas
        </Text>
        <Heading as="h2" size="lg" mt={4} color="white">
          Focus areas from my GitHub profile.
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={10}>
          {focusAreas.map((area) => (
              <Box key={area.title} bg="whiteAlpha.100" borderRadius="2xl" p={6} border="1px solid" borderColor="whiteAlpha.200" h="full">
                <Heading as="h3" size="md" mb={3} color="white">
                  {area.title}
                </Heading>
                <Text color="gray.300">{area.description}</Text>
              </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box id="projects" py={16}>
        <Text fontSize="sm" letterSpacing="0.18em" textTransform="uppercase" color="cyan.300">
          Selected work
        </Text>
        <Heading as="h2" size="lg" mt={4} color="white">
          Selected projects from my public repositories.
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6} mt={10}>
          {projects.map((project) => (
            <Box key={project.slug} bg="whiteAlpha.100" borderRadius="2xl" p={6} border="1px solid" borderColor="whiteAlpha.200">
              <Link href={`/projects/${project.slug}`} color="white" _hover={{ color: "cyan.300", textDecoration: "none" }}>
                <Heading as="h3" size="md" mb={4}>
                {project.title}
                </Heading>
              </Link>
              <Text color="gray.200" mb={5}>{project.summary}</Text>
              <HStack wrap="wrap" gap={2}>
                {project.technologies.map((tech) => (
                  <Badge key={tech} colorScheme="green" variant="subtle">
                    {tech}
                  </Badge>
                ))}
              </HStack>
              <Link
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                color="cyan.300"
                display="inline-flex"
                alignItems="center"
                gap={2}
                mt={6}
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub /> View repository
              </Link>
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="cyan.300"
                  display="block"
                  mt={2}
                >
                  Visit website
                </Link>
              )}
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box id="certs" py={16}>
        <Text fontSize="sm" letterSpacing="0.18em" textTransform="uppercase" color="cyan.300">
          Certifications
        </Text>
        <Heading as="h2" size="lg" mt={4} color="white">
          Industry-recognised security qualifications.
        </Heading>

        <Flex wrap="wrap" gap={3} mt={8}>
          {certs.map((cert) => {
            const badge = (
              <Badge colorScheme="purple" variant="subtle" fontSize="md" px={4} py={2} borderRadius="full">
                {cert}
              </Badge>
            )

            return cert === "Google Cybersecurity" ? (
              <Link
                key={cert}
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/58BE6XNZ9T9G"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Google Cybersecurity certificate on Coursera"
                _hover={{ textDecoration: "none", opacity: 0.85 }}
              >
                {badge}
              </Link>
            ) : (
              <Box key={cert}>{badge}</Box>
            )
          })}
        </Flex>
      </Box>

      <Box id="contact" py={16}>
        <Box bg="linear-gradient(135deg, rgba(34, 211, 238, 0.18), rgba(168, 85, 247, 0.18))" borderRadius="2xl" p={{ base: 6, md: 10 }} border="1px solid" borderColor="cyan.400">
          <Stack direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "flex-start", md: "center" }} gap={6}>
            <Box>
              <Text fontSize="sm" letterSpacing="0.18em" textTransform="uppercase" color="cyan.200">
                Get in touch
              </Text>
              <Heading as="h2" size="lg" mt={3} color="white">
                Ready to improve your security posture?
              </Heading>
            </Box>
            <HStack gap={4} wrap="wrap" justify={{ base: "flex-start", md: "flex-end" }}>
                <Link href="/contact" _hover={{ textDecoration: "none" }} display="block">
                  <Button colorScheme="cyan" size="lg" width={{ base: "100%", sm: "auto" }}>Email me</Button>
              </Link>
                <Link href="https://www.linkedin.com/in/timothee-djouokep-tchouamou-a369183a6/" target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }} display="block">
                  <Button variant="outline" size="lg" borderColor="gray.500" color="white" width={{ base: "100%", sm: "auto" }}>
                  <FaLinkedin /> LinkedIn
                </Button>
              </Link>
                <Link href="https://github.com/tim87tchoua" target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }} display="block">
                  <Button variant="outline" size="lg" borderColor="gray.500" color="white" width={{ base: "100%", sm: "auto" }}>
                  <FaGithub /> GitHub
                </Button>
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Box>

      <Box as="footer" py={8} color="gray.400" fontSize="sm">
        <Text textAlign="center">© 2026 Timothee DJOUOKEP TCHOUAMOU</Text>
      </Box>
    </MainLayout>
  )
}
