'use client'

import Image from "next/image";
import * as config from "@/lib/constants";
import Header from "./_components/header";
import style from "./home.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className={style.home}>
        <Image
          src="/dark-logo.svg"
          width={128}
          height={128}
          alt="PerfectLine Logo"
        />
      <Header title={config.title} subtitle="Something went wrong!" description={`err: ${error}`} />
      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
