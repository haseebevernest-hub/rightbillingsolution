"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactBillingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    state: "",
    speciality: "",
    email: "",
    monthlyCollection: "",
    billingSituation: "",
    urgency: "",
    requirement: "",
    multipleQuotes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="py-24 px-6 bg-linear-to-br from-blue-50 via-white to-green-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-12 border border-blue-100"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Help Us Understand Your Requirements
          </h2>
          <p className="text-gray-600 text-lg">
            Get in touch with us for more information. We're ready to assist
            with your billing and coding needs.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Name"
              name="name"
              required
              placeholder="Type here"
              value={form.name}
              onChange={handleChange}
            />

            <InputField
              label="Phone Number"
              name="phone"
              required
              placeholder="Type here"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <SelectField
              label="State"
              name="state"
              value={form.state}
              onChange={handleChange}
              options={[
                "Select State",
                "California",
                "Texas",
                "New York",
                "Florida",
              ]}
            />

            <SelectField
              label="Speciality"
              name="speciality"
              value={form.speciality}
              onChange={handleChange}
              options={[
                "--Speciality--",
                "Cardiology",
                "Dermatology",
                "Orthopedics",
                "Pediatrics",
              ]}
            />
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="abc@xyz.com"
              value={form.email}
              onChange={handleChange}
            />

            <SelectField
              label="Monthly Insurance Collection"
              name="monthlyCollection"
              value={form.monthlyCollection}
              onChange={handleChange}
              options={[
                "Monthly Insurance Collection",
                "$0 - $50,000",
                "$50,000 - $150,000",
                "$150,000+",
              ]}
            />
          </div>

          {/* Row 4 */}
          <div className="grid md:grid-cols-2 gap-6">
            <SelectField
              label="Current Billing Situation"
              name="billingSituation"
              value={form.billingSituation}
              onChange={handleChange}
              options={[
                "Current billing situation",
                "In-house billing",
                "Outsourced billing",
                "Looking to switch",
              ]}
            />

            <SelectField
              label="Urgency"
              name="urgency"
              value={form.urgency}
              onChange={handleChange}
              options={[
                "Urgency",
                "Immediate",
                "Within 30 days",
                "Exploring options",
              ]}
            />
          </div>

          {/* Text Area */}
          <div>
            <label className="block text-sm font-semibold text-blue-700 mb-2">
              Requirement & Preferred Time to Call
            </label>
            <textarea
              name="requirement"
              value={form.requirement}
              onChange={handleChange}
              rows={4}
              placeholder="Type here"
              className="w-full rounded-xl border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-4 outline-none transition"
            />
          </div>

          {/* Radio Buttons */}
          <div>
            <label className="block text-sm font-semibold text-blue-700 mb-3">
              Are you looking for more than one billing quotes?
            </label>

            <div className="flex gap-8">
              <RadioField
                name="multipleQuotes"
                value="Yes"
                checked={form.multipleQuotes === "Yes"}
                onChange={handleChange}
              />
              <RadioField
                name="multipleQuotes"
                value="No"
                checked={form.multipleQuotes === "No"}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-6 text-center">
            <button
              type="submit"
              className="px-10 py-4 bg-linear-to-r from-blue-600 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              Submit Request
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

/* ======================== */
/* REUSABLE INPUT FIELD */
/* ======================== */

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}: any) {
  return (
    <div>
      <label className="block text-sm font-semibold text-blue-700 mb-2">
        {label} {required && <span className="text-red-500">(*Required)</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-4 outline-none transition"
      />
    </div>
  );
}

/* ======================== */
/* REUSABLE SELECT FIELD */
/* ======================== */

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: any) {
  return (
    <div>
      <label className="block text-sm font-semibold text-blue-700 mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-4 outline-none transition bg-white"
      >
        {options.map((option: string, index: number) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ======================== */
/* REUSABLE RADIO FIELD */
/* ======================== */

function RadioField({
  name,
  value,
  checked,
  onChange,
}: any) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 text-blue-600 focus:ring-green-400"
      />
      <span className="text-gray-700 font-medium">{value}</span>
    </label>
  );
}
