import React, { useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="w-full py-16 sm:py-24 px-1 sm:px-24">
        <h2 className="p-4 sm:pb-6 md:pb-8 sm:text-center font-heading text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">
          Contact
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="p-6 flex flex-col justify-center bg-light-card dark:bg-dark-card gap-4 sm:flex-1 border border-light-border dark:border-dark-border rounded-lg">
            <p className="font-body">
              Have a project idea, internship opportunity, or collaboration in
              mind? Let’s connect.
            </p>

            <p className="font-body">
              Reach me at{" "}
              <a
                href="mailto:vijayakumargvara@gmail.com"
                className="text-accent hover:underline">
                vijayakumargvara@gmail.com
              </a>{" "}
              or use the form.
            </p>

            <div>
              <p className="font-body mb-2">You can also find me here</p>
              <div className="flex items-center gap-5">
                <a
                  href="https://www.linkedin.com/in/gavara-vijaya-kumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-accent transition">
                  <LinkedInIcon />
                </a>

                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-accent transition">
                  <GitHubIcon />
                </a>

                <a
                  href="mailto:vijayakumargvara@gmail.com"
                  aria-label="Email"
                  className="hover:text-accent transition">
                  <EmailIcon />
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
