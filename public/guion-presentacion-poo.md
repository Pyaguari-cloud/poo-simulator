# El Simulador de Objetos - POO en Acción
## Guión de Presentación

---

### Información General
- **Duración Total:** 5-8 minutos
- **Número de Participantes:** 4 estudiantes
- **Materia:** Programación y Base de Datos
- **Formato:** Presentación interactiva

---

## ESTUDIANTE 1: Presentador / Coordinador Técnico
### Introducción (1-2 minutos)

**Guión:**

"Buenos días/tardes, bienvenidos a nuestro stand: 'El Simulador de Objetos - POO en Acción'.

Hoy vamos a mostrarles algo fascinante: ¿cómo los programadores crean videojuegos, aplicaciones móviles y software que usan todos los días?

La respuesta está en algo llamado Programación Orientada a Objetos, o POO para los amigos.

Permítanme explicar con un ejemplo simple:

[Señala la pantalla]

Imaginen que ustedes quieren crear un videojuego. En lugar de escribir millones de líneas de código sin orden, los programadores usan algo similar a un 'molde' o 'receta'. Es como si dijéramos:

'Vamos a crear un molde para hacer personajes. Cada personaje tendrá:
- Un nombre (ejemplo: 'Warrior')
- Una cantidad de vida (ejemplo: 100 puntos)
- Un poder especial (ejemplo: lanzar magia)

Una vez que tenemos ese 'molde', podemos hacer 10, 100, o 1,000 personajes diferentes sin escribir todo de nuevo. Solo modificamos los detalles.

Eso es la esencia de POO: crear moldes reutilizables para evitar repetir código.

¿Por qué es importante?
- ✓ Es más rápido - No escriben lo mismo una y otra vez
- ✓ Es más seguro - Si hay un error, lo arreglan en un solo lugar
- ✓ Es más fácil de mantener - Otros programadores lo entienden rápido
- ✓ Es profesional - Así trabajan en empresas como Google, Microsoft, Meta

Hoy, mis compañeros van a mostrarles exactamente cómo funciona con ejemplos reales en código. ¡Presten atención!"

### Puntos Clave a Comunicar:
- [ ] POO es un "molde" o "receta"
- [ ] Se reutiliza para crear múltiples cosas
- [ ] Ahorra tiempo, errores y mantenimiento
- [ ] Es cómo trabajan profesionales reales
- [ ] Transición suave al siguiente estudiante

---

## ESTUDIANTE 2: Programador de Clases
### Estructura del Código (2 minutos)

**Guión:**

"Gracias a mi compañero. Ahora soy yo quien voy a mostrarles cómo se construye eso que llamamos 'molde' o 'Clase'.

[Señala la sección "Explicación de Clases" en la pantalla]

Miren esto: este es el código de una Clase llamada 'Personaje'. Vamos a desglosarla como si fuera una receta de cocina:

