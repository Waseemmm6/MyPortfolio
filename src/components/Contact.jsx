import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text  text-transparent ... underline">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>

        <button className="rounded bg-pink-500 ... py-2 px-2 my-4 text-2xl">
  <a href="mailto:mallahwaseem7006@gmail.com">Send Email</a>
</button>

      </div>
    </div>
  );
};

export default Contact;