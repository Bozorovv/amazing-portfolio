import { motion } from "framer-motion";

// Linear va Apple uslubidagi premium va aniq seziladigan easing
const premiumEasing = [0.25, 1, 0.5, 1];

export function SectionReveal({ children, id }) {
  return (
    <motion.section
      id={id}
      // Sahifaga kirganda pastdan y:60px dan ko'tariladi, opacity 0 dan 1 ga o'tadi
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      // Tepaga chiqib ketayotganda nozik yo'qolishi (Exit animation)
      viewport={{ 
        once: false, 
        amount: 0.2 // Section ekran 20% qismiga kirganda darhol ishlaydi
      }}
      transition={{
        duration: 0.8,
        ease: premiumEasing
      }}
      style={{ willChange: "transform, opacity" }} // GPU tezlatgich
      className="py-16 md:py-24 relative overflow-hidden bg-[#090a0f]"
    >
      {children}
    </motion.section>
  );
}

export function StaggerContainer({ children, className = "" }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // Har bir bola (item) 150ms interval bilan ketma-ket chiqadi
        staggerChildren: 0.15, 
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: premiumEasing
      }
    },
  };

  return (
    <motion.div variants={itemVariants} style={{ willChange: "transform, opacity" }}>
      {children}
    </motion.div>
  );
}