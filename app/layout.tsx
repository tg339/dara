import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./global.css";
import React from "react";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = <Banner storageKey="some-key">I'd love feedback</Banner>;
const navbar = (
  <Navbar
    logo={<span>DAORA</span>}
    // ... Your additional navbar options
  />
);
const footer = (
  <Footer className="bg-background max-w-none justify-center">
    <div className="max-w-(--nextra-content-width) w-full pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)">
      MIT {new Date().getFullYear()} © DAORA.
    </div>
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body className="bg-background">
        <Layout
          darkMode
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
