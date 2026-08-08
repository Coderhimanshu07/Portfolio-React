# Project Index

Personal portfolio website for "Developer Himanshu" built with React 19 + Vite (rolldown-vite), Bootstrap 5, Framer Motion, and React Router 6. Deployed via Vercel.

## Commands

- `npm run dev` - start Vite dev server with HMR
- `npm run build` - production build to `dist/`
- `npm run lint` - ESLint over the project
- `npm run preview` - preview the production build

## Structure

```
index.html              Vite entry
src/
  main.jsx              React root, BrowserRouter wrapper
  App.jsx               Routing: Header + <Routes> + Footer
  index.css             ALL global styles (669 lines, sectioned by comment blocks)
  components/
    Header.jsx          Wrapper that renders <Navbar/>
    Navbar.jsx          Sticky Bootstrap navbar + offcanvas mobile menu (routes defined here)
    Body.jsx            Home page: hero + scrolls in Services/TechnicalSkills/Projects/Experience/Contact
    Services.jsx        6 service cards (SEO, UI/UX, Business, Website, Web App, WordPress)
    Technical_skills.jsx  Skill boxes grouped into categories (uses inline styles + icons)
    Project.jsx         Project cards (data array at top of file)
    Experience.jsx      Experience/certificate cards (data array at top of file)
    Contact.jsx         Contact section, form submits to WhatsApp (wa.me)
    Footer.jsx          Footer with socials + mouse sparkle effect + floating icons + react spin
    Faq.jsx             Accordion FAQ (mechanical services content - not linked in routes)
    Data_fetch.jsx      Standalone fetch/axios demo (not routed)
    Dashboard.jsx       Conditional rendering demo (not routed)
    Parent.jsx/Child.jsx  Props demo (not routed)
    User.jsx/User_details.jsx  Props demo (not routed)
  pages/
    Home_p.jsx          "/" -> renders <Body/> (which includes all sections)
    Services_p.jsx      "/services"
    Technical_p.jsx     "/technical_skills"
    Project_p.jsx       "/project"
    Experience_p.jsx    "/experience"
    Contact_p.jsx       "/contact"
  assets/               Images + PDFs (resume/certificates in assets/pdf/)
dist/                   Build output (gitignored)
```

## Routing

Routes are defined in `src/App.jsx`; nav links in `src/components/Navbar.jsx`. Note: `Header.jsx` imports router modules but only renders Navbar.

> **Gotcha:** the offcanvas mobile menu links use capitalized routes (`/Services`, `/Technical_skills`, `/Experience`, `/Contact`) which do NOT match the lowercase routes in `App.jsx`; the desktop nav uses lowercase paths that work.

## Key conventions

- **Styling:** Bootstrap utility classes + a single `src/index.css`. CSS is organized with named comment blocks: `Navbar Section`, `Body.jsx section`, `Services section CSS`, `Technical skills section`, `Project section`, `Experience.jsx section CSS`, `Footer CSS`, `Media queries`, plus emoji-headed add-on blocks (VFX, sparkle, floating social icons, react spin). Section-specific classes: `.Headings`, `.skill-box`, `.skills-grid-sub`, `.skills-cat-grid`, `.project-card`, `.experience-card`, `.service-item`, `.chat-btn`, `.neon-glow`, sparkle effects (`.sparkle-area`, `.cursor-sparkle`).
- **Media queries:** `@media (max-width: 768px)` and `(min-width: 768px)` blocks in `src/index.css`; mobile layout overrides live there.
- **Animations:** Framer Motion (`motion.*`, `whileInView`, `viewport={{ once: true }}`).
- **Icons:** `react-icons` (`fa`, `fa6`, `si`) plus a few inline SVG components in `Technical_skills.jsx` (Antigravity, Supabase, GoogleCloud).
- **Data:** project/experience/faq data are hardcoded arrays at the top of their component files; assets imported as static imports.
- **Forms:** Contact form opens WhatsApp via `wa.me` with encoded message.
- **Unused/demo components** (`Data_fetch`, `Dashboard`, `Parent`, `Child`, `User`, `User_details`, `Faq`) are not wired into routes — do not assume they are part of the site.
- **Profile links** use the hardcoded handles: LinkedIn `coderhimanshu07`, GitHub `Coderhimanshu07`, Instagram `coderhimanshu`, phone `+91 72919 33500`.

## Deployment

`vercel.json` sets Vite framework, build command `npm run build`, output `dist/`.
