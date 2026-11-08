import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Clock, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { upcomingCourses, formatCourseDates } from '../../data/courses';


// Only an upcoming course is featured on the home page. Once a course has run it
// moves to "Past courses" on the Training page and to Past events, so this
// section hides itself until the next course is added to src/data/courses.js.
const FeaturedCourseSection = () => {
  const next = upcomingCourses()[0];
  if (!next) return null;
  const course = { ...next, startDate: formatCourseDates(next) };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Featured Training Programme
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {course.title}
          </h2>
          <div className="w-20 h-1 bg-emerald-600 rounded-full mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
              {course.level}
            </span>
            <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-medium">
              {course.topic}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-slate-600 leading-relaxed">
                {course.description}
              </p>
              <p className="text-sm text-slate-500 mt-4">
                <strong>Trainer:</strong> {course.trainer}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <MapPin size={16} className="text-emerald-600 flex-shrink-0" />
                <span>{course.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Calendar size={16} className="text-emerald-600 flex-shrink-0" />
                <span>{course.startDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Clock size={16} className="text-emerald-600 flex-shrink-0" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Award size={16} className="text-emerald-600 flex-shrink-0" />
                <span>{course.cpdHours} CPD hrs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Users size={16} className="text-emerald-600 flex-shrink-0" />
                <span>{course.audience}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <GraduationCap size={16} className="text-emerald-600 flex-shrink-0" />
                <span>{course.price}</span>
              </div>
            </div>
          </div>

          <div>
            <Link
              to={course.link}
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 hover:scale-[1.02] transition-all"
            >
              View Full Course Details
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourseSection;
