"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>, name: "Storefront Glass & Aluminum Framing" },
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V7.5m-18 0h18M3 7.5l9-4.5 9 4.5M12 12.75h.008v.008H12v-.008zm.375 0h.008v.008h-.008v-.008zm.375 0h.008v.008h-.008v-.008z" /></svg>, name: "Commercial Roll-Up & Overhead Doors" },
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>, name: "Fire Doors & Pedestrian Entries" },
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>, name: "Loading Dock Equipment & Levelers" },
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" /></svg>, name: "Restroom Partitions & Accessories" },
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>, name: "Security Gates & Iron Work" },
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>, name: "Locksmith & AAADM Certification" },
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>, name: "Automatic ADA Door Operators" },
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>, name: "Custom Residential Glass & Mirrors" },
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /></svg>, name: "Gas & Electric Fireplaces" },
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>, name: "Patio Heaters & Outdoor Fireplaces" },
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
    <main className="bg-white text-[#1a1a1a] font-sans">

      {/* TOP INFO BAR */}
      <div className="bg-[#1a1a1a] text-white text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <span>3555 W. Quail Ave #A, Las Vegas, NV</span>
          <span>Mon to Fri: 7:30am to 4:00pm &middot; Licensed &amp; Insured</span>
        </div>
      </div>

      {/* NAV BAR */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Hearth & Home Specialties"
            width={120}
            height={48}
            className="h-10 w-auto"
          />
          <div className="flex items-center gap-4">
            <a
              href="tel:7024744099"
              className="text-[#1a1a1a] font-semibold text-sm hidden sm:block hover:text-[#E8730C] transition-colors"
            >
              (702) 474-4099
            </a>
            <a
              href="#quote"
              className="bg-[#E8730C] hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded text-sm transition-all duration-200 tracking-wide"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-[#E8730C]/10 border border-[#E8730C]/30 text-[#E8730C] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            Las Vegas&apos; Commercial Exterior Specialists Since 2000
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1a1a] leading-tight mb-6 tracking-tight">
            Every Exterior Solution.
            <br />
            <span className="text-[#E8730C] relative inline-block">
              One Company.
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8730C]/30 rounded" />
            </span>
            <br />
            Only in Vegas.
          </h1>

          <p className="text-lg md:text-xl text-[#555] max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop juggling five different contractors. Hearth &amp; Home Specialties handles every commercial exterior need in the Southern Nevada area. Just one call, one schedule, and way less headaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#quote"
              className="bg-[#E8730C] hover:bg-orange-600 text-white font-black text-lg px-10 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 tracking-wide"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:7024744099"
              className="border-2 border-[#1a1a1a] hover:border-[#E8730C] text-[#1a1a1a] hover:text-[#E8730C] font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200"
            >
              (702) 474-4099
            </a>
          </div>

          <p className="mt-6 text-gray-400 text-sm">
            M to F 7:30am to 4:00pm &middot; Free estimates &middot; Licensed &amp; Insured
          </p>
        </div>
      </section>

      {/* HAVE EVERYTHING INSTALLED WITH ONE CALL */}
      <section className="bg-[#f5f5f5] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-4">
              Have Everything Installed With One Call
            </h2>
            <p className="text-[#666] text-lg max-w-2xl mx-auto">
              Most property managers deal with this nightmare. A lot of moving parts. Plenty of disconnects. But you don&apos;t have to anymore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* The old way */}
            <div className="bg-white border border-red-200 rounded-2xl p-8 shadow-sm">
              <div className="text-red-500 font-black text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                The Old Way
              </div>
              <ul className="space-y-4">
                {[
                  "Glass contractor",
                  "Door contractor",
                  "Loading dock vendor",
                  "Security gate company",
                  "Locksmith",
                ].map((c, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#555]">
                    <span className="w-6 h-6 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-xs text-red-500 font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="flex-1">{c}</span>
                    <span className="text-red-400 text-xs whitespace-nowrap">
                      +1 contact
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-red-100">
                <div className="text-red-500 font-black text-lg">
                  5 contractors &middot; 5 schedules &middot; 5 invoices
                </div>
                <div className="text-[#888] text-sm mt-1">
                  Every project is a coordination nightmare
                </div>
              </div>
            </div>

            {/* The HNHSI way */}
            <div className="bg-white border-2 border-[#E8730C] rounded-2xl p-8 relative shadow-sm">
              <div className="absolute -top-3 left-8 bg-[#E8730C] text-white text-xs font-black tracking-widest uppercase px-4 py-1 rounded-full">
                The Smart Way
              </div>
              <div className="text-[#E8730C] font-black text-sm tracking-widest uppercase mb-6 flex items-center gap-2 mt-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Hearth &amp; Home Specialties
              </div>
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#E8730C] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-200">
                    <span className="text-4xl font-black text-white">1</span>
                  </div>
                  <div className="text-[#1a1a1a] font-black text-xl">
                    One Company
                  </div>
                  <div className="text-[#666] mt-2 text-sm leading-relaxed">
                    One call. One contact. One schedule. One invoice.
                  </div>
                </div>
              </div>
              <div className="mt-2 pt-6 border-t border-[#E8730C]/20">
                <div className="text-[#E8730C] font-black text-lg">
                  11 services &middot; 1 contact &middot; 0 headaches
                </div>
                <div className="text-[#888] text-sm mt-1">
                  The only company in Vegas that does it all
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="bg-[#E8730C] py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "25+", label: "Years in Business" },
            { number: "7,500+", label: "Clients Served" },
            { number: "4", label: "Contractor Licenses" },
            { number: "$5M", label: "Coverage Limits" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-black text-white">
                {stat.number}
              </div>
              <div className="text-white/80 font-semibold text-sm mt-1 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-4">
              Everything Your Building Needs.
              <span className="text-[#E8730C]"> Under One Roof.</span>
            </h2>
            <p className="text-[#666] text-lg max-w-2xl mx-auto">
              From storefront glass to loading docks, if it&apos;s on the exterior of your building, we handle it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 hover:border-[#E8730C] rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                <div className="text-[#E8730C] mb-4">{service.icon}</div>
                <div className="text-[#1a1a1a] font-semibold leading-snug group-hover:text-[#E8730C] transition-colors">
                  {service.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT DANNY */}
      <section className="bg-[#fafafa] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl ring-4 ring-[#E8730C] ring-offset-4 ring-offset-[#fafafa]">
                <Image
                  src="/danny-check.jpg"
                  alt="Danny Check, Founder of Hearth and Home Specialties"
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
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-6 leading-tight">
                Danny Check Has Been Solving Problems in Las Vegas for 25+ Years.
              </h2>
              <div className="space-y-4 text-[#555] leading-relaxed">
                <p>
                  In 2000, Danny Check saw a problem that every Las Vegas property manager knew too well: getting your building&apos;s exterior handled meant managing a half-dozen contractors, each with their own schedule, pricing, and excuses.
                </p>
                <p>
                  He built Hearth &amp; Home Specialties to fix that. One company. Every exterior solution. No juggling.
                </p>
                <p>
                  Twenty-five years later, Danny&apos;s team has served over 7,500 clients across Las Vegas, from strip mall storefronts to large commercial properties, all backed by four contractor licenses and $5M in coverage.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["C-8", "C-39", "C-14C/D/E/J", "C-3D"].map((lic) => (
                  <span
                    key={lic}
                    className="bg-[#E8730C]/10 border border-[#E8730C]/30 text-[#E8730C] text-xs font-bold px-3 py-1.5 rounded-full"
                  >
                    {lic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6 gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#E8730C] text-2xl">&#9733;</span>
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-[#333] font-light leading-relaxed mb-8 italic">
            &ldquo;It&apos;s becoming more rare to have a company who will be persistent and honor what you purchased when there are bumps in the road, but Hearth &amp; Home does just that.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-0.5 bg-[#E8730C]" />
            <div className="text-[#888] font-semibold tracking-wide text-sm">
              D. Stone, Verified Client
            </div>
            <div className="w-12 h-0.5 bg-[#E8730C]" />
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="quote" className="bg-[#f5f5f5] py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#E8730C]/10 border border-[#E8730C]/30 text-[#E8730C] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
              Free Estimate &middot; No Obligation
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-[#666] text-lg">
              Tell us what you need. We&apos;ll get back to you same day.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white border border-[#E8730C]/30 rounded-2xl p-12 text-center shadow-sm">
              <div className="text-5xl mb-4">
                <svg className="w-16 h-16 mx-auto text-[#E8730C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-[#1a1a1a] mb-2">
                We Got Your Request!
              </h3>
              <p className="text-[#666]">
                Danny&apos;s team will reach out within one business day. If you need immediate assistance, call{" "}
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
              className="bg-white border border-gray-200 rounded-2xl p-8 space-y-5 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#333] text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full bg-white border border-gray-300 focus:border-[#E8730C] rounded-lg px-4 py-3 text-[#1a1a1a] placeholder-gray-400 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#333] text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-white border border-gray-300 focus:border-[#E8730C] rounded-lg px-4 py-3 text-[#1a1a1a] placeholder-gray-400 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#333] text-sm font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(702) 555-0123"
                  className="w-full bg-white border border-gray-300 focus:border-[#E8730C] rounded-lg px-4 py-3 text-[#1a1a1a] placeholder-gray-400 outline-none transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#333] text-sm font-semibold mb-2">
                    Property Type *
                  </label>
                  <select
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 focus:border-[#E8730C] rounded-lg px-4 py-3 text-[#1a1a1a] outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select type...</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Residential">Residential</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#333] text-sm font-semibold mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="serviceNeeded"
                    required
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 focus:border-[#E8730C] rounded-lg px-4 py-3 text-[#1a1a1a] outline-none transition-colors appearance-none cursor-pointer"
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
                <label className="block text-[#333] text-sm font-semibold mb-2">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe what you need, property address, timeline, etc."
                  className="w-full bg-white border border-gray-300 focus:border-[#E8730C] rounded-lg px-4 py-3 text-[#1a1a1a] placeholder-gray-400 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#E8730C] hover:bg-orange-600 disabled:opacity-60 text-white font-black text-lg py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 tracking-wide"
              >
                {submitting ? "Sending..." : "Get My Free Quote"}
              </button>

              <p className="text-center text-gray-400 text-xs">
                Or call us directly:{" "}
                <a
                  href="tel:7024744099"
                  className="text-[#E8730C] hover:underline font-semibold"
                >
                  (702) 474-4099
                </a>{" "}
                &middot; M to F 7:30am to 4:00pm
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] py-12 px-4">
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
              <p className="text-gray-400 text-sm leading-relaxed">
                Las Vegas&apos; premier commercial exterior solutions company. One call. Every solution.
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
                <div className="pt-1 text-gray-500">M to F 7:30am to 4:00pm</div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
                Credentials
              </h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>Licensed Contractor: C-8, C-39, C-14C/D/E/J, C-3D</div>
                <div>$5M Coverage Limits</div>
                <div>AAADM Certified</div>
                <div>Founded 2000</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Hearth &amp; Home Specialties, Inc. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm font-semibold tracking-wide">
              Licensed &amp; Insured &middot; Las Vegas, NV
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
