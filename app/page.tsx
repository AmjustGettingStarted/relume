"use client";
import { useState } from "react";

const tools = [
  { tag: "Online", title: "Sitemaps", text: "From a simple company description to a fully fleshed out sitemap generated with AI to help you get a birds eye view.", items: ["Navbar", "Hero Header Section", "Feature Section", "Features List Section"] },
  { tag: "Online", title: "UX Wireframes", text: "Turn your Sitemap into wires in one click generating real components with AI, ready for feedback.", items: [] },
  { tag: "Coming soon", title: "UI Styleguide", text: "Drop your inspo and watch AI turn your wires into polished designs with a ready to use design system for dev.", items: [], dark: true },
];

const logos = ["headspace", "Dapper", "NIKE", "Webflow", "Jasper", "nansen"];

const sitemapFeatures = [
  ["Map out new content", "Describe your pages and sections for any website in any industry."],
  ["Control the final edit", "Drag, add, and remove sections to get the final flow locked down."],
  ["Scope projects better", "Starting off with a sitemap keeps project scope sharp for your team."],
  ["Smart tagging", "Tag your sections as global or add visitors to manage pages."],
];

const wireFeatures = [
  ["No AI gimmicks", "Utilize our library of over 1000+ real components built by humans."],
  ["Ready to export", "Copy any wireframe or page and paste directly to Figma or Webflow."],
  ["Editing super powers", "Edit copy and view wireframes from our library. You're in control, not the AI."],
  ["AI copywriting", "NP loram ipsum. Wireframes with copy, transferred into any language."],
];

const quotes = [
  ["@calmwind", "Wow, this is absolutely incredible – huge props to the team for bringing so many superpowers to more Webflow visual developers!"],
  ["@SoyBella", "Finally an AI tool that I will ACTUALLY include as part of my workflow. I love how seamless it is from start to finish."],
  ["@DanPetty", "This is the most exciting AI website product I've seen – wireframes in minutes → Full copy writing, the way a web product designer should do."],
  ["@gabehayes", "Very excited for Relume's new AI-powered generative messaging and positioning 'to empower you, not replace you.' Strategic language to get even skeptical designers, who believe AI is the end of their jobs, to jump in."],
  ["@rrabrock", "Bro what?! Are you telling I was able to produce all of this with just that, a sitemap? As soon as that happened, I signed up for the highest tier plan RIGHT AWAY. If you're a web designer, it's honestly a no-brainer that you have to sign up for Relume."],
  ["@kay_s", "Yoooooooooo, this is one of my favorite teams I've seen evolve in the developer space. They're carving out a tremendous product developers can vibe in when being able to generate web concepts."],
  ["@bryant", "This is the most exciting AI website product I've seen — great work Relume team! Looks especially powerful for serious web professionals looking to build a site for scale."],
  ["@KarimAbdelen", "The new @relume_io AI Sitemap and Wireframe tools are game changers! This can absolutely speed up our development and will change how we build and design Webflow sites faster."],
];

