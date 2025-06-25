"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import type { ErrorProps } from "@/interfaces/component";
import RootLayout from "@/components/layouts/root";
import { LANG } from "@/enums/global";
import Header from "./header";
import Footer from "./footer";

export default function GlobalError({ reset }: ErrorProps) {
  return (
    <RootLayout lang={LANG.EN}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main
          id="main-content"
          className="flex-1 py-4 px-4 relative overflow-hidden"
        >
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="p-8 rounded-lg shadow-lg max-w-md w-full text-center">
              <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-6" />
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We&apos;re sorry, but an unexpected error occurred. Our team has
                been notified and we&apos;re working to fix it.
              </p>
              <div className="space-y-4">
                <Button onClick={reset} className="w-full">
                  Try again
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/">Return to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer lang={LANG.EN} />
      </div>
    </RootLayout>
  );
}
