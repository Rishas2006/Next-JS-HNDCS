import Hero from "@/components/ModernUIComponents/Hero";
import { Metadata } from "next";

export const metadata:Metadata = { title: "ModernUI"}

export default function page() {
  return (
    <Hero />
  )
}
