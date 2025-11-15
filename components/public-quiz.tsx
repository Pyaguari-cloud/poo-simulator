"use client"

import { useState } from "react"

/**
 * SECCIÓN DE PREGUNTAS Y PARTICIPACIÓN DEL PÚBLICO
 *
 * Esta sección se usa para REFORZAR LOS CONOCIMIENTOS.
 * Las preguntas son más desafiantes y requieren comprensión real de los conceptos.
 */

interface Question {
  id: number
  pregunta: string
  opciones: string[]
  respuestaCorrecta: number
  explicacion: string
  estudiante: string
}

const questions: Question[] = [
  {
    id: 1,
    pregunta: "Si cambias un método en una clase padre que tiene 5 subclases heredando, ¿cuántas copias del código necesitas actualizar?",
    opciones: [
      "A) 5 copias - una en cada subclase",
      "B) 6 copias - la clase padre más las 5 subclases",
      "C) Solo 1 - en la clase padre, todas las subclases se actualizan automáticamente",
      "D) Ninguna - el código no se puede actualizar",
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Esta es la verdadera ventaja de la herencia. Cambias el código en la clase padre UNA SOLA VEZ y automáticamente todas las 5 subclases que heredan de ella reciben la actualización. Eso es escalabilidad y mantenimiento eficiente.",
    estudiante: "Estudiante 2: Programador de Clases",
  },
  {
    id: 2,
    pregunta: "Un programador crea 1,000 personajes diferentes en un videojuego sin usar POO. ¿Cuál es el principal problema?",
    opciones: [
      "A) El código será muy colorido y confuso",
      "B) Si hay un error en la lógica de ataque, debe arreglarlo 1,000 veces en 1,000 lugares diferentes",
      "C) Los personajes no pueden atacar",
      "D) Las variables no funcionan sin POO",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Sin POO, cada personaje sería código duplicado. Un error tendría que arreglarse 1,000 veces. Con POO, defines la lógica UNA VEZ en la clase, y los 1,000 objetos la comparten. Si hay un error, lo arreglas una sola vez.",
    estudiante: "Estudiante 1: Presentador",
  },
  {
    id: 3,
    pregunta: "¿Qué sucede si intentas llamar a un método que no existe en la clase?",
    opciones: [
      "A) Python crea automáticamente el método",
      "B) El programa sigue funcionando normalmente",
      "C) El programa genera un ERROR (excepción) porque el objeto no tiene ese método",
      "D) La clase se borra automáticamente",
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Una ventaja de POO es que define claramente qué métodos existen. Si intentas usar un método que no está definido en la clase, Python lanza un error. Esto es BUENO porque te dice exactamente qué está mal, permitiendo encontrar bugs rápidamente.",
    estudiante: "Estudiante 3: Desarrollador de Funcionalidades",
  },
  {
    id: 4,
    pregunta: "¿Cuál es la relación entre Polimorfismo y Herencia?",
    opciones: [
      "A) Son exactamente lo mismo",
      "B) La herencia permite polimorfismo: clases diferentes heredan y pueden implementar un método diferente",
      "C) No tienen relación",
      "D) Polimorfismo solo existe en videojuegos",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Excelente pregunta. La herencia te permite tener múltiples clases (Mago, Guerrero) que comparten una clase padre (Personaje). Cuando todas estas clases heredan, pueden 'overridear' (reemplazar) el método atacar(). Eso es polimorfismo: el mismo nombre de método hace cosas diferentes según el tipo. La herencia hace posible el polimorfismo.",
    estudiante: "Estudiante 2: Programador de Clases",
  },
  {
    id: 5,
    pregunta: "¿Por qué es importante que cada atributo de un objeto tenga encapsulación?",
    opciones: [
      "A) Para que el código se vea más bonito",
      "B) Porque si no, otros programadores pueden cambiar los datos de formas inesperadas, causando bugs",
      "C) Porque Python lo obliga",
      "D) No es importante",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "La encapsulación protege los datos. Si la salud de un personaje está encapsulada, otros no pueden cambiarla directamente a valores inválidos. En su lugar, usan métodos como recibir_daño() que garantizan que la salud sea válida. Esto previene bugs y data corruption.",
    estudiante: "Estudiante 2: Programador de Clases",
  },
  {
    id: 6,
    pregunta: "En nuestro simulador, si creamos un Mago que hereda de Personaje, ¿qué pasa si el Mago no define su propio método atacar()?",
    opciones: [
      "A) El Mago no puede atacar",
      "B) El Mago usa automáticamente el método atacar() de la clase Personaje (herencia)",
      "C) El programa genera error",
      "D) Se crea un nuevo atacar() vacío",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Esto es herencia en acción. Si Mago no define atacar(), Python busca en la clase padre Personaje. Al encontrarlo, lo usa. Es como decir 'si no tengo esa capacidad, úsala de mis padres'. Pero si el Mago SÍ define atacar(), usa su propia versión (polimorfismo).",
    estudiante: "Estudiante 3: Desarrollador de Funcionalidades",
  },
]

export default function PublicQuiz() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  const question = questions[currentQuestionIdx]
  const isCorrect = selectedAnswer === question.respuestaCorrecta

  const handleAnswer = () => {
    if (selectedAnswer !== null) {
      setAnswered(true)
      if (isCorrect) {
        setCorrectCount(correctCount + 1)
      }
    }
  }

  const handleNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    }
  }

  const handleReset = () => {
    setCurrentQuestionIdx(0)
    setSelectedAnswer(null)
    setAnswered(false)
    setCorrectCount(0)
  }

  const progress = ((currentQuestionIdx + 1) / questions.length) * 100

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-accent-secondary rounded-lg p-8 text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary-foreground">🎯 Desafío de Conocimiento</h2>
        <p className="text-primary-foreground/90 text-lg">Responde correctamente y demuestra que COMPRENDES POO profundamente</p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-foreground">
            Pregunta {currentQuestionIdx + 1} de {questions.length}
          </span>
          <span className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded-full">
            {correctCount} correctas
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary to-accent h-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-card border border-border rounded-lg p-8 space-y-6">
        {/* Question Text */}
        <div className="space-y-4">
          <p className="text-sm text-accent font-bold">💡 {question.estudiante}</p>
          <h3 className="text-2xl font-bold text-foreground">{question.pregunta}</h3>
        </div>

        {/* Answer Options */}
        <div className="space-y-3">
          {question.opciones.map((opcion, idx) => (
            <button
              key={idx}
              disabled={answered}
              onClick={() => {
                if (!answered) setSelectedAnswer(idx)
              }}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all font-medium ${
                selectedAnswer === idx
                  ? answered
                    ? isCorrect && idx === question.respuestaCorrecta
                      ? "border-green-500 bg-green-50 dark:bg-green-950 text-green-900 dark:text-green-100"
                      : "border-red-500 bg-red-50 dark:bg-red-950 text-red-900 dark:text-red-100"
                    : "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              } ${answered ? "cursor-default" : "cursor-pointer"}`}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 text-lg">
                  {answered && idx === question.respuestaCorrecta && "✓"}
                  {answered && selectedAnswer === idx && idx !== question.respuestaCorrecta && "✗"}
                </div>
                <span>{opcion}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Explanation */}
        {answered && (
          <div
            className={`p-4 rounded-lg border-l-4 ${
              isCorrect
                ? "bg-green-50 dark:bg-green-950 border-green-500 text-green-900 dark:text-green-100"
                : "bg-red-50 dark:bg-red-950 border-red-500 text-red-900 dark:text-red-100"
            }`}
          >
            <p className="font-bold mb-2">{isCorrect ? "✓ ¡Correcto!" : "✗ Respuesta incorrecta"}</p>
            <p>{question.explicacion}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          {!answered ? (
            <button
              onClick={handleAnswer}
              disabled={selectedAnswer === null}
              className="flex-1 py-3 rounded-lg font-bold bg-primary text-primary-foreground hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Responder
            </button>
          ) : currentQuestionIdx < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="flex-1 py-3 rounded-lg font-bold bg-accent text-accent-foreground hover:shadow-lg transition-all"
            >
              Siguiente Pregunta →
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="flex-1 py-3 rounded-lg font-bold bg-accent-secondary text-primary-foreground hover:shadow-lg transition-all"
            >
              Reintentar Quiz
            </button>
          )}
        </div>
      </div>

      {/* Final Results */}
      {currentQuestionIdx === questions.length - 1 && answered && (
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary rounded-lg p-8 text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">🏆 ¡Completaste el Quiz!</h3>
          <div className="text-5xl font-bold text-primary">
            {correctCount}/{questions.length}
          </div>
          <p className="text-lg text-foreground/80">
            {correctCount === questions.length
              ? "¡Perfecto! ¡Dominas completamente los conceptos avanzados de POO!"
              : correctCount >= 5
                ? "¡Excelente! Comprendes muy bien cómo funciona POO en la práctica."
                : correctCount >= 3
                  ? "Muy bien. Entiendes los conceptos principales de POO."
                  : "Buen intento. Estos conceptos requieren más práctica y análisis."}
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-lg font-bold bg-primary text-primary-foreground hover:shadow-lg transition-all"
          >
            Hacer el Quiz de Nuevo
          </button>
        </div>
      )}

      {/* Tips Section */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="font-bold text-lg mb-4 text-primary">📚 Conceptos Desafiantes</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Herencia = Evitar duplicación de código</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Polimorfismo = Herencia + Métodos diferentes</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Mantenimiento = Cambias UNA VEZ, beneficias a todos</span>
            </li>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="font-bold text-lg mb-4 text-accent">🎓 Reflexiona Sobre</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              <span>¿Cuánta duplicación de código evitas con herencia?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              <span>¿Cómo protege encapsulación los datos?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              <span>¿Por qué es polimorfismo importante en escalabilidad?</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
