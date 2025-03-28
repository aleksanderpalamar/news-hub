import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NewsHub | Agregador de Notícias",
  description: "Um agregador de notícias brasileiras com as últimas manchetes"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50`}>
        <header className="bg-primary text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl text-center font-bold mb-2 md:mb-0">NewsHub</h1>
          </div>
        </header>
        {children}
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} NewsHub. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'