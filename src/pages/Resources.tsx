import { motion } from "framer-motion";
import { Wrench, FileText, ExternalLink, Printer, Ruler } from "lucide-react";

const resources = [
  {
    title: "Referencia Rápida de Reglas",
    desc: "Las reglas básicas de Kill Team en formato resumido para consultar durante la partida.",
    icon: FileText,
  },
  {
    title: "Hojas de Trucos Imprimibles",
    desc: "Descarga PDFs con resúmenes de acciones, fases y mecánicas de dados.",
    icon: Printer,
  },
  {
    title: "Herramientas de Medición",
    desc: "Guías sobre rangos, movimiento y línea de visión para mejorar tu precisión.",
    icon: Ruler,
  },
  {
    title: "Enlaces de Comunidad",
    desc: "Comunidades en español, canales de YouTube y foros recomendados.",
    icon: ExternalLink,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export default function Resources() {
  return (
    <div>
      <section className="py-20 bg-card border-b border-border">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-display text-4xl md:text-6xl font-black tracking-widest text-primary text-glow-gold mb-4">
              RECURSOS
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Herramientas, referencias rápidas y materiales útiles para tus partidas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((res, i) => (
              <motion.div
                key={res.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-sm p-6 hover:border-primary transition-colors group cursor-pointer"
              >
                <res.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg font-bold tracking-wider text-foreground mb-2">{res.title}</h3>
                <p className="text-muted-foreground text-sm">{res.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
