"use client";

import { FormEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { socialLinks } from "@/data";

const Contact = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setIsSuccess(false);
    setError("");
    setIsLoading(true);
    e.preventDefault();

    fetch("/api/send-message", {
      method: "POST",
      body: JSON.stringify(formValue),
    })
      .then(() => {
        setIsLoading(false);
        setFormValue({
          name: "",
          email: "",
          message: "",
        });
        setIsSuccess(true);
        toast.success("Your message has been sent!", {
          position: "bottom-right",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        setError("Failed to send message. Please try again later.");
        toast.error("Failed to send message. Please try again later.", {
          position: "bottom-right",
        });
      });
  };

  useEffect(() => {
    if (formValue.name || formValue.email || formValue.message) {
      setIsSuccess(false);
    }
  }, [formValue]);

  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col reveal-up">
          <h2 className="headline-2 lg:max-w-[12ch]">
            Contact me for collaboration
          </h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>

          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon }, key) => (
              <Link
                key={key}
                href={href}
                target="_blank"
                className="w-12 h-12 grid place-items-center ring-inset ring-2
                ring-zinc-50/2 rounded-lg transition-[background-color,color]
                hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="xl:pl-10 2xl:pl-20">
          <div className="md:grid md:items-center md:gap-2 space-y-4">
            <div>
              <label htmlFor="name" className="label reveal-up">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formValue.name}
                onChange={(e) =>
                  setFormValue({ ...formValue, name: e.target.value })
                }
                autoComplete="name"
                required
                placeholder="Your name..."
                className="text-field reveal-up"
              />
            </div>

            <div>
              <label htmlFor="email" className="label reveal-up">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formValue.email}
                onChange={(e) =>
                  setFormValue({ ...formValue, email: e.target.value })
                }
                autoComplete="email"
                required
                placeholder="example@mail.com"
                className="text-field reveal-up"
              />
            </div>

            <div>
              <label htmlFor="message" className="label reveal-up">
                Message
              </label>
              <textarea
                value={formValue.message}
                onChange={(e) =>
                  setFormValue({ ...formValue, message: e.target.value })
                }
                name="message"
                id="message"
                rows={4}
                required
                placeholder="Your message..."
                className="text-field resize-y min-h-32 max-h-80 reveal-up"
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"
                disabled={isLoading}
              >
                {isLoading && (
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                Submit
              </button>
              {isSuccess && (
                <small className="text-green-400 block mt-2">
                  Thank you for reaching out!
                </small>
              )}
              {error && (
                <small className="text-red-400 block mt-2">{error}</small>
              )}
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
