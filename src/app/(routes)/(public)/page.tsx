"use client";

import { Button } from "@/components/atoms/button";
import { Typography } from "@/components/atoms/typography";
import { Card7Hari } from "@/components/molecules/card-7-hari";
import { CardPemenuhan } from "@/components/molecules/card-pemenuhan";
import { CardPersen } from "@/components/molecules/card-persen";
import { CardRanking } from "@/components/molecules/card-ranking";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative grid flex-1 grid-cols-3 rounded-3xl bg-white">
      <div className="col-span-1 flex flex-col justify-end p-8">
        <img src="/logo.svg" alt="logo" className="h-20 w-20" />
        <Typography variant="h2" className="mt-4">
          SatuGizi
        </Typography>
        <Typography variant="s5" className="text-gray-500">
          Akses data <b>kinerja</b> Program Makan Bergizi Gratis secara <b>Cepat</b> dan <b>Akurat</b> dengan bantuan{" "}
          <b>AI</b>
        </Typography>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="default" className="h-12 flex-1 rounded-2xl">
            Mulai Percakapan
          </Button>
          <Button variant="secondary" className="h-12 flex-1 rounded-2xl">
            Pelajari Lebih Lanjut
          </Button>
        </div>
        <Typography variant="p5" className="mt-16 text-gray-500">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
      </div>
      <div className="col-span-2 grid grid-cols-2 justify-center gap-2 rounded-[2.5rem] bg-gray-100 p-8">
        <div className="flex flex-col gap-2">
          <CardPersen />
          <CardPemenuhan />
        </div>
        <div className="flex flex-col gap-2">
          <CardRanking />
          <Card7Hari />
        </div>
      </div>
    </div>
  );
}
