import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container mx-auto px-4 text-center  dark:text-gray-200 text-gray-950">
          <p>Made with 💗 by saud</p>
        </div>
      </footer>

      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}
