import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const classes = ["IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

const inputClass =
  "w-full rounded-md bg-teal-tint px-4 py-2 text-ink placeholder:text-ink-soft/70 focus:outline-none focus:ring-2 focus:ring-brand";

function EnquirySection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquire" className="px-6 py-16">
      <div className="mx-auto max-w-3xl rounded-3xl bg-teal-light p-6 shadow-2xl md:p-10 dark:bg-neutral-800">
        <SectionHeading
          title="Enquire Now"
          subtitle="Admissions open for Class IV to XII"
        />

        {submitted ? (
          <p
            role="status"
            className="rounded-md bg-white p-6 text-center font-semibold text-brand dark:bg-neutral-900 dark:text-brand-soft"
          >
            Thank you, {form.name}! Our admissions team will contact you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email (optional)
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                  Mobile number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  title="Enter a 10 digit mobile number"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10 digit mobile number"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="grade" className="mb-1 block text-sm font-medium">
                  Class
                </label>
                <select
                  id="grade"
                  name="grade"
                  required
                  value={form.grade}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select class</option>
                  {classes.map((grade) => (
                    <option key={grade} value={grade}>
                      Class {grade}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm">
              <input
                name="consent"
                type="checkbox"
                required
                checked={form.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 accent-brand"
              />
              I agree to receive information regarding my enquiry from Tulas
              International School, Dehradun.
            </label>

            <div className="text-center">
              <Button type="submit" variant="dark">
                Submit Enquiry
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default EnquirySection;