export default function (): string {
  const config = useRuntimeConfig()

  return config.public.apiUrl
}
