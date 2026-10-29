import { site, services, cities, partners, reviews, plans } from './config.mjs';
import { guides } from './guides.mjs';
import { page, esc, icon } from './layout.mjs';

const pic = (name, alt, { eager = false, cls = '' } = {}) =>
  `<picture><source type="image/webp" srcset="/assets/img/work/${name}.webp"><img class="${cls}" src="/assets/img/work/${name}.jpg" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></picture>`;

const moreSection = () => `
<section id="more" class="section more-section" aria-labelledby="more-title">
  <div class="container">
    <p class="kicker center reveal">You may be interested</p>
    <div class="more-grid">
      <a class="more-card reveal" href="${site.lightsUrl}" target="_blank" rel="noopener" data-track="lights_click">
        <div class="more-photo">${pic('lights-holiday-mix', 'House outlined with permanent multicolour holiday lights')}</div>
        <div class="more-copy">
          <span class="more-brand">UCO Lights · same team</span>
          <h2 id="more-title">Permanent holiday lights, <span class="lights-text">no ladders ever again</span></h2>
          <p>Slim LED tracks hidden under your roofline. Christmas, Halloween or warm white every night, all from your phone.</p>
          <span class="btn btn-lights">See UCO Lights <span aria-hidden="true">→</span></span>
        </div>
      </a>
      <a class="more-card more-gutters reveal" href="${site.guttersUrl}" target="_blank" rel="noopener" data-track="gutters_click">
        <div class="more-photo">${pic('winter-icicles', 'Icicles hanging from a clogged gutter under heavy snow')}</div>
        <div class="more-copy">
          <span class="more-brand">UCO Gutters · same team</span>
          <h2>Icicles on the gutters? <span class="grad-text">That's a clog.</span></h2>
          <p>Gutter cleaning, repair and LeafGuard installation so meltwater drains away instead of freezing into ice dams.</p>
          <span class="btn btn-ice">See UCO Gutters <span aria-hidden="true">→</span></span>
        </div>
      </a>
    </div>
  </div>
</section>`;

const stars = () => `<span class="stars" aria-label="${site.googleRating} out of 5 stars">${icon('star').repeat(5)}</span>`;

const serviceOptions = [
  'Seasonal contract (driveway)', 'One-time / after-storm clearing', 'Sidewalks, walkways & steps',
  'Salting & de-icing', 'Roof snow / ice dam removal', 'Commercial lot or plaza', 'Other / not sure',
];

const propertyOptions = ['1–2 car driveway', '3–4 car driveway', '5+ car / long driveway', 'Townhouse / walkway only', 'Commercial property'];

