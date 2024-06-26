import Link from "next/link";

import { api } from "~/trpc/server";
import { Button } from "./_components/button";
import AudioRecorder from "./_components/audio";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Prise de vue
        </h1>
        <p>Enregistrez vos prises de vue et vos émotions</p>
        <h2>Votre historique</h2>
        <AudioRecorder />
      </div>
    </main>
  );
}
