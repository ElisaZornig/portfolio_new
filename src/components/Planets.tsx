import { motion } from 'motion/react';

export function Planets() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large purple planet - top right */}
      <motion.div
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-700/30 blur-sm"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400/20 to-transparent" />
      </motion.div>

      {/* Medium blue planet - left side */}
      <motion.div
        className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-700/30 blur-sm"
        animate={{
          y: [0, -40, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-blue-400/20 to-transparent" />
      </motion.div>

      {/* Small pink planet - middle right */}
      <motion.div
        className="absolute top-1/2 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-pink-500/30 to-pink-700/30 blur-sm"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400/20 to-transparent" />
      </motion.div>

      {/* Tiny cyan planet - top left */}
      <motion.div
        className="absolute top-20 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/30 to-cyan-700/30 blur-sm"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-cyan-400/20 to-transparent" />
      </motion.div>

      {/* Medium orange planet - bottom left */}
      <motion.div
        className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-orange-500/25 to-red-600/25 blur-sm"
        animate={{
          y: [0, 35, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400/20 to-transparent" />
      </motion.div>

      {/* Small indigo planet - bottom right */}
      <motion.div
        className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500/30 to-indigo-700/30 blur-sm"
        animate={{
          y: [0, -30, 0],
          x: [0, 25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-indigo-400/20 to-transparent" />
      </motion.div>

      {/* Ringed planet - center */}
      <motion.div
        className="absolute top-2/3 left-1/2 w-36 h-36"
        animate={{
          y: [0, 20, 0],
          x: [0, -30, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-500/25 to-amber-600/25 blur-sm">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/20 to-transparent" />
          </div>
          {/* Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 border-2 border-yellow-500/20 rounded-full blur-[1px]" 
               style={{ transform: 'translate(-50%, -50%) rotateX(75deg)' }} />
        </div>
      </motion.div>
    </div>
  );
}
