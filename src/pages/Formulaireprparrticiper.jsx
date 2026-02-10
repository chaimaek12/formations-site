import React, { useState } from "react";
import emailjs from "@emailjs/browser";


 
function Formulaireprparrticiper() {
     const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const sendemail = (e) => {
    e.preventDefault();

    const serviceid = "service_gt4pjds";
    const templateid = "template_t9564pw";
    const publickey = "RN1IAY2g2tdRE9L_S";

    const templateparams = {
      formname: name,
      formemail: email,
      message: message,
    };

    emailjs
      .send(serviceid, templateid, templateparams, publickey)
      .then(() => {
        alert("Email sent successfully ✅");
        setname("");
        setemail("");
        setmessage("");
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
      });
  };

    return (
     



    <div className="from-pink-500 via-purple-500 to-indigo-500 min-h-screen flex items-center justify-center">
      <form
        onSubmit={sendemail}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Contact Us
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
            className="border-2 border-gray-300 p-2 rounded-lg w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            className="border-2 border-gray-300 p-2 rounded-lg w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            required
            className="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-500 text-white p-2 rounded-lg font-semibold w-full hover:bg-indigo-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}



export default Formulaireprparrticiper;