import type React from "react"
import type { Metadata } from "next"
// CORRECCIÓN: Importamos 'Inter' desde 'next/font/google'
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// CORRECCIÓN: Definimos 'Inter'
const inter = Inter({ subsets: ["latin"] })

// Las fuentes 'Geist' fueron eliminadas porque causaban el error de compilación
// const _geist = Geist({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "El Simulador de Objetos - POO en Acción",
  description: "Demostración interactiva de Programación Orientada a Objetos",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      {/* CORRECCIÓN: Aplicamos la clase de la fuente 'inter' al body */}
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}