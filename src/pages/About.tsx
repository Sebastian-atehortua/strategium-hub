import { motion } from "framer-motion";
import { Users, Heart, Target } from "lucide-react";

export default function About() {
  return (
    <div>
      <section className="py-20 bg-card border-b border-border">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-display text-4xl md:text-6xl font-black tracking-widest text-primary text-glow-gold mb-4">
              NOSOTROS
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Conoce a las personas detrás de Strategium
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-card border border-border rounded-sm p-8">
              <Heart className="h-8 w-8 text-primary mb-4" />
              <h2 className="font-display text-xl font-bold tracking-wider text-foreground mb-4">NUESTRA HISTORIA</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Strategium nació de la pasión de dos amigos por los juegos de mesa de miniaturas. Después de años
                disfrutando del hobby, nos dimos cuenta de que muchos recursos estaban dispersos, en inglés, o eran
                demasiado complicados para los nuevos jugadores.
              </p>
              <p className="text-foreground leading-relaxed">
                Decidimos crear un espacio en español donde cualquier persona pudiera aprender a jugar, entender las
                reglas y mejorar su estrategia de forma clara y accesible. Strategium es nuestro proyecto para hacer
                que el hobby sea más fácil de disfrutar para todos.
              </p>
            </div>

            <div className="bg-card border border-border rounded-sm p-8">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h2 className="font-display text-xl font-bold tracking-wider text-foreground mb-4">NUESTRA MISIÓN</h2>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>Hacer las reglas complejas fáciles de entender</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>Crear contenido en español de calidad para la comunidad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>Ayudar a nuevos jugadores a entrar al hobby sin sentirse abrumados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>Expandir a más sistemas de juego con el tiempo</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
