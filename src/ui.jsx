/* ==================================================================
   ui.jsx — icons, small primitives, and reusable cards.
   ================================================================== */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ---------------- icons ---------------- */

const Ico = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);

export const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 20c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 19 5.8a4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.8 0C5.8 1.9 4.7 2.2 4.7 2.2A4.9 4.9 0 0 0 4.6 5.8 5.2 5.2 0 0 0 3.2 9.4c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V23"/>
  </svg>
);

export const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05A4.2 4.2 0 0 1 16.6 8.7c4 0 4.7 2.5 4.7 5.8V21h-4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9Z"/>
  </svg>
);

export const PhoneIcon = ({ size = 18 }) => (
  <Ico size={size} d={<><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></>} />
);

export const Chevron = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
       strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 6, opacity: 0.7 }}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Arrow = ({ size = 15 }) => (
  <Ico size={size} d={<><path d="M5 12h14M13 6l6 6-6 6"/></>} />
);

export const BackArrow = ({ size = 14 }) => (
  <Ico size={size} d={<><path d="M19 12H5M11 18l-6-6 6-6"/></>} />
);

export const DownloadIcon = ({ size = 15 }) => (
  <Ico size={size} d={<><path d="M12 3v12M7 11l5 5 5-5M4 21h16"/></>} />
);

export const ExternalIcon = ({ size = 13 }) => (
  <Ico size={size} d={<><path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></>} />
);

export const MailIcon = ({ size = 18 }) => (
  <Ico size={size} d={<><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6.5 9 6.5 9-6.5"/></>} />
);

/* ---------------- primitives ---------------- */

export function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal${shown ? " in" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* Sets <title> and the meta description for each route. */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}

/* Serif title on the left, optional mono eyebrow on the right, hairline below. */
export const SectionHead = ({ title, eyebrow }) => (
  <>
    <div className="sec-head">
      <h2>{title}</h2>
      {eyebrow && <span className="sec-eyebrow">{eyebrow}</span>}
    </div>
    <hr className="sec-rule" />
  </>
);

export const PageHead = ({ title, eyebrow, lead }) => (
  <>
    <header className="page-head">
      <div className="sec-head">
        <h1>{title}</h1>
        {eyebrow && <span className="sec-eyebrow">{eyebrow}</span>}
      </div>
      {lead && <p>{lead}</p>}
    </header>
    <hr className="sec-rule" />
  </>
);

/* Smaller heading used further down a page. */
export const SubHead = ({ title, eyebrow }) => (
  <>
    <div className="sub-head">
      <h2>{title}</h2>
      {eyebrow && <span className="sec-eyebrow">{eyebrow}</span>}
    </div>
    <hr className="sub-rule" />
  </>
);

/* "Every award →" style link that sits below a section. */
export const MoreLink = ({ to, children }) => (
  <Link className="more-link" to={to}>{children} <Arrow /></Link>
);

export const Tag = ({ children }) => <span className="tag">{children}</span>;

export const TagList = ({ items, max = 5, flush = false }) => {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? items : items.slice(0, max);
  const hidden = items.length - max;
  return (
    <div className={`tags${flush ? " flush" : ""}`}>
      {shown.map((t) => <Tag key={t}>{t}</Tag>)}
      {hidden > 0 && (
        <button
          type="button"
          className="tag tag-more"
          onClick={(ev) => { ev.preventDefault(); ev.stopPropagation(); setExpanded(!expanded); }}
        >
          {expanded ? "− less" : `+${hidden} more`}
        </button>
      )}
    </div>
  );
};

/* ---------------- links ---------------- */

/* Anything that leaves the site opens in a new tab; internal paths use
   the router so they don't trigger a full page reload. */
const isExternal = (href = "") =>
  /^(https?:)?\/\//i.test(href) ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:");

/* Wraps content in a link only when there is somewhere to go.
   External URLs become <a target="_blank">, internal paths use the
   router, and an empty href renders the children unwrapped. */
export const MaybeLink = ({ href, className = "", children }) => {
  if (!href) return children;
  return isExternal(href) ? (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link className={className} to={href}>{children}</Link>
  );
};

/* Renders data.js `links: [{ label, href }]` as a row under a card.
   stopPropagation keeps a click here from also firing the card's own
   whole-card link. Returns null when there is nothing to show, so cards
   without links get no stray empty div. */
export const CardLinks = ({ links }) => {
  if (!links?.length) return null;
  return (
    <div className="card-links">
      {links.map((l) =>
        isExternal(l.href) ? (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(ev) => ev.stopPropagation()}
          >
            {l.label} <ExternalIcon />
          </a>
        ) : (
          <Link key={l.href} to={l.href} onClick={(ev) => ev.stopPropagation()}>
            {l.label} <Arrow size={13} />
          </Link>
        )
      )}
    </div>
  );
};

/* ---------------- cards ---------------- */

/* The card is an <article>, not an <a>. The heading link is stretched over
   the whole card by CSS (.stretched-link::after), which keeps the card
   clickable WITHOUT nesting anchors — nested <a> is invalid HTML and the
   inner link stops working. See styles.css §19. */
