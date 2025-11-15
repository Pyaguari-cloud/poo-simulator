"use client"

import type React from "react"
import { useState, useEffect } from "react"

/**
 * ESTUDIANTE 4: INTERACTOR CON EL PÚBLICO
 *
 * RESPONSABILIDADES:
 * - Invitar a los visitantes a crear objetos mediante la interfaz
 * - Explicar cómo se instancian clases en Python
 * - Mostrar el código que se ejecutó en el fondo
 * - Interpretar acciones del visitante y relacionarlas con código
 * - MOSTRAR LOS MÉTODOS DISPONIBLES Y PERMITIR EJECUTARLOS
 */

interface CreatedCharacter {
  id: string
  nombre: string
  tipo: "Guerrero" | "Mago" | "Arquero" | "Paladín"
  nivel: number
  salud: number
  poder: number
  createdAt: Date
  executedCode: string
}

interface FormData {
  nombre: string
  tipo: "Guerrero" | "Mago" | "Arquero" | "Paladín"
}

interface MethodResult {
  id: string
  method: string
  result: string
}

export default function InteractiveCreator({
  onCharacterCreated,
  createdCharacters,
}: {
  onCharacterCreated: (char: any) => void
  createdCharacters: CreatedCharacter[]
}) {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    tipo: "Guerrero",
  })
  const [lastCreatedCode, setLastCreatedCode] = useState<string>("")
  const [showCode, setShowCode] = useState(false)
  const [previewStats, setPreviewStats] = useState<any | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [creationComplete, setCreationComplete] = useState(false)
  const [lastCreatedCharacter, setLastCreatedCharacter] = useState<CreatedCharacter | null>(null)
  const [methodResults, setMethodResults] = useState<MethodResult[]>([])

  const getTypeEmoji = (type: string) => {
    switch (type) {
      case "Guerrero":
        return "⚔️"
      case "Mago":
        return "🔮"
      case "Arquero":
        return "🏹"
      case "Paladín":
        return "🛡️"
      default:
        return "🎮"
    }
  }

  const getTypeStats = (type: string) => {
    const stats: Record<string, { salud: number; poder: number; special: string }> = {
      Guerrero: { salud: 150, poder: 20, special: "armor: 50" },
      Mago: { salud: 80, poder: 25, special: "mana: 100" },
      Arquero: { salud: 100, poder: 18, special: "precision: 85" },
      Paladín: { salud: 120, poder: 22, special: "fe: 75" },
    }
    return stats[type]
  }

  const getAvailableMethods = (tipo: string) => {
    const methods: Record<string, Array<{ name: string; description: string; icon: string }>> = {
      Guerrero: [
        { name: "atacar", description: "Ataca con espada", icon: "⚔️" },
        { name: "contraataque", description: "Realiza un contraataque", icon: "🔄" },
        { name: "levantar_escudo", description: "Levanta el escudo (+50 defensa)", icon: "🛡️" },
        { name: "grito_batalla", description: "Lanza un grito de batalla", icon: "📢" },
      ],
      Mago: [
        { name: "lanzar_hechizo", description: "Lanza un hechizo de fuego", icon: "🔥" },
        { name: "teleportarse", description: "Se teletransporta a otro lugar", icon: "✨" },
        { name: "escudo_magico", description: "Crea un escudo mágico", icon: "🔮" },
        { name: "tormenta", description: "Invoca una tormenta mágica", icon: "⛈️" },
      ],
      Arquero: [
        { name: "disparar", description: "Dispara una flecha precisa", icon: "🏹" },
        { name: "lluvia_flechas", description: "Cubre el área de flechas", icon: "🌧️" },
        { name: "punteria_mortal", description: "Intenta un disparo mortal", icon: "💀" },
        { name: "recargar", description: "Recarga las flechas", icon: "📦" },
      ],
      Paladín: [
        { name: "ataque_sagrado", description: "Realiza un ataque sagrado", icon: "⚡" },
        { name: "bendicion", description: "Bendice a los aliados", icon: "😇" },
        { name: "escudo_divino", description: "Invoca un escudo divino", icon: "✨" },
        { name: "sanacion", description: "Cura a los aliados cercanos", icon: "💚" },
      ],
    }
    return methods[tipo] || []
  }

  useEffect(() => {
    setPreviewStats(getTypeStats(formData.tipo))
  }, [formData.tipo])

  const handleCreateCharacter = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.nombre.trim()) {
      alert("Por favor ingresa un nombre")
      return
    }

    setIsCreating(true)
    setCreationComplete(false)
    setMethodResults([])

    setTimeout(() => {
      const stats = getTypeStats(formData.tipo)
      const newCharacter: CreatedCharacter = {
        id: Date.now().toString(),
        nombre: formData.nombre,
        tipo: formData.tipo as any,
        nivel: 1,
        salud: stats.salud,
        poder: stats.poder,
        createdAt: new Date(),
        executedCode: generateCodeSnippet(formData.nombre, formData.tipo, stats),
      }

      setLastCreatedCode(newCharacter.executedCode)
      setShowCode(true)
      setLastCreatedCharacter(newCharacter)
      onCharacterCreated(newCharacter)

      setCreationComplete(true)
      setTimeout(() => {
        setIsCreating(false)
        setFormData({ nombre: "", tipo: "Guerrero" })
      }, 1500)
    }, 600)
  }

  const executeMethod = (methodName: string) => {
    if (!lastCreatedCharacter) return

    const methods: Record<string, string> = {
      atacar: `${lastCreatedCharacter.nombre} ataca con toda su fuerza. Daño: ${lastCreatedCharacter.poder}!`,
      contraataque: `${lastCreatedCharacter.nombre} realiza un contraataque inesperado.`,
      levantar_escudo: `${lastCreatedCharacter.nombre} levanta su escudo defensivo. +50 defensa temporal.`,
      grito_batalla: `${lastCreatedCharacter.nombre} suelta un grito de batalla. ¡Los aliados se sienten fortalecidos!`,
      lanzar_hechizo: `${lastCreatedCharacter.nombre} lanza un hechizo de fuego. Daño: ${lastCreatedCharacter.poder + 5}!`,
      teleportarse: `${lastCreatedCharacter.nombre} desaparece en una nube de humo mágico y reaparece en otro lugar.`,
      escudo_magico: `${lastCreatedCharacter.nombre} crea un escudo mágico protector.`,
      tormenta: `${lastCreatedCharacter.nombre} invoca una tormenta mágica. ¡Daño masivo!`,
      disparar: `${lastCreatedCharacter.nombre} apunta cuidadosamente y dispara una flecha precisa. Daño: ${lastCreatedCharacter.poder}!`,
      lluvia_flechas: `${lastCreatedCharacter.nombre} dispara múltiples flechas al cielo, cubriendo el área.`,
      punteria_mortal: `${lastCreatedCharacter.nombre} intenta un disparo mortal. ¡Daño crítico!`,
      recargar: `${lastCreatedCharacter.nombre} recarga sus flechas rápidamente. +20 munición.`,
      ataque_sagrado: `${lastCreatedCharacter.nombre} realiza un ataque sagrado. ¡Daño: ${lastCreatedCharacter.poder + 10}!`,
      bendicion: `${lastCreatedCharacter.nombre} bendice a los aliados cercanos.`,
      escudo_divino: `${lastCreatedCharacter.nombre} invoca un escudo divino protector.`,
      sanacion: `${lastCreatedCharacter.nombre} cura a los aliados. +30 HP restaurado.`,
    }

    const result: MethodResult = {
      id: Date.now().toString(),
      method: methodName,
      result: methods[methodName] || "Método desconocido",
    }

    setMethodResults((prev) => [result, ...prev.slice(0, 4)])
  }

  return (
    <div className="space-y-8">
      {/* Explanation */}
      <div className="bg-gradient-to-r from-accent-secondary/10 to-accent/10 border border-accent-secondary/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-accent-secondary mb-4">Tu Turno: Crea Tu Propio Personaje</h3>
        <p className="text-foreground/90 mb-3">
          Aquí vamos a hacer INSTANCIACIÓN de clases. Eso significa que vamos a usar una clase como molde para crear un
          OBJETO real.
        </p>
        <p className="text-foreground/80">
          Cuando presionas "Crear Personaje", el <strong>CONSTRUCTOR</strong> de la clase se ejecuta automáticamente,
          inicializa todos los atributos con tus valores, y se crea un nuevo objeto.
        </p>
      </div>

      {/* Creation Form */}
      <form onSubmit={handleCreateCharacter} className="bg-card border border-border rounded-lg p-6 space-y-6">
        <div className="space-y-2">
          <label className="block font-bold text-foreground">
            Nombre del Personaje
            <span className="text-muted-foreground text-sm ml-2">
              ({formData.nombre.length}/20)
            </span>
          </label>
          <input
            type="text"
            maxLength={20}
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            placeholder="Ej: Conan, Gandalf, Legolas"
            className="w-full px-4 py-3 rounded-lg bg-input border-2 border-border text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          />
          {formData.nombre && (
            <p className="text-sm text-accent font-medium animate-pulse">
              Nombre confirmado: <strong>{formData.nombre}</strong>
            </p>
          )}
        </div>

        <div className="space-y-3">
          <label className="block font-bold text-foreground">Tipo de Personaje</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {(["Guerrero", "Mago", "Arquero", "Paladín"] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, tipo: type })}
                className={`p-4 rounded-lg border-2 transition-all text-center transform hover:scale-105 ${
                  formData.tipo === type
                    ? "border-primary bg-primary/15 shadow-lg scale-105"
                    : "border-border bg-background hover:border-primary/50"
                }`}
              >
                <div className="text-3xl mb-2">{getTypeEmoji(type)}</div>
                <p className="text-sm font-bold text-foreground">{type}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {type === "Guerrero" && "Resistente"}
                  {type === "Mago" && "Poderoso"}
                  {type === "Arquero" && "Preciso"}
                  {type === "Paladín" && "Equilibrado"}
                </p>
              </button>
            ))}
          </div>
        </div>

        {previewStats && (
          <div className="bg-gradient-to-br from-background/50 to-primary/5 rounded-lg p-6 border-2 border-primary/30 animate-fade-in">
            <p className="text-sm text-foreground font-bold mb-4">Estadísticas del Tipo Seleccionado ({formData.tipo}):</p>
            <div className="space-y-4">
              {/* Salud */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xs text-muted-foreground font-bold">SALUD</p>
                  <p className="text-lg font-bold text-primary">{previewStats.salud} HP</p>
                </div>
                <div className="w-full bg-background rounded-full h-3 overflow-hidden border border-primary/20">
                  <div
                    className="bg-gradient-to-r from-red-400 to-red-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(previewStats.salud / 150) * 100}%` }}
                  />
                </div>
              </div>

              {/* Poder */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xs text-muted-foreground font-bold">PODER</p>
                  <p className="text-lg font-bold text-accent">{previewStats.poder}</p>
                </div>
                <div className="w-full bg-background rounded-full h-3 overflow-hidden border border-accent/20">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(previewStats.poder / 25) * 100}%` }}
                  />
                </div>
              </div>

              {/* Special Stat */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xs text-muted-foreground font-bold">{previewStats.special.split(":")[0].toUpperCase()}</p>
                  <p className="text-lg font-bold text-accent-secondary">{previewStats.special.split(":")[1]}</p>
                </div>
                <div className="w-full bg-background rounded-full h-3 overflow-hidden border border-accent-secondary/20">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-purple-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(parseInt(previewStats.special.split(":")[1]) / 100) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isCreating}
          className="w-full py-4 rounded-lg font-bold bg-gradient-to-r from-accent to-accent-secondary text-primary-foreground hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed text-lg"
        >
          {isCreating ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">⚡</span>
              Creando personaje...
            </span>
          ) : (
            "✨ Crear Personaje (Instanciar Clase)"
          )}
        </button>

        {creationComplete && (
          <div className="bg-green-50 dark:bg-green-950 border-2 border-green-500 rounded-lg p-4 text-center animate-bounce">
            <p className="font-bold text-green-900 dark:text-green-100">
              ✓ ¡Personaje creado exitosamente!
            </p>
          </div>
        )}
      </form>

      {/* Show executed code */}
      {showCode && lastCreatedCode && (
        <div className="bg-card border-2 border-accent rounded-lg p-6 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg text-accent">Código Python que se ejecutó:</h4>
            <button onClick={() => setShowCode(false)} className="text-muted-foreground hover:text-foreground">
              ✕
            </button>
          </div>
          <pre className="bg-background p-4 rounded text-xs overflow-x-auto border border-border">
            <code className="text-foreground/80 font-mono">{lastCreatedCode}</code>
          </pre>
          <p className="text-sm text-muted-foreground">
            👆 <strong>Este es el código que se ejecutó en Python cuando presionaste el botón.</strong> El constructor
            (__init__) se llamó automáticamente y creó un nuevo objeto.
          </p>
        </div>
      )}

      {lastCreatedCharacter && (
        <div className="bg-card border-2 border-accent-secondary rounded-lg p-6 space-y-4 animate-fade-in">
          <h4 className="font-bold text-lg text-accent-secondary">
            Métodos Disponibles de {lastCreatedCharacter.nombre}
          </h4>
          <p className="text-sm text-muted-foreground">
            Estos son las ACCIONES que {lastCreatedCharacter.nombre} ({lastCreatedCharacter.tipo}) puede realizar. 
            Cada método es código que ejecuta una acción diferente.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {getAvailableMethods(lastCreatedCharacter.tipo).map((method) => (
              <button
                key={method.name}
                onClick={() => executeMethod(method.name)}
                className="px-3 py-2 rounded-lg bg-gradient-to-r from-accent-secondary to-accent text-primary-foreground hover:shadow-lg transition-all text-sm font-medium hover:scale-105"
                title={method.description}
              >
                <div className="text-xl mb-1">{method.icon}</div>
                <div className="text-xs">{method.name.replace(/_/g, " ")}</div>
              </button>
            ))}
          </div>

          {methodResults.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground font-bold mb-3">Resultados de Ejecución:</p>
              <div className="space-y-2 bg-background/50 rounded p-3 max-h-32 overflow-y-auto">
                {methodResults.map((result) => (
                  <div key={result.id} className="border-l-2 border-accent-secondary pl-3 py-1">
                    <p className="text-accent-secondary font-mono text-xs">
                      {lastCreatedCharacter.nombre}.{result.method}()
                    </p>
                    <p className="text-foreground/80 text-xs mt-1">
                      <span className="text-accent-secondary">&gt;&gt;</span> {result.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Created Characters List */}
      {createdCharacters.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-foreground">
            Personajes Creados por el Público ({createdCharacters.length})
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {createdCharacters.map((char, idx) => (
              <div
                key={char.id}
                className="bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-4xl mb-1">{getTypeEmoji(char.tipo)}</div>
                    <h4 className="font-bold text-lg">{char.nombre}</h4>
                    <p className="text-xs text-muted-foreground">{char.tipo}</p>
                  </div>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-bold">Nivel {char.nivel}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-background/50 rounded p-2 text-center border border-border/50">
                    <p className="text-muted-foreground">Salud</p>
                    <p className="font-bold text-foreground text-sm">{char.salud}</p>
                  </div>
                  <div className="bg-background/50 rounded p-2 text-center border border-border/50">
                    <p className="text-muted-foreground">Poder</p>
                    <p className="font-bold text-foreground text-sm">{char.poder}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function generateCodeSnippet(nombre: string, tipo: string, stats: any): string {
  return `# ========== INSTANCIACIÓN DE CLASE ==========
# El visitante presionó "Crear Personaje"
# Esto ejecutó el siguiente código en Python:

${nombre.toLowerCase()} = ${tipo}("${nombre}")

# El constructor __init__ de ${tipo} se ejecutó automáticamente:
# - self.nombre = "${nombre}"
# - self.tipo = "${tipo}"
# - self.salud = ${stats.salud}
# - self.poder = ${stats.poder}
# - self.nivel = 1

# Ahora ${nombre.toLowerCase()} es un OBJETO de la clase ${tipo}
# Se pueden llamar sus métodos:
${nombre.toLowerCase()}.atacar()
${nombre.toLowerCase()}.defenderse()
${nombre.toLowerCase()}.subirNivel()
${nombre.toLowerCase()}.habilidad()

# ¡ESTO ES POO EN ACCIÓN!`
}
