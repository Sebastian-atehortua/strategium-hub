import { motion } from "framer-motion";
import { BookOpen, Dices, Target, Map, Shield, Swords } from "lucide-react";
import { Link } from "react-router-dom";

const guides = [
  { title: "Guía para Principiantes", desc: "Aprende lo básico de Kill Team desde cero.", icon: BookOpen, tag: "PRINCIPIANTE", path: "/kill-team" },
  { title: "Estructura de Turnos", desc: "Fases, activaciones y orden de juego.", icon: Dices, tag: "REGLAS", path: "/kill-team" },
  { title: "Acciones Básicas", desc: "Mover, disparar, luchar y más.", icon: Target, tag: "MECÁNICAS", path: "/kill-team" },
  { title: "Terreno y Cobertura", desc: "Cómo usar el terreno a tu favor.", icon: Map, tag: "TÁCTICAS", path: "/kill-team" },
  { title: "Construcción de Listas", desc: "Cómo armar un equipo competitivo.", icon: Shield, tag: "AVANZADO", path: "/kill-team" },
  { title: "Consejos de Combate", desc: "Estrategias para el cuerpo a cuerpo y el tiroteo.", icon: Swords, tag: "TÁCTICAS", path: "/kill-team" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export default function Guides() {
  return (
    <div>
      <section className="py-20 bg-card border-b border-border">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-display text-4xl md:text-6xl font-black tracking-widest text-primary text-glow-gold mb-4">
              GUÍAS
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Artículos de estrategia, consejos tácticos y guías paso a paso para mejorar tu juego.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, i) => (
              <motion.div
                key={guide.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  to={guide.path}
                  className="block bg-card border border-border rounded-sm p-6 hover:border-primary transition-colors group h-full"
                >
                  <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded-sm">{guide.tag}</span>
                  <guide.icon className="h-8 w-8 text-primary mt-4 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg font-bold tracking-wider text-foreground mb-2">{guide.title}</h3>
                  <p className="text-muted-foreground text-sm">{guide.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
