"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/atoms/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/atoms/chart";
import { Typography } from "../atoms/typography";

const chartData = [
  { month: "Jakarta", desktop: 99 },
  { month: "Bandung", desktop: 98 },
  { month: "Yogyakarta", desktop: 97 },
  { month: "Malang", desktop: 95 },
  { month: "Surabaya", desktop: 93 },
  { month: "Medan", desktop: 91 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function CardRanking() {
  return (
    <Card className="flex flex-1 flex-col">
      <CardHeader>
        <Typography variant="s5" className="tracking-tight">
          Persentase Pemenuhan Gizi <b>Tertinggi</b> Tingkat Provinsi di Indonesia
        </Typography>
      </CardHeader>
      <CardContent className="h-full">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart
            className="flex-1"
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="desktop" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
