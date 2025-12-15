import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const [isSend, setSend] = useState(false);
  const [isLoad, setLoad] = useState(false);
  const [status, setStatus] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();

    setSend(true);
    setLoad(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoad(false);
        setStatus("success");
        e.target.reset();

        setTimeout(() => {
          setSend(false);
          setStatus(null);
        }, 5000);
      })
      .catch(() => {
        setLoad(false);
        setStatus("error");

        setTimeout(() => {
          setSend(false);
          setStatus(null);
        }, 5000);
      });
  };

  return (
    <>
      {!isSend && (
        <div className="p-6 sm:flex-1 border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card rounded-lg">
          <form
            action=""
            method="POST"
            className="flex flex-col gap-6"
            onSubmit={sendEmail}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-md border bg-light-bg dark:bg-dark-bg focus:ring-1 focus:ring-accent outline-none placeholder:text-light-text2 placeholder:dark:text-dark-text2"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md border bg-light-bg dark:bg-dark-bg focus:ring-1 focus:ring-accent outline-none placeholder:text-light-text2 placeholder:dark:text-dark-text2"
              />
            </div>
            <input
              name="subject"
              type="text"
              placeholder="Your subject"
              className="w-full px-4 py-2 rounded-md border bg-light-bg dark:bg-dark-bg focus:ring-1 focus:ring-accent outline-none placeholder:text-light-text2 placeholder:dark:text-dark-text2"
            />
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />
            <textarea
              required
              name="message"
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
      )}
      {isSend && isLoad && (
        <div className="w-full md:w-[50%] flex flex-col items-center justify-center gap-4 py-12">
          <div className="h-8 w-8 rounded-full border-4 border-accent border-t-transparent animate-spin"></div>
          <p className="font-body text-light-text2">Sending your message…</p>
        </div>
      )}

      {isSend && !isLoad && status === "success" && (
        <div className="w-full md:w-[50%] flex flex-col items-center justify-center gap-3 py-12">
          <p className="text-green-600 font-medium">
            Message sent successfully ✅
          </p>
          <p className="text-sm text-light-text2">I’ll get back to you soon.</p>
        </div>
      )}

      {isSend && !isLoad && status === "error" && (
        <div className="w-full md:w-[50%] flex flex-col items-center justify-center gap-3 py-12">
          <p className="text-red-600 font-medium">Failed to send message ❌</p>
          <p className="text-sm text-light-text2">
            Please try again in a moment.
          </p>
        </div>
      )}
    </>
  );
};

export default ContactForm;
