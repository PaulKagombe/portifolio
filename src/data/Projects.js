import craftaImg from '../assets/crafta.jpg'
import mkvImg from '../assets/mkv-logo.png'
import lumiraImg from '../assets/lumira.jpg'

/**
 * @typedef {Object} Project
 * @property {string} index
 * @property {string} name
 * @property {string} role
 * @property {string} tools
 * @property {string} deliverables
 * @property {string} img
 * @property {string} alt
 * @property {string} description
 * @property {string} caption
 */

/** @type {Project[]} */
export const PROJECTS = [
  {
    index: '01',
    name: 'Crafta',
    role: 'Creative Agency — Full Brand Campaign',
    tools: 'Illustrator, Photoshop',
    deliverables: 'Landing page mockup, service icons, social templates',
    img: craftaImg,
    alt: 'Crafta Creative Agency brand campaign — dark hero with gold accents, service icon row, and a grid of product and social media design work',
    description:
      "A full campaign system for a branding studio, built to prove the pitch by example. The dark, gold-veined palette carries from the hero through service icons to a grid of applied work — logos, social posts, packaging and promo — so the page itself reads as a portfolio inside a portfolio.",
    caption: 'Hero, service icons and applied-work grid, shown together as a single scrolling brand page.',
  },
  {
    index: '02',
    name: 'MKV',
    role: 'Logomark & Identity',
    tools: 'Illustrator',
    deliverables: 'Primary logomark, tagline lockup, colour-on-white variant',
    img: mkvImg,
    alt: 'MKV logo — a navy power-button ring around a teal serif monogram, with the tagline Turning on your platforms',
    description:
      "A monogram built around a single idea: the power symbol as a ring, standing in for a platform switching on. Navy carries the weight, a teal serif monogram sits inside as the spark, and the tagline underlines the concept without needing to explain it twice.",
    caption: 'Primary logomark with tagline lockup, drawn to sit cleanly at icon size and at full scale.',
  },
  {
    index: '03',
    name: 'Lumira',
    role: 'Natural Skincare — Packaging & Brand System',
    tools: 'Illustrator, Photoshop, InDesign',
    deliverables: 'Logo, colour & type system, packaging dielines, product mockups, bag & box',
    img: lumiraImg,
    alt: 'Lumira Natural Skincare brand system — dark green and gold identity sheet with logo, colour palette, typography, packaging dieline and product mockups',
    description:
      "A complete identity for a natural skincare line — the kind of brief where the packaging has to do most of the talking on a crowded shelf. Deep forest green and brushed gold set the tone, a hand-drawn botanical mark anchors the label, and the dieline was built alongside the mockups so the flat art and the physical object were designed as one piece.",
    caption: 'Brand sheet: logo, palette, type, packaging dieline and rendered product mockups.',
  },
]
