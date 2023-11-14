"use client";

import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

type Inputs = {
  name: string;
  email: string;
  subj: string;
  msg: string;
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subj, setSubj] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_ID!);

  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setMessage("");
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // 3 seconds
    }
  }, [state.succeeded]);

  return (
    <form
      className=" relative flex flex-col space-y-2 w-fit mx-auto"
      onSubmit={handleSubmit}
    >
      <div className=" flex space-x-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="contactInput"
          type="text"
          name="name"
          id="name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="contactInput"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input
        value={subj}
        onChange={(e) => setSubj(e.target.value)}
        placeholder="Subject"
        className="contactInput"
        type="text"
        name="subj"
        id="subj"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message or even for a coffee"
        className="contactInput"
        name="msg"
        id="msg"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className=" bg-secondary py-5 px-10 text-black font-bold text-lg">
        Submit
      </button>
      {showPopup && (
        <div className=" absolute top-0 w-full h-5/6 flex justify-center items-center">
          <div className=" flex justify-between items-center box-border shadow-[0_15px_25px_rgba(0,0,0,0.6)] p-5 rounded-[10px] bg-black bg-opacity-50">
            <p className="text-white text-xl">Thanks for contacting😊!</p>
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className=" !mt-0 mb-10 ml-5"
            >
              X
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
