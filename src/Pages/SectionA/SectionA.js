import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  Legend,
  Bar,
  Scatter,
} from "recharts";
import "./SectionA.css";

const data = [
  {
    uv: 4000,
    pv: 2400,
    amt: 400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2010,
  },
  {
    uv: 4400,
    pv: 9800,
    amt: 1290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 600,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 4781,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 8500,
  },
  {
    uv: 90,
    pv: 4300,
    amt: 100,
  },
];

const GradientColors = () => {
  return (
    <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
      <stop offset="30%" stopColor="#E2BDFE" stopOpacity={0.2} />
      <stop offset="75%" stopColor="#F0DEFE" stopOpacity={0.05} />
      <stop offset="95%" stopColor="#F8EFFF" stopOpacity={0.02} />
    </linearGradient>
  );
};
const GradientColors2 = () => {
  return (
    <linearGradient id="colorView2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="30%" stopColor="#B2FFFB" stopOpacity={0.2} />
      <stop offset="75%" stopColor="#D9FFFD" stopOpacity={0.05} />
      <stop offset="95%" stopColor="#ECFFFE" stopOpacity={0.02} />
    </linearGradient>
  );
};
const GradientColors3 = () => {
  return (
    <linearGradient id="colorView3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="30%" stopColor="#FFE5C8" stopOpacity={0.2} />
      <stop offset="75%" stopColor="#FFF2E3" stopOpacity={0.05} />
      <stop offset="95%" stopColor="#FFF9F1" stopOpacity={0.02} />
    </linearGradient>
  );
};
const SectionA = () => {
  return (
    <ResponsiveContainer width="97%" height={300}>
      <AreaChart
        data={data}
        width={500}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <defs>
          <GradientColors />
        </defs>
        <defs>
          <GradientColors2 />
        </defs>
        <defs>
          <GradientColors3 />
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#991BFA" opacity={0.4} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          itemStyle={{
            color: "#fff",
            backgroundColor: "#0A1322",
            borderRadius: "10px",
          }}
          contentStyle={{ backgroundColor: "#0A1322" }}
        />
        {/* <Legend /> */}
        {/* <Area
          type="monotone"
          dataKey="amt"
          className="bgShadow"
          fill="url(#colorView)"
          strokeWidth={3}
          stroke="#FFA63F"
        /> */}
        <Area
          type="monotone"
          dataKey="pv"
          fill="url(#colorView2)"
          strokeWidth={3}
          stroke="#01F1E3"
        />
        <Area
          type="monotone"
          dataKey="uv"
          fill="url(#colorView3)"
          strokeOpacity={1}
          strokeWidth={3}
          stroke="#9E28F9"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SectionA;
