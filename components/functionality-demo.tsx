"use client"

import { useState } from "react"

/**
 * ESTUDIANTE 3: DESARROLLADOR DE FUNCIONALIDADES
 *
 * RESPONSABILIDADES:
 * - Mostrar la parte dinámica del código en tiempo real
 * - Explicar cómo los objetos ejecutan métodos
 * - Demostrar herencia y polimorfismo en acción
 * - Ejecutar la aplicación en tiempo real
 *
 * SCRIPT SUGERIDO PARA EL ESTUDIANTE:
 * "Ahora vamos a EJECUTAR el código en tiempo real. Aquí hemos creado tres personajes:
 * Thorak el Guerrero, Merlin el Mago, y Elara la Arquera.
 *
 * Miren qué pasa cuando todos presionan el botón ATACAR:
 * - El Guerrero hace un ataque con escudo
 * - El Mago lanza un hechizo
 * - La Arquera dispara una flecha
 *
 * Aunque TODOS usan el método atacar(), el resultado es DIFERENTE para cada uno.
 * ¡ESO es Polimorfismo! El MISMO código produce DIFERENTES resultados según el tipo."
 */

// Simulated Character Classes for Demo
interface Character {
  id: string
  nombre: string
  tipo: "Guerrero" | "Mago" | "Arquero"
  nivel: number
  salud: number
  poder: number
  armor?: number
  mana?: number
}

interface ActionLog {
  id: string
  character: string
  action: string
  result: string
  timestamp: Date
  type: "Guerrero" | "Mago" | "Arquero"
}

const createSampleCharacters = (): Character[] => [
  {
    id: "1",
    nombre: "Thorak",
    tipo: "Guerrero",
    nivel: 5,
    salud: 150,
    poder: 20,
    armor: 50,
  },
  {
    id: "2",
    nombre: "Merlin",
    tipo: "Mago",
    nivel: 4,
    salud: 80,
    poder: 25,
    mana: 100,
  },
  {
    id: "3",
    nombre: "Elara",
    tipo: "Arquero",
    nivel: 3,
    salud: 100,
    poder: 18,
  },
]