export const ExperienceCard = ({ e, showBullets = false }) => (
  <article className="card">
    <h3>
      <Link className="stretched-link" to={`/work/${e.slug}`}>{e.role}</Link>
    </h3>
    <p className="card-org">{e.org}</p>
    <span className="chip">{e.badge}</span>
    <p className="meta-line">{e.dates} · {e.location}</p>
    <p className="card-desc">{e.desc}</p>
    {showBullets && e.bullets && (
      <ul className="bullets small">
        {e.bullets.map((b) => <li key={b}><span className="bullet-arrow">→</span>{b}</li>)}
      </ul>
    )}
    <CardLinks links={e.links} />
    <TagList items={e.tags} max={4} />
  </article>
);

export const ProjectCard = ({ p }) => {
  /* Supports both the old p.code / p.live fields and the newer
     p.links array, so nothing breaks if only one is filled in. */
  const legacy = [
    p.code && { label: "Source", href: p.code },
    p.live && { label: "Live", href: p.live },
  ].filter(Boolean);
  const links = [...legacy, ...(p.links ?? [])];

  return (
    <article className="card">
      <h3>
        <MaybeLink href={p.link} className="stretched-link">{p.name}</MaybeLink>
      </h3>
      <p className="card-org">{p.org}</p>
      <span className="chip">{p.meta}</span>
      <p className="card-desc">{p.desc}</p>
      {p.bullets && (
        <ul className="bullets small">
          {p.bullets.map((b) => <li key={b}><span className="bullet-arrow">→</span>{b}</li>)}
        </ul>
      )}
      <CardLinks links={links} />
      <TagList items={p.tags} max={4} />
    </article>
  );
};

/* Activity card for the /sports route. Was inline in pages.jsx; it lives
   here now so it gets the same link handling as every other card. */
export const SportCard = ({ s }) => (
  <article className="sport-card">
    <span className="sport-ico">{s.icon}</span>
    <h4>
      <MaybeLink href={s.link} className="stretched-link">{s.name}</MaybeLink>
    </h4>
    <p>{s.desc}</p>
    <CardLinks links={s.links} />
  </article>
);

/* Organisation card on the Community & Leadership page. */
export const VolunteerCard = ({ o }) => (
  <article className="card">
    <h3>
      <MaybeLink href={o.link} className="stretched-link">{o.name}</MaybeLink>
    </h3>
    <p className="card-org">{o.role}</p>
    <p className="card-desc">{o.desc}</p>
    <CardLinks links={o.links} />
  </article>
);

/* The big number row. A stat with a `link` becomes clickable. */
export const StatRow = ({ stats }) => (
  <div className="vol-stats">
    {stats.map((s) => (
      <div key={s.label}>
        <MaybeLink href={s.link} className="stat-link">
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </MaybeLink>
      </div>
    ))}
  </div>
);

/* Awards render as hairline-separated rows, not cards.
   The row is an <article>; the title carries the stretched link, so the
   whole row stays clickable while `links` below it still works. */
export const AwardRow = ({ a }) => (
  <article className="award-row">
    <span className="award-ico">{a.icon}</span>
    <div>
      <h3 className="award-title">
        <MaybeLink href={a.link} className="stretched-link">{a.title}</MaybeLink>
        {a.meta && <span className="award-meta">{a.meta}</span>}
        {a.link && isExternal(a.link) && (
          <span className="ext-mark"><ExternalIcon /></span>
        )}
      </h3>
      {a.detail && <p className="award-desc">{a.detail}</p>}
      <CardLinks links={a.links} />
    </div>
  </article>
);

export const ArticleRow = ({ a }) => (
  <article className="article-row">
    <div>
      <h3>
        <MaybeLink href={a.link} className="stretched-link">{a.title}</MaybeLink>
      </h3>
      <span className="article-outlet">{a.outlet}</span>
      {a.date && <span className="article-date">{a.date}</span>}
      <CardLinks links={a.links} />
    </div>
    {a.link && isExternal(a.link) && (
      <span className="ext-mark"><ExternalIcon size={15} /></span>
    )}
  </article>
);

/* Single bordered panel, one column per skill group. */
export const SkillsPanel = ({ groups }) => (
  <div className="skills-panel">
    {groups.map((g) => (
      <div className="skill-col" key={g.group}>
        <p className="skill-label">{g.group}</p>
        <ul className="skill-items">
          {g.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    ))}
  </div>
);

export const EducationCard = ({ e }) => (
  <article className="edu-card">
    <div className="edu-top">
      <h3>
        <MaybeLink href={e.link} className="stretched-link">{e.school}</MaybeLink>
      </h3>
      {e.dates && <span className="edu-dates">{e.dates}</span>}
    </div>
    <p className="edu-loc">{e.location}</p>
    {/* GPA is blank for the IB entry, so only show the separator when it exists */}
    <p className="edu-level">{e.level}{e.gpa ? ` · ${e.gpa}` : ""}</p>
    {e.coursework?.length > 0 && (
      <>
        <p className="edu-label">Relevant coursework</p>
        <TagList items={e.coursework} max={12} flush />
      </>
    )}
    <CardLinks links={e.links} />
  </article>
);

export const ScoreCard = ({ s }) => (
  <article className="score-card">
    <div className="score-head">
      <h3>{s.exam}</h3>
      <span className="edu-dates">{s.date}</span>
    </div>
    <div className="score-grid">
      {s.breakdown.map((b) => (
        <div key={b.label}>
          <span>{b.label}</span>
          <strong>{b.value}</strong>
        </div>
      ))}
    </div>
  </article>
);
