"use client";
import { Card, CardContent, CardHeader } from "@/components/atoms/card";
import { Typography } from "../atoms/typography";

export function CardPersen() {
  return (
    <Card>
      <CardHeader>
        <Typography variant="s3" className="tracking-tight">
          Persentase Pemenuhan Gizi <b>Nasional</b> Hari Ini
        </Typography>
      </CardHeader>
      <CardContent>
        <Typography variant="h1" className="text-7xl text-primary text-center">
          82.7%
        </Typography>
      </CardContent>
    </Card>
  );
}