export default function FunctionalityDemo() {
  const [characters] = useState<Character[]>(createSampleCharacters())
  const [selectedCharacter, setSelectedCharacter] = useState<string>(characters[0].id)
  const [logs, setLogs] = useState<ActionLog[]>([])

  const executeAction = (characterId: string, action: string) => {
    const character = characters.find((c) => c.id === characterId)
    if (!character) return

    let result = ""
    let method = action

    switch (action) {
      case "atacar":
        // POLIMORFISMO: El resultado depende del tipo de personaje
        if (character.tipo === "Guerrero") {
          result = `${character.nombre} hace un ataque devastador con su escudo. Daño: ${character.poder + (character.armor || 0)}!`
        } else if (character.tipo === "Mago") {
          result = `${character.nombre} lanza un hechizo mágico de fuego. Poder: ${character.poder}!`
        } else if (character.tipo === "Arquero") {
          result = `${character.nombre} dispara una flecha venenosa. Poder: ${character.poder}!`
        }
        break

      case "defenderse":
        if (character.tipo === "Guerrero") {
          result = `${character.nombre} levanta su escudo. Reduce daño en ${character.armor || 0}%.`
        } else if (character.tipo === "Mago") {
          result = `${character.nombre} crea un escudo mágico alrededor suyo.`
        } else if (character.tipo === "Arquero") {
          result = `${character.nombre} se posiciona detrás de una roca para defenderse.`
        }
        break

      case "subirNivel":
        result = `${character.nombre} sube a nivel ${character.nivel + 1}. ¡Poder aumentado!`
        method = "subirNivel()"
        break

      case "habilidad":
        if (character.tipo === "Guerrero") {
          result = `${character.nombre} usa CONTRAATAQUE y contraataca al enemigo.`
          method = "contraataque()"
        } else if (character.tipo === "Mago") {
          result = `${character.nombre} usa HECHIZO DE HIELO y congela el área.`
          method = 'lanzarHechizo("hielo")'
        } else if (character.tipo === "Arquero") {
          result = `${character.nombre} usa LLUVIA DE FLECHAS que cubre todo el cielo.`
          method = "lluvaFlechas()"
        }
        break
    }

    const newLog: ActionLog = {
      id: Date.now().toString(),
      character: character.nombre,
      action: method,
      result,
      timestamp: new Date(),
      type: character.tipo,
    }

    setLogs((prev) => [newLog, ...prev.slice(0, 9)])
  }

  const currentCharacter = characters.find((c) => c.id === selectedCharacter)!

  return (
    <div className="space-y-8">
      {/* Explanation */}
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-accent mb-4">Ejecución en Tiempo Real</h3>
        <p className="text-foreground/90 mb-4">
          Aquí vemos cómo funciona el código en la PRÁCTICA. Cada personaje hereda de la clase Personaje, pero cuando
          llamamos a un método (como <code className="bg-card px-2 py-1 rounded text-sm font-mono">atacar()</code>),
          cada tipo ejecuta su propia versión.
        </p>
        <p className="text-foreground/80 font-bold">
          <span className="text-primary">→</span> Elige un personaje y presiona los botones. Mira cómo el MISMO método
          produce DIFERENTES resultados.
        </p>
      </div>

      {/* Character Selection */}
      <div className="grid md:grid-cols-3 gap-4">
        {characters.map((character) => (
          <button
            key={character.id}
            onClick={() => setSelectedCharacter(character.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedCharacter === character.id
                ? "border-primary bg-primary/10 glow-border"
                : "border-border bg-card hover:border-primary/50"
            }`}
          >
            <div className="text-3xl mb-2">
              {character.tipo === "Guerrero" ? "⚔️" : character.tipo === "Mago" ? "🔮" : "🏹"}
            </div>
            <h4 className="font-bold text-lg">{character.nombre}</h4>
            <p className="text-sm text-muted-foreground">{character.tipo}</p>
            <p className="text-xs text-muted-foreground mt-2">
              Nivel: {character.nivel} | Poder: {character.poder}
            </p>
          </button>
        ))}
      </div>

      {/* Character Stats */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4 text-primary">Atributos de {currentCharacter.nombre}</h3>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { label: "Nivel", value: currentCharacter.nivel },
            { label: "Salud", value: currentCharacter.salud },
            { label: "Poder", value: currentCharacter.poder },
            ...(currentCharacter.armor ? [{ label: "Armadura", value: currentCharacter.armor }] : []),
            ...(currentCharacter.mana ? [{ label: "Maná", value: currentCharacter.mana }] : []),
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4 text-center border border-primary/20"
            >
              <p className="text-xs text-muted-foreground mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4 text-primary">Ejecutar Métodos</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["atacar", "defenderse", "subirNivel", "habilidad"].map((action) => (
            <button
              key={action}
              onClick={() => executeAction(selectedCharacter, action)}
              className="px-4 py-3 rounded-lg font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all pulse-scale"
            >
              {action === "atacar" && "⚔️ Atacar"}
              {action === "defenderse" && "🛡️ Defender"}
              {action === "subirNivel" && "⬆️ Subir Nivel"}
              {action === "habilidad" && "✨ Habilidad"}
            </button>
          ))}
        </div>
      </div>

      {/* Output Console */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4 text-accent">Resultados de Ejecución</h3>
        <div className="space-y-3 bg-background/50 rounded p-4 font-mono text-sm max-h-96 overflow-y-auto">
          {logs.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Presiona un botón de acción para ver los resultados...
            </p>
          ) : (
            logs.map((log) => (
              <div key={log.id} className="border-l-2 border-accent pl-3 py-2">
                <p className="text-accent font-bold">
                  {log.character}.{log.action}
                </p>
                <p className="text-foreground/80 text-xs mt-1">
                  <span className="text-primary">&gt;&gt;</span> {log.result}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Polymorphism Explanation */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-6">
        <h4 className="font-bold text-lg mb-4 text-primary">POLIMORFISMO en Acción</h4>
        <pre className="bg-card p-4 rounded text-xs overflow-x-auto text-foreground/80">
          <code>{`# Mismo método, diferente resultado según el tipo:

thorak = Guerrero("Thorak")
merlin = Mago("Merlin")
elara = Arquero("Elara")

# Todos usan atacar(), pero cada uno lo hace diferente:
thorak.atacar()   # → Ataque con escudo
merlin.atacar()   # → Hechizo mágico
elara.atacar()    # → Disparo de flecha

# Eso es POLIMORFISMO
# Mismo nombre, diferente comportamiento`}</code>
        </pre>
      </div>
    </div>
  )
}
