"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/atoms/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/atoms/chart";
import { Typography } from "../atoms/typography";

export const description = "A multiple bar chart";

const chartData = [
  { month: "Januari", karbohidrat: 86, protein: 80, lemak: 70 },
  { month: "Februari", karbohidrat: 95, protein: 90, lemak: 60 },
  { month: "Maret", karbohidrat: 87, protein: 70, lemak: 80 },
  { month: "April", karbohidrat: 73, protein: 90, lemak: 75 },
  { month: "Mei", karbohidrat: 89, protein: 80, lemak: 85 },
];

const chartConfig = {
  karbohidrat: {
    label: "Karbohidrat",
    color: "hsl(var(--chart-1))",
  },
  protein: {
    label: "Protein",
    color: "hsl(var(--chart-2))",
  },
  lemak: {
    label: "Lemak",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function CardPemenuhan() {
  return (
    <Card className="flex flex-1 flex-col">
      <CardHeader>
        <Typography variant="s5" className="tracking-tight">
          Persentase Pemenuhan Penentu Gizi Nasional
        </Typography>
      </CardHeader>
      <CardContent className="h-full">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
            <Bar dataKey="karbohidrat" fill="var(--color-karbohidrat)" radius={4} />
            <Bar dataKey="protein" fill="var(--color-protein)" radius={4} />
            <Bar dataKey="lemak" fill="var(--color-lemak)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
