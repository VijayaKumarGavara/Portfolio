import { useRef } from "react";

const ContactForm = () => {
  const name = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();
  return (
    <>
      <div className="p-6 sm:flex-1 border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card rounded-lg">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              ref={name}
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-md border bg-light-bg dark:bg-dark-bg focus:ring-1 focus:ring-accent outline-none placeholder:text-light-text2 placeholder:dark:text-dark-text2"
            />
            <input
              ref={email}
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md border bg-light-bg dark:bg-dark-bg focus:ring-1 focus:ring-accent outline-none placeholder:text-light-text2 placeholder:dark:text-dark-text2"
            />
          </div>
          <input
            ref={subject}
            type="text"
            placeholder="Your subject"
            className="w-full px-4 py-2 rounded-md border bg-light-bg dark:bg-dark-bg focus:ring-1 focus:ring-accent outline-none placeholder:text-light-text2 placeholder:dark:text-dark-text2"
          />
          <textarea
            ref={message}
            rows="4"
            placeholder="Your message"
            className="w-full px-4 py-2 rounded-md border bg-light-bg dark:bg-dark-bg focus:ring-1 focus:ring-accent outline-none placeholder:text-light-text2 placeholder:dark:text-dark-text2"
          />

          <div className="flex gap-6 justify-center">
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-accent text-white hover:opacity-90 transition transform hover:scale-105">
              Send
            </button>
            <button
              type="reset"
              className="px-6 py-2 rounded-md border hover:border-none hover:bg-red-600 hover:text-white transition transform hover:scale-105">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
