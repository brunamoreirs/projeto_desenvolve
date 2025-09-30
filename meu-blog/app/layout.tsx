import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Providers } from "@/app/providers";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog da Bruna",
  description: "Um blog pessoal criado em Next.js com tema claro/escuro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[var(--background)] text-[var(--foreground)] transition-colors`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col transition-colors">
            {/* Header com Navegação */}
            <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-md">
              <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  {/* Logo */}
                  <div className="flex items-center">
                    <Link
                      href="/"
                      className="text-2xl font-extrabold text-white hover:text-yellow-300 transition-colors"
                    >
                      Blog da Bruna
                    </Link>
                  </div>

                  {/* Links + ThemeToggle */}
                  <div className="flex space-x-6 items-center">
                    <Link
                      href="/"
                      className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Início
                    </Link>
                    <Link
                      href="/about"
                      className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Sobre
                    </Link>
                    <ThemeToggle />
                  </div>
                </div>
              </nav>
            </header>

            {/* Conteúdo Principal */}
            <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-colors">
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-black border-t dark:border-gray-700 mt-16 transition-colors">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="text-center text-white dark:text-gray-300">
                  <p>&copy; 2025 Blog da Bruna. Criado com Next.js & Tailwind.</p>
                  <p>Programa Desenvolve - Grupo Boticário & Koru</p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
