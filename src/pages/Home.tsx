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
  FaBug,
  FaCloud,
  FaGithub,
  FaLinkedin,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa"
const profileImage = "/tim.jpeg"
import MainLayout from "../layouts/MainLayout"

const metrics = [
  { value: "5+", label: "Years in cyber defence" },
  { value: "99.98%", label: "Monitoring uptime" },
  { value: "42", label: "Major incidents reduced" },
  { value: "24/7", label: "Threat visibility" },
]

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certs" },
  { label: "Contact", href: "#contact" },
]

const strengths = [
  {
    title: "Threat Detection",
    description: "Monitoring, detonation, and triage across endpoint, network, and cloud telemetry.",
    icon: FaShieldAlt,
  },
  {
    title: "Incident Response",
    description: "Coordinated containment, root-cause analysis, and rapid business-safe recovery actions.",
    icon: FaBug,
  },
  {
    title: "Cloud Security",
    description: "IAM reviews, misconfiguration checks, and hardening for Azure and AWS environments.",
    icon: FaCloud,
  },
  {
    title: "Vulnerability Management",
    description: "Patch prioritisation, exposure reduction, and remediation tracking across the estate.",
    icon: FaLock,
  },
]

const projects = [
  {
    title: "SOC Automation Playbook",
    summary: "Reduced manual triage time by 38% using detections, enrichment scripts, and ticket orchestration.",
    stack: ["Python", "Splunk", "Jira"],
  },
  {
    title: "Cloud Hardening Initiative",
    summary: "Hardened IAM, encryption, and network policies across multi-account AWS workloads.",
    stack: ["AWS", "IAM", "Terraform"],
  },
  {
    title: "Threat Intelligence Feed Review",
    summary: "Built a structured review process to tune detections and reduce false positives by 27%.",
    stack: ["Threat Intel", "SIEM", "YARA"],
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

          <HStack as="nav" gap={4} wrap="wrap" color="gray.300" fontSize="sm" justify={{ base: "flex-start", sm: "flex-end" }}>
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} _hover={{ color: "white" }}>
                {item.label}
              </Link>
            ))}
          </HStack>
        </Flex>
      </Box>

      <Stack direction={{ base: "column", lg: "row" }} align="center" justify="space-between" py={{ base: 10, lg: 20 }} gap={{ base: 8, lg: 10 }}>
        <Box flex="1" w="full">
          <Badge colorScheme="cyan" variant="subtle" px={3} py={1} borderRadius="full">
            Security Analyst • Blue Team • Cloud Defence
          </Badge>
          <Heading as="h1" mt={6} lineHeight="1.05" color="white" fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}>
            Protecting systems, reducing risk, and catching threats before they spread.
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} mt={6} color="gray.300" maxW="650px">
            I help organisations strengthen security operations, investigate incidents, and improve resilience through data-driven defence strategies.
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

      <SimpleGrid columns={{ base: 1, sm: 2, xl: 4 }} gap={5} pb={16}>
        {metrics.map((metric) => (
          <Box key={metric.label} bg="whiteAlpha.100" borderRadius="xl" p={5} border="1px solid" borderColor="whiteAlpha.200">
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="cyan.300">{metric.value}</Text>
            <Text color="gray.300" mt={2}>{metric.label}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <Box id="about" py={16}>
        <Box maxW="760px">
          <Text fontSize="sm" letterSpacing="0.18em" textTransform="uppercase" color="cyan.300">
            About
          </Text>
          <Heading as="h2" size="lg" mt={4} color="white">
            Security operations with a focus on prevention, detection, and resilient response.
          </Heading>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} mt={10}>
          <Box bg="whiteAlpha.100" borderRadius="2xl" p={8} border="1px solid" borderColor="whiteAlpha.200">
            <Text color="gray.200">
              I specialise in helping businesses reduce exposure, validate controls, and improve operational readiness across both internal and cloud-based environments.
            </Text>
          </Box>
          <Box bg="whiteAlpha.100" borderRadius="2xl" p={8} border="1px solid" borderColor="whiteAlpha.200">
            <Box as="ul" listStyleType="none" p={0} m={0} color="gray.200">
              {[
                "Threat hunting and incident analysis",
                "Security awareness and policy improvements",
                "Vulnerability prioritisation and remediation support",
                "Continuous monitoring and KPI reporting",
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
          Core capabilities
        </Text>
        <Heading as="h2" size="lg" mt={4} color="white">
          Tools and disciplines I use every day.
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={6} mt={10}>
          {strengths.map((item) => {
            const Icon = item.icon

            return (
              <Box key={item.title} bg="whiteAlpha.100" borderRadius="2xl" p={6} border="1px solid" borderColor="whiteAlpha.200">
                <Box bg="cyan.500" width="46px" height="46px" borderRadius="md" display="grid" placeItems="center" mb={5}>
                  <Icon size={20} color="white" />
                </Box>
                <Heading as="h3" size="md" mb={3} color="white">
                  {item.title}
                </Heading>
                <Text color="gray.300">{item.description}</Text>
              </Box>
            )
          })}
        </SimpleGrid>
      </Box>

      <Box id="projects" py={16}>
        <Text fontSize="sm" letterSpacing="0.18em" textTransform="uppercase" color="cyan.300">
          Selected work
        </Text>
        <Heading as="h2" size="lg" mt={4} color="white">
          Projects and operational improvements.
        </Heading>

        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={6} mt={10}>
          {projects.map((project) => (
            <Box key={project.title} bg="whiteAlpha.100" borderRadius="2xl" p={6} border="1px solid" borderColor="whiteAlpha.200">
              <Badge colorScheme="green" variant="subtle" mb={4}>
                {project.title}
              </Badge>
              <Text color="gray.200" mb={5}>{project.summary}</Text>
              <HStack wrap="wrap" gap={2}>
                {project.stack.map((tech) => (
                  <Badge key={tech} colorScheme="cyan" variant="outline">
                    {tech}
                  </Badge>
                ))}
              </HStack>
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
        <Flex justify="space-between" direction={{ base: "column", sm: "row" }} gap={2}>
          <Text>© 2026 Timothee D.T</Text>
          <Text>Security Analyst portfolio</Text>
        </Flex>
      </Box>
    </MainLayout>
  )
}
