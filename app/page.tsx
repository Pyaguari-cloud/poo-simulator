"use client"

import { useState } from "react"
import PresentationHeader from "@/components/presentation-header"
import ClassExplanation from "@/components/class-explanation"
import FunctionalityDemo from "@/components/functionality-demo"
import InteractiveCreator from "@/components/interactive-creator"
import PublicQuiz from "@/components/public-quiz"

/**
 * MAIN PAGE - POO Simulator Application
 *
 * This is the orchestrator component that manages the flow of the presentation.
 * Each section below represents one role from the group of 4 students.
 *
 * Structure:
 * 1. Presentation Header (Estudiante 1 - Presentador)
 * 2. Class Explanation (Estudiante 2 - Programador de Clases)
 * 3. Functionality Demo (Estudiante 3 - Desarrollador de Funcionalidades)
 * 4. Interactive Creator (Estudiante 4 - Interactor con el Público)
 * 5. Public Quiz (Engagement)
 */

export default function Page() {
  const [activeSection, setActiveSection] = useState<"intro" | "classes" | "demo" | "interactive" | "quiz">("intro")
  const [createdCharacters, setCreatedCharacters] = useState<any[]>([])

  const handleCharacterCreated = (character: any) => {
    setCreatedCharacters([...createdCharacters, character])
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation between sections */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-2 overflow-x-auto">
          {[
            { id: "intro", label: "Introducción" },
            { id: "classes", label: "Clases" },
            { id: "demo", label: "Demo" },
            { id: "interactive", label: "Crear Personaje" },
            { id: "quiz", label: "Preguntas" },
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeSection === section.id
                  ? "bg-primary text-primary-foreground glow-border"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main content sections */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeSection === "intro" && <PresentationHeader />}
        {activeSection === "classes" && <ClassExplanation />}
        {activeSection === "demo" && <FunctionalityDemo />}
        {activeSection === "interactive" && (
          <InteractiveCreator onCharacterCreated={handleCharacterCreated} createdCharacters={createdCharacters} />
        )}
        {activeSection === "quiz" && <PublicQuiz />}
      </div>
    </main>
  )
}
