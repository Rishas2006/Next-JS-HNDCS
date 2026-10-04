import { ReactNode } from "react";

type PageLayoutProps = {
    title: string;
    description: string;
    children: ReactNode;
}

export default function PageLayout({title, description, children}: PageLayoutProps) {
  return (
    <main className="min-h-[calc(100vh-105px)] bg-linear-120/srgb from-brand-blue to-brand-purple px-5 py-[50px] md:px-[8%] md:py-[70px]">
        <section className="mb-[60px] text-center">
            <h1 className="text-white mb-5 text-[34px] font-bold xs:text-[40px] md:text-[55px]">
                {title}
            </h1>
            <p className="text-white text-lg md:text-[22px]">{description}</p>
        </section>
        {children}
    </main>
  )
}
