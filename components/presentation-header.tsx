"use client"

/**
 * ESTUDIANTE 1: PRESENTADOR / COORDINADOR TÉCNICO
 *
 * RESPONSABILIDADES:
 * - Dar la bienvenida a los visitantes
 * - Explicar qué es la Programación Orientada a Objetos (POO)
 * - Describir por qué es importante
 * - Introducir el objetivo general de la demostración
 *
 * SCRIPT SUGERIDO PARA EL ESTUDIANTE:
 * "Bienvenidos al stand 'El Simulador de Objetos'. Hoy les mostraremos cómo funciona
 * la Programación Orientada a Objetos (POO).
 *
 * Piensen en la POO como una forma de ORGANIZAR el código. En lugar de tener
 * variables y funciones sueltas por todos lados, agrupamos todo en CLASES.
 * Una clase es como un molde que nos permite crear OBJETOS.
 *
 * Imaginen que quieren crear un videojuego. Tienen muchos personajes: guerreros,
 * magos, arqueros. En lugar de escribir el código para cada uno por separado,
 * hacemos UNA clase Personaje, y luego creamos Guerrero, Mago, Arquero que
 * heredan de Personaje. ¡Eso es reutilización de código!
 *
 * La POO hace el código más organizado, más fácil de mantener, y más fácil de
 * expandir cuando queremos agregar nuevas cosas."
 */

export default function PresentationHeader() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-accent-secondary bg-clip-text text-transparent">
          El Simulador de Objetos
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground/80">Programación Orientada a Objetos (POO)</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Aprende cómo los programadores organizan el código usando CLASES y OBJETOS para crear programas más eficientes
          y fáciles de mantener.
        </p>
      </div>

      {/* Simple Concept Explanation */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 space-y-6">
        <h3 className="text-2xl font-bold text-primary">¿Qué es la POO?</h3>
        <div className="space-y-4 text-foreground/90">
          <p className="leading-relaxed">
            La POO es una forma de <strong>ORGANIZAR y ESTRUCTURAR</strong> el código. En lugar de tener funciones y
            variables sueltas, agrupamos todo en <strong>CLASES</strong> que funcionan como moldes.
          </p>
          <div className="bg-card/50 p-4 rounded border border-primary/20">
            <p className="font-mono text-sm">
              <strong>Piénsalo así:</strong> Si quieres hacer 100 personajes para un videojuego, en lugar de escribir
              código 100 veces, escribes una CLASE Personaje UNA VEZ, y luego la usas 100 veces.
            </p>
          </div>
        </div>
      </div>

      {/* Four Core Concepts */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          {
            title: "Clases",
            desc: "Moldes para crear objetos",
            icon: "📋",
            example: "class Personaje:",
          },
          {
            title: "Objetos",
            desc: "Instancias de las clases",
            icon: "🎮",
            example: "guerrero = Guerrero('Conan')",
          },
          {
            title: "Herencia",
            desc: "Compartir características",
            icon: "🔗",
            example: "class Guerrero(Personaje):",
          },
          {
            title: "Polimorfismo",
            desc: "Métodos variables",
            icon: "🔄",
            example: "guerrero.atacar() vs mago.atacar()",
          },
        ].map((concept, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary/50"
          >
            <div className="text-4xl mb-3">{concept.icon}</div>
            <h3 className="font-bold text-lg mb-2 text-primary">{concept.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{concept.desc}</p>
            <p className="text-xs font-mono bg-background/50 p-2 rounded text-accent">{concept.example}</p>
          </div>
        ))}
      </div>

      {/* Why POO Matters */}
      <div className="bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-accent/30 rounded-lg p-8 space-y-4">
        <h3 className="text-2xl font-bold text-accent">¿Por qué POO es importante?</h3>
        <ul className="space-y-3 text-foreground/90">
          <li className="flex gap-3">
            <span className="text-accent font-bold text-lg">✓</span>
            <span>
              <strong>Organización:</strong> El código está bien estructurado y es fácil de entender.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-bold text-lg">✓</span>
            <span>
              <strong>Reutilización:</strong> Escribes una clase una vez y la usas muchas veces.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-bold text-lg">✓</span>
            <span>
              <strong>Mantenimiento:</strong> Si necesitas cambiar algo, cambias la clase y todos se actualizan.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-bold text-lg">✓</span>
            <span>
              <strong>Escalabilidad:</strong> Proyectos grandes no se vuelven un caos.
            </span>
          </li>
        </ul>
      </div>

      {/* Call to action */}
      <div className="text-center p-8 bg-card border border-border rounded-lg">
        <p className="text-lg text-foreground/80 mb-4">
          Veamos cómo todo esto funciona con ejemplos reales en Python...
        </p>
      </div>
    </div>
  )
}