**PASO 1: El Nombre de la Clase**
\`\`\`
class Personaje:
\`\`\`
Aquí decimos 'vamos a crear un molde llamado Personaje'. Sencillo, ¿verdad?

**PASO 2: Los Ingredientes (Atributos)**
\`\`\`
def __init__(self, nombre, vida, tipo):
    self.nombre = nombre
    self.vida = vida
    self.tipo = tipo
\`\`\`

Esto es como cuando en una receta dices: 'Necesito 2 huevos, 1 taza de harina y sal'. Los atributos son lo que cada personaje debe tener:
- nombre - ¿Cómo se llama? (ejemplo: "Guerrero")
- vida - ¿Cuántos puntos de vida tiene? (ejemplo: 100)
- tipo - ¿Qué clase es? (ejemplo: "Mago", "Arquero", "Guerrero")

**PASO 3: Los Métodos (Acciones)**
\`\`\`
def atacar(self):
    return f"{self.nombre} ¡Ataca!"
    
def recibir_daño(self, daño):
    self.vida -= daño
    return self.vida
\`\`\`

Un método es como una acción que el personaje puede hacer. En este caso:
- atacar() - El personaje puede atacar
- recibir_daño() - El personaje puede recibir daño

**PASO 4: La Herencia (Las Subclases)**
\`\`\`
class Mago(Personaje):
    def hechizo(self):
        return f"{self.nombre} lanza un hechizo"
\`\`\`

Aquí es donde la POO se vuelve poderosa. Imaginen que tenemos un Mago. El Mago es un tipo de Personaje, ¿verdad? Entonces, ¿por qué escribir todo de nuevo?

Decimos: 'El Mago HEREDA todo de Personaje' (nombre, vida, atacar, recibir daño), pero además tiene su propia acción especial: lanzar hechizo.

Es como si dijéramos: 'Un Mago es un Personaje, pero con poderes mágicos extra'.

Así no repito código. Solo agrego lo nuevo. ¡Eso es eficiencia!

¿Ven? Con esta estructura, podemos crear:
- Guerreros (atacan con espada)
- Magos (lanzan hechizos)
- Arqueros (disparan flechas)

Todos son personajes, pero cada uno tiene algo especial. Y todo viene de un molde base que no tenemos que reescribir."

### Puntos Clave a Comunicar:
- [ ] Explicar qué es una Clase (molde)
- [ ] Mostrar atributos (características del objeto)
- [ ] Mostrar métodos (acciones que puede hacer)
- [ ] Explicar herencia (reutilización de código)
- [ ] Dar ejemplos del mundo real (Mago, Guerrero, Arquero)
- [ ] Enfatizar que NO se repite código con herencia

---

## ESTUDIANTE 3: Desarrollador de Funcionalidades
### Demostración en Vivo (2-3 minutos)

**Guión:**

"Perfecto. Ahora que conocen la estructura del código, voy a mostrarles lo emocionante: ¡el código en acción!

[Señala la sección "Demostración de Funcionalidades"]

Miren aquí. Tenemos varios personajes ya creados: un Mago, un Guerrero y un Arquero. Cada uno está vivo en la aplicación porque fueron creados usando el molde que mi compañero acaba de explicar.

Ahora voy a ejecutar algunas acciones. Vean qué sucede:

**ACCIÓN 1: El Mago ataca**
[Hace clic en el botón "Ataque Mágico"]

¿Ven el resultado? El código ejecutó: `print(mago.atacar())`

En la consola ven: 'Mago Astra ¡Ataca con poder mágico!'

Eso significa que el método 'atacar()' que definimos en la Clase Mago se ejecutó. El personaje tiene vida, cada método que creamos funciona exactamente como lo programamos.

**ACCIÓN 2: El Guerrero recibe daño**
[Hace clic en el botón "Recibir Daño"]

¿Lo ven? El Guerrero tenía 100 puntos de vida. Recibió 20 de daño. Ahora tiene 80.

El método 'recibir_daño(20)' cambió el valor de la vida. Si recibe más daño, la vida baja más. Así es como funcionan los videojuegos: los personajes pierden vida cuando les atacan.

**ACCIÓN 3: Polimorfismo en Acción**
[Hace clic en "Mostrar Habilidades"]

Aquí está lo genial. Ejecuto el mismo método para tres personajes diferentes:
- El Mago dice: "Astra lanza un hechizo"
- El Guerrero dice: "Thorin usa ataque de espada"
- El Arquero dice: "Legolas dispara flechas"

¿Qué significa esto? Que aunque todos son 'Personajes' y tienen el método 'atacar()', cada uno lo hace diferente. Eso se llama POLIMORFISMO.

Es como si tuviera 3 actores diferentes interpretando el mismo personaje: todos son personajes, pero cada uno actúa a su manera.

En código, esto es PODEROSO porque:
- Puedo escribir una sola línea de código que funciona para todos
- Cada personaje sabe qué hacer según su tipo
- No tengo 3 copias del mismo código

¿Ven cómo todo está conectado? La Clase define lo básico, la Herencia reutiliza, y el Polimorfismo permite que cada tipo sea especial pero use el mismo código base."

### Puntos Clave a Comunicar:
- [ ] Mostrar métodos ejecutándose en tiempo real
- [ ] Explicar que cada acción corresponde a código
- [ ] Demostrar cambios en los atributos (como vida)
- [ ] Explicar Polimorfismo (mismo método, diferente resultado)
- [ ] Conectar la teoría con la práctica visual

---

## ESTUDIANTE 4: Interactor con el Público
### Interacción e Quiz (2-3 minutos)

**Guión:**

"¡Ahora es el turno del público! Hasta aquí hemos explicado teoría, pero la programación se aprende haciendo.

[Señala la sección "Crear tu Personaje"]

Necesito que alguien del público suba y ayude a crear un nuevo personaje. ¿Alguien se anima?

[Espera a que alguien suba]

Perfecto. Mira, te voy a pedir que rellenes este formulario:

**PASO 1: Dale un nombre a tu personaje**
[Espera a que escriba]
"¿Te gusta? Excelente. Ese nombre va a ser uno de los ATRIBUTOS de nuestro personaje."

**PASO 2: Elige qué tipo es (Mago, Guerrero o Arquero)**
[Espera a que elija]
"Elegiste {tipo}. Eso también es un ATRIBUTO. Cada tipo tiene una acción especial diferente."

**PASO 3: Dale puntos de vida**
[Espera a que ingrese]
"Muy bien. La vida es otro ATRIBUTO. Ahora ve esto..."

[Hace clic en "Crear Personaje"]

¿Lo ven? Acabamos de crear una INSTANCIA. Eso significa que tomamos el molde (la Clase) y lo usamos para crear algo real, algo concreto.

Tu personaje ahora existe en el código. Tiene nombre, tipo y vida. Todo porque usamos la Clase que mis compañeros explicaron.

Si queremos crear otro, usamos el mismo molde pero con diferentes valores. Así es como en videojuegos reales crean millones de personajes con código limpio y ordenado.

### SECCIÓN DE QUIZ (Refuerzo de Conceptos)

Ahora vamos a hacer un pequeño juego de preguntas. Si responden bien, reciben un obsequio.

**PREGUNTA 1 (Fácil):**
"¿Cuál es el nombre del personaje que acabamos de crear?"
[Señala la pantalla]
"Exacto, {nombre}. Eso es un ATRIBUTO."

**PREGUNTA 2 (Medio):**
"¿Alguien sabe qué es una CLASE en programación?"
[Espera respuesta]
"Muy bien, es como un molde. Es la estructura que usamos para crear objetos sin reescribir código."

**PREGUNTA 3 (Medio):**
"¿Qué diferencia hay entre una Clase y un Objeto?"
[Espera respuesta]
"Excelente observación. La Clase es el molde (el plano), y el Objeto es la cosa real creada usando ese molde. Es como la diferencia entre una receta de pastel y un pastel hecho."

**PREGUNTA 4 (Difícil):**
"¿Qué ventaja tiene usar HERENCIA en lugar de copiar todo el código?"
[Espera respuesta]
"Correcto. Si hay un error en el código base, solo lo arreglan una vez y todos los personajes se benefician. ¡Eficiencia!"

**PREGUNTA 5 (Concepto General):**
"¿Dónde ven ustedes POO en su vida diaria?"
[Escucha respuestas]
"¡Exactamente! Cada vez que usan un videojuego, una app móvil, Instagram, Netflix... todo eso usa POO. Los programadores organizan el código en clases para que sea mantenible, seguro y rápido."

### CIERRE:

"Antes de terminar, quiero que se lleven esta idea:

POO no es algo complicado y aburrido. POO es una forma de PENSAR. Es decir: 'En lugar de escribir código caótico, voy a crear estructuras que se reutilizan'.

Así se crean aplicaciones reales. Así trabajan los mejores programadores del mundo.

Si alguno de ustedes se interesa en programación, ahora ya saben que Python es el lenguaje perfecto para empezar. Y lo primero que aprenderán será exactamente lo que les mostramos hoy: clases, objetos, herencia y polimorfismo.

¡Gracias por visitarnos!"

### Puntos Clave a Comunicar:
- [ ] Dejar que alguien del público cree un personaje
- [ ] Explicar que es una INSTANCIA
- [ ] Conectar la acción con el código subyacente
- [ ] Hacer preguntas que refuercen conceptos
- [ ] Dar obsequios a quienes respondan bien
- [ ] Cierre inspirador conectando con aplicaciones reales

---

## Resumen de Asignaciones

| Estudiante | Rol | Duración | Puntos Clave |
|---|---|---|---|
| **1** | Presentador | 1-2 min | Bienvenida, explicar qué es POO con analogías |
| **2** | Programador de Clases | 2 min | Estructura de clases, atributos, métodos, herencia |
| **3** | Desarrollador de Funcionalidades | 2-3 min | Ejecutar métodos, demostrar polimorfismo |
| **4** | Interactor | 2-3 min | Dejar crear personajes, quiz, cierre |

---

## Consejos Generales para la Presentación

- **Practica antes** - Ensayen juntos al menos 2-3 veces
- **Hablen lento y claro** - El público no está familiarizado con términos técnicos
- **Usen la pantalla** - Siempre señalen en la pantalla lo que explican
- **Hagan pausas** - Dejen que el público procese la información
- **Manténganse en el tiempo** - No se pasen, 5-8 minutos totales
- **Estén preparados** - Si alguien hace una pregunta que no puedan responder, digan "Excelente pregunta, aquí están nuestros contactos si quieren saber más"
- **Sonrían** - La energía positiva es contagiosa
- **Disfruten** - ¡Ustedes son expertos en este tema para el público!

---

*Documento preparado para: Casa Abierta - Presentación de POO*
*Materia: Programación y Base de Datos*