const leadForm = () => `
<section id="quote" class="quote-section" aria-labelledby="quote-title">
  <div class="container">
    <form class="lead-form" action="/api/lead" method="post" novalidate>
      <div class="form-head">
        <h2 id="quote-title">Your snow removal quote in 60 seconds</h2>
      </div>
      <div class="form-grid">
        <label>Name<input name="name" autocomplete="name" required maxlength="80" placeholder="Your name"></label>
        <label>Phone<input name="phone" type="tel" autocomplete="tel" inputmode="tel" required maxlength="30" placeholder="(416) 000-0000"></label>
        <label class="span-2"><span>Address <span class="opt">(for an exact price)</span></span><input name="address" autocomplete="street-address" maxlength="160" placeholder="123 Queen St W"></label>
        <label>City
          <select name="city" required>
            <option value="">Select city</option>
            ${cities.map((c) => `<option>${c}</option>`).join('')}
            <option>Other GTA</option>
          </select>
        </label>
        <label>Property
          <select name="property">
            <option value="">Select size</option>
            ${propertyOptions.map((s) => `<option>${s}</option>`).join('')}
          </select>
        </label>
        <label class="span-2">Service
          <select name="service" required>
            <option value="">Choose a service</option>
            ${serviceOptions.map((s) => `<option>${s}</option>`).join('')}
          </select>
        </label>
        <label><span>Email <span class="opt">(optional)</span></span><input name="email" type="email" autocomplete="email" maxlength="120" placeholder="you@email.com"></label>
        <label><span>Details <span class="opt">(optional)</span></span><input name="message" maxlength="1500" placeholder="Corner lot, steep driveway, best time to call…"></label>
      </div>
      <input class="hp" name="company_website" tabindex="-1" autocomplete="off" aria-hidden="true">
      <input type="hidden" name="utm_source"><input type="hidden" name="utm_medium"><input type="hidden" name="utm_campaign">
      <input type="hidden" name="utm_term"><input type="hidden" name="gclid"><input type="hidden" name="page">
      <button class="btn btn-call btn-lg btn-block" type="submit">Get my free quote</button>
      <p class="form-status" role="status" aria-live="polite"></p>
      <p class="form-alt"><a href="tel:${site.phone.tel}" data-track="phone_click"><span class="call-word">Call </span>${site.phone.display}</a></p>
    </form>
    <div class="trust-strip reveal">
      <div class="trust-main">
        <strong>24/7</strong>
        <span>crews on the road in every storm across <b>Toronto &amp; the GTA</b></span>
      </div>
      <ul class="trust-list">
        <li>${icon('shield')} Fully insured crews</li>
        <li>${icon('check')} Free estimates</li>
        <li>${icon('clock')} Same-day clearing</li>
        <li>${icon('star')} ${site.years}+ years in the GTA</li>
      </ul>
    </div>
  </div>
</section>`;

const partnerItem = (p) =>
  p.logo
    ? `<li><img src="${p.logo}" alt="${esc(p.name)}" height="36" loading="lazy"></li>`
    : `<li class="wm wm-${p.style}">${esc(p.name)}</li>`;

const marquee = () => `
<section class="partners" aria-label="Trusted by and working with">
  <p class="partners-title">Trusted on and working with</p>
  <div class="marquee">
    <ul class="marquee-track">${partners.map(partnerItem).join('')}</ul>
    <ul class="marquee-track" aria-hidden="true">${partners.map(partnerItem).join('')}</ul>
  </div>
</section>`;

const faqs = [
  ['How much does snow removal cost in Toronto?', 'It depends on the size of the driveway, walkways and steps, and whether you want a seasonal contract or a single visit. Send the form with your address or call, and we will give you an exact price, usually the same day.'],
  ['When do you come to plow?', `On a seasonal contract the crew comes automatically once snowfall reaches ${site.trigger}. In long storms we come back until it stops, then do a final clean-up and salt. You never need to call.`],
  ['Do you clear the windrow left by the city plow?', 'Yes. The ridge of packed snow at the end of your driveway is cleared on every visit for seasonal clients, and on request for one-time visits.'],
  ['Can I book just one visit after a big storm?', 'Yes. Call or send the form and we send a crew the same day whenever possible. Seasonal clients are served first during heavy storms, so book early.'],
  ['Do you remove snow and ice dams from roofs?', 'Yes. We rake snow off sloped roofs, hand-clear flat roofs and garages, knock down dangerous icicles and open channels through ice dams so the water can drain.'],
  ['Is your salt safe for pets and interlock?', 'We use rock salt by default and pet-friendly, concrete-safe ice melt on request. Just tell us when you book.'],
  ['Do you serve commercial properties?', 'Yes: parking lots, plazas, condos, townhouse complexes and storefronts, with salting and time-stamped photo logs of every visit.'],
  ['Which areas do you serve?', `All of Toronto and the GTA: ${cities.slice(0, 13).join(', ')} and more.`],
];

const wave = (cls, fill) =>
  `<svg class="wave ${cls}" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path fill="${fill}" d="M0 64c120 32 240 48 360 40S600 56 720 40s240-24 360 0 240 56 360 56V120H0z"/></svg>`;

