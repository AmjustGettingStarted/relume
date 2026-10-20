"use client";
import { useState, type FormEvent } from "react";

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
  ["AI copywriting", "Start with clear, editable copy that you can refine for your audience."],
];

const showcaseSites = [
  {
    name: "Hospitality",
    description: "A warm, welcoming restaurant website.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
    alt: "Restaurant dining room set for an evening service",
  },
  {
    name: "Architecture",
    description: "A clean portfolio for a modern studio.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=85",
    alt: "Modern white architecture framed against a blue sky",
  },
  {
    name: "Wellness",
    description: "A calm digital home for a wellness brand.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
    alt: "Sunlit spa interior with a tranquil pool",
  },
  {
    name: "Technology",
    description: "A bold landing page for a product team.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    alt: "Laptop and desk setup in a bright creative workspace",
  },
];

const footerGroups = [
  {
    title: "Product",
    links: [
      ["AI Sitemap", "#sitemap"],
      ["Wireframes", "#wireframes"],
      ["Component library", "#library"],
      ["Get started", "#prompt"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["How it works", "#products"],
      ["Website showcase", "#showcase"],
      ["Project pricing", "#pricing"],
      ["Start a project", "#prompt"],
    ],
  },
  {
    title: "Community",
    links: [
      ["Customer stories", "#community"],
      ["Reviews", "#community"],
      ["Featured websites", "#showcase"],
      ["Explore the library", "#library"],
    ],
  },
  {
    title: "About this demo",
    links: [
      ["What is included", "#products"],
      ["Demo limitations", "#demo-info"],
      ["Back to top", "#top"],
    ],
  },
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

function Mock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mock">
      <div className="mock-heading">
        <strong>{title}</strong>
        <span>Preview</span>
      </div>
      <div className="mock-list">
        {items.map((item, i) => (
          <div key={item} className="mock-row">
            <span className="mock-number">{String(i + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="mock-footer">
        <span>Relume project</span>
        <span aria-hidden="true">↗</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [generated, setGenerated] = useState(false);

  function handleGenerate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGenerated(true);
  }

  function useExample() {
    setPrompt("A neighborhood bakery serving fresh bread and coffee");
    setGenerated(false);
  }

  return (
    <main>
      <nav className="nav" id="top" aria-label="Main navigation">
        <div className="nav-left">
          <a className="logo" href="#top" aria-label="Relume Clone home">● Relume</a>
          <a href="#products">Products</a>
          <a href="#community">Community</a>
          <a href="#library">Learn</a>
          <a href="#pricing">Pricing</a>
          <a href="#showcase">Showcase</a>
        </div>
        <div className="nav-right">
          <a href="#products">How it works</a>
          <a className="btn btn-dark" href="#prompt">Start for free</a>
        </div>
      </nav>

      <section className="hero">
        <div id="products" className="anchor-target" />
        <h1>Websites designed &amp; built faster with AI</h1>
        <p>Use AI as your design ally, not as a replacement. Effortlessly generate sitemaps and wireframes for marketing websites in minutes.</p>
        <form className="prompt-wrap" id="prompt" onSubmit={handleGenerate}>
          <div className="prompt">
            <input
              aria-label="Describe your company"
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
                setGenerated(false);
              }}
              placeholder="Describe a company in a sentence or two…"
              required
            />
            <button className="btn btn-purple" type="submit">✦ Generate</button>
          </div>
        </form>
        <button className="example-link" type="button" onClick={useExample}>Try an example</button>
        {generated && (
          <div className="generated-preview" role="status">
            <div>
              <strong>Starter sitemap preview</strong>
              <span>Based on: {prompt}</span>
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
            <small>This is a front-end demo preview, not an AI-generated sitemap.</small>
          </div>
        )}

        <div className="tool-cards">
          {tools.map((t) => (
            <article key={t.title} className={`tool ${t.dark ? "dark" : ""}`}>
              <span className="pill">{t.tag}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <Mock
                title={t.title === "Sitemaps" ? "Bakery website" : t.title}
                items={t.items.length ? t.items : ["Navigation", "Hero section", "Feature grid"]}
              />
            </article>
          ))}
        </div>

        <p className="trusted">Used by leading brands and companies from across the globe</p>
        <div className="logos">{logos.map((l) => <span key={l}>{l}</span>)}</div>
      </section>

      <h2 className="ship">Ship <span>faster</span></h2>

      <section className="split" id="sitemap">
        <div>
          <p className="kicker">Description to</p>
          <h2>Sitemap ✦</h2>
          <p className="lead">The best way to start off your new project. Use AI to map out all your key pages with just a few sentences about your company. Effortlessly create a complete sitemap in record seconds, not hours.</p>
          <div className="features">
            {sitemapFeatures.map(([t, d]) => <div key={t}><h4>{t}</h4><p>{d}</p></div>)}
          </div>
        </div>
        <div className="panel"><Mock title="Neighborhood bakery" items={["Home", "Our story", "Menu", "Visit us", "Contact"]} /></div>
      </section>

      <section className="split reverse" id="wireframes">
        <div className="panel"><Mock title="Homepage wireframe" items={["Announcement bar", "Navigation", "Hero and call to action", "Featured menu", "Location and hours"]} /></div>
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
        <div className="card"><div className="panel"><Mock title="Project feedback" items={["Maya: The new hero feels great", "Alex: Approved for review"]} /></div><h3>Cross-team Collaboration</h3><p>Collaborate with your team and clients. Share projects, streamline feedback, and get designs approved.</p></div>
        <div className="card"><div className="panel"><Mock title="Export options" items={["Copy page to Figma", "Copy page to Webflow", "Keep components responsive"]} /></div><h3>Export to Figma &amp; Webflow</h3><p>Keep working in the tools you already love. Copy a page or component and take it into your design or build workflow.</p></div>
      </section>

      <section className="showcase" id="showcase">
        <div className="showcase-grid">
          {showcaseSites.map((site) => (
            <article className="showcase-card" key={site.name}>
              <img src={site.image} alt={site.alt} loading="lazy" />
              <div className="showcase-caption">
                <strong>{site.name}</strong>
                <span>{site.description}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="showcase-foot">
          <h2>Designed &amp; built<br />Using Relume</h2>
          <div>
            <p>Explore a few website concepts across hospitality, architecture, wellness, and technology.</p>
            <a className="btn btn-light" href="#community">See customer stories</a>
            <a className="btn btn-ghost" href="#library">Explore the library</a>
          </div>
        </div>
      </section>

      <section className="hood" id="library">
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
              <a className="btn btn-dark wide" href="#prompt">{b}</a>
            </div>
          ))}
        </div>
      </section>

      <section className="trial" id="pricing">
        <div><h2>Trial your next project on Premium</h2><p>Our plans cost less than 5% of your next project and can save you half the time to deliver it.</p></div>
        <div className="trial-list">
          <div>Site Builder<small>Build multiple projects with no limitations</small></div>
          <div>Relume Figma Library<small>Unlock the Premium Figma kit and more</small></div>
          <div>Relume Webflow Library<small>Unlock the full library in Webflow with exporting</small></div>
          <a className="btn btn-light wide" href="#prompt">Try the demo</a>
        </div>
      </section>

      <section className="social" id="community">
        <div className="social-top">
          <h2>200,000+</h2>
          <div>
            <p>Join our growing community of 8k+ who have converted to Relume</p>
            <a className="btn btn-dark" href="#showcase">Explore the showcase</a>
            <a className="btn btn-ghost-dark" href="#community">Read the reviews</a>
          </div>
        </div>
        <p className="muted">Designers have built with Relume</p>
        <div className="quotes">
          {quotes.map(([h, q]) => <blockquote key={h}><p>{q}</p><cite>{h}</cite></blockquote>)}
        </div>
      </section>

      <section className="cta">
        <h2>Experience the power of our AI Site builder today</h2>
        <a className="btn btn-purple" href="#prompt">Try the demo</a>
        <small>Explore a sample website brief and sitemap preview.</small>
      </section>

      <footer id="demo-info">
        <div className="cols">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h5>{group.title}</h5>
              {group.links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
            </div>
          ))}
        </div>
        <p className="demo-note">This independent frontend demo is not affiliated with or endorsed by Relume. Product actions are illustrative and do not connect to Relume services.</p>
        <div className="foot-bottom"><a className="logo" href="#top">● Relume</a><small>Relume Clone · Frontend demo</small></div>
      </footer>
    </main>
  );
}
