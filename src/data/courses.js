// Short course summaries shared by the home page, Training page and Events page.
// A course counts as "past" once its end date has gone by, and then it moves
// out of the home page feature and into the "Past courses" lists automatically.
export const COURSES = [
  {
    id: 'natural-perils-hazards-2026-07',
    title: 'Introduction to Natural Perils & Hazards',
    level: 'Professional',
    topic: 'Risk Engineering & Natural Hazard Awareness',
    description:
      'Comprehensive training on identifying, assessing, and managing natural hazard risks across the project lifecycle. Covers earthquakes, floods, storms, wildfires, and climate-related risks with real-world case studies.',
    trainer: 'Parvez Karim Butt',
    location: 'Nairobi, Kenya / Online',
    startDate: '2026-07-15',
    endDate: '2026-07-17',
    duration: '3 Days',
    cpdHours: '9',
    audience: 'Risk Engineers, Insurers, HSE Personnel',
    price: 'Member USD 55 + VAT / Non-member USD 66 + VAT',
    link: '/training/natural-perils-hazards',
  },
];

const today = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

export const isCoursePast = (course, now = today()) =>
  new Date(`${course.endDate || course.startDate}T23:59:59`) < now;

export const upcomingCourses = () =>
  COURSES.filter((c) => !isCoursePast(c)).sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

export const pastCourses = () =>
  COURSES.filter((c) => isCoursePast(c)).sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

export const formatCourseDates = (course) => {
  const s = new Date(`${course.startDate}T00:00:00`);
  if (!course.endDate) return s.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const e = new Date(`${course.endDate}T00:00:00`);
  const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();
  return sameMonth
    ? `${s.getDate()}–${e.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`
    : `${s.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} – ${e.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`;
};
