import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import MainLayout from "../layouts/MainLayout"

type ExampleProject = {
  title: string
  tools: string[]
  outcome: string
}

type Capability = {
  title: string
  intro: string
  projects: ExampleProject[]
}

const capabilities: Record<string, Capability> = {
  "threat-detection": {
    title: "Threat Detection",
    intro: "Blue-team projects showing how detection engineering can improve security monitoring.",
    projects: [
      {
        title: "Tune noisy endpoint detections",
        tools: ["Microsoft Sentinel", "Defender for Endpoint", "KQL"],
        outcome: "Achieved a 30% reduction in false-positive alerts, measured by weekly alert-volume reports, by baselining common benign activity and tuning detection logic.",
      },
      {
        title: "Detect suspicious sign-in behavior",
        tools: ["Microsoft Sentinel", "Entra ID", "KQL"],
        outcome: "Achieved 20% faster triage of risky sign-ins, measured by median investigation time, by correlating impossible-travel, unfamiliar-location, and MFA signals.",
      },
      {
        title: "Build a phishing detection workflow",
        tools: ["Microsoft 365 Defender", "Exchange Online", "Power Automate"],
        outcome: "Achieved a 25% decrease in time to identify reported phishing, measured from report to analyst verdict, by enriching messages with sender, URL, and attachment reputation.",
      },
      {
        title: "Create threat-hunting queries",
        tools: ["Splunk", "SPL", "MITRE ATT&CK"],
        outcome: "Achieved coverage for 5 priority attack techniques, measured by mapped and tested detections, by translating threat hypotheses into reusable hunting queries.",
      },
      {
        title: "Centralize threat-intelligence indicators",
        tools: ["MISP", "Splunk", "Python"],
        outcome: "Achieved a 40% reduction in manual indicator lookups, measured by analyst handling time, by normalizing and enriching threat feeds before SIEM ingestion.",
      },
    ],
  },
  "incident-response": {
    title: "Incident Response",
    intro: "Response and recovery projects focused on repeatable, evidence-led incident handling.",
    projects: [
      {
        title: "Create a ransomware response playbook",
        tools: ["Microsoft Defender", "Microsoft Sentinel", "NIST 800-61"],
        outcome: "Achieved a 30% faster containment decision, measured in tabletop exercise timelines, by documenting escalation criteria, isolation steps, and approval owners.",
      },
      {
        title: "Automate compromised-account containment",
        tools: ["Entra ID", "Microsoft Graph", "Power Automate"],
        outcome: "Achieved a 50% decrease in account-containment time, measured from confirmed compromise to session revocation, by automating a reviewed disable-and-revoke workflow.",
      },
      {
        title: "Improve phishing incident response",
        tools: ["Microsoft 365 Defender", "Exchange Online", "PowerShell"],
        outcome: "Achieved a 35% reduction in mailbox cleanup time, measured per confirmed campaign, by automating message search, quarantine, and user notification steps.",
      },
      {
        title: "Build an incident evidence checklist",
        tools: ["Velociraptor", "Sysmon", "MITRE ATT&CK"],
        outcome: "Achieved 25% fewer evidence-collection gaps, measured in post-incident reviews, by standardizing host, identity, and timeline artifacts for investigators.",
      },
      {
        title: "Run a cross-functional incident exercise",
        tools: ["MITRE ATT&CK", "TheHive", "Confluence"],
        outcome: "Achieved a 20% improvement in exercise response time, measured across inject acknowledgement and escalation, by rehearsing roles with IT, legal, and business stakeholders.",
      },
    ],
  },
  "cloud-security": {
    title: "Cloud Security",
    intro: "Cloud-security initiatives covering identity, configuration, logging, and guardrails.",
    projects: [
      {
        title: "Reduce excessive cloud permissions",
        tools: ["AWS IAM Access Analyzer", "CloudTrail", "Terraform"],
        outcome: "Achieved a 30% reduction in standing privileged access, measured by IAM policy review, by replacing broad roles with least-privilege, task-specific permissions.",
      },
      {
        title: "Enforce secure object storage defaults",
        tools: ["AWS S3", "AWS Config", "Terraform"],
        outcome: "Achieved 100% encryption coverage for in-scope storage buckets, measured by configuration compliance, by deploying encryption and public-access-block guardrails.",
      },
      {
        title: "Improve cloud audit visibility",
        tools: ["AWS CloudTrail", "GuardDuty", "Microsoft Sentinel"],
        outcome: "Achieved a 40% decrease in time to investigate cloud alerts, measured by median case duration, by centralizing audit events and adding account and resource context.",
      },
      {
        title: "Identify exposed cloud services",
        tools: ["AWS Security Hub", "AWS Config", "Python"],
        outcome: "Achieved a 35% decrease in publicly exposed resources, measured by recurring configuration scans, by alerting on risky network rules and tracking remediation ownership.",
      },
      {
        title: "Establish cloud security baselines",
        tools: ["Azure Policy", "Microsoft Defender for Cloud", "Bicep"],
        outcome: "Achieved 90% compliance across selected cloud controls, measured by policy-assessment reports, by applying reviewed baseline policies and remediation guidance.",
      },
    ],
  },
  "vulnerability-management": {
    title: "Vulnerability Management",
    intro: "Vulnerability-management projects that connect discovery, prioritization, and verified remediation.",
    projects: [
      {
        title: "Prioritize exploitable vulnerabilities",
        tools: ["Tenable", "CISA KEV", "CVSS"],
        outcome: "Achieved a 30% reduction in overdue critical findings, measured by monthly exposure reports, by prioritizing internet-facing assets and known-exploited CVEs.",
      },
      {
        title: "Build an owner-based remediation tracker",
        tools: ["Defender Vulnerability Management", "Jira", "Power BI"],
        outcome: "Achieved a 25% improvement in remediation SLA compliance, measured by ticket aging, by assigning each finding an owner, due date, and risk-based priority.",
      },
      {
        title: "Verify patch deployment coverage",
        tools: ["Microsoft Intune", "PowerShell", "Microsoft Defender"],
        outcome: "Achieved 95% patch coverage for targeted endpoints, measured by post-deployment inventory scans, by reconciling deployment status with vulnerability findings.",
      },
      {
        title: "Reduce recurring misconfigurations",
        tools: ["Qualys", "CIS Benchmarks", "Ansible"],
        outcome: "Achieved a 40% reduction in recurring configuration findings, measured across monthly scans, by converting common remediations into tested configuration policies.",
      },
      {
        title: "Report risk trends to stakeholders",
        tools: ["Nessus", "Excel", "Power BI"],
        outcome: "Achieved 50% less manual reporting effort, measured by analyst hours per reporting cycle, by consolidating scan results into a dashboard with trend and remediation views.",
      },
    ],
  },
}

