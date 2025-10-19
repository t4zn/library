import { Link } from "lib/transition"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"
import { LuArrowUpRight } from "react-icons/lu"

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <div className="flex items-center justify-center mb-4">
        <img src="/logo.svg" alt="Taizun Logo" className="h-12 w-12 mr-4 sm:h-16 sm:w-16" />
        <h1 className="text-4xl font-bold sm:text-7xl">Taizun</h1>
      </div>
      <p className="text-foreground mb-8 max-w-[600px] sm:text-base">
        A Python library that simplifies machine learning tasks.
      </p>

      <div className="flex flex-col items-center gap-4">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
        <Link
          href="https://pypi.org/project/taizun/"
          className={buttonVariants({ variant: "outline", className: "px-6", size: "lg" })}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit PyPI <LuArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}