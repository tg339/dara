import React from "react";
import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"; // nextra-theme-blog or your custom theme

// Get the default MDX components
const themeComponents = getThemeComponents();

// Define custom components using shadcn/ui typography styles
const H1 = ({ children, ...props }) => (
  <h1
    className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl first:mt-10 mt-5"
    {...props}
  >
    {children}
  </h1>
);

const H2 = ({ children, ...props }) => (
  <h2
    className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
    {...props}
  >
    {children}
  </h2>
);

const H3 = ({ children, ...props }) => (
  <h3
    className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
    {...props}
  >
    {children}
  </h3>
);

const H4 = ({ children, ...props }) => (
  <h4
    className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
    {...props}
  >
    {children}
  </h4>
);

const P = ({ children, ...props }) => (
  <p className="leading-7 [&:not(:first-child)]:mt-5" {...props}>
    {children}
  </p>
);

const Blockquote = ({ children, ...props }) => (
  <blockquote className="mt-5 border-l-2 pl-5 italic" {...props}>
    {children}
  </blockquote>
);

const Table = ({ children, ...props }) => (
  <div className="my-5 w-full overflow-y-auto">
    <table className="w-full" {...props}>
      {children}
    </table>
  </div>
);

// Note: shadcn/ui table styles are applied to `th` and `td` within the table structure.
// We'll assume standard markdown rendering handles `thead`, `tbody`, `tr`, `th`, `td`.
// If more specific styling is needed, those components would need overriding too.

const Ul = ({ children, ...props }) => (
  <ul className="my-5 ml-5 list-disc [&>li]:mt-2" {...props}>
    {children}
  </ul>
);

// Assuming standard `li` tags are used within `ul` or `ol`
const Li = ({ children, ...props }) => <li {...props}>{children}</li>;

const Code = ({ children, ...props }) => (
  <code
    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
    {...props}
  >
    {children}
  </code>
);

// Component for 'Lead' style paragraph
const Lead = ({ children, ...props }) => (
  <p className="text-xl text-muted-foreground" {...props}>
    {children}
  </p>
);

// Component for 'Large' style text
const Large = ({ children, ...props }) => (
  <div className="text-lg font-semibold" {...props}>
    {children}
  </div>
);

// Component for 'Small' style text
const Small = ({ children, ...props }) => (
  <small className="text-sm font-medium leading-none" {...props}>
    {children}
  </small>
);

// Component for 'Muted' style text
const Muted = ({ children, ...props }) => (
  <p className="text-sm text-muted-foreground" {...props}>
    {children}
  </p>
);

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    // Override default components with shadcn/ui styled ones
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    p: P,
    blockquote: Blockquote,
    table: Table,
    ul: Ul,
    li: Li, // Assuming standard li rendering is okay, otherwise style here
    code: Code, // Overrides inline code
    // Add custom components if needed, e.g., for Lead, Large, Small, Muted
    Lead,
    Large,
    Small,
    Muted,
    ...components,
  };
}
