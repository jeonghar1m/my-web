export default function getApiBaseUrl() {
  if (typeof window !== "undefined") return "";
  return process.env.APP_BASE_URL ?? "";
}
