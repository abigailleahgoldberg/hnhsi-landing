import Image from "next/image";

const campaigns = [
  {
    id: "a",
    title: "The Only One",
    objective: "Awareness and Positioning",
    target: "Commercial property managers, building owners, facility directors, GCs",
    ads: [
      {
        name: "The Manifesto",
        platform: "Facebook / Instagram Feed",
        headline: "Every Exterior Solution. One Company. Only in Vegas.",
        cta: "Get Quote",
        copy: `Name another company in Las Vegas that does all of this.

Storefront glass & aluminum framing
Commercial roll-up doors
Fire doors & pedestrian entries
Loading dock equipment & levelers
Restroom partitions & accessories
Security gates & iron work
Locksmith & AAADM certification
Automatic ADA door operators

There isn't one.

Hearth & Home Specialties is the only full-service commercial exterior solutions provider in Las Vegas. 25 years. 4 contractor licenses. One call, and all your needs are managed.

Stop juggling contractors. Start with us.`,
        creative: "Dark background. Each service appears one at a time with checkmark animation. Final frame: logo + tagline. Orange brand accents. Works as static image or 15s animated text reveal."
      },
      {
        name: "The Math",
        platform: "Facebook / Instagram Feed",
        headline: "5 Contractors or 1. You Choose.",
        cta: "Learn More",
        copy: `The math on your current setup:

1 glass contractor
1 door company
1 dock specialist
1 restroom vendor
1 gate installer
= 5 invoices. 5 schedules. 5 headaches.

Or:

1 company. 1 invoice. 1 point of contact.
= Hearth & Home Specialties.

Las Vegas's only full-service commercial exterior solutions provider. 25+ years. Licensed up to $5M.

Do the math. Then call us.`,
        creative: "Split screen: left shows 5 trucks/invoices piling up in muted gray tones. Right shows single HNHSI truck in clean orange tones. Also works as carousel: 5 cards for each vendor, final card is the punchline."
      },
      {
        name: "The Rolodex",
        platform: "Facebook / Instagram Stories & Reels",
        headline: "One Call Covers It All.",
        cta: "Get Quote",
        copy: `Your glass guy can't do doors.
Your door guy can't do docks.
Your dock guy can't do restrooms.
Your restroom guy can't do gates.

We do all of it.
The only company in Las Vegas that does.
Hearth & Home Specialties. One call covers it all.`,
        creative: "9:16 vertical. 15 to 20 seconds. Quick cuts between real job site footage with bold text overlay on each. Trending audio or clean beat that builds."
      }
    ]
  },
  {
    id: "b",
    title: "Behind the Build",
    objective: "Trust-building and Authority",
    target: "Both commercial and residential audiences",
    ads: [
      {
        name: "The Founder Story",
        platform: "Facebook / Instagram Feed",
        headline: "25 Years of Saying Yes.",
        cta: "Our Story",
        copy: `In 2000, Danny Check started Hearth & Home Specialties with a simple idea: What if one company could handle everything a building needs on the outside?

25 years later, we're the only company in Las Vegas that actually does it.

Storefront glass. Commercial doors. Loading docks. Restrooms. Gates. Fireplaces. Custom glass. Windows.

We didn't get here by accident. We got here by saying yes when others said "that's not what we do."

7,500+ clients later, we're still saying yes.`,
        creative: "Photo of Danny or the team on a job site. Authentic, not overproduced. Orange overlay bar at bottom with tagline."
      },
      {
        name: "Project Showcase",
        platform: "Facebook / Instagram Carousel",
        headline: "This Is What Full-Service Looks Like.",
        cta: "Get Quote",
        copy: `Another day, another complete exterior transformation.

Card 1: Storefront glass, custom cut and installed
Card 2: Commercial roll-up doors, repaired and operational
Card 3: Loading dock leveler, brand new installation
Card 4: Restroom partitions & accessories, full buildout
Card 5: All by one company. All by Hearth & Home.

This is what "full-service" actually looks like.`,
        creative: "5-card carousel. Each card: real project photo with service name overlaid. Final card is CTA. Repeatable format: new project = new carousel."
      }
    ]
  },
  {
    id: "c",
    title: "Upgrade Your Space",
    objective: "Residential Lead Generation",
    target: "Las Vegas homeowners, designers, builders, remodelers",
    ads: [
      {
        name: "The Showroom Invite",
        platform: "Facebook / Instagram Feed",
        headline: "See It. Feel It. Install It.",
        cta: "Get Directions",
        copy: `Before you pick a fireplace from a catalog, come see one in person.

Our Las Vegas showroom has top gas and electric fireplace brands on live display. Walk in, feel the heat, see the design, then let us install it.

We've been putting fireplaces in Las Vegas homes since 2000. Indoor. Outdoor. Electric. Gas logs. Patio heaters. Repairs and parts too.

Open M to F, 7:30am to 4:00pm.
3555 W. Quail Ave #A, Las Vegas.

Come see what's possible.`,
        creative: "Warm, atmospheric shot of a lit fireplace in a modern room. Inviting, not salesy."
      },
      {
        name: "Glass Transformation",
        platform: "Facebook / Instagram Before/After Carousel",
        headline: "Same Space. Totally Different Feel.",
        cta: "Book Consultation",
        copy: `The fastest way to make your bathroom feel twice the size? Custom glass.

Frameless shower enclosures. Floor-to-ceiling mirrors. Glass partitions that open up every room.

Swipe to see real transformations:

Card 1: Before, dated bathroom
Card 2: After, frameless glass shower enclosure
Card 3: Before, dim staircase
Card 4: After, glass railing system flooding light in
Card 5: Your home. Transformed.`,
        creative: "Before/after carousel with clean transitions. Warm lighting, real project photography."
      }
    ]
  },
  {
    id: "d",
    title: "Emergency & Compliance",
    objective: "Capture High-Intent Commercial Leads",
    target: "Property managers and facility directors with urgent needs",
    ads: [
      {
        name: "The Broken Door",
        platform: "Facebook / Instagram Feed",
        headline: "Broken? We Fix It. All of It.",
        cta: "Call Now",
        copy: `Your roll-up door is jammed. Your storefront glass cracked overnight. Your dock leveler won't engage.

You don't have time to call around.

Hearth & Home Specialties. One call.

We handle commercial door repair, dock equipment, storefront glass, fire doors, automatic doors, and more.

Licensed. Insured. 25 years in Las Vegas.
Call now: (702) 474-4099`,
        creative: "Bold, high-contrast. Red/orange urgency colors. Large phone number. Simple and direct."
      },
      {
        name: "The Compliance Clock",
        platform: "Facebook / Instagram Feed",
        headline: "Stay Compliant. Stay Open.",
        cta: "Schedule Inspection",
        copy: `Your fire doors need to be compliant.
Your automatic doors need AAADM certification.
Your dock equipment needs to pass inspection.

When's the last time you checked?

Hearth & Home Specialties handles fire door repair, AAADM certification, ADA door operators, and full commercial door service.

Don't wait for the inspector to tell you. Get ahead of it.`,
        creative: "Clean design with compliance checklist visual. Urgency without being alarmist. Professional tone."
      }
    ]
  },
  {
    id: "e",
    title: "Vegas Knows",
    objective: "Credibility and Retargeting",
    target: "All audiences, especially site visitors",
    ads: [
      {
        name: "The Numbers",
        platform: "Facebook / Instagram Feed",
        headline: "The Numbers Speak.",
        cta: "See Our Work",
        copy: `25 years.
7,500+ clients.
4 contractor licenses.
$5,000,000 in coverage.
1 company.

Hearth & Home Specialties has been building, installing, and repairing commercial and residential exteriors since 2000.

Las Vegas trusts us. You should too.`,
        creative: "Animated counter or bold typography. Each number appears on screen with weight. Minimal design, maximum impact."
      },
      {
        name: "Review Spotlight",
        platform: "Facebook / Instagram Feed",
        headline: "See Why Las Vegas Trusts Us.",
        cta: "Read Reviews",
        copy: `"It's becoming more rare to have a company who will be persistent and honor what you purchased when there are bumps in the road, but hearth & home does just that..."

D. Stone, Google Review

7,500+ Las Vegas locals trust Hearth & Home Specialties for fireplaces, custom glass, and commercial services.

See why at hnhsi-inc.com`,
        creative: "Pair with a project photo related to the customer's service. Quote in large text, star rating graphic, warm background. Repeatable: pull one real Google review per post."
      }
    ]
  }
];

