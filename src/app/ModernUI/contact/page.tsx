import ContactForm from "@/components/ContactForm";
import PageLayout from "@/components/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact"
}

const contactDetails = [
  { label: "Email", value: "hello@modernui.com" },
  { label: "Phone", value: "+94 77 123 4567" },
  { label: "Location", value: "Sri Lanka" },
  // { label: "Address", value: "No 23, Colombo" }
];

export default function Contact() {
  return (
    <PageLayout title="Contact Us" description="Have a project in mind? Let's work together.">
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 md:grid-cols-2">
        <div className="rounded-card bg-white p-[25px] text-ink shadow-card xs:p-10">
          <h2 className="mb-5 text-[30px] font-bold">Get In Touch</h2>
          <p className="mb-[30px] leading-[1.6]">Feel free to contact us for any questions, projects, or services.</p>
          {contactDetails.map((contact, index) => (
            <div key={index} className="mb-5">
              <strong className="text-lg font-bold">{contact.label}</strong>
              <p className="mt-[5px]">{contact.value}</p>
            </div>
          ))}
        </div>
        <ContactForm />
      </section>
    </PageLayout>
  )
}
