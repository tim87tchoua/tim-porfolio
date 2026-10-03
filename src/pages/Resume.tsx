import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Separator,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import MainLayout from "../layouts/MainLayout"

const technicalSkills = [
  "Microsoft Sentinel",
  "Defender for Endpoint",
  "KQL",
  "Splunk",
  "SPL",
  "Wazuh SIEM",
  "Sysmon",
  "Suricata NIDS",
  "MITRE ATT&CK",
  "AWS",
  "Terraform",
  "Tenable",
  "Vulnerability Management",
  "Python",
  "PowerShell",
  "Jira",
  "Power BI",
]

const softSkills = [
  "Analytical problem-solving",
  "Incident investigation",
  "Clear communication",
  "Cross-functional collaboration",
  "Risk-based prioritization",
  "Attention to detail",
]

const projects = [
  {
    title: "Enterprise SIEM & Telemetry Pipeline (Wazuh & Sysmon)",
    date: "05/2026 – Present",
    bullets: [
      "Architected centralized Wazuh SIEM infrastructure on Ubuntu Server with multi-system agent groups for continuous endpoint monitoring.",
      "Integrated Microsoft Sysmon, Windows event logs, and automated VirusTotal hash scanning to improve threat visibility and malware triage.",
      "Reduced unauthorized file changes by 60% using Wazuh File Integrity Monitoring (FIM) and Whodata tracking.",
    ],
  },
  {
    title: "Threat Hunting & Adversary Simulation (MITRE ATT&CK)",
    date: "05/2026 – Present",
    bullets: [
      "Mapped telemetry to MITRE ATT&CK in Wazuh SIEM and validated detection logic against Invoke-Atomic Red Team simulations, including PowerShell abuse and credential dumping.",
      "Applied Wazuh Security Configuration Assessment (SCA) and automated vulnerability scanning to support PCI DSS, NIST, GDPR, and HIPAA security baselines.",
    ],
  },
  {
    title: "Network Intrusion Detection & Automated Incident Response",
    date: "05/2026 – Present",
    bullets: [
      "Integrated Suricata NIDS with Wazuh SIEM to detect web attacks, including SQL injection and cross-site scripting (XSS).",
      "Reduced threat mitigation time to under 10 seconds by deploying Wazuh Active Response scripts to block RDP brute-force activity and disable rogue users.",
    ],
  },
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Heading as="h2" fontSize="xl" color="cyan.300" mb={2} textTransform="uppercase" letterSpacing="0.08em">
      {children}
    </Heading>
  )
}

