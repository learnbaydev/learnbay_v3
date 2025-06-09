import { Play, Timer, Medal } from "lucide-react";

/**
 * @param {{ number: number, icon: "Play" | "Timer" | "Medal", title: string, description: string, color: "emerald" | "blue" | "purple" }} props
 */
export default function StepCard({ number, icon, title, description, color }) {
  const colorClasses = {
    emerald: {
      bg: "from-white/95 to-emerald-50/95 dark:from-slate-800/95 dark:to-emerald-900/30",
      border: "border-emerald-400/20 dark:border-emerald-500/25 hover:border-emerald-500/30",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    blue: {
      bg: "from-white/95 to-blue-50/80 dark:from-slate-800/95 dark:to-blue-900/20",
      border: "border-blue-400/20 dark:border-blue-500/25 hover:border-blue-500/30",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    purple: {
      bg: "from-white/95 to-purple-50/80 dark:from-slate-800/95 dark:to-purple-900/20",
      border: "border-purple-400/20 dark:border-purple-500/25 hover:border-purple-500/30",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
  };

  const IconComponent = icon === "Play" ? Play : icon === "Timer" ? Timer : Medal;

  return (
    <div className="relative">
      <div
        className={`flex items-center justify-between p-6 bg-gradient-to-r ${colorClasses[color].bg} rounded-2xl border ${colorClasses[color].border} transition-all duration-300 hover:shadow-xl hover:scale-105 group backdrop-blur-sm`}
      >
        <div className="flex items-center space-x-5">
          <div
            className={`relative w-10 h-10 ${colorClasses[color].iconBg} rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300`}
          >
            <IconComponent className={`w-4 h-4 ${colorClasses[color].iconColor}`} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        </div>
        <div className="text-5xl font-bold text-gray-400/45 dark:text-gray-500/50 select-none">{number}</div>
      </div>
    </div>
  );
}
