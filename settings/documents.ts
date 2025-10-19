import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    heading: "Introduction",
    title: "Basic Setup",
    href: "/basic-setup",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Setup",
        href: "/setup",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Usage Guide",
    href: "/usage-guide",
    heading: "Core Concepts",
    items: [
      {
        title: "Basic Usage Patterns",
        href: "/basic-usage",
      },
      {
        title: "Working with Text Data",
        href: "/text-processing",
      },
      {
        title: "Image Processing Workflow",
        href: "/image-processing",
      },
      {
        title: "Performance Optimization",
        href: "/performance-tips",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "NLP Functions",
    href: "/nlp",
    heading: "Function Reference",
    items: [
      {
        title: "Text Summarization",
        href: "/summarize",
      },
      {
        title: "Sentiment Analysis",
        href: "/moodscan",
      },
      {
        title: "Named Entity Recognition",
        href: "/labels",
      },
      {
        title: "Remove Stopwords",
        href: "/scrub",
      },
      {
        title: "Word Frequency Analysis",
        href: "/wordcount",
      },
    ],
  },
  {
    title: "Computer Vision",
    href: "/computer-vision",
    items: [
      {
        title: "Generate Image Caption",
        href: "/imagecaption",
      },
      {
        title: "Classify Image",
        href: "/classify-image",
      },
      {
        title: "Detect Objects",
        href: "/spot",
      },
      {
        title: "Resize Image",
        href: "/resize-image",
      },
      {
        title: "Convert to Grayscale",
        href: "/grayscale",
      },
    ],
  },
  {
    title: "Maths",
    href: "/maths",
    items: [
      {
        title: "Calculator",
        href: "/calculator",
      },
      {
        title: "Even Check",
        href: "/even-check",
      },
      {
        title: "Odd Check",
        href: "/odd-check",
      },
      {
        title: "Square",
        href: "/square",
      },
      {
        title: "Cube",
        href: "/cube",
      },
      {
        title: "Factorial",
        href: "/factorial",
      },
      {
        title: "Power",
        href: "/power",
      },
      {
        title: "Min Value",
        href: "/min-value",
      },
      {
        title: "Average",
        href: "/average",
      },
      {
        title: "Factorial List",
        href: "/factorial-list",
      },
    ],
  },
  {
    title: "Strings",
    href: "/strings",
    items: [
      {
        title: "Reverse",
        href: "/reverse",
      },
      {
        title: "Greet",
        href: "/greet",
      },
      {
        title: "Capitalize",
        href: "/capitalize",
      },
      {
        title: "Lowercase",
        href: "/lowercase",
      },
      {
        title: "Uppercase",
        href: "/uppercase",
      },
      {
        title: "Concat",
        href: "/concat",
      },
      {
        title: "Strip Spaces",
        href: "/strip-spaces",
      },
      {
        title: "Split String",
        href: "/split-string",
      },
      {
        title: "Join List",
        href: "/join-list",
      },
    ],
  },
  {
    title: "Logical",
    href: "/logical",
    items: [
      {
        title: "Palindrome Check",
        href: "/palindrome-check",
      },
      {
        title: "Prime Check",
        href: "/prime-check",
      },
      {
        title: "Convert to Int",
        href: "/convert-to-int",
      },
      {
        title: "Convert to Float",
        href: "/convert-to-float",
      },
      {
        title: "Check Type",
        href: "/check-type",
      },
      {
        title: "Remove Duplicates",
        href: "/remove-duplicates",
      },
      {
        title: "Merge Lists",
        href: "/merge-lists",
      },
    ],
  },
]