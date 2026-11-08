import React from 'react';
import SEO from '../components/SEO';
import CourseDetail from '../components/sections/CourseDetail';
import ParvezImg from '../assests/team/Parvez.png';
import { COURSES, isCoursePast, formatCourseDates } from '../data/courses';

const summary = COURSES.find((c) => c.link === '/training/natural-perils-hazards');

const courseData = {
  title: 'Introduction to Natural Perils & Hazards',
  location: 'Nairobi, Kenya',
  startDate: '15 July 2026',
  duration: '3 Days',
  topic: 'Risk Engineering & Natural Hazard Awareness',
  cpdHours: '9',
  price: 'Member USD 55 + VAT / Non-member USD 66 + VAT',
  contactPhone: '+254 793 041 411',
  contactEmail: 'info@kenstaneenergy.co.ke',
  overview: [
    'This course provides a comprehensive introduction to natural perils and hazards that affect industrial facilities, infrastructure, energy projects, and communities worldwide. Participants will develop an understanding of the causes, characteristics, and impacts of natural hazards and how organisations can assess, mitigate, and manage associated risks.',
    'Natural perils such as earthquakes, floods, storms, droughts, wildfires, volcanic activity, landslides, and extreme temperatures can significantly affect operational continuity, safety, environmental protection, and financial performance. Understanding these hazards is essential for engineers, risk managers, insurers, emergency planners, and operational personnel.',
    'The course explores the identification, assessment, and management of natural hazard risks across the project lifecycle, from planning and design through operations and emergency response. Real-world case studies and industry examples are used throughout to demonstrate lessons learned and best practice approaches.',
    'Participants will gain practical insight into hazard mapping, climate-related risks, resilience planning, business continuity, and mitigation strategies used in modern industries.'
  ],
  learningOutcomes: [
    'Understand the different categories of natural perils and how they develop',
    'Understand the impact of natural hazards on industrial facilities, infrastructure, people, and the environment',
    'Understand the principles of natural hazard risk assessment and risk management',
    'Understand how climate change influences the frequency and severity of natural hazards',
    'Understand the methods used to evaluate vulnerability, exposure, and resilience',
    'Understand engineering and operational mitigation strategies for reducing natural hazard risks',
    'Understand emergency preparedness, response planning, and business continuity considerations',
    'Learn lessons from historical natural disaster case studies',
    'Understand international standards, guidelines, and best practices for hazard management',
    'Understand the role of risk engineers, insurers, regulators, and operators in hazard mitigation'
  ],
  whoWillBenefit: [
    'Risk engineers and insurance professionals',
    'Process safety and HSE personnel',
    'Engineers involved in design, construction, and operations',
    'Power plant and industrial facility operators',
    'Infrastructure and project managers',
    'Emergency response and crisis management personnel',
    'Environmental and sustainability professionals',
    'Government and regulatory authorities',
    'Consultants and EPC/EPCM organisations',
    'Graduate engineers seeking an introduction to natural hazard management'
  ],
  courseOutline: [
    'Introduction to Natural Perils',
    'Types of Natural Perils',
    'Hydrological Hazards',
    'Meteorological Hazards',
    'Climatological Hazards',
    'Emerging Climate Risks',
    'Impact of Natural Perils',
    'Risk Assessment and Management',
    'Mitigation Strategies',
    'Case Studies and Examples',
    'Future Trends and Challenges',
    'Conclusion and Discussion'
  ],
  delivery: 'Online. Interactive instructor-led sessions with case studies, practical discussions, and industry examples.',
  dates: [
    '15-17 July 2026, 18:00 - 20:30 Nairobi, Kenya'
  ],
  fees: [
    { label: 'Member', price: 'USD 55 + VAT' },
    { label: 'Non-member', price: 'USD 66 + VAT' }
  ],
  certificateInfo: 'An electronic certificate will be issued at the end of the course confirming attendance and CPD hours logged. Delegates must attend the full course to receive certification. For online training, CPD hours are approximate and may vary depending on the extent of additional learning completed by participants.',
  trainer: {
    name: 'Parvez Karim Butt',
    credentials: 'BSc Chemical Engineering, AmIChemE, MPowerE',
    img: ParvezImg,
    bio: [
      'Parvez Karim Butt has extensive experience in power generation engineering, operational safety, risk management, and industrial hazard assessment gained through senior technical and leadership roles across the energy, infrastructure, and insurance industries.',
      'After graduating with a degree in Chemical Engineering, Parvez worked with major engineering contractors, international operators, and insurance organisations, including AIG, ConocoPhillips, Mott MacDonald, Duke Fluor Daniel, and Babcock Energy. His career has included power plant engineering, construction, commissioning, process safety, operational risk management, and loss prevention across conventional and renewable power generation technologies worldwide.',
      'As a former Power Generation Risk Engineer at AIG, he specialised in operational and construction risk assessments, industrial hazard analysis, equipment failure investigations, business interruption risk, and risk mitigation strategies for power generation facilities globally.',
      'Parvez now provides consultancy and training services specialising in power generation risk engineering, natural hazards, operational risk assessment, process safety, loss prevention, and resilience planning. He has extensive experience facilitating technical workshops, risk reviews, and training programmes for industrial facilities and engineering professionals worldwide.'
    ]
  }
};

export default function NaturalPerilsPage() {
  return (
    <>
      <SEO
        title="Introduction to Natural Perils & Hazards"
        description="Comprehensive training on natural perils and hazards for risk engineers, insurers, and industrial professionals. Understand hazard assessment, mitigation, and resilience."
      />
      <CourseDetail
        course={{
          ...courseData,
          isPast: summary ? isCoursePast(summary) : false,
          completedLabel: summary ? formatCourseDates(summary) : '',
        }}
      />
    </>
  );
}
