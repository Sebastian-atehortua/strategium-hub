import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Sword, Shield, Skull, BookOpen, Wrench, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Inicio", icon: Skull },
  { path: "/kill-team", label: "Kill Team", icon: Sword },
  { path: "/warhammer-40k", label: "Warhammer 40K", icon: Shield },
  { path: "/age-of-sigmar", label: "Age of Sigmar", icon: Sword },
  { path: "/guias", label: "Guías", icon: BookOpen },
  { path: "/recursos", label: "Recursos", icon: Wrench },
  { path: "/about", label: "Nosotros", icon: Users },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Skull className="h-7 w-7 text-primary" />
            <span className="font-display text-xl font-bold tracking-widest text-primary">STRATEGIUM</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors rounded-sm ${
                  location.pathname === item.path
                    ? "text-primary bg-muted"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-border overflow-hidden"
            >
              <div className="container py-3">
                <input
                  type="text"
                  placeholder="Buscar guías, reglas, facciones..."
                  className="w-full bg-muted border border-border rounded-sm px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary font-body"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-border overflow-hidden lg:hidden"
            >
              <div className="container py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-3 text-sm font-semibold uppercase tracking-wider transition-colors rounded-sm ${
                      location.pathname === item.path
                        ? "text-primary bg-muted"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Skull className="h-5 w-5 text-primary" />
                <span className="font-display text-lg font-bold tracking-widest text-primary">STRATEGIUM</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tu centro de conocimiento para juegos de mesa de miniaturas. Guías claras, reglas explicadas y recursos para todos los niveles.
              </p>
            </div>
            <div>
              <h4 className="font-display text-sm tracking-widest text-primary mb-4">JUEGOS</h4>
              <div className="flex flex-col gap-2">
                <Link to="/kill-team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kill Team</Link>
                <Link to="/warhammer-40k" className="text-sm text-muted-foreground hover:text-primary transition-colors">Warhammer 40,000</Link>
                <Link to="/age-of-sigmar" className="text-sm text-muted-foreground hover:text-primary transition-colors">Age of Sigmar</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display text-sm tracking-widest text-primary mb-4">ENLACES</h4>
              <div className="flex flex-col gap-2">
                <Link to="/guias" className="text-sm text-muted-foreground hover:text-primary transition-colors">Guías</Link>
                <Link to="/recursos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Recursos</Link>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nosotros</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            © 2026 Strategium. Creado con pasión por el hobby.
          </div>
        </div>
      </footer>
    </div>
  );
}
