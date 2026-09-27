import { useRef, useState, type FormEvent } from 'react';
import { ArrowRight, ArrowUpRight, Mail, Phone, MapPin, Check, Loader2, AlertCircle } from 'lucide-react';
import { personal } from '@/data/personal';

const INQUIRY_TYPES = [
  'Political Strategy',
  'Civic Technology',
  'Electoral Data & AI',
  'Organisational Systems',
  'Field Research',
] as const;

export function Contact() {
  const ref = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Political Strategy',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          'bot-field': '',
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          inquiryType: 'Political Strategy',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative scroll-mt-16 md:scroll-mt-20 py-10 sm:py-14 lg:py-18 px-4 sm:px-6 md:px-10 lg:px-14 bg-[#0A1020] text-slate-100 border-t border-white/10"
    >
      {/* Soft warm-gold ambient background glow */}
      <div
        className="absolute top-1/3 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full pointer-events-none blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-[1400px] relative z-10">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 lg:mb-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[var(--color-gold)]" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[var(--color-gold)] font-semibold">
              04 · CONTACT &amp; ENGAGEMENT
            </span>
          </div>

          <h2 className="editorial-serif text-2xl sm:text-3xl md:text-5xl font-normal tracking-tight text-white mb-2 leading-[1.08] sm:leading-[1.06]">
            Initiate a Strategic Dialogue
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-light">
            Available for political communication strategy, civic technology platforms, governance research, and structured digital workflows.
          </p>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start">
          {/* Left Column — Direct Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            {status === 'success' ? (
              <div className="p-6 sm:p-8 bg-[#111A30]/80 border border-[var(--color-gold)]/40 rounded-sm flex flex-col items-center text-center gap-3.5 shadow-lg">
                <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/15 border border-[var(--color-gold)] flex items-center justify-center text-[var(--color-gold)]">
                  <Check size={24} />
                </div>
                <h3 className="editorial-serif text-2xl sm:text-3xl text-white font-normal">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light max-w-md leading-relaxed">
                  Thank you for reaching out. Your dispatch has been received and routed directly to Sanskar Yadav. You will receive a response shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-secondary-dark mt-2 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono tracking-[0.14em] uppercase rounded-sm cursor-pointer"
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="p-4 sm:p-5 lg:p-6 flex flex-col gap-3 sm:gap-3.5 bg-[#111A30]/60 border border-white/10 rounded-sm"
              >
                {/* Hidden Inputs for Netlify Forms & Spam Protection */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="inquiryType" value={formData.inquiryType} />

                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-0.5">
                  <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.16em] uppercase text-slate-300 font-medium">
                    DIRECT INQUIRY
                  </span>
                </div>

                {status === 'error' && (
                  <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-sm flex items-start gap-2.5 text-xs text-red-200">
                    <AlertCircle size={15} className="text-red-400 shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span>Transmission failed. Please try submitting again or email directly:</span>
                      <a href={`mailto:${personal.email}`} className="text-[var(--color-gold)] hover:underline font-mono">
                        {personal.email}
                      </a>
                    </div>
                  </div>
                )}

                {/* Name & Email Inputs Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="contact-name"
                      className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.1em] text-slate-300 font-medium"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your Name / Organization"
                      className="w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm transition-colors duration-200 outline-none bg-[#0D1527] border border-white/15 focus:border-[var(--color-gold)] text-white placeholder:text-slate-500 rounded-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="contact-email"
                      className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.1em] text-slate-300 font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm transition-colors duration-200 outline-none bg-[#0D1527] border border-white/15 focus:border-[var(--color-gold)] text-white placeholder:text-slate-500 rounded-sm"
                    />
                  </div>
                </div>

                {/* Inquiry Type Selection */}
                <div className="flex flex-col gap-1">
                  <span
                    id="contact-inquiry-label"
                    className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.1em] text-slate-300 font-medium"
                  >
                    Scope / Inquiry Type
                  </span>
                  <div
                    role="radiogroup"
                    aria-labelledby="contact-inquiry-label"
                    className="flex flex-wrap gap-1.5 pt-0.5"
                  >
                    {INQUIRY_TYPES.map((type) => {
                      const selected = formData.inquiryType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          onClick={() =>
                            setFormData({ ...formData, inquiryType: type })
                          }
                          className={`px-2.5 py-1 text-[10px] sm:text-[11px] font-sans tracking-[0.04em] transition-all duration-200 rounded-sm cursor-pointer ${
                            selected
                              ? 'bg-[var(--color-gold)] text-[#0A1020] font-semibold'
                              : 'bg-[#0D1527] text-slate-300 border border-white/10 hover:border-[var(--color-gold)]'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-message"
                    className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.1em] text-slate-300 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Outline the public problem, project requirements, or strategic scope..."
                    className="w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm transition-colors duration-200 outline-none resize-none bg-[#0D1527] border border-white/15 focus:border-[var(--color-gold)] text-white placeholder:text-slate-500 rounded-sm"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-0.5">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary-gold inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 text-xs font-mono tracking-[0.14em] uppercase rounded-sm cursor-pointer shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column — Verified Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-3.5">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.16em] uppercase text-slate-300 font-medium">
                VERIFIED DIRECT CHANNELS
              </span>
            </div>

            <div className="flex flex-col gap-2.5 sm:gap-3">
              {/* Email Record */}
              <div className="p-3.5 sm:p-4 flex flex-col gap-0.5 bg-[#111A30]/60 border border-white/10 rounded-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-[var(--color-gold)]" />
                    <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.14em] text-slate-400 font-medium">
                      PRIMARY EMAIL
                    </span>
                  </div>
                  <ArrowUpRight size={13} className="text-slate-400" />
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs sm:text-sm font-mono tracking-[0.05em] hover:text-[var(--color-gold)] transition-colors pt-0.5 text-white"
                >
                  {personal.email}
                </a>
              </div>

              {/* Phone Record */}
              {personal.phone && (
                <div className="p-3.5 sm:p-4 flex flex-col gap-0.5 bg-[#111A30]/60 border border-white/10 rounded-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Phone size={13} className="text-[var(--color-gold)]" />
                      <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.14em] text-slate-400 font-medium">
                        PHONE / WHATSAPP
                      </span>
                    </div>
                    <ArrowUpRight size={13} className="text-slate-400" />
                  </div>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-mono tracking-[0.05em] hover:text-[var(--color-gold)] transition-colors pt-0.5 text-white"
                  >
                    {personal.phone}
                  </a>
                </div>
              )}

              {/* Location Record */}
              <div className="p-3.5 sm:p-4 flex flex-col gap-0.5 bg-[#111A30]/60 border border-white/10 rounded-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-[var(--color-gold)]" />
                  <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.14em] text-slate-400 font-medium">
                    LOCATION
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-sans tracking-[0.02em] pt-0.5 text-slate-200">
                  {personal.location}
                </span>
              </div>

              {/* Social Profiles */}
              {personal.links.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} on ${link.platform}`}
                  className="group p-3.5 sm:p-4 flex items-center justify-between bg-[#111A30]/60 border border-white/10 hover:border-[var(--color-gold)] transition-colors duration-300 rounded-sm"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.14em] text-slate-400 font-medium">
                      {link.platform}
                    </span>
                    <span className="text-xs sm:text-sm font-sans tracking-[0.02em] text-white">
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-slate-400 group-hover:text-[var(--color-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
