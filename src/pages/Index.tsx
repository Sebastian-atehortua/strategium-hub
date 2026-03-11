import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sword, Shield, BookOpen, Wrench, ChevronRight, Dices, Target, Crosshair } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const games = [
  {
    title: "Kill Team",
    desc: "Combates tácticos con escuadras pequeñas. El punto de entrada perfecto al hobby.",
    path: "/kill-team",
    icon: Crosshair,
    available: true,
  },
  {
    title: "Warhammer 40,000",
    desc: "Batallas épicas a gran escala en el sombrío futuro del milenio 41.",
    path: "/warhammer-40k",
    icon: Shield,
    available: false,
  },
  {
    title: "Age of Sigmar",
    desc: "Guerras fantásticas entre dioses y ejércitos en los Reinos Mortales.",
    path: "/age-of-sigmar",
    icon: Sword,
    available: false,
  },
];

const featuredGuides = [
  {
    title: "Guía para Principiantes de Kill Team",
    desc: "Todo lo que necesitas para tu primera partida.",
    icon: BookOpen,
    tag: "PRINCIPIANTE",
  },
  {
    title: "Estructura de Turnos",
    desc: "Cómo funcionan las fases y activaciones.",
    icon: Dices,
    tag: "REGLAS",
  },
  {
    title: "Acciones y Mecánicas",
    desc: "Domina las acciones básicas y avanzadas.",
    icon: Target,
    tag: "MECÁNICAS",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Campo de batalla de miniaturas"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="relative z-10 container text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-widest text-primary text-glow-gold mb-6">
              STRATEGIUM
            </h1>
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-8 font-body leading-relaxed">
              Tu centro de conocimiento para juegos de mesa de miniaturas.
              Guías claras, reglas explicadas y recursos para dominar el campo de batalla.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kill-team"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-display text-sm tracking-widest font-bold hover:bg-gold-light transition-colors rounded-sm"
              >
                EXPLORAR KILL TEAM
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/guias"
                className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 font-display text-sm tracking-widest font-bold hover:bg-primary/10 transition-colors rounded-sm"
              >
                VER GUÍAS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-widest text-primary text-center mb-12">
            ELIGE TU CAMPO DE BATALLA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.map((game, i) => (
              <motion.div
                key={game.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  to={game.path}
                  className={`group block bg-gradient-card border border-border rounded-sm p-8 transition-all hover:border-primary border-glow-gold ${
                    !game.available ? "opacity-60" : ""
                  }`}
                >
                  <game.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-xl font-bold tracking-wider text-foreground mb-2">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{game.desc}</p>
                  {game.available ? (
                    <span className="text-primary font-display text-xs tracking-widest">
                      DISPONIBLE →
                    </span>
                  ) : (
                    <span className="text-muted-foreground font-display text-xs tracking-widest">
                      PRÓXIMAMENTE
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-widest text-primary text-center mb-4">
            GUÍAS DESTACADAS
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            Empieza con nuestras guías más populares para Kill Team
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGuides.map((guide, i) => (
              <motion.div
                key={guide.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-background border border-border rounded-sm p-6 hover:border-primary transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded-sm">
                    {guide.tag}
                  </span>
                </div>
                <guide.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg font-bold tracking-wider text-foreground mb-2">
                  {guide.title}
                </h3>
                <p className="text-muted-foreground text-sm">{guide.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/recursos"
              className="flex items-center gap-6 bg-gradient-card border border-border rounded-sm p-8 hover:border-primary transition-colors group"
            >
              <Wrench className="h-12 w-12 text-primary shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-display text-xl font-bold tracking-wider text-foreground mb-1">RECURSOS</h3>
                <p className="text-muted-foreground text-sm">Tarjetas de referencia rápida, hojas de trucos y herramientas útiles.</p>
              </div>
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-6 bg-gradient-card border border-border rounded-sm p-8 hover:border-primary transition-colors group"
            >
              <BookOpen className="h-12 w-12 text-primary shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-display text-xl font-bold tracking-wider text-foreground mb-1">SOBRE NOSOTROS</h3>
                <p className="text-muted-foreground text-sm">Conoce a los creadores detrás de Strategium y nuestra misión.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
