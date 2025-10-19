import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Features",
    href: "/docs/nlp", // Link to the first feature section
  },
]

export const GitHubLink = {
  href: "https://github.com/t4zn/taizun",
}