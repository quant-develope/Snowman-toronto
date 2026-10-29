// Site-wide settings. Change values here and rebuild (`npm run build`).
export const site = {
  brand: 'Snowman Toronto',
  company: 'UCO Construction Group',
  // Production URL, used for canonical links, sitemap and structured data.
  url: 'https://snowman-toronto.unknwn-creation.workers.dev',
  phone: { display: '(825) 462-1811', tel: '+18254621811' },
  // WhatsApp chat for the green floating button (international format, digits only).
  whatsapp: '18254621811',
  // Sister sites promoted in "You may be interested" and the garland button.
  lightsUrl: 'https://lights-toronto.unknwn-creation.workers.dev/',
  guttersUrl: 'https://gutters-toronto.unknwn-creation.workers.dev/',
  email: 'info@ucogroup.ca',
  hours: '24/7 during snowfalls · office Mon–Sat 8:00am–6:00pm',
  years: 8,
  googleRating: '4.9',
  area: 'Toronto & the GTA',
  // Plowing starts once this much snow has fallen (seasonal plans).
  trigger: '5 cm',
  // Season covered by seasonal plans.
  season: 'November 15 – April 15',
  googleReviewsUrl: 'https://maps.app.goo.gl/2quwHpzievybGyoS7',
  // Google Tag Manager container ID, e.g. 'GTM-XXXXXXX'. Empty = no GTM.
  // Conversions are pushed to dataLayer: generate_lead, phone_click, quote_click.
  gtmId: '',
  social: {
    facebook: 'https://www.facebook.com/ucogroup.ca',
    instagram: 'https://www.instagram.com/ucogroup.ca',
    youtube: 'https://youtube.com/@ucogroup',
  },
};

export const services = [
  {
    id: 'seasonal',
    title: 'Seasonal Snow Removal',
    text: `One fixed price for the whole winter (${site.season}). We plow your driveway every time snowfall reaches ${site.trigger}, no calls needed.`,
    icon: 'snow',
  },
  {
    id: 'one-time',
    title: 'One-Time & On-Call Clearing',
    text: 'Just one storm? Call after a storm and we send a crew the same day to clear the driveway, walkways and steps.',
    icon: 'truck',
  },
  {
    id: 'walkways',
    title: 'Sidewalks, Walkways & Steps',
    text: 'Shovelled by hand right down to the pavement: front walk, porch, steps and the city sidewalk in front of your home.',
    icon: 'shovel',
  },
  {
    id: 'salting',
    title: 'Salting & De-Icing',
    text: 'Rock salt or pet-friendly ice melt spread after every clearing, so freezing rain and refreeze do not turn your driveway into a rink.',
    icon: 'drop',
  },
  {
    id: 'windrow',
    title: 'Windrow Clearing',
    text: 'The heavy ridge of packed snow the city plow leaves at the end of your driveway is cleared, so you can get the car out.',
    icon: 'road',
  },
  {
    id: 'roof',
    title: 'Roof Snow & Ice Dam Removal',
    text: 'Heavy snow raked off flat and sloped roofs, icicles knocked down and ice dams opened before meltwater gets into your ceiling.',
    icon: 'house',
  },
  {
    id: 'commercial',
    title: 'Commercial Lots & Plazas',
    text: 'Parking lots, plazas, condos and townhouse complexes plowed, salted and logged with time-stamped photos for your records.',
    icon: 'building',
  },
  {
    id: 'hauling',
    title: 'Snow Hauling & Pile Removal',
    text: 'When there is nowhere left to push it, we load the piles and haul the snow away to free up parking spaces and sight lines.',
    icon: 'truck',
  },
];

// Service area for the form and structured data.
export const cities = [
  'Toronto', 'North York', 'Etobicoke', 'Scarborough', 'East York', 'York', 'Mississauga', 'Brampton',
  'Vaughan', 'Markham', 'Richmond Hill', 'Oakville', 'Burlington', 'Pickering',
  'Ajax', 'Whitby', 'Oshawa', 'Newmarket', 'Aurora', 'Milton',
];

// Seasonal plans shown on the home page. Prices are quoted per property.
export const plans = [
  {
    name: 'Per visit',
    tag: 'Pay as you go',
    text: 'Pay only for the storms you call us for.',
    items: ['Driveway and walkway cleared', 'Same-day crew after you call', 'Salting on request', 'Pay after the job is done'],
  },
  {
    name: 'Seasonal',
    tag: 'Most popular',
    featured: true,
    text: `Unlimited plowing all winter for one fixed price.`,
    items: [`Automatic visits at ${site.trigger} of snow`, 'Driveway, walkway and steps', 'Windrow at the end of the driveway', 'Salt after every visit', `${site.season}`],
  },
  {
    name: 'Seasonal Plus',
    tag: 'Worry-free',
    text: 'Everything in Seasonal, plus the extras.',
    items: ['Everything in Seasonal', 'City sidewalk in front of your home', 'Pet-friendly ice melt', 'Priority on the route', 'One roof rake-off per season'],
  },
];

// Partner marquee. Shown as text wordmarks; to use real logo files put
// them in public/assets/img/partners/ and set `logo: '/assets/img/partners/x.svg'`.
export const partners = [
  { name: 'Home Depot Pro', style: 'hd' },
  { name: 'HomeStars', style: 'hs' },
  { name: 'Bark', style: 'bark' },
  { name: 'Three Best Rated', style: 'tbr' },
  { name: 'Houzz', style: 'houzz' },
  { name: 'HomeAdvisor', style: 'ha' },
  { name: "Lowe's", style: 'lowes' },
  { name: 'Toro', style: 'brand' },
  { name: 'Boss Snowplow', style: 'brand' },
  { name: 'Western', style: 'brand' },
  { name: 'Ariens', style: 'brand' },
];

// Google reviews of UCO Construction Group (from ucogroup.ca, all 5 stars).
// Replace or extend with snow-specific reviews as they come in.
export const reviews = [
  { name: 'Google review', date: 'August 2026', text: 'Quote was reasonable, work scheduled without delay and completed as scheduled.' },
  { name: 'Google review', date: 'July 2026', text: 'Very professional from start to finish. Great job, beyond my expectations.' },
  { name: 'Google review', date: 'August 2026', text: 'Great communication setting up a date and they even completed the job in one day!' },
  { name: 'Google review', date: 'July 2026', text: "I love a company that stands behind its work and doesn't forget you as soon as the job is done." },
  { name: 'Google review', date: 'August 2026', text: 'They were professional, respectful, and paid close attention to every detail.' },
  { name: 'Google review', date: 'August 2026', text: "Company showed up on time, didn't need much from us." },
];
