// Events are sorted into "Upcoming" and "Past" automatically by date,
// so an event moves to Past Events on its own once its end date has passed.
import esa01 from '../assests/event/_24A3684.JPG';
import esa02 from '../assests/event/DSC_0249-3.JPG';
import esa03 from '../assests/event/_24A3680.JPG';
import esa04 from '../assests/event/DSC_0270-3.JPG';
import esa05 from '../assests/event/DSC_0251-3.JPG';
import esa06 from '../assests/event/_24A3759.JPG';
import esa07 from '../assests/event/DSC_0305-3.JPG';
import esa08 from '../assests/event/DSC_0375.JPG';
import esa09 from '../assests/event/_24A3828.JPG';
import esa10 from '../assests/event/DSC_0376.JPG';
// Dalton's session (web-sized copies; full-resolution originals stay in event/dalton/)
import dalton01 from '../assests/event/dalton/web/DSC_0080-3.JPG';
import dalton02 from '../assests/event/dalton/web/DSC_0308-3.JPG';
import dalton03 from '../assests/event/dalton/web/DSC_0155-3.JPG';
import dalton04 from '../assests/event/dalton/web/DSC_0079-3.JPG';
import dalton05 from '../assests/event/dalton/web/DSC_0020-2.JPG';
import dalton06 from '../assests/event/dalton/web/DSC_0081-3.JPG';
import dalton07 from '../assests/event/dalton/web/DSC_0157-2.JPG';

export const EVENTS = [
  {
    id: 'esa-ku-sustainability-week-2026-day-two',
    title: 'ESA-KU Sustainability Week 2026 — Day Two',
    series: 'ESA-KU Sustainability Week 2026',
    theme: 'Engineering a Sustainable Future',
    date: '2026-09-10',
    location: 'Kenyatta University, Nairobi',
    type: 'Partnership',
    role: 'Sponsor & exhibitor',
    featured: true,
    description:
      'Kenstane Energy joined the Engineering Students Association of Kenyatta University (ESA-KU) as a sponsor of Sustainability Week 2026, held 9–11 September under the theme "Engineering a Sustainable Future". On Day Two our team met engineering students at the Kenstane stand, talked through careers in power generation and risk engineering, and supported technical sessions on building a more sustainable energy sector.',
    highlights: [
      'Kenstane stand on power generation risk engineering, technical advisory and professional training',
      'Conversations with student engineers on career pathways in the energy sector',
      'Technical presentations alongside fellow partners and sponsors',
      'Talk on energy sustainability by Kenstane engineer Ondora Mogere Dalton',
    ],
    galleryUrl: 'https://sydneyranksphotography58.pixieset.com/esakusustainabilityweek2026daytwo/',
    photoCredit: 'Sydney Ranks Photography',
    photos: [
      { src: esa01, alt: 'Three attendees in front of the ESA-KU Sustainability Week 2026 backdrop', orientation: 'landscape' },
      { src: dalton01, alt: 'Kenstane engineer Dalton presenting on energy sustainability', orientation: 'landscape' },
      { src: esa02, alt: 'Students at the Kenstane Energy stand during ESA-KU Sustainability Week', orientation: 'portrait' },
      { src: dalton02, alt: 'Kenstane team, partners and organisers in front of the Kenstane and ESA-KU banners', orientation: 'portrait' },
      { src: esa04, alt: 'Four attendees standing in front of the Kenstane, Megawatt and ESA-KU banners', orientation: 'portrait' },
      { src: dalton03, alt: 'Dalton receiving a token of appreciation from an ESA-KU organiser', orientation: 'portrait' },
      { src: esa03, alt: 'Attendee in front of the ESA-KU Sustainability Week 2026 sponsors backdrop', orientation: 'landscape' },
      { src: dalton04, alt: 'Dalton speaking at the Kenyatta University podium', orientation: 'portrait' },
      { src: esa05, alt: 'Group of students with the Kenstane Energy banner', orientation: 'portrait' },
      { src: dalton05, alt: 'Dalton preparing his presentation before the session', orientation: 'landscape' },
      { src: esa06, alt: 'Technical presentation in the ESA-KU Sustainability Week hall with the Kenstane banner on display', orientation: 'landscape' },
      { src: esa07, alt: 'Attendee beside the Kenstane "Power Generation Risk Engineering" banner', orientation: 'portrait' },
      { src: esa08, alt: 'Attendee with the Kenstane and partner banners', orientation: 'portrait' },
      { src: esa09, alt: 'Student engineer in front of the Kenstane Energy banner', orientation: 'portrait' },
      { src: esa10, alt: 'Guest at the Kenstane stand during Day Two', orientation: 'portrait' },
      { src: dalton06, alt: 'Dalton presenting "Energy Sustainability" slides to students', orientation: 'landscape' },
      { src: dalton07, alt: 'Dalton and an ESA-KU organiser shaking hands after the talk', orientation: 'portrait' },
    ],
  },
  {
    id: 'power-plant-safety-workshop-2026',
    title: 'Power Plant Safety Workshop',
    date: '2026-03-12',
    location: 'Kiambu',
    type: 'Workshop',
    description: 'Hands-on best practices and safety checklists.',
  },
  {
    id: 'renewable-training-open-day-2026',
    title: 'Renewable Training Open Day',
    date: '2026-02-05',
    location: 'Nairobi',
    type: 'Open day',
    description: 'Meet instructors and explore course pathways.',
  },
  {
    id: 'risk-engineering-intro-webinar-2026',
    title: 'Risk Engineering Intro Webinar',
    date: '2026-01-20',
    location: 'Online',
    type: 'Webinar',
    description: 'Overview of risk engineering for energy assets.',
  },
];

const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

const endOf = (event) => new Date(`${event.endDate || event.date}T23:59:59`);

export const splitEvents = (events = EVENTS, now = startOfToday()) => {
  const upcoming = events
    .filter((e) => endOf(e) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const past = events
    .filter((e) => endOf(e) < now)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return { upcoming, past };
};

export const formatEventDate = (iso, opts = { day: 'numeric', month: 'long', year: 'numeric' }) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', opts);
