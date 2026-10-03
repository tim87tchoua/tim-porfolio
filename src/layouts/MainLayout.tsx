import { Box, Container } from "@chakra-ui/react"

export default function MainLayout({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <Box className={className} minH="100vh" bg="linear-gradient(180deg, #040b16 0%, #07182b 100%)" color="white">
      <Container maxW="1200px" px={{ base: 4, md: 6 }} py={{ base: 6, md: 8 }}>
        {children}
      </Container>
    </Box>
  )
}
