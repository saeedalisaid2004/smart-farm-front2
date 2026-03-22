import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestions = [
  { label: "Dashboard", path: "/dashboard", icon: Home },
  { label: "Login", path: "/login", icon: ArrowLeft },
  { label: "Home", path: "/", icon: Home },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-primary-glow/4 rounded-full blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 max-w-lg"
      >
        {/* Animated icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-24 h-24 gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-glow"
        >
          <Search className="w-12 h-12 text-primary-foreground" />
        </motion.div>

        {/* Big 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 150, delay: 0.3 }}
          className="text-8xl font-black text-primary mb-4 tracking-tighter"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-2 text-lg">
            The page <code className="bg-secondary px-2 py-1 rounded-lg text-sm font-mono text-primary">{location.pathname}</code> doesn't exist.
          </p>
          <p className="text-muted-foreground mb-8">
            It might have been moved or the URL is incorrect.
          </p>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {suggestions.map((s) => (
            <Link key={s.path} to={s.path}>
              <Button variant="outline" className="rounded-xl gap-2 h-11 px-5 border-border hover:border-primary hover:bg-primary/5 transition-all">
                <s.icon className="w-4 h-4" />
                {s.label}
              </Button>
            </Link>
          ))}
        </motion.div>

        {/* Decorative plant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <Leaf className="w-8 h-8 text-primary mx-auto animate-float" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
