import PageLayout from "@/components/PageLayout";
import { Metadata } from "next"

export const metadata: Metadata = { title: "Services"};

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description: "Build modern, fast, and responsive websites using the latest web technologies."
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Create beautiful and user-friendly interfaces that provide an excellent experience."
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Make your website look great on desktops, tablets, and mobile devices."
  },
];

// xs, sm, md, lg, xl, 2xl

export default function Services() {
  return (
    <PageLayout title="Our Service"
      description="We create modern and professional digital experiences.">
        <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[30px] md:grid-cols-3">
          {services.map(({ icon, title, description}) => (
            <article className="rounded-card bg-white px-[30px] py-10 text-center text-ink shadow-card transition duration-300 hover:-translate-y-2.5" key={title}>
              <div className="mb-5 text-[50px]">
                {icon}
              </div>
              <h2 className="mb-[15px] text-[28px] font-bold">{title}</h2>
              <p className="text-[17px] leading-[1.6]">{description}</p>
            </article>
          ))}
        </section>
    </PageLayout>
  )
}
