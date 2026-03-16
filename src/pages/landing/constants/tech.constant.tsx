export interface TechItem {
  name: string;
  logo: React.ReactNode;
}

export const TECH_ITEMS: TechItem[] = [
  {
    name: "HTML",
    logo: (
      <svg
        fill="none"
        stroke="#E34F26" /* HTML orange */
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16l-1.5 12L12 20l-6.5-4L4 4z"></path>
        <path d="M8 8h8M8 12h8"></path>
      </svg>
    )
  },
  {
    name: "CSS",
    logo: (
      <svg
        fill="none"
        stroke="#1572B6" /* CSS blue */
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16l-1.5 12L12 20l-6.5-4L4 4z"></path>
        <path d="M8 8v8l4 2 4-2V8"></path>
      </svg>
    )
  },
  {
    name: "Mantine / Material UI", logo: (
      <svg
        fill="none"
        stroke="#007FFF" /* neutral blue for UI libraries */
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    )
  },
  {
    name: "React",
    logo: (
      <svg
        fill="none"
        stroke="#61DAFB" /* React cyan */
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    )
  },
  {
    name: "Node.js / Express",
    logo: (
      <svg
        fill="none"
        stroke="#83CD29" /* Node.js green */
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    )
  },
  {
    name: "RemixJs",
    logo: (
      <svg
        fill="none"
        stroke="#090101" /* dark for Remix */
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 48 48"
      >
        <path d="M16 8h16a8 8 0 010 16H16v16" />
        <path d="M16 24h16l8 16" />
      </svg>
    )
  },
  {
    name: "TypeScript",
    logo: (
      <svg
        fill="none"
        stroke="#3178C6" /* TypeScript blue */
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    name: "Web Scraping",
    logo: (
      <svg
        fill="none"
        stroke="#c6c331" /* TypeScript blue */
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
];