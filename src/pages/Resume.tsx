import {
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
import { projects as portfolioProjects } from "../data/projects"

const skills = [
  "System Administration",
  "Help Desk Support",
  "Ticketing Systems",
  "Imaging & Deployments",
  "Network Configuration",
  "Security Frameworks",
  "Cloud Management",
  "Burp Suite & Metasploit",
  "Azure",
  "Python, Bash & SQL",
  "SIEM & Splunk",
  "Active Directory",
  "Network Troubleshooting",
  "Automation",
  "Server Administration",
  "Linux",
  "Windows & Office 365",
  "Wireshark Traffic Analysis",
]

const resumeProjects = [
  {
    title: "Flask Brute Force Lab",
    summary: "Developed a local-only ethical brute-force testing lab using Python and Flask to simulate and understand password attack vectors.",
    slug: "flask-brute-force-lab",
  },
  {
    title: "Helpdesk Ticketing Lab",
    summary: "Set up a Dockerized osTicket helpdesk environment for simulating real-world ticket workflows and admin management.",
    slug: "helpdesk-ticketing-lab",
  },
  {
    title: "Python CLI Toolkit",
    summary: "Built a suite of command-line tools in Python for security and networking tasks, including IP lookup, password generation, and file hashing.",
    slug: "python-cli-toolkit",
  },
  {
    title: "Vulnerability Scanner (Python + Flask)",
    summary: "Created a web application in Flask where users can input URLs to run basic backend vulnerability scans.",
    slug: "vulnerability-scanner",
  },
  {
    title: "Linux User Permissions Management Lab",
    summary: "Designed a practical lab using Bash scripting to manage users, groups, and permissions on Linux systems, with features like bulk user creation and auditing.",
  },
  {
    title: "Linux Apache Web Server Lab",
    summary: 'Installed and configured Apache2 on a Debian-based Linux VM with "systemctl" service control and localhost verification.',
    slug: "linux-apache-webserver",
  },
  {
    title: "Python Backup Script Lab",
    summary: "This lab demonstrates how to create a Python script that automates the backup of files or directories. It compresses selected folders into a .zip archive and stores it in a designated backup directory.",
    slug: "python-backup-script-lab",
  },
  {
    title: "Wireshark Capture Lab",
    summary: "This project captures and analyzes live network traffic using Wireshark on macOS.",
    slug: "wireshark-capture-lab",
  },
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Heading as="h2" fontSize="xl" color="gray.900" mb={2} textTransform="uppercase" letterSpacing="0.08em">
      {children}
    </Heading>
  )
}

export default function Resume() {
  return (
    <MainLayout className="resume-page">
      <Flex className="resume-actions no-print" justify="space-between" align="center" gap={4} mb={8} wrap="wrap">
        <Link href="/" color="gray.800" _hover={{ color: "black" }}>
          ← Back to portfolio
        </Link>
        <Button bg="gray.900" color="white" _hover={{ bg: "gray.700" }} onClick={() => window.print()}>
          Print / Save as PDF
        </Button>
      </Flex>

      <Box maxW="1000px" mx="auto" bg="white" color="gray.800" borderRadius="2xl" p={{ base: 5, sm: 8, md: 12 }} boxShadow="0 20px 60px rgba(0,0,0,0.25)">
        <Flex justify="space-between" align="flex-start" gap={6} wrap="wrap">
          <Box>
            <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }} color="gray.900" lineHeight="1.1">
              Timothee DJOUOKEP TCHOUAMOU
            </Heading>
            <Text mt={3} textAlign="center" fontSize={{ base: "lg", md: "2xl" }} fontWeight="semibold" color="gray.800" w="full">
              Security Analyst • Blue Team
            </Text>
          </Box>
        </Flex>

        <Flex gap={2} mt={5} justify="center" align="center" wrap="nowrap" fontSize="sm" color="gray.700" whiteSpace="nowrap" overflowX="auto">
          <Text flexShrink={0}>Silver Spring, Maryland</Text>
          <Text aria-hidden="true">·</Text>
          <Text flexShrink={0}>U.S. Citizen</Text>
          <Text aria-hidden="true">·</Text>
          <Text flexShrink={0}>240-360-7191</Text>
          <Text aria-hidden="true">·</Text>
          <Link href="mailto:tim.25tchoua@gmail.com" flexShrink={0}>tim.25tchoua@gmail.com</Link>
          <Text aria-hidden="true">·</Text>
          <Link href="https://www.linkedin.com/in/timothee-djouokep-tchouamou-a369183a6/" target="_blank" rel="noopener noreferrer" flexShrink={0}>LinkedIn</Link>
          <Text aria-hidden="true">·</Text>
          <Link href="https://github.com/tim87tchoua" target="_blank" rel="noopener noreferrer" flexShrink={0}>GitHub</Link>
          <Text aria-hidden="true">·</Text>
          <Link href="https://tim-porfolio.vercel.app/" target="_blank" rel="noopener noreferrer" flexShrink={0}>Portfolio</Link>
        </Flex>

        <Separator my={7} borderColor="gray.300" />

        <Stack gap={5}>
          <Box>
            <SectionHeading>Professional Summary</SectionHeading>
            <Text lineHeight="tall" color="gray.700">
              Security Analyst with 6+ years of experience across security operations and SIEM engineering. Skilled in threat detection, incident response, cloud security, and vulnerability management, using tools including Microsoft Sentinel, Defender for Endpoint, Entra ID, Splunk, KQL, AWS, Terraform, Tenable, and Jira to improve detection quality, accelerate response, and reduce security risk.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            <Box>
              <SectionHeading>Education</SectionHeading>
              <Heading as="h3" fontSize="md" color="gray.900">
                Bachelor of Science (B.S.) in Mathematics and Computer Science
              </Heading>
              <Text color="gray.700" mt={1}>University of Yaoundé 1, Cameroon · 2007 – 2011</Text>
            </Box>

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
                color="gray.800"
                fontSize="sm"
              >
                Verify credential
              </Link>
              <Text color="gray.700" mt={2}>CompTIA Security+</Text>
            </Box>
          </SimpleGrid>

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
            <SectionHeading>Projects</SectionHeading>
            <Stack as="ul" gap={3} pl={0} color="gray.700" listStyleType="none">
              {resumeProjects.map((project) => {
                const repositoryProject = portfolioProjects.find((item) => item.slug === project.slug)

                return (
                  <Box as="li" key={project.title} breakInside="avoid">
                    <Text lineHeight="tall">
                      <strong>• {project.title}</strong>
                      <br />
                      {project.summary}
                    </Text>
                    {repositoryProject && (
                      <HStack gap={4} mt={1}>
                        <Link href={repositoryProject.repository} target="_blank" rel="noopener noreferrer" color="gray.800" fontSize="sm">
                          View repository
                        </Link>
                        {repositoryProject.liveUrl && (
                          <Link href={repositoryProject.liveUrl} target="_blank" rel="noopener noreferrer" color="gray.800" fontSize="sm">
                            Visit website
                          </Link>
                        )}
                      </HStack>
                    )}
                  </Box>
                )
              })}
            </Stack>
          </Box>
        </Stack>

        <Stack gap={5}>
          <Box>
            <SectionHeading>Skills</SectionHeading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={3}>
              {skills.map((skill) => (
                <Box key={skill} bg="white" borderRadius="lg" px={4} py={3} border="1px solid" borderColor="gray.300">
                  <Text color="gray.700" fontSize="sm" fontWeight="medium">{skill}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Stack gap={7}>
            <Box>
              <SectionHeading>Languages</SectionHeading>
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap={2}>
                <Text color="gray.700">French — Native</Text>
                <Text color="gray.700">English — Full professional proficiency</Text>
              </SimpleGrid>
            </Box>
          </Stack>

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
