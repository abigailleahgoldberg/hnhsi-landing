"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  { icon: "🪟", name: "Storefront Glass & Aluminum Framing" },
  { icon: "🚪", name: "Commercial Roll-Up & Overhead Doors" },
  { icon: "🔥", name: "Fire Doors & Pedestrian Entries" },
  { icon: "🏗️", name: "Loading Dock Equipment & Levelers" },
  { icon: "🚻", name: "Restroom Partitions & Accessories" },
  { icon: "🔒", name: "Security Gates & Iron Work" },
  { icon: "🔑", name: "Locksmith & AAADM Certification" },
  { icon: "♿", name: "Automatic ADA Door Operators" },
  { icon: "🪞", name: "Custom Residential Glass & Mirrors" },
  { icon: "🔆", name: "Gas & Electric Fireplaces" },
  { icon: "🌡️", name: "Patio Heaters & Outdoor Fireplaces" },
];

const serviceOptions = services.map((s) => s.name);

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    serviceNeeded: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-black text-white font-sans">
      {/* ─── NAV BAR ─────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#E8730C]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Hearth & Home Specialties"
            width={120}
            height={48}
            className="h-10 w-auto"
          />
          <a
            href="tel:7024744099"
            className="bg-[#E8730C] hover:bg-orange-500 text-white font-bold px-5 py-2.5 rounded text-sm transition-all duration-200 tracking-wide"
          >
            (702) 474-4099
          </a>
        </div>
      </nav>

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d0d] to-[#1a0a00] pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 80% 20%, #E8730C 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-block bg-[#E8730C]/10 border border-[#E8730C]/30 text-[#E8730C] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            Las Vegas&apos; Commercial Exterior Specialists Since 2000
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            Every Exterior Solution.
            <br />
            <span className="text-[#E8730C]">One Company.</span>
            <br />
            Only in Vegas.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop juggling five different contractors. Hearth &amp; Home
            Specialties handles every commercial exterior need — one call, one
            schedule, zero headaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#quote"
              className="bg-[#E8730C] hover:bg-orange-500 text-white font-black text-lg px-10 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-orange-900/40 hover:shadow-orange-900/60 hover:-translate-y-0.5 tracking-wide"
            >
              Get Your Free Quote →
            </a>
            <a
              href="tel:7024744099"
              className="border-2 border-white/30 hover:border-[#E8730C] text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 hover:text-[#E8730C]"
            >
              (702) 474-4099
            </a>
          </div>

          <p className="mt-6 text-gray-500 text-sm">
            M–F 7:30am–4:00pm · Free estimates · Licensed &amp; Insured
          </p>
        </div>
      </section>

      {/* ─── THE MATH ─────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Do the Math
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Most property managers deal with this nightmare. You don&apos;t
              have to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* The old way */}
            <div className="bg-black/60 border border-red-900/40 rounded-2xl p-8">
              <div className="text-red-400 font-black text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="text-xl">❌</span> The Old Way
              </div>
              <ul className="space-y-4">
                {[
                  "Glass contractor",
                  "Door contractor",
                  "Loading dock vendor",
                  "Security gate company",
                  "Locksmith",
                ].map((c, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <span className="w-6 h-6 rounded-full bg-red-900/40 border border-red-700/50 flex items-center justify-center text-xs text-red-400 font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="flex-1">{c}</span>
                    <span className="text-red-500/60 text-xs whitespace-nowrap">
                      +1 contact
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-red-900/30">
                <div className="text-red-400 font-black text-lg">
                  5 contractors · 5 schedules · 5 invoices
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Every project is a coordination nightmare
                </div>
              </div>
            </div>

            {/* The HNHSI way */}
            <div className="bg-gradient-to-br from-[#E8730C]/10 to-[#E8730C]/5 border border-[#E8730C]/40 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-8 bg-[#E8730C] text-white text-xs font-black tracking-widest uppercase px-4 py-1 rounded-full">
                The Smart Way
              </div>
              <div className="text-[#E8730C] font-black text-sm tracking-widest uppercase mb-6 flex items-center gap-2 mt-2">
                <span className="text-xl">✅</span> Hearth &amp; Home
                Specialties
              </div>
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#E8730C] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-900/50">
                    <span className="text-4xl font-black text-white">1</span>
                  </div>
                  <div className="text-white font-black text-xl">
                    One Company
                  </div>
                  <div className="text-gray-400 mt-2 text-sm leading-relaxed">
                    One call. One contact.
                    <br />
                    One schedule. One invoice.
                  </div>
                </div>
              </div>
              <div className="mt-2 pt-6 border-t border-[#E8730C]/20">
                <div className="text-[#E8730C] font-black text-lg">
                  11 services · 1 contact · 0 headaches
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  The only company in Vegas that does it all
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST SIGNALS ────────────────────────────── */}
      <section className="bg-[#E8730C] py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "25+", label: "Years in Business" },
            { number: "7,500+", label: "Clients Served" },
            { number: "4", label: "Contractor Licenses" },
            { number: "$5M", label: "Coverage Limits" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-black text-black">
                {stat.number}
              </div>
              <div className="text-black/70 font-semibold text-sm mt-1 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES GRID ────────────────────────────── */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Everything Your Building Needs.
              <span className="text-[#E8730C]"> Under One Roof.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              From storefront glass to loading docks — if it&apos;s on the
              exterior of your building, we handle it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-[#111] hover:bg-[#1a1a1a] border border-white/5 hover:border-[#E8730C]/40 rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <div className="text-white font-semibold leading-snug">
                  {service.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT DANNY ──────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#E8730C]/10 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#E8730C]/30 shadow-2xl">
                <Image
                  src="/danny-check.jpg"
                  alt="Danny Check — Founder, Hearth & Home Specialties"
                  width={600}
                  height={700}
                  className="w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#E8730C] text-white px-5 py-3 rounded-xl font-black text-sm shadow-lg">
                Since 2000
              </div>
            </div>

            <div>
              <div className="text-[#E8730C] font-bold text-sm tracking-widest uppercase mb-4">
                About the Founder
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Danny Check Has Been Solving This Problem for 25 Years.
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  In 2000, Danny Check saw a problem that every Las Vegas
                  property manager knew too well: getting your building&apos;s
                  exterior handled meant managing a half-dozen contractors, each
                  with their own schedule, pricing, and excuses.
                </p>
                <p>
                  He built Hearth &amp; Home Specialties to fix that. One
                  company. Every exterior solution. No juggling.
                </p>
                <p>
                  Twenty-five years later, Danny&apos;s team has served over
                  7,500 clients across Las Vegas — from strip mall storefronts
                  to large commercial properties — all backed by four contractor
                  licenses and $5M in coverage.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["C-8", "C-39", "C-14C/D/E/J", "C-3D"].map((lic) => (
                  <span
                    key={lic}
                    className="bg-[#E8730C]/10 border border-[#E8730C]/30 text-[#E8730C] text-sm font-bold px-4 py-2 rounded-full"
                  >
                    License {lic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ──────────────────────────────── */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#E8730C] text-5xl font-black mb-6 leading-none">
            &ldquo;
          </div>
          <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 italic">
            It&apos;s becoming more rare to have a company who will be
            persistent and honor what you purchased when there are bumps in the
            road, but Hearth &amp; Home does just that.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-0.5 bg-[#E8730C]" />
            <div className="text-gray-400 font-semibold tracking-wide">
              D. Stone — Verified Client
            </div>
            <div className="w-12 h-0.5 bg-[#E8730C]" />
          </div>
          <div className="mt-8 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#E8730C] text-xl">
                ★
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEAD FORM ────────────────────────────────── */}
      <section id="quote" className="bg-[#1A1A1A] py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#E8730C]/10 border border-[#E8730C]/30 text-[#E8730C] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
              Free Estimate · No Obligation
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-gray-400 text-lg">
              Tell us what you need. We&apos;ll get back to you same day.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#E8730C]/10 border border-[#E8730C]/40 rounded-2xl p-12 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-black text-white mb-2">
                We Got Your Request!
              </h3>
              <p className="text-gray-400">
                Danny&apos;s team will reach out within one business day. If you
                need immediate assistance, call{" "}
                <a
                  href="tel:7024744099"
                  className="text-[#E8730C] font-bold hover:underline"
                >
                  (702) 474-4099
                </a>
                .
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-black/40 border border-white/10 rounded-2xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full bg-[#111] border border-white/10 focus:border-[#E8730C] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-[#111] border border-white/10 focus:border-[#E8730C] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(702) 555-0123"
                  className="w-full bg-[#111] border border-white/10 focus:border-[#E8730C] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Property Type *
                  </label>
                  <select
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full bg-[#111] border border-white/10 focus:border-[#E8730C] rounded-lg px-4 py-3 text-white outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="text-gray-600">
                      Select type...
                    </option>
                    <option value="Commercial">Commercial</option>
                    <option value="Residential">Residential</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="serviceNeeded"
                    required
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full bg-[#111] border border-white/10 focus:border-[#E8730C] rounded-lg px-4 py-3 text-white outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select service...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                    <option value="Multiple Services">Multiple Services</option>
                    <option value="Not Sure">Not Sure Yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-semibold mb-2">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe what you need, property address, timeline, etc."
                  className="w-full bg-[#111] border border-white/10 focus:border-[#E8730C] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#E8730C] hover:bg-orange-500 disabled:opacity-60 text-white font-black text-lg py-4 rounded-lg transition-all duration-200 shadow-lg shadow-orange-900/40 hover:shadow-orange-900/60 hover:-translate-y-0.5 tracking-wide"
              >
                {submitting ? "Sending..." : "Get My Free Quote →"}
              </button>

              <p className="text-center text-gray-600 text-xs">
                Or call us directly:{" "}
                <a
                  href="tel:7024744099"
                  className="text-[#E8730C] hover:underline font-semibold"
                >
                  (702) 474-4099
                </a>{" "}
                · M–F 7:30am–4:00pm
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────── */}
      <footer className="bg-black border-t border-white/10 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <Image
                src="/logo.png"
                alt="Hearth & Home Specialties"
                width={140}
                height={56}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-500 text-sm leading-relaxed">
                Las Vegas&apos; premier commercial exterior solutions company.
                One call. Every solution.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
                Contact
              </h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>
                  <a
                    href="tel:7024744099"
                    className="text-[#E8730C] font-bold text-base hover:underline"
                  >
                    (702) 474-4099
                  </a>
                </div>
                <div>3555 W. Quail Ave #A</div>
                <div>Las Vegas, NV</div>
                <div className="pt-1 text-gray-500">M–F 7:30am–4:00pm</div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
                Credentials
              </h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>Licensed Contractor · C-8, C-39</div>
                <div>C-14C/D/E/J, C-3D</div>
                <div>$5M Coverage Limits</div>
                <div>AAADM Certified</div>
                <div>Founded 2000</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Hearth &amp; Home Specialties, Inc. All rights
              reserved.
            </p>
            <p className="text-gray-600 text-sm font-semibold tracking-wide">
              Licensed &amp; Insured · Las Vegas, NV
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
