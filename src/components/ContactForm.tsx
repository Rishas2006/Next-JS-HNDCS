"use client";

// import section ---> library and package
import { FormEvent, useState } from "react";


// Create some constant variables
const fieldClass = "mb-5 w-full rounded-lg border border-[#ccc] p-3.5 text-base outline-none focus:border-brand-purple";


// Props include



export default function ContactForm() {
    // create variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [data, setData] = useState("");


    // Functions
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setData(`
            Thank you, ${name.trim()}! Your message has been submitted.
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `);
        alert(data);
        console.log("Form submitted");
         setName("");
         setEmail("");
         setMessage("");
    }

    return (
        // Main view setup
        <form onSubmit={handleSubmit} className="flex flex-col rounded-card bg-white p-[25px] text-ink shadow-card xs:p-10">
            <label htmlFor="name" className="mb-2 font-bold">Name</label>
            <input 
                id="name" 
                placeholder="Enter your name" 
                required 
                value={name} 
                onChange={(event) => setName(event.target.value)}
                className={fieldClass}
            />

            <label htmlFor="email" className="mb-2 font-bold">Email</label>
            <input 
                id="email" 
                placeholder="Enter your email" 
                required 
                value={email} 
                onChange={(event) => setEmail(event.target.value)}
                className={fieldClass}
            />
            <label htmlFor="message" className="mb-2 font-bold">Message</label>
            <textarea 
                id="message" 
                rows={4}
                placeholder="Enter your message" 
                required 
                value={message} 
                onChange={(event) => setMessage(event.target.value)}
                className={fieldClass}
            />
            <button type="submit" className="cursor-pointer rounded-[30px] bg-accent p-[15px] text-lg font-bold text-white transition duration-300 hover:bg-accent-hover">
                Send Message
            </button>
        </form>
    )
}