function Mock({ rows = 3 }: { rows?: number }) {
  return (
    <div className="mock">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="mock-row" />
      ))}
    </div>
  );
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  return (
    <main>
      <nav className="nav">
        <div className="nav-left">
          <span className="logo">● Relume</span>
          <a>Products ▾</a><a>Community ▾</a><a>Learn</a><a>Pricing</a><a>Careers <em>Hiring</em></a>
        </div>
        <div className="nav-right">
          <a>Log in</a>
          <button className="btn btn-dark">Start for free</button>
        </div>
      </nav>

      <section className="hero">
        <h1>Websites designed &amp; built faster with AI</h1>
        <p>Use AI as your design ally, not as a replacement. Effortlessly generate sitemaps and wireframes for marketing websites in minutes.</p>
        <div className="prompt-wrap">
          <div className="prompt">
            <input value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Describe a company in a sentence or two…" />
            <button className="btn btn-purple">✦ Generate</button>
          </div>
        </div>
        <small>Take it for a spin with an example</small>

        <div className="tool-cards">
          {tools.map((t) => (
            <article key={t.title} className={`tool ${t.dark ? "dark" : ""}`}>
              <span className="pill">{t.tag}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <Mock rows={t.items.length || 3} />
            </article>
          ))}
        </div>

        <p className="trusted">Used by leading brands and companies from across the globe</p>
        <div className="logos">{logos.map((l) => <span key={l}>{l}</span>)}</div>
      </section>

      <h2 className="ship">Ship <span>faster</span></h2>

      <section className="split">
        <div>
          <p className="kicker">Description to</p>
          <h2>Sitemap ✦</h2>
          <p className="lead">The best way to start off your new project. Use AI to map out all your key pages with just a few sentences about your company. Effortlessly create a complete sitemap in record seconds, not hours.</p>
          <div className="features">
            {sitemapFeatures.map(([t, d]) => <div key={t}><h4>{t}</h4><p>{d}</p></div>)}
          </div>
        </div>
        <div className="panel"><Mock rows={5} /></div>
      </section>

      <section className="split reverse">
        <div className="panel"><Mock rows={5} /></div>
        <div>
          <p className="kicker">Sitemap to</p>
          <h2>Wireframes</h2>
          <p className="lead">Achieve your first draft in the first minute. Sit back and watch AI magically turn your Sitemap into wireframes in one click generating real component libraries with AI. Getting sign off has never been so easy.</p>
          <div className="features">
            {wireFeatures.map(([t, d]) => <div key={t}><h4>{t}</h4><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="duo">
        <div className="card"><div className="panel"><Mock rows={2} /></div><h3>Cross-team Collaboration</h3><p>Collaborate with the team and clients. Share projects and stream-line communication and get your designs approved.</p></div>
        <div className="card"><div className="panel"><Mock rows={3} /></div><h3>Export to Figma &amp; Webflow</h3><p>Site Builder works with the tools you already love and respects your process. Copy any element or page and paste wherever you need.</p></div>
      </section>

      <section className="showcase">
        <div className="showcase-grid">{Array.from({ length: 4 }).map((_, i) => <div key={i} />)}</div>
        <div className="showcase-foot">
          <h2>Designed &amp; built<br />Using Relume</h2>
          <div>
            <p>Over 250,000 websites have been designed and built using Relume. Here are a few of our favorites.</p>
            <button className="btn btn-light">See full showcase</button>
            <button className="btn btn-ghost">Become an Expert</button>
          </div>
        </div>
      </section>

      <section className="hood">
        <p className="kicker center">Relume Library</p>
        <h2 className="center">Under the hood</h2>
        <p className="center muted">Site Builder utilizes a built-in design system and component library of 1000+ components made for Figma &amp; Webflow.</p>
        <div className="duo">
          {[
            ["Webflow Library", "Save hours of dev time with over 1k responsive Webflow components. Get monthly updates with new components and improvements.", "View Relume Library"],
            ["Figma Library", "Get access to the Figma version of the Relume Webflow library with over 1k components all with mobile variants included.", "Try it free for 7 days"],
          ].map(([t, d, b]) => (
            <div className="lib" key={t}>
              <div className="lib-hero">{t}</div>
              <h3>{t}</h3><p>{d}</p>
              <button className="btn btn-dark wide">{b}</button>
            </div>
          ))}
        </div>
      </section>

      <section className="trial">
        <div><h2>Trial your next project on Premium</h2><p>Our plans cost less than 5% of your next project and can save you half the time to deliver it.</p></div>
        <div className="trial-list">
          <div>Site Builder<small>Build multiple projects with no limitations</small></div>
          <div>Relume Figma Library<small>Unlock the Premium Figma kit and more</small></div>
          <div>Relume Webflow Library<small>Unlock the full library in Webflow with exporting</small></div>
          <button className="btn btn-light wide">Try it free for 7 days</button>
        </div>
      </section>

      <section className="social">
        <div className="social-top">
          <h2>200,000+</h2>
          <div>
            <p>Join our growing community of 8k+ who have converted to Relume</p>
            <button className="btn btn-dark">Join our Community</button>
            <button className="btn btn-ghost-dark">View more reviews</button>
          </div>
        </div>
        <p className="muted">Designers have built with Relume</p>
        <div className="quotes">
          {quotes.map(([h, q]) => <blockquote key={h}><p>{q}</p><cite>{h}</cite></blockquote>)}
        </div>
      </section>

      <section className="cta">
        <h2>Experience the power of our AI Site builder today</h2>
        <button className="btn btn-purple">Try the Site Builder</button>
        <small>Build a website in under 5 minutes. No risk.</small>
      </section>

      <footer>
        <div className="cols">
          {[
            ["Product", ["What's New", "AI Site Builder", "Webflow Library", "Figma Library", "Chrome Extension", "Libraries", "Pricing"]],
            ["Power ups", ["Relume Icons", "Relume Layout", "Color Palettes", "Art Studios", "Relume University", "Webflow Style Guide"]],
            ["Community", ["Community Love", "Showcase", "Inspiration Feed", "Hiring Board", "Request Components", "Provide Feedback"]],
            ["Company", ["Careers", "Support", "Terms & Conditions", "Privacy Policy", "Licensing Agreement", "Cookie Settings"]],
          ].map(([h, links]) => (
            <div key={h as string}><h5>{h as string}</h5>{(links as string[]).map((l) => <a key={l}>{l}</a>)}</div>
          ))}
        </div>
        <div className="foot-bottom"><span className="logo">● Relume</span><small>© 2024 Relume, All rights reserved</small></div>
      </footer>
    </main>
  );
}
