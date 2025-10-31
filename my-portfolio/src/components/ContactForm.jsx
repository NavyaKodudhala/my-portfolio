
import React, { useState } from "react";
import { sendContact } from "../api/api";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendContact(form);
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="w-full border p-2 rounded" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full border p-2 rounded" />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full border p-2 rounded h-32" />
      <button type="submit" className="px-4 py-2 bg-cyan-500 text-white rounded">
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && <div className="text-green-600">Message sent!</div>}
      {status === "failed" && <div className="text-red-600">Failed: {error}</div>}
    </form>
  );
}
