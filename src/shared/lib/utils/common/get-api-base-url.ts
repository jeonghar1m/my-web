export default function getApiBaseUrl() {
  if (typeof window !== "undefined") return "";
  return `http://${process.env.APP_BASE_URL ?? "localhost:3000"}`;
}
