"use client"

import { useState } from "react"

/**
 * ESTUDIANTE 2: PROGRAMADOR DE CLASES
 *
 * RESPONSABILIDADES:
 * - Explicar la estructura del código y mostrar visualmente la definición de una clase
 * - Señalar los elementos principales: atributos, métodos y constructores
 * - Destacar la relación entre la clase y los objetos creados
 *
 * SCRIPT SUGERIDO PARA EL ESTUDIANTE:
 * "Aquí vemos la definición de una CLASE. Piensen en una clase como un molde o un plano.
 * Una clase define:
 * - QUÉ atributos (propiedades) tendrán los objetos
 * - QUÉ métodos (funciones) podrán ejecutar
 *
 * El CONSTRUCTOR es la función especial que se ejecuta cuando creamos un objeto,
 * y se encarga de inicializar todas esas propiedades con los valores que le pasamos."
 */

interface CodeSection {
  id: string
  title: string
  description: string
  code: string
  explanation: string
  keywords: string[]
}

const codeSections: CodeSection[] = [
  {
    id: "class-definition",
    title: "La Clase Base: Personaje",
    description: "Así se ve una clase en Python. Es como un molde para crear personajes.",
    code: `# Definimos una CLASE llamada Personaje
# Una clase es como un molde o plantilla

class Personaje:
    # El CONSTRUCTOR (__init__) se ejecuta cuando creamos un objeto
    def __init__(self, nombre, tipo):
        # ATRIBUTOS: son las características del personaje
        self.nombre = nombre      # Nombre del personaje
        self.tipo = tipo          # Tipo: Guerrero, Mago, etc
        self.nivel = 1            # Comienza en nivel 1
        self.salud = 100          # Salud inicial
        self.poder = 10           # Poder inicial
    
    # MÉTODOS: son las acciones que puede hacer el personaje
    def atacar(self):
        return f"{self.nombre} ataca con poder {self.poder}!"
    
    def defenderse(self):
        return f"{self.nombre} se defiende!"
    
    def subirNivel(self):
        self.nivel += 1
        self.poder += 5
        self.salud += 20
        return f"{self.nombre} subió a nivel {self.nivel}!"`,
    explanation:
      "En Python, definimos una clase con la palabra 'class'. El constructor __init__ se ejecuta automáticamente cuando creamos un nuevo objeto. Los ATRIBUTOS guardan información, y los MÉTODOS son las acciones.",
    keywords: ["class", "__init__", "self", "atributos", "métodos", "constructor"],
  },
  {
    id: "inheritance",
    title: "Herencia: La Clase Guerrero",
    description: "Una subclase que hereda de Personaje y agrega características especiales.",
    code: `# HERENCIA: Guerrero es un tipo especial de Personaje
# 'class Guerrero(Personaje):' significa que Guerrero HEREDA de Personaje

class Guerrero(Personaje):
    # El constructor del Guerrero
    def __init__(self, nombre):
        # super().__init__() llama al constructor de la clase padre
        super().__init__(nombre, 'Guerrero')
        
        # NUEVO ATRIBUTO específico del Guerrero
        self.armor = 50       # Los Guerreros tienen armadura
        self.poder = 15       # Más fuerte que un personaje normal
    
    # MÉTODO SOBRESCRITO (Polimorfismo)
    # Este método atacar() es DIFERENTE al de Personaje
    def atacar(self):
        daño_total = self.poder + self.armor
        return f"{self.nombre} hace un ataque devastador. Poder total: {daño_total}!"
    
    # MÉTODO NUEVO
    def contraataque(self):
        return f"¡{self.nombre} contraataca con su armadura!"`,
    explanation:
      "Herencia significa que Guerrero HEREDA todos los atributos y métodos de Personaje, pero puede tener los suyos propios y puede cambiar métodos (Polimorfismo).",
    keywords: ["herencia", "extends", "super()", "sobrescrito", "polimorfismo"],
  },
  {
    id: "mage-class",
    title: "Herencia: La Clase Mago",
    description: "Otro ejemplo de herencia con características completamente diferentes.",
    code: `# Otro ejemplo de HERENCIA

class Mago(Personaje):
    def __init__(self, nombre):
        super().__init__(nombre, 'Mago')
        
        # Los Magos tienen MANÁ en lugar de Armadura
        self.mana = 100
        self.poder = 20    # Los Magos tienen más poder
    
    # Método SOBRESCRITO
    def atacar(self):
        return f"{self.nombre} lanza un hechizo mágico. Poder: {self.poder}!"
    
    # Método NUEVO (específico de Magos)
    def lanzarHechizo(self, tipo):
        if self.mana >= 30:
            self.mana -= 30
            return f"{self.nombre} lanza {tipo}. Maná restante: {self.mana}"
        else:
            return "Sin maná disponible"`,
    explanation:
      "Aunque Mago también hereda de Personaje, su implementación es completamente diferente. El atacar() del Mago es distinto al del Guerrero. ¡Eso es Polimorfismo!",
    keywords: ["herencia", "mana", "atacar()", "lanzarHechizo()", "polimorfismo"],
  },
]

