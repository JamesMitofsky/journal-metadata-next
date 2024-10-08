import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { DialogProvider } from "@/hooks/useDialog"
import { Toaster } from "@/components/ui/toaster"
import { DefaultSettingsDialog } from "@/components/DefaultSettingsDialog"
import Footer from "@/components/Footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <DialogProvider>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">
                  <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                    {children}
                  </section>
                </div>
                <Footer />
              </div>
              {/* <TailwindIndicator /> */}
              <Toaster />
              <DefaultSettingsDialog />
            </DialogProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
