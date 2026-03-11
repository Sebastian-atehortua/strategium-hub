import { motion } from "framer-motion";
import { Crosshair, Dices, Target, Users, Swords, BookOpen, Move, Shield, Eye } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const phases = [
  { name: "Fase de Iniciativa", desc: "Se tira un dado para determinar qué jugador tiene la iniciativa este turno.", icon: Dices },
  { name: "Fase de Estrategia", desc: "Los jugadores juegan cartas tácticas y usan puntos de comando para activar habilidades estratégicas.", icon: Eye },
  { name: "Fase de Tiroteo", desc: "Los operativos se activan por turnos alternados para realizar acciones como moverse, disparar y luchar.", icon: Crosshair },
];

const actions = [
  { name: "Mover", desc: "Desplaza tu operativo por el campo de batalla. Cada operativo tiene un valor de movimiento.", icon: Move },
  { name: "Disparar", desc: "Ataca a un enemigo visible con un arma a distancia.", icon: Crosshair },
  { name: "Luchar", desc: "Combate cuerpo a cuerpo contra un enemigo en rango de combate.", icon: Swords },
  { name: "Defender", desc: "Tu operativo se prepara para recibir ataques con bonificación defensiva.", icon: Shield },
];

const teams = [
  { name: "Space Marines", type: "Intercessores", style: "Resistentes y versátiles" },
  { name: "Orks", type: "Kommandos", style: "Agresivos y numerosos" },
  { name: "Aeldari", type: "Corsarios", style: "Rápidos y letales" },
  { name: "Death Guard", type: "Plague Marines", style: "Extremadamente resistentes" },
  { name: "Tau", type: "Pathfinders", style: "Tiroteo a distancia" },
  { name: "Tyranids", type: "Genestealers", style: "Combate cuerpo a cuerpo" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export default function KillTeam() {
  return (
    <div>
      {/* Header */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Crosshair className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-display text-4xl md:text-6xl font-black tracking-widest text-primary text-glow-gold mb-4">
              KILL TEAM
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Kill Team es un juego de escaramuzas tácticas donde pequeñas escuadras de élite luchan en
              combates intensos y rápidos. Perfecto para partidas de 45-60 minutos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Kill Team */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-bold tracking-widest text-primary mb-6">¿QUÉ ES KILL TEAM?</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Kill Team es un juego de miniaturas de Games Workshop ambientado en el universo de Warhammer 40,000.
              A diferencia del juego principal, aquí controlas una escuadra pequeña de 4 a 14 operativos,
              cada uno con habilidades únicas.
            </p>
            <p>
              Las partidas son rápidas y tácticas, donde cada decisión cuenta. El posicionamiento, la cobertura
              y la elección de acciones determinan la victoria o la derrota.
            </p>
          </div>
        </div>
      </section>

      {/* Turn Structure */}
      <section className="py-16 bg-card">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-bold tracking-widest text-primary mb-8">ESTRUCTURA DEL TURNO</h2>
          <p className="text-muted-foreground mb-8">Una partida de Kill Team dura 4 turnos. Cada turno tiene las siguientes fases:</p>
          <div className="space-y-4">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-4 bg-background border border-border rounded-sm p-6"
              >
                <div className="bg-primary/10 p-3 rounded-sm shrink-0">
                  <phase.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-wider text-foreground mb-1">{phase.name}</h3>
                  <p className="text-muted-foreground text-sm">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-bold tracking-widest text-primary mb-8">ACCIONES</h2>
          <p className="text-muted-foreground mb-8">Cada operativo puede realizar 2 acciones por activación (con excepciones).</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {actions.map((action, i) => (
              <motion.div
                key={action.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-sm p-6 hover:border-primary transition-colors"
              >
                <action.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-display text-base font-bold tracking-wider text-foreground mb-1">{action.name}</h3>
                <p className="text-muted-foreground text-sm">{action.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-16 bg-card">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-bold tracking-widest text-primary mb-4">EQUIPOS Y FACCIONES</h2>
          <p className="text-muted-foreground mb-8">Algunos de los equipos más populares para empezar:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teams.map((team, i) => (
              <motion.div
                key={team.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-background border border-border rounded-sm p-5 hover:border-primary transition-colors"
              >
                <h3 className="font-display text-sm font-bold tracking-wider text-primary">{team.name}</h3>
                <p className="text-foreground text-sm font-semibold">{team.type}</p>
                <p className="text-muted-foreground text-xs mt-1">{team.style}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-bold tracking-widest text-primary mb-8">PREGUNTAS FRECUENTES</h2>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="1" className="bg-card border border-border rounded-sm px-6">
              <AccordionTrigger className="font-display text-sm tracking-wider hover:text-primary">
                ¿Cuántas miniaturas necesito?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                Depende del equipo, pero generalmente entre 4 y 14 miniaturas. Muchos equipos starter vienen con todo lo necesario.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2" className="bg-card border border-border rounded-sm px-6">
              <AccordionTrigger className="font-display text-sm tracking-wider hover:text-primary">
                ¿Cuánto dura una partida?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                Una partida típica dura entre 45 y 60 minutos, lo que lo convierte en una opción perfecta para sesiones rápidas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3" className="bg-card border border-border rounded-sm px-6">
              <AccordionTrigger className="font-display text-sm tracking-wider hover:text-primary">
                ¿Es un buen juego para empezar en el hobby?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                ¡Absolutamente! Kill Team requiere pocas miniaturas, las reglas son más sencillas que Warhammer 40K y las partidas son rápidas. Es el punto de entrada ideal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="4" className="bg-card border border-border rounded-sm px-6">
              <AccordionTrigger className="font-display text-sm tracking-wider hover:text-primary">
                ¿Qué materiales necesito además de las miniaturas?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                Necesitarás dados D6, una cinta métrica, el libro de reglas (o la app oficial), y un tablero de juego con terreno. Las cajas de inicio incluyen todo esto.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
