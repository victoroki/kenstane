import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CalendarDays, CheckCircle2, Clock, MapPin, Tag, Users } from 'lucide-react';
import { formatCourseDates } from '../../data/courses';

const Fact = ({ icon: Icon, label, children }) => (
  <div className="flex gap-3">
    <Icon size={18} className="mt-0.5 shrink-0 text-kenya-green" aria-hidden="true" />
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">{label}</dt>
      <dd className="mt-0.5 text-[15px] font-medium text-ink-900">{children}</dd>
    </div>
  </div>
);

const PastCourseCard = ({ course, headingLevel: H = 'h3' }) => (
  <article
    aria-labelledby={`${course.id}-title`}
    className="overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-soft"
  >
    <div className="flex flex-wrap items-center gap-2 border-b border-ink-100 bg-ink-50 px-6 py-3 sm:px-8">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
        <CheckCircle2 size={14} aria-hidden="true" />
        Completed
      </span>
      <span className="rounded-full bg-kenya-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kenya-green">
        {course.level}
      </span>
      <span className="text-sm text-ink-600">{course.topic}</span>
    </div>

    <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
      <div>
        <p className="eyebrow mb-3">Training course</p>
        <H id={`${course.id}-title`} className="text-2xl sm:text-3xl font-bold leading-tight text-ink-950">
          {course.title}
        </H>
        <p className="mt-4 text-ink-700 leading-relaxed">{course.description}</p>
        <p className="mt-4 text-[15px] text-ink-600">
          <span className="font-semibold text-ink-900">Trainer:</span> {course.trainer}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to={course.link}
            className="inline-flex items-center gap-2 rounded-lg bg-kenya-green px-5 py-3 text-[15px] font-semibold text-white shadow-sm hover:bg-kenya-green-dark transition-colors"
          >
            View full course details
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-5 py-3 text-[15px] font-semibold text-ink-900 hover:border-ink-300 hover:bg-ink-50 transition-colors"
          >
            Register interest in the next run
          </Link>
        </div>
      </div>

      <dl className="grid grid-cols-1 gap-5 rounded-2xl border border-ink-100 bg-ink-50/60 p-6 sm:grid-cols-2">
        <Fact icon={CalendarDays} label="Dates">{formatCourseDates(course)}</Fact>
        <Fact icon={MapPin} label="Location">{course.location}</Fact>
        <Fact icon={Clock} label="Duration">{course.duration}</Fact>
        <Fact icon={Award} label="CPD hours">{course.cpdHours}</Fact>
        <Fact icon={Users} label="For">{course.audience}</Fact>
        <Fact icon={Tag} label="Price">{course.price}</Fact>
      </dl>
    </div>
  </article>
);

export default PastCourseCard;
