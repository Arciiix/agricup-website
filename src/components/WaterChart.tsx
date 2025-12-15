import { motion } from "framer-motion";
import { Droplets, TrendingDown } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "1", manual: 10, agricup: 7 },
  { day: "2", manual: 15, agricup: 9 },
  { day: "3", manual: 15, agricup: 11 },
  { day: "4", manual: 10, agricup: 9 },
  { day: "5", manual: 10, agricup: 7 },
  { day: "6", manual: 15, agricup: 12 },
  { day: "7", manual: 10, agricup: 9 },
  { day: "8", manual: 10, agricup: 8 },
  { day: "9", manual: 10, agricup: 10 },
  { day: "10", manual: 15, agricup: 9 },
];

type CustomTooltipProps = {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
};

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/90 backdrop-blur-md border border-gray-700 p-4 rounded-xl shadow-2xl">
        <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">
          Day {label}
        </p>
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-gray-300 text-sm">Manual</span>
            </div>
            <span className="font-mono text-white font-bold">
              {payload[0].value} L
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-300 text-sm">AgricUp</span>
            </div>
            <span className="font-mono text-green-400 font-bold">
              {payload[1].value} L
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const WaterChart = () => {
  return (
    <section id="impact" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-green-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Droplets className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
                Real-World Data
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Proven efficiency. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                In every drop.
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We compared traditional manual watering (using 5L watering cans)
              against the AgricUp smart system over a 10-day period. The results
              speak for themselves: consistent water savings without
              compromising plant health.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-green-500/50 transition-colors group">
                <div className="flex items-end gap-2 mb-2">
                  <div className="text-4xl font-bold text-white group-hover:text-green-400 transition-colors">
                    24%
                  </div>
                  <TrendingDown className="w-6 h-6 text-green-500 mb-1.5" />
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                  Less Water Used
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-emerald-500/50 transition-colors group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  29 L
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                  Total Savings (10 Days)
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src="/photos/Web_App_2.jpeg"
                alt="AgricUp Analytics Dashboard"
                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] w-full bg-gradient-to-b from-gray-900/50 to-black rounded-3xl p-6 border border-white/10 relative group"
          >
            <div className="absolute inset-0 bg-green-500/5 rounded-3xl blur-xl group-hover:bg-green-500/10 transition-colors duration-500 -z-10" />

            <div className="flex items-center justify-between mb-8">
              <h3 className="text-white font-semibold">
                Daily water usage [L]
              </h3>
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="text-gray-400">Manual</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-gray-400">AgricUp</span>
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height="85%">
              <BarChart
                data={data}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                barGap={8}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#333"
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  stroke="#666"
                  tick={{ fill: "#666", fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis
                  stroke="#666"
                  tick={{ fill: "#666", fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "rgba(255,255,255,0.05)" }}
                />
                <Bar
                  dataKey="manual"
                  fill="#ef4444"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                  fillOpacity={0.8}
                />
                <Bar
                  dataKey="agricup"
                  fill="#22c55e"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
