import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className={`flex h-10 w-[4.5rem] items-center rounded-full p-1 transition-colors duration-300 ${
        isDark ? "justify-end bg-black" : "justify-start bg-white/70"
      }`}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink shadow"
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </motion.span>
    </button>
  );
}

export default ThemeToggle;