export default function Resume() {
  return (
    <MainLayout className="resume-page">
      <Flex className="resume-actions no-print" justify="space-between" align="center" gap={4} mb={8} wrap="wrap">
        <Link href="/" color="cyan.300" _hover={{ color: "white" }}>
          ← Back to portfolio
        </Link>
        <Button colorScheme="green" onClick={() => window.print()}>
          Print / Save as PDF
        </Button>
      </Flex>

      <Box maxW="1000px" mx="auto" bg="white" color="gray.800" borderRadius="2xl" p={{ base: 5, sm: 8, md: 12 }} boxShadow="0 20px 60px rgba(0,0,0,0.25)">
        <Flex justify="space-between" align="flex-start" gap={6} wrap="wrap">
          <Box>
            <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} color="gray.900" lineHeight="1.1">
              Timothee DJOUOKEP TCHOUAMOU
            </Heading>
            <Text mt={3} textAlign="center" fontSize={{ base: "lg", md: "2xl" }} fontWeight="semibold" color="green.700" w="full">
              Security Analyst
            </Text>
          </Box>
        </Flex>

        <Flex gap={2} mt={5} justify="center" align="center" wrap="nowrap" fontSize="sm" color="gray.700" whiteSpace="nowrap" overflowX="auto">
          <Text flexShrink={0}>Silver Spring, Maryland</Text>
          <Text aria-hidden="true">·</Text>
          <Text flexShrink={0}>U.S. Citizen · USA</Text>
          <Text aria-hidden="true">·</Text>
          <Text flexShrink={0}>240-360-7191</Text>
          <Text aria-hidden="true">·</Text>
          <Link href="mailto:tim.25tchoua@gmail.com" flexShrink={0}>tim.25tchoua@gmail.com</Link>
          <Text aria-hidden="true">·</Text>
          <Link href="https://www.linkedin.com/in/timothee-djouokep-tchouamou-a369183a6/" target="_blank" rel="noopener noreferrer" flexShrink={0}>LinkedIn</Link>
          <Text aria-hidden="true">·</Text>
          <Link href="https://github.com/tim87tchoua" target="_blank" rel="noopener noreferrer" flexShrink={0}>GitHub</Link>
        </Flex>

        <Separator my={7} borderColor="gray.300" />

        <Stack gap={5}>
          <Box>
            <SectionHeading>Professional Summary</SectionHeading>
            <Text lineHeight="tall" color="gray.700">
              Security Analyst with 6+ years of experience across security operations and SIEM engineering. Skilled in threat detection, incident response, cloud security, and vulnerability management, using tools including Microsoft Sentinel, Defender for Endpoint, Entra ID, Splunk, KQL, AWS, Terraform, Tenable, and Jira to improve detection quality, accelerate response, and reduce security risk.
            </Text>
          </Box>

          <Box>
            <SectionHeading>Professional Experience</SectionHeading>
            <Stack gap={3}>
              <Box>
                <Flex justify="space-between" gap={3} wrap="wrap">
                  <Heading as="h3" fontSize="lg" color="gray.900">Security Analyst | ABC Technology Solutions</Heading>
                  <Text color="gray.600" fontWeight="bold">Washington, DC · 01/2024 – Present</Text>
                </Flex>
                <Stack as="ul" gap={1} pl={5} mt={3} color="gray.700" listStyleType="none">
                  <Text as="li" lineHeight="tall">
                    - Tuned endpoint and sign-in detections with Microsoft Sentinel, Defender for Endpoint, Entra ID, and KQL, reducing false-positive alerts by 30%.
                  </Text>
                  <Text as="li" lineHeight="tall">
                    - Improved incident containment readiness with Microsoft Defender, Microsoft Sentinel, and NIST 800-61 playbooks, enabling 30% faster containment decisions during tabletop exercises.
                  </Text>
                  <Text as="li" lineHeight="tall">
                    - Reduced standing cloud privilege by 30% by reviewing AWS IAM Access Analyzer findings and CloudTrail activity, then implementing least-privilege roles with Terraform.
                  </Text>
                  <Text as="li" lineHeight="tall">
                    - Prioritized internet-facing and known-exploited vulnerabilities using Tenable, CISA KEV, and CVSS, reducing overdue critical findings by 30%.
                  </Text>
                </Stack>
              </Box>
              <Box>
                <Flex justify="space-between" gap={3} wrap="wrap">
                  <Heading as="h3" fontSize="lg" color="gray.900">Splunk Engineer | NextGen IT Services</Heading>
                  <Text color="gray.600" fontWeight="bold">Manassas, VA · 07/2020 – 12/2023</Text>
                </Flex>
                <Stack as="ul" gap={1} pl={5} mt={3} color="gray.700" listStyleType="none">
                  <Text as="li" lineHeight="tall">
                    - Built Splunk and SPL threat-hunting queries mapped to MITRE ATT&CK, validating coverage for five priority attack techniques.
                  </Text>
                  <Text as="li" lineHeight="tall">
                    - Automated compromised-account containment with Entra ID, Microsoft Graph, and Power Automate, reducing account-containment time by 50%.
                  </Text>
                  <Text as="li" lineHeight="tall">
                    - Applied secure AWS S3 defaults with AWS Config and Terraform, achieving encryption coverage for all in-scope buckets.
                  </Text>
                  <Text as="li" lineHeight="tall">
                    - Improved vulnerability remediation SLA compliance by 25% by tracking Defender Vulnerability Management findings in Jira and Power BI.
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Box>
            <SectionHeading>Key Engineering Projects</SectionHeading>
            <Stack gap={6}>
              {projects.map((project) => (
                <Box key={project.title} breakInside="avoid">
                  <Flex justify="space-between" gap={3} wrap="wrap" mb={2}>
                    <Heading as="h3" fontSize="lg" color="gray.900">{project.title}</Heading>
                    <Text color="gray.600" whiteSpace="nowrap">{project.date}</Text>
                  </Flex>
                  <Stack as="ul" gap={1} pl={5} color="gray.700" listStyleType="none">
                    {project.bullets.map((bullet) => (
                      <Text as="li" key={bullet} lineHeight="tall">- {bullet}</Text>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>

        <Stack gap={5}>
          <Box>
            <SectionHeading>Key Impact</SectionHeading>
            <SimpleGrid columns={{ base: 1, sm: 3 }} gap={4}>
              {[
                { metric: "60%", label: "fewer unauthorized file changes through Wazuh FIM and Whodata tracking" },
                { metric: "<10 sec", label: "threat mitigation using automated Wazuh response actions" },
                { metric: "3", label: "integrated monitoring layers: endpoint telemetry, SIEM, and network IDS" },
              ].map((impact) => (
                <Box key={impact.metric} bg="green.50" borderRadius="lg" p={4} border="1px solid" borderColor="green.100">
                  <Text fontSize="2xl" fontWeight="bold" color="green.700">{impact.metric}</Text>
                  <Text fontSize="sm" color="gray.700" mt={1}>{impact.label}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box>
            <SectionHeading>Technical & Soft Skills</SectionHeading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              <Box>
                <Text fontWeight="bold" color="gray.900" mb={3}>Technical Skills</Text>
                <HStack wrap="wrap" gap={2}>
                  {technicalSkills.map((skill) => (
                    <Badge key={skill} colorScheme="green" variant="subtle">{skill}</Badge>
                  ))}
                </HStack>
              </Box>
              <Box>
                <Text fontWeight="bold" color="gray.900" mb={3}>Soft Skills</Text>
                <HStack wrap="wrap" gap={2}>
                  {softSkills.map((skill) => (
                    <Badge key={skill} colorScheme="gray" variant="subtle">{skill}</Badge>
                  ))}
                </HStack>
              </Box>
            </SimpleGrid>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            <Box>
              <SectionHeading>Education</SectionHeading>
              <Heading as="h3" fontSize="md" color="gray.900">
                Bachelor of Science (B.S.) in Mathematics and Computer Science
              </Heading>
              <Text color="gray.700" mt={1}>University of Yaoundé 1, Cameroon · 2007 – 2011</Text>
              <Stack as="ul" gap={1} pl={5} mt={3} color="gray.700" listStyleType="none">
                <Text as="li">- Graduated in the top 10% of the class.</Text>
                <Text as="li">- Applied algorithms and statistical modeling in 5+ capstone projects, improving computational efficiency by up to 40%.</Text>
                <Text as="li">- Built and deployed 3 software solutions using Python and C++ for campus departments.</Text>
              </Stack>
            </Box>

            <Stack gap={7}>
              <Box>
                <SectionHeading>Certification</SectionHeading>
                <Heading as="h3" fontSize="md" color="gray.900">
                  Google Cybersecurity Professional Certificate
                </Heading>
                <Text color="gray.700" mt={1}>Coursera · 01/2026 – 07/2026</Text>
                <Link
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/58BE6XNZ9T9G"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="green.700"
                  fontSize="sm"
                >
                  Verify credential
                </Link>
                <Text color="gray.700" mt={2}>CompTIA Security+</Text>
              </Box>

              <Box>
                <SectionHeading>Languages</SectionHeading>
                <Text color="gray.700">French — Native</Text>
                <Text color="gray.700">English — Full professional proficiency</Text>
              </Box>
            </Stack>
          </SimpleGrid>

          <Box>
            <SectionHeading>Interests & Hobbies</SectionHeading>
            <Stack gap={2} color="gray.700">
              <Text><strong>Cycling & Outdoor Endurance:</strong> Active cycling enthusiast focused on physical endurance, route mapping, and maintaining an active lifestyle balance.</Text>
              <Text><strong>Gaming & Strategic Problem Solving:</strong> Enjoy strategic night gaming sessions to sharpen tactical decision-making, pattern recognition, and problem-solving skills.</Text>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </MainLayout>
  )
}
