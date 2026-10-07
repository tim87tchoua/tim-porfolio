export type PortfolioProject = {
  slug: string
  title: string
  summary: string
  technologies: string[]
  repository: string
  liveUrl?: string
}

export const projects: PortfolioProject[] = [
  {
    slug: "wazuh-home-lab",
    title: "Wazuh Home Lab",
    summary: "A Wazuh SIEM learning lab for log analysis, endpoint monitoring, and file integrity monitoring across Ubuntu and Windows.",
    technologies: ["Wazuh", "Ubuntu", "Windows", "SIEM", "FIM"],
    repository: "https://github.com/tim87tchoua/WAZUH_Home_Lab-",
  },
  {
    slug: "python-cli-toolkit",
    title: "Python CLI Toolkit",
    summary: "A collection of command-line utilities for password generation, IP lookup, network discovery, file hashing, and static page generation.",
    technologies: ["Python", "CLI", "Networking", "SHA-256"],
    repository: "https://github.com/tim87tchoua/Python-CLI-Toolkit",
    liveUrl: "https://python-cli-toolkit.vercel.app",
  },
  {
    slug: "vulnerability-scanner",
    title: "Vulnerability Scanner",
    summary: "A web app for checking common open ports, HTTP response headers, redirects, and HTTPS usage.",
    technologies: ["Python", "Flask", "Web security"],
    repository: "https://github.com/tim87tchoua/Vulnerability-Scanner-Python-Flask",
    liveUrl: "https://vulnerability-scanner-python-flask-swart.vercel.app/",
  },
  {
    slug: "flask-brute-force-lab",
    title: "Flask Brute-Force Lab",
    summary: "A local-only educational lab for exploring authentication attacks and defenses using a Flask login app.",
    technologies: ["Python", "Flask", "Authentication"],
    repository: "https://github.com/tim87tchoua/flask-brute-force-lab",
  },
  {
    slug: "helpdesk-ticketing-lab",
    title: "Helpdesk Ticketing Lab",
    summary: "A Dockerized osTicket environment for practicing helpdesk ticket workflows and administration.",
    technologies: ["Docker", "osTicket", "MySQL", "Linux"],
    repository: "https://github.com/tim87tchoua/helpdesk-ticketing-lab",
  },
  {
    slug: "wireshark-capture-lab",
    title: "Wireshark Capture Lab",
    summary: "A hands-on lab for capturing and analyzing network traffic with Wireshark.",
    technologies: ["Wireshark", "PCAP", "Network analysis"],
    repository: "https://github.com/tim87tchoua/wireshark-capture-lab",
  },
  {
    slug: "python-backup-script-lab",
    title: "Python Backup Script",
    summary: "A Python lab that creates timestamped ZIP backups of selected files or directories and logs basic activity.",
    technologies: ["Python", "Automation", "ZIP"],
    repository: "https://github.com/tim87tchoua/Python-backup-script-lab",
  },
  {
    slug: "linux-apache-webserver",
    title: "Linux Apache Web Server",
    summary: "A lab for installing and configuring Apache2 on a Debian-based Linux VM, with service control and localhost verification.",
    technologies: ["Linux", "Apache", "Shell"],
    repository: "https://github.com/tim87tchoua/Linux-Apache-Webserver",
  },
  {
    slug: "securityplus",
    title: "Security+ Practice",
    summary: "A Security+ practice site published from the securityplus GitHub project.",
    technologies: ["TypeScript", "React"],
    repository: "https://github.com/tim87tchoua/securityplus",
    liveUrl: "https://securityplus-omega.vercel.app",
  },
  {
    slug: "timsandtech",
    title: "Security Operations Assessment",
    summary: "A cybersecurity course project presented as a security operations assessment site.",
    technologies: ["TypeScript", "React"],
    repository: "https://github.com/tim87tchoua/TimSandTech",
    liveUrl: "https://tim-sand-tech.vercel.app",
  },
  {
    slug: "simple-mysql-php-test",
    title: "MySQL and PHP Test",
    summary: "A simple PHP script for checking Apache, MySQL, and PHP functionality in a LAMP environment.",
    technologies: ["PHP", "MySQL", "Apache", "LAMP"],
    repository: "https://github.com/tim87tchoua/simpleMYSQLPHPtest",
  },
]
