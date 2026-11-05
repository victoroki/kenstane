import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CourseDetail = ({ course }) => {
  if (!course) return null;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-10 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Breadcrumbs & Back Link */}
          <div className="mb-6 space-y-3">
            <div className="text-slate-400 text-sm">
              Home / Training / Courses / <span className="text-white">{course.title}</span>
            </div>
            <Link to="/training" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              back to courses
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
            {course.title}
          </h1>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-6 border-t border-slate-700">
            {/* 1 */}
            <div>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Location</p>
              <p className="font-semibold text-lg">{course.location}</p>
            </div>
            {/* 2 */}
            <div>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Start Date</p>
              <p className="font-semibold text-lg">{course.startDate}</p>
            </div>
            {/* 3 */}
            <div>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Duration</p>
              <p className="font-semibold text-lg">{course.duration}</p>
            </div>
            {/* 4 */}
            <div>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Topic</p>
              <p className="font-semibold text-lg leading-snug">{course.topic}</p>
            </div>
            {/* 5 */}
            <div>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">CPD Hours</p>
              <p className="font-semibold text-lg">{course.cpdHours}</p>
            </div>
            {/* 6 */}
            <div>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Price</p>
              <p className="font-semibold text-sm leading-snug">{course.price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA Bar */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 text-sm font-semibold">
            <span className="text-emerald-700 uppercase tracking-wide">
              Contact Phone: <span className="text-slate-800">{course.contactPhone}</span>
            </span>
            <span className="text-emerald-700 uppercase tracking-wide">
              Contact Email: <span className="text-slate-800">{course.contactEmail}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Layout: 2 Columns */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Left Column - Main Content */}
            <div className="flex-1 lg:max-w-[65%] space-y-12">

              {/* Overview */}
              {course.overview && (
                <div className="content-section">
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-6">Overview</h2>
                  <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                    {course.overview.map((p, idx) => <p key={idx}>{p}</p>)}
                  </div>
                </div>
              )}

              {/* Learning Outcomes */}
              {course.learningOutcomes && (
                <div className="content-section">
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-6">Learning outcomes</h2>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg">
                    {course.learningOutcomes.map((outcome, idx) => (
                      <li key={idx} className="pl-2">{outcome}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Who will benefit */}
              {course.whoWillBenefit && (
                <div className="content-section">
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-6">Who will benefit</h2>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg">
                    {course.whoWillBenefit.map((item, idx) => (
                      <li key={idx} className="pl-2">{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Course outline */}
              {course.courseOutline && (
                <div className="content-section">
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-6">Course outline</h2>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg">
                    {course.courseOutline.map((item, idx) => (
                      <li key={idx} className="pl-2">{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Course Delivery / Venue */}
              {(course.delivery || (course.dates && course.dates.length > 0)) && (
                <div className="content-section">
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-6">Venue & Delivery</h2>
                  <p className="text-slate-700 text-lg mb-4">{course.delivery}</p>
                  {course.dates && course.dates.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg">
                      {course.dates.map((date, idx) => (
                        <li key={idx} className="pl-2">{date}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Fees */}
              {course.fees && course.fees.length > 0 && (
                <div className="content-section">
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-6">Fees</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {course.fees.map((fee, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                        <p className="text-sm text-slate-500 font-semibold mb-1">{fee.label}</p>
                        <p className="text-xl font-bold text-slate-900">{fee.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Attendance certificate */}
              {course.certificateInfo && (
                <div className="content-section">
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-6">Attendance certificate & CPD hours</h2>
                  <p className="text-slate-700 text-lg leading-relaxed">{course.certificateInfo}</p>
                </div>
              )}

              {/* Back to courses button */}
              <div className="pt-8">
                <Link to="/training" className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-md font-bold hover:bg-emerald-700 transition-colors shadow-sm">
                  Back to courses
                </Link>
              </div>

            </div>

            {/* Right Column - Sidebar */}
            <div className="w-full lg:w-[35%]">
              {course.trainer && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden sticky top-8">
                  <div className="bg-slate-100 border-b border-slate-200 px-6 py-4">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Trainer</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 text-center sm:text-left">
                      {course.trainer.img && (
                        <img
                          src={course.trainer.img}
                          alt={course.trainer.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm flex-shrink-0"
                        />
                      )}
                      <div className="pt-2">
                        <h4 className="text-xl font-bold text-slate-900 mb-1">{course.trainer.name}</h4>
                        <p className="text-sm text-emerald-600 font-semibold">{course.trainer.credentials}</p>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                      {course.trainer.bio.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
