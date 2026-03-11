import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container max-w-lg text-center"
      >
        <Clock className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse-gold" />
        <h1 className="font-display text-3xl md:text-5xl font-black tracking-widest text-primary text-glow-gold mb-4">
          {title}
        </h1>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{description}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 font-display text-sm tracking-widest font-bold hover:bg-primary/10 transition-colors rounded-sm"
        >
          VOLVER AL INICIO
        </Link>
      </motion.div>
    </div>
  );
}
