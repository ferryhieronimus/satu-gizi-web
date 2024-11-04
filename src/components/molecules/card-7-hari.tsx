"use client";

import { GitCommitVertical, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/atoms/chart";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/atoms/card";
import { Typography } from "../atoms/typography";

const chartData = [
  { month: "Senin", karbohidrat: 86, protein: 80, lemak: 70 },
  { month: "Selasa", karbohidrat: 95, protein: 90, lemak: 60 },
  { month: "Rabu", karbohidrat: 87, protein: 70, lemak: 80 },
  { month: "Kamis", karbohidrat: 73, protein: 90, lemak: 75 },
  { month: "Jumat", karbohidrat: 89, protein: 80, lemak: 85 },
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

export function Card7Hari() {
  return (
    <Card className="flex flex-1 flex-col">
      <CardHeader>
        <Typography variant="s5" className="tracking-tight">
          Persentase Pemenuhan Gizi <b>Nasional</b> Selama 7 Hari Ke Belakang
        </Typography>
        <Typography variant="p5" className="tracking-tight text-muted-foreground">
          Periode 21-27 Oktober 2024
        </Typography>
      </CardHeader>
      <CardContent className="h-full">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line
              dataKey="karbohidrat"
              type="natural"
              stroke="var(--color-karbohidrat)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24;
                return (
                  <GitCommitVertical
                    key={payload.month}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--background))"
                    stroke="var(--color-karbohidrat)"
                  />
                );
              }}
            />
            <Line
              dataKey="protein"
              type="natural"
              stroke="var(--color-protein)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24;
                return (
                  <GitCommitVertical
                    key={payload.month}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--background))"
                    stroke="var(--color-protein)"
                  />
                );
              }}
            />
            <Line
              dataKey="lemak"
              type="natural"
              stroke="var(--color-lemak)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24;
                return (
                  <GitCommitVertical
                    key={payload.month}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--background))"
                    stroke="var(--color-lemak)"
                  />
                );
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