export default function CampaignsPage() {
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
              href="/"
              className="text-[#1a1a1a] font-semibold text-sm hidden sm:block hover:text-[#E8730C] transition-colors"
            >
              Landing Page
            </a>
            <a
              href="tel:7024744099"
              className="bg-[#E8730C] hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded text-sm transition-all duration-200 tracking-wide"
            >
              (702) 474-4099
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#fafafa] py-16 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-[#E8730C]/10 border border-[#E8730C]/30 text-[#E8730C] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            Social Media Marketing Playbook
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#1a1a1a] leading-tight mb-4">
            Campaign Creative &amp; Ad Copy
          </h1>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            Five campaigns with 11 ready-to-deploy ads. Full copy, creative direction, and platform-specific formatting for Hearth &amp; Home Specialties.
          </p>
        </div>
      </section>

      {/* CAMPAIGNS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-20">
          {campaigns.map((campaign) => (
            <div key={campaign.id}>
              {/* Campaign Header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#E8730C] text-white text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full">
                    Campaign {campaign.id.toUpperCase()}
                  </span>
                  <span className="text-[#888] text-sm">{campaign.objective}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-2">
                  &ldquo;{campaign.title}&rdquo;
                </h2>
                <p className="text-[#666] text-sm">
                  <strong>Target:</strong> {campaign.target}
                </p>
              </div>

              {/* Ads Grid */}
              <div className="grid gap-8">
                {campaign.ads.map((ad, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {/* Ad Header */}
                    <div className="bg-[#fafafa] border-b border-gray-100 px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-black text-[#1a1a1a]">{ad.name}</h3>
                        <p className="text-sm text-[#888]">{ad.platform}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="bg-[#E8730C]/10 text-[#E8730C] text-xs font-bold px-3 py-1 rounded-full border border-[#E8730C]/20">
                          {ad.cta}
                        </span>
                      </div>
                    </div>

                    {/* Ad Content */}
                    <div className="p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Copy */}
                        <div>
                          <div className="text-xs font-bold text-[#E8730C] tracking-widest uppercase mb-3">Ad Copy</div>
                          <div className="bg-[#fafafa] rounded-xl p-5 border border-gray-100">
                            <p className="text-sm text-[#333] leading-relaxed whitespace-pre-line">{ad.copy}</p>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <span className="text-xs font-bold text-[#888] tracking-wider uppercase">Headline:</span>
                            <span className="text-sm font-black text-[#1a1a1a]">{ad.headline}</span>
                          </div>
                        </div>

                        {/* Creative Direction */}
                        <div>
                          <div className="text-xs font-bold text-[#E8730C] tracking-widest uppercase mb-3">Creative Direction</div>
                          <div className="bg-[#fafafa] rounded-xl p-5 border border-gray-100">
                            <p className="text-sm text-[#555] leading-relaxed">{ad.creative}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUDGET RECOMMENDATIONS */}
      <section className="bg-[#f5f5f5] py-16 px-4 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-8 text-center">
            Recommended Budget Allocation
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Awareness (Campaigns A, B, E)", range: "$20 to $50/day", note: "Broad targeting, Las Vegas DMA" },
              { label: "Lead Gen (Campaigns C, D)", range: "$30 to $75/day", note: "Narrow targeting with lead forms" },
              { label: "Retargeting (Campaign E)", range: "$10 to $20/day", note: "Website visitor audiences" },
            ].map((budget, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-[#E8730C] font-black text-xl mb-2">{budget.range}</div>
                <div className="text-[#1a1a1a] font-semibold text-sm mb-1">{budget.label}</div>
                <div className="text-[#888] text-xs">{budget.note}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#888] text-sm mt-8">
            Start with Campaign A (&ldquo;The Only One&rdquo;) to establish positioning, then layer in the others.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Image
              src="/logo.png"
              alt="Hearth & Home Specialties"
              width={120}
              height={48}
              className="h-10 w-auto"
            />
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Hearth &amp; Home Specialties, Inc. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm font-semibold">
              Licensed &amp; Insured &middot; Las Vegas, NV
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