export default function ClassExplanation() {
  const [selectedSection, setSelectedSection] = useState<string>("class-definition")
  const current = codeSections.find((s) => s.id === selectedSection)!

  return (
    <div className="space-y-8">
      {/* Section Selector */}
      <div className="flex gap-3 flex-wrap">
        {codeSections.map((section) => (
          <button
            key={section.id}
            onClick={() => setSelectedSection(section.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedSection === section.id
                ? "bg-primary text-primary-foreground glow-border"
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            {section.title.split(":")[0]}
          </button>
        ))}
      </div>

      {/* Code Display */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 px-6 py-4 border-b border-border">
          <h3 className="font-bold text-lg text-foreground">{current.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{current.description}</p>
        </div>

        <pre className="p-6 overflow-x-auto text-sm font-mono bg-card">
          <code className="text-foreground/90">{current.code}</code>
        </pre>
      </div>

      {/* Explanation Box */}
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 rounded-lg p-6">
        <h4 className="font-bold text-lg text-accent mb-3">Entendiendo este código</h4>
        <p className="text-foreground/90 mb-4">{current.explanation}</p>
        <div className="flex flex-wrap gap-2">
          {current.keywords.map((keyword, idx) => (
            <span key={idx} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-mono">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Key Concepts Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="font-bold text-primary mb-4 text-lg">📚 Conceptos Fundamentales</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>
                <strong>CLASE:</strong> Un molde o plano para crear objetos. Define qué atributos y métodos tendrán.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>
                <strong>ATRIBUTOS:</strong> Las características o propiedades de un objeto (nombre, salud, poder).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>
                <strong>CONSTRUCTOR:</strong> Se ejecuta automáticamente cuando creo un objeto. Inicializa todo.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>
                <strong>MÉTODOS:</strong> Las acciones que puede hacer un objeto (atacar, defenderse, subirNivel).
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="font-bold text-accent mb-4 text-lg">🔗 Herencia y Polimorfismo</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <span className="text-accent font-bold">•</span>
              <span>
                <strong>HERENCIA:</strong> Una subclase hereda atributos y métodos de una clase padre.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold">•</span>
              <span>
                <strong>class X(Y):</strong> "X hereda de Y". X obtiene todo lo que Y tiene.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold">•</span>
              <span>
                <strong>POLIMORFISMO:</strong> Métodos pueden funcionar diferente en cada subclase.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-bold">•</span>
              <span>
                <strong>super():</strong> Llama a la clase padre. Útil para usar su constructor.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Visual Example */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-8">
        <h4 className="font-bold text-lg mb-6 text-primary">📊 Estructura Jerárquica</h4>
        <div className="space-y-4">
          <div className="bg-card border-2 border-primary rounded-lg p-4 text-center font-bold">
            Personaje (Clase Base)
          </div>
          <div className="flex justify-center text-2xl text-primary">↓</div>
          <div className="grid md:grid-cols-3 gap-4">
            {["Guerrero", "Mago", "Arquero"].map((type) => (
              <div key={type} className="bg-card border-2 border-accent rounded-lg p-4 text-center font-bold">
                {type} (Subclase)
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">
            Guerrero, Mago y Arquero heredan de Personaje. Comparten atacar(), defenderse(), subirNivel(). Pero cada uno
            implementa atacar() de forma DIFERENTE.
          </p>
        </div>
      </div>
    </div>
  )
}
