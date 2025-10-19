import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "PyPI",
    href: "https://pypi.org/project/taizun/",
    external: true,
  },
]

export const GitHubLink = {
  href: "https://github.com/t4zn/taizun",
}