const pains = [
  ['warn', 'Slips and lawsuits', 'An icy walkway is the most common winter injury. If someone falls on your property, you may be held responsible.'],
  ['clock', 'Late for work', 'The city plow buries the end of your driveway in heavy, packed snow at 5 am. You are digging out instead of driving.'],
  ['house', 'Ice dams & roof leaks', 'Snow left on the roof melts and refreezes at the eaves. Water backs up under the shingles and into your ceiling.'],
  ['shovel', 'Back injuries', 'Wet Toronto snow can weigh more than 20 kg per shovelful. Every winter, emergency rooms fill up with shovelling injuries.'],
];

// Animated snowfall layer (pure CSS, see .snow in main.css).
const snowfall = () => `<div class="snow" aria-hidden="true">${'<i></i>'.repeat(36)}</div>`;

const home = () => {
  const body = `
<section class="hero">
  <div class="hero-bg"><img src="/assets/img/hero-snow.svg" alt="" fetchpriority="high"></div>
  ${snowfall()}
  <div class="container hero-inner">
    <p class="eyebrow reveal">${icon('snow')} Toronto &amp; GTA · 24/7 in every storm</p>
    <h1 class="reveal">Snow tonight.<br><span class="grad-text">Clear driveway</span><br>by morning.</h1>
    <p class="hero-sub reveal">Seasonal plowing contracts and same-day snow removal for homes and businesses. Driveways, walkways, steps, salting and roofs, done before you need to leave.</p>
    <div class="hero-ctas reveal">
      <a class="btn btn-call btn-xl" href="tel:${site.phone.tel}" data-track="phone_click">${icon('phone')}<span><span class="call-word">Call </span>${site.phone.display}</span></a>
      <a class="btn btn-glass btn-xl" href="#quote" data-track="quote_click">Get a free quote</a>
    </div>
    <ul class="hero-trust reveal">
      <li>${stars()} <strong>${site.googleRating}</strong> on Google</li>
      <li>${icon('shield')} Fully insured</li>
      <li>${icon('truck')} Same-day crews</li>
    </ul>
  </div>
  ${wave('wave-bottom', 'var(--bg)')}
</section>
${leadForm()}
${marquee()}
<section class="section services" aria-labelledby="services-title">
  <div class="container">
    <p class="kicker center reveal">What we do</p>
    <h2 id="services-title" class="section-title reveal">Every kind of snow, one call</h2>
    <div class="services-grid">
      ${services.map((s) => `
      <article id="${s.id}" class="service-card reveal">
        <span class="service-icon">${icon(s.icon)}</span>
        <div>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.text)}</p>
          <a href="#quote" class="link-arrow" data-track="quote_click">Get a price <span aria-hidden="true">→</span></a>
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>
<section id="plans" class="install plans" aria-labelledby="plans-title">
  ${wave('wave-top', 'var(--bg)')}
  ${snowfall()}
  <div class="container">
    <p class="kicker center reveal">Plans for the ${new Date().getFullYear()}–${String(new Date().getFullYear() + 1).slice(2)} season</p>
    <h2 id="plans-title" class="section-title reveal">Pick how you want <span class="grad-text">winter to go</span></h2>
    <p class="section-sub reveal">Every property is different, so prices are quoted for your address. Seasonal spots on each route are limited.</p>
    <div class="plan-grid">
      ${plans.map((p) => `
      <article class="plan${p.featured ? ' plan-featured' : ''} reveal">
        <span class="plan-tag">${esc(p.tag)}</span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.text)}</p>
        <ul class="check-list">${p.items.map((i) => `<li>${icon('check')} ${esc(i)}</li>`).join('')}</ul>
        <a class="btn ${p.featured ? 'btn-call' : 'btn-glass'} btn-block" href="#quote" data-track="quote_click">Get my price</a>
      </article>`).join('')}
    </div>
  </div>
  ${wave('wave-bottom', 'var(--bg)')}
</section>
<section class="section pains" aria-labelledby="pains-title">
  <div class="container">
    <p class="kicker center reveal">Why let us do it</p>
    <h2 id="pains-title" class="section-title reveal">Snow is never <em>just</em> snow</h2>
    <p class="section-sub reveal">Toronto gets over a metre of snow in an average winter, and most of it is heavy, wet and followed by a freeze.</p>
    <div class="pain-grid">
      ${pains.map(([i, t, d]) => `
      <article class="pain-card reveal">
        <span class="pain-icon">${icon(i)}</span>
        <h3>${t}</h3>
        <p>${d}</p>
      </article>`).join('')}
    </div>
    <div class="relief reveal">
      <p><strong>Good news:</strong> with a seasonal contract you never touch a shovel. We watch the forecast and show up on our own.</p>
      <a class="btn btn-call" href="tel:${site.phone.tel}" data-track="phone_click">${icon('phone')} <span><span class="call-word">Call </span>${site.phone.display}</span></a>
    </div>
  </div>
</section>
<section class="section steps-section" aria-labelledby="how-title">
  <div class="container">
    <p class="kicker center reveal">Simple as 1-2-3-4</p>
    <h2 id="how-title" class="section-title reveal">Sign up once, forget about snow</h2>
    <ol class="steps">
      <li class="reveal"><span class="step-icon">${icon('phone')}</span><strong>Call or send the form</strong><span>Tell us your address and what needs clearing.</span></li>
      <li class="reveal"><span class="step-icon">${icon('check')}</span><strong>Get a fixed price</strong><span>Per visit or for the whole season. No surprises after a big winter.</span></li>
      <li class="reveal"><span class="step-icon">${icon('snow')}</span><strong>We mark your driveway</strong><span>Markers go in before the first snow so the plow never touches your lawn.</span></li>
      <li class="reveal"><span class="step-icon">${icon('truck')}</span><strong>It snows, we show up</strong><span>Plowed, shovelled and salted, often before you wake up.</span></li>
    </ol>
  </div>
</section>
<section id="reviews" class="section" aria-labelledby="reviews-title">
  <div class="container">
    <p class="kicker center reveal">${stars()} ${site.googleRating} on Google</p>
    <h2 id="reviews-title" class="section-title reveal">Neighbours who stopped shovelling</h2>
    <p class="section-sub reveal"><a href="${site.googleReviewsUrl}" target="_blank" rel="noopener">Read all our reviews on Google →</a></p>
    <div class="reviews-grid">
      ${reviews.map((r) => `
      <blockquote class="review reveal">
        <span class="quote-mark" aria-hidden="true">“</span>
        <p>${esc(r.text)}</p>
        <footer>${stars()}<span><span class="g-badge" aria-hidden="true">G</span> ${esc(r.name)} · ${esc(r.date)}</span></footer>
      </blockquote>`).join('')}
    </div>
  </div>
</section>
${moreSection()}
<section id="faq" class="section" aria-labelledby="faq-title">
  <div class="container narrow">
    <h2 id="faq-title" class="section-title reveal">Questions? We've got answers</h2>
    ${faqs.map(([q, a]) => `<details class="faq reveal"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}
  </div>
</section>
<section class="final-cta">
  ${wave('wave-top', 'var(--bg)')}
  ${snowfall()}
  <div class="container">
    <span class="final-drop" aria-hidden="true">${icon('snow')}</span>
    <h2 class="reveal">The next storm is already on the forecast.</h2>
    <p class="reveal">Lock in your spot on our route before the first big snowfall. Free quote, no obligation. ${esc(site.area)}.</p>
    <div class="hero-ctas center reveal">
      <a class="btn btn-call btn-xl" href="tel:${site.phone.tel}" data-track="phone_click">${icon('phone')}<span><span class="call-word">Call </span>${site.phone.display}</span></a>
      <a class="btn btn-glass btn-xl" href="#quote" data-track="quote_click">Get a free quote</a>
    </div>
  </div>
</section>`;


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };

  return page({
    path: '/',
    title: `Snow Removal Toronto | Seasonal Plowing, Salting, Roof Snow | ${site.brand}`,
    description: `Residential and commercial snow removal in Toronto & the GTA: seasonal plowing contracts, same-day clearing, salting, windrows and roof snow. Free quotes. Call ${site.phone.display}.`,
    body,
    schema: [faqSchema],
  });
};

const guidesIndex = () =>
  page({
    path: '/guides/',
    title: `Snow Removal Guides & How-To | ${site.brand}`,
    description: 'Practical winter advice for Toronto homeowners: snow contracts, ice dams, salt and sidewalk rules.',
    body: `
<section class="section article-head">
  <div class="container narrow">
    <h1>Winter guides &amp; how-to</h1>
    <p class="section-sub left">Practical advice on getting through a Toronto winter without a sore back.</p>
    <ul class="guide-list">
      ${guides.map((g) => `<li><a href="/guides/${g.slug}/"><strong>${esc(g.title)}</strong><span>${esc(g.description)}</span></a></li>`).join('')}
    </ul>
  </div>
</section>`,
  });

const guidePage = (g) =>
  page({
    path: `/guides/${g.slug}/`,
    title: `${g.title} | ${site.brand}`,
    description: g.description,
    schema: [{
      '@context': 'https://schema.org', '@type': 'Article', headline: g.title, description: g.description,
      publisher: { '@type': 'Organization', name: site.company },
    }],
    body: `
<article class="section article">
  <div class="container narrow">
    <p class="crumbs"><a href="/">Home</a> / <a href="/guides/">Guides</a></p>
    <h1>${esc(g.title)}</h1>
    ${g.body}
    <aside class="article-cta">
      <h2>Need help with the snow?</h2>
      <p>Free quote in Toronto &amp; the GTA. Seasonal contracts and same-day clearing.</p>
      <div class="hero-ctas">
        <a class="btn btn-primary" href="/#quote" data-track="quote_click">Get a free quote</a>
        <a class="btn btn-outline" href="tel:${site.phone.tel}" data-track="phone_click">${icon('phone')} ${site.phone.display}</a>
      </div>
    </aside>
    <p class="more-guides"><strong>More guides:</strong> ${guides.filter((o) => o !== g).map((o) => `<a href="/guides/${o.slug}/">${esc(o.short)}</a>`).join(' · ')}</p>
  </div>
</article>`,
  });

const thankYou = () =>
  page({
    path: '/thank-you/',
    title: `Thank you | ${site.brand}`,
    description: 'Your request has been received.',
    noindex: true,
    body: `
<section class="section thanks">
  <div class="container narrow center">
    <span class="thanks-icon">${icon('check')}</span>
    <h1>Thank you! Your request is in.</h1>
    <p>We will call you back shortly (${esc(site.hours)}). Need us sooner?</p>
    <a class="btn btn-primary btn-lg" href="tel:${site.phone.tel}" data-track="phone_click">${icon('phone')} <span><span class="call-word">Call </span>${site.phone.display}</span></a>
    <p class="muted">While you wait: <a href="/guides/">read our winter guides</a>.</p>
  </div>
</section>
${moreSection()}
<script>window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'generate_lead'});</script>`,
  });

const privacy = () =>
  page({
    path: '/privacy/',
    title: `Privacy Policy | ${site.brand}`,
    description: `How ${site.company} handles information you send through this website.`,
    body: `
<article class="section article">
  <div class="container narrow">
    <h1>Privacy policy</h1>
    <p>This website is operated by ${esc(site.company)}. We respect your privacy and handle personal information in line with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).</p>
    <h2>What we collect</h2>
    <p>When you request a quote we collect the details you enter: name, phone number, address, email (optional), city, property size, the service you need and your message. We also record the advertising campaign that brought you to the site (for example a Google Ads click ID) so we can measure which ads work.</p>
    <h2>How we use it</h2>
    <p>Only to contact you about your request, prepare a quote and provide the service. We do not sell or rent your information.</p>
    <h2>Cookies and analytics</h2>
    <p>We use Google Tag Manager, Google Analytics and Google Ads conversion tracking, which may set cookies to measure visits and ad performance. You can block cookies in your browser settings or opt out of personalised ads at <a href="https://adssettings.google.com" rel="noopener">adssettings.google.com</a>.</p>
    <h2>Contact</h2>
    <p>To access or delete your information, email <a href="mailto:${site.email}">${site.email}</a> or call <a href="tel:${site.phone.tel}">${site.phone.display}</a>.</p>
  </div>
</article>`,
  });

const lightsPage = () =>
  page({
    path: '/lights/',
    title: `Permanent holiday lights in Toronto | UCO Lights`,
    description: 'The UCO team also installs permanent LED holiday lights across Toronto & the GTA. Visit UCO Lights to learn more.',
    body: `
<style>.sticky-cta, .fab-lights { display: none; } .fab-call { bottom: calc(16px + env(safe-area-inset-bottom)); } body { padding-bottom: 0; }</style>
<section class="section lights-page">
  <div class="container lights-inner">
    <div class="lights-photo">${pic('lights-holiday-mix', 'Home outlined with permanent multicolour holiday lights', { eager: true })}</div>
    <div>
      <p class="kicker">We do this too</p>
      <h1>Permanent holiday lights, <span class="lights-text">installed by the same crew</span></h1>
      <p>The team that clears your snow also installs permanent LED lights along the roofline. They mount on the same fascia, stay up all year and are nearly invisible by day.</p>
      <ul class="check-list">
        <li>${icon('check')} 16 million colours and ready-made holiday scenes</li>
        <li>${icon('check')} Control from your phone, with timers and voice</li>
        <li>${icon('check')} No more ladders every November and January</li>
        <li>${icon('check')} Most homes done in one day</li>
      </ul>
      <a class="btn btn-lights btn-xl" href="${site.lightsUrl}" data-track="lights_click">Visit UCO Lights to learn more <span aria-hidden="true">→</span></a>
      <p class="muted"><a href="/">← Back to snow removal</a></p>
    </div>
  </div>
  <div class="container lights-ba">
    <h2>Before &amp; after</h2>
    <div class="lights-ba-grid">
      <figure><div class="lights-ba-img"><span class="ba-tag">Before</span><span class="ba-tag ba-tag-after">After</span>${pic('lights-ba-1', 'Two-storey home: by day on the left, permanent lights on at night on the right')}</div><figcaption>Two-storey with garage</figcaption></figure>
      <figure><div class="lights-ba-img"><span class="ba-tag">Before</span><span class="ba-tag ba-tag-after">After</span>${pic('lights-ba-3', 'Home with dormers: by day on the left, permanent lights on at night on the right')}</div><figcaption>Dormers and gables</figcaption></figure>
    </div>
    <a class="btn btn-lights btn-lg" href="${site.lightsUrl}" data-track="lights_click">See more on UCO Lights <span aria-hidden="true">→</span></a>
  </div>
</section>`,
  });

const notFound = () =>
  page({
    path: '/404',
    title: `Page not found | ${site.brand}`,
    description: 'Page not found.',
    noindex: true,
    body: `
<section class="section">
  <div class="container narrow center">
    <h1>Page not found</h1>
    <p>The page you are looking for doesn't exist.</p>
    <a class="btn btn-primary" href="/">Go to home page</a>
  </div>
</section>`,
  });

export const pages = () => [
  ['index.html', home()],
  ['guides/index.html', guidesIndex()],
  ...guides.map((g) => [`guides/${g.slug}/index.html`, guidePage(g)]),
  ['thank-you/index.html', thankYou()],
  ['privacy/index.html', privacy()],
  ['lights/index.html', lightsPage()],
  ['404.html', notFound()],
];

export const sitemapPaths = () => ['/', '/guides/', ...guides.map((g) => `/guides/${g.slug}/`), '/privacy/'];