export default function ProjectExamples({ slug }: { slug: string }) {
  const capability = capabilities[slug]

  if (!capability) {
    return (
      <MainLayout>
        <Stack gap={5} align="start" py={16}>
          <Heading as="h1" color="white">Capability page not found</Heading>
          <Link href="/#skills" _hover={{ textDecoration: "none" }}>
            <Button colorScheme="cyan">Back to capabilities</Button>
          </Link>
        </Stack>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Box as="header" mb={{ base: 10, md: 16 }}>
        <Link href="/#skills" color="cyan.300" fontSize="sm" _hover={{ color: "white" }}>
          ← Back to capabilities
        </Link>
      </Box>

      <Box maxW="820px" mb={10}>
        <Badge colorScheme="yellow" variant="subtle" mb={4}>Illustrative examples — not verified work history</Badge>
        <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} color="white">
          {capability.title} project
        </Heading>
        <Text color="gray.300" mt={4} fontSize={{ base: "md", md: "lg" }}>
          {capability.intro}
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5}>
        {capability.projects.map((project, index) => (
          <Box
            key={project.title}
            bg="whiteAlpha.100"
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="2xl"
            p={{ base: 5, md: 7 }}
          >
            <Text color="cyan.300" fontSize="sm" fontWeight="bold" mb={2}>
              PROJECT {index + 1}
            </Text>
            <Heading as="h2" size="md" color="white" mb={4}>
              {project.title}
            </Heading>
            <Text color="gray.200" lineHeight="tall">
              {project.outcome}
            </Text>
            <Text color="green.300" fontSize="sm" fontWeight="semibold" mt={5} mb={2}>
              Example tools
            </Text>
            <HStack wrap="wrap" gap={2}>
              {project.tools.map((tool) => (
                <Badge key={tool} colorScheme="green" variant="subtle">
                  {tool}
                </Badge>
              ))}
            </HStack>
          </Box>
        ))}
      </SimpleGrid>

      <Flex mt={10} justify="space-between" wrap="wrap" gap={4}>
        <Link href="/#skills" _hover={{ textDecoration: "none" }}>
          <Button variant="outline" borderColor="gray.500" color="white">All capabilities</Button>
        </Link>
        <Link href="/contact" _hover={{ textDecoration: "none" }}>
          <Button colorScheme="cyan">Discuss a project</Button>
        </Link>
      </Flex>
    </MainLayout>
  )
}
