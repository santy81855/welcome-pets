"use client";
import Image from "next/image";

export default function Logo() {
    return (
      <Image src="/images/logos/logo.svg" alt="Logo" width={180} height={80} />
    );
}