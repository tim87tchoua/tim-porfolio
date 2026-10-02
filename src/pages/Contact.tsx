import { useState, type FormEvent } from "react"
import {
  Box,
  Button,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react"
import MainLayout from "../layouts/MainLayout"

type FormSubmitResponse = {
  success?: boolean | string
  message?: string
}

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setSubmitting(true)
    setStatus(null)

    try {
      const formData = new FormData(form)
      const response = await fetch("https://formsubmit.co/ajax/tim.25tchoua@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      })
      const result = (await response.json()) as FormSubmitResponse

      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error(result.message || "Your message could not be sent. Please try again.")
      }

      form.reset()
      setStatus({ type: "success", message: "Thanks for reaching out. Your message has been sent." })
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Your message could not be sent. Please try again.",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <MainLayout>
      <Box as="header" mb={{ base: 10, md: 16 }}>
        <Link href="/" color="cyan.300" fontSize="sm" _hover={{ color: "white" }}>
          ← Back to portfolio
        </Link>
      </Box>

      <Box maxW="680px" mx="auto" py={{ base: 4, md: 10 }}>
        <Text fontSize="sm" letterSpacing="0.18em" textTransform="uppercase" color="cyan.300">
          Contact
        </Text>
        <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} mt={4} color="white">
          Send me a message
        </Heading>
        <Text color="gray.300" mt={4} mb={8}>
          Share a few details about your company and what you’d like to discuss. I’ll get back to you as soon as I can.
        </Text>

        <Box
          bg="whiteAlpha.100"
          border="1px solid"
          borderColor="whiteAlpha.200"
          borderRadius="2xl"
          p={{ base: 5, md: 8 }}
        >
          <form onSubmit={handleSubmit}>
            <Stack gap={5}>
            <Box>
              <label htmlFor="name" style={{ display: "block", marginBottom: "8px", color: "#f3f4f6" }}>
                Your name
              </label>
              <Input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Jane Smith"
                bg="blackAlpha.300"
                borderColor="whiteAlpha.300"
                _placeholder={{ color: "gray.500" }}
              />
            </Box>

            <Box>
              <label htmlFor="email" style={{ display: "block", marginBottom: "8px", color: "#f3f4f6" }}>
                Work email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@company.com"
                bg="blackAlpha.300"
                borderColor="whiteAlpha.300"
                _placeholder={{ color: "gray.500" }}
              />
            </Box>

            <Box>
              <label htmlFor="company" style={{ display: "block", marginBottom: "8px", color: "#f3f4f6" }}>
                Company <span style={{ color: "#9ca3af" }}>(optional)</span>
              </label>
              <Input
                id="company"
                name="company"
                autoComplete="organization"
                placeholder="Company name"
                bg="blackAlpha.300"
                borderColor="whiteAlpha.300"
                _placeholder={{ color: "gray.500" }}
              />
            </Box>

            <Box>
              <label htmlFor="message" style={{ display: "block", marginBottom: "8px", color: "#f3f4f6" }}>
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={6}
                placeholder="How can I help?"
                bg="blackAlpha.300"
                borderColor="whiteAlpha.300"
                _placeholder={{ color: "gray.500" }}
              />
            </Box>

            <input type="hidden" name="_subject" value="New portfolio contact message" />

            {status && (
              <Text role="status" aria-live="polite" color={status.type === "success" ? "green.300" : "red.300"}>
                {status.message}
              </Text>
            )}

            <Button type="submit" colorScheme="cyan" size="lg" loading={submitting} loadingText="Sending message">
              Send message
            </Button>
            </Stack>
          </form>
        </Box>

      </Box>
    </MainLayout>
  )
}
