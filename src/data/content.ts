/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/data/content.ts
 *
 * Description:
 * Structured page content for the Kukua website routes.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import type { ContactItem, FeatureItem, StatItem, TimelineEntry } from '@/lib/types'
import { contactCards, siteEmail } from '@/data/site'

export const homePage = {
  hero: {
    title: 'Empowering Communities, One Step at a Time',
    accent: 'Communities',
    description:
      'At Kukua, we believe in the power of compassion, collaboration, and community-driven change. Our mission is to bridge the gap in access to education, healthcare, clean water, and nutrition for children and families in rural Tanzania-ensuring that every individual has the opportunity to thrive.',
    actions: [{ label: 'Our Initiatives', href: '/programs-initiatives' }],
    collageImages: ['/images/pages/group-1.jpg', '/images/pages/children-1.jpg', '/images/pages/child-portrait-1.jpg'],
  },
  vision: {
    label: 'Vision & Mission',
    title: 'Bridging Gaps, Building Futures',
    body: 'Kukua provides essential resources like education, healthcare, clean water, and nutrition to rural communities. With humility and respect, Kukua empowers children and families to thrive while preserving their culture, strengths, and traditions.',
    cardTitle: 'Our Vision',
    cardBody: 'We envision a world where opportunity knows no boundaries-where communities are empowered to shape their own futures with dignity and resilience.',
    checklist: ['Creating Lasting Impact', 'Strengthening Communities', 'Uplifting Lives with Dignity'],
    image: '/images/pages/child-portrait-2.jpg',
  },
  buildFuture: {
    title: 'Build a Future, Brick by Brick',
    body: 'Help Us Secure a Permanent Home for the Children of MultiDome Relief Centre',
    image: '/images/pages/brick.jpg',
  },
  whyThisMatters: {
    label: 'Why This Matters',
    title: 'Together, We Can Build a Secure Future',
    body: 'This new, permanent structure will provide:',
    checklist: [
      'A safe space for children to grow, learn, and thrive.',
      'Protection from displacement and uncertainty.',
      'A nurturing environment where they can achieve their dreams.',
    ],
    image: '/images/pages/school.jpg',
    action: { label: 'Donate Now', href: '/donate' },
  },
  stats: {
    items: [
      { value: 0, suffix: '+', label: 'Volunteer Hours' },
      { value: 0, suffix: '+', label: 'Meals Served' },
      { value: 0, prefix: '$', suffix: '+', label: 'Funds Directly Impacting Lives' },
    ] satisfies StatItem[],
    quote: 'CHARITY DOES NOT DIMINISH WEALTH. - Prophet Muhammad (PBUH)',
  },
  story: {
    label: 'Our Story',
    title: 'Rooted in Community, Built on Trust',
    body: 'Kukua was founded with a simple yet profound belief: sustainable change happens when communities are empowered, not rescued. From providing school supplies and clean water to supporting local caregivers, our work is shaped by the needs and strengths of the people we serve.',
    action: { label: 'Our Initiatives', href: '/programs-initiatives' },
    timeline: [
      {
        title: 'Beginnings',
        description: 'What started as a small effort to support children in need quickly grew into a movement, driven by compassion and action.',
      },
      {
        title: 'Growth',
        description: 'Through partnerships and community efforts, we reached more children with education, healthcare, and essential resources.',
      },
      {
        title: 'Resilience',
        description: 'Despite challenges, we remained steadfast, adapting with creative solutions to continue supporting those who needed us most.',
      },
      {
        title: 'Future',
        description: 'With a focus on sustainability, we are committed to long-term impact-empowering communities to build a better future on their own terms.',
      },
    ] satisfies TimelineEntry[],
  },
  donationHelp: {
    label: 'How Your Donation Helps',
    title: 'Be a Part of Something Lasting',
    body: [
      'Your contribution goes beyond building walls-it builds futures. Each brick you donate ensures stability, hope, and opportunities for countless lives.',
      'Every dollar is a Sadaqah Jariyah (ongoing charity) that creates lasting blessings for generations. Here is what your donations will be used for:',
    ],
    checklist: ['Brick', 'Restroom', 'Bedroom', 'Office', 'Classroom/Madresa', 'Kitchen/Dining Hall'],
    action: { label: 'Donate Now', href: '/donate' },
  },
  floorPlans: {
    label: 'our vision',
    title: 'Actual Floor Plans for the New Home',
    body: 'With your help, this vision can become a reality.',
    action: { label: 'know more', href: '/urgent-needs-project' },
    images: ['/images/pages/floorplan-1.jpg', '/images/pages/floorplan-2.jpg', '/images/pages/floorplan-3.jpg'],
  },
  faq: {
    label: 'Question Answer',
    title: 'Frequently Asked Question',
  },
  banner: {
    title: 'Your donation has the power to transform lives.',
    buttonLabel: 'Donate Now',
    href: '/donate',
  },
  donateNow: {
    label: 'Donate Now',
    title: 'Give a Brick, Build a Future',
  },
  contact: {
    infoLabel: 'Contact Information',
    infoTitle: 'Have Queries or Need More Information? Contact Us Today!',
    cards: contactCards,
    formLabel: 'Reach Out and Connect',
    formTitle: 'Use the form below to send us a message directly',
  },
}

export const aboutPage = {
  hero: {
    label: 'About Kukua',
    title: 'Bridging hope & opportunity for children & communities',
  },
  intro: {
    label: "we're making a difference",
    title: "Learn more about our mission, values, and the impact we've made",
    body: "Kukua stands for 'growth' in Swahili, and that's exactly what we strive for-creating opportunities for children and communities in Tanzania to flourish. Our mission is simple: provide access to education, nutrition, healthcare, and resources that empower lives while respecting the culture and strength of the people we serve.",
  },
  stats: [
    { value: 61, label: 'Water Wells Installed' },
    { value: 7790, label: 'Volunteer Hours' },
    { value: 50640, label: 'Meals Served' },
    { value: 155817, prefix: '$', label: 'Funds Directly Impacting Lives' },
  ] satisfies StatItem[],
  vision: {
    label: 'Vision & Mission',
    title: 'we believe in standing alongside communities, not changing them',
    body: 'Kukua is rooted in humility, respect, and the belief that every child deserves the tools to grow, thrive, and reach their full potential, fostering hope, opportunity, and lasting change.',
    cardTitle: 'Our Vision',
    cardBody: 'Our vision is simple: a world where no child goes hungry, lacks education, or suffers due to preventable hardships. Together, we can make this vision a reality.',
    checklist: ['Dignity First', 'Community-Led Change', 'Lasting Impact'],
    quote: 'We do not give charity, we share opportunity.',
    image: '/images/pages/img-0991.jpg',
  },
  timeline: {
    label: 'Our Story',
    title: 'Community founded with a vision to address critical societal challenges',
    items: [
      { year: '2018', title: 'Kukua Founded' },
      { year: '2020', title: 'First 50 Water Wells Installed' },
      { year: '2023', title: 'Supporting Over 265 Children' },
      { year: 'Now', title: 'Empowering communities' },
    ] satisfies TimelineEntry[],
  },
  team: {
    label: 'Volunteer Team',
    title: 'Meet the Volunteer Team',
  },
  cta: {
    label: 'Be a Force for Good',
    title: 'Join us in our mission to create a brighter future for all',
    buttonLabel: 'Contact Us',
    href: '/contact-us',
    email: siteEmail,
  },
}

export const childrenPage = {
  hero: {
    label: 'Our children',
    title: 'Meet the children whose resilience, hope, and dreams inspire everything we do',
  },
  champions: {
    label: 'Champions of Compassion',
    title: 'The children of Fadhillah Orphanage and Multidome Relief Centre-growing, learning, and thriving with your support',
    body: 'Kukua currently supports two key facilities in Tanzania: the Multidome Relief Centre and the Fadhillah Orphanage Centre, collectively providing care, resources, and opportunities to over 265 children.',
    calloutTitle: 'Your support changes lives',
    calloutBody: "From providing school supplies to ensuring daily meals, every effort makes a lasting impact on a child's future.",
  },
  stats: [
    { value: 210, suffix: '', label: 'Children Supported' },
    { value: 39599, suffix: '', label: 'Meals Provided' },
    { value: 79, suffix: '', label: 'of Donations Reach the Children' },
  ] satisfies StatItem[],
  story: {
    label: 'Impact Stories',
    title: "Shadiya and Nadiya's Journey with Kukua",
    body: "Shadiya and Nadiya, twin sisters, joined the Multi-Dome Relief Centre at 11 months old, facing malnutrition due to their family's struggles. Kukua's team provided immediate medical care and personalized nutrition plans, ensuring their recovery. Surrounded by love and emotional support, the twins flourished-Shadiya with her bold, protective nature and Nadiya with her gentle curiosity. Their second birthday, celebrated with colorful decorations and matching pink dresses, highlighted the Centre's commitment to creating joyful, nurturing experiences. Their story reflects the transformative power of care, community, and compassion in helping children overcome early hardships.",
    features: [
      {
        title: 'Medical Care',
        description: "Shadiya and Nadiya arrived malnourished, but Kukua's team quickly implemented tailored nutrition plans and regular follow-ups to restore their health.",
      },
      {
        title: 'Emotional Growth',
        description: 'The twins received loving care, with Shadiya bonding closely with Fauzi Uncle and Nadiya bringing peaceful calmness with her gentle nature.',
      },
      {
        title: 'Milestone Celebration',
        description: "Their second birthday at the Centre was a joyful celebration with balloons, treats, and love from the Kukua family, reflecting the community's dedication.",
      },
    ] satisfies FeatureItem[],
    image: '/images/pages/twins-1.jpg',
  },
  leadership: {
    label: 'Meet Our Leadership',
    title: 'Their smiles tell stories of resilience, hope, and the boundless potential of every child',
  },
  cta: {
    title: "Join Us & Change a Child's Life Today",
    buttonLabel: 'Support a Child',
    href: '/contact-us',
    email: siteEmail,
  },
}

export const programsPage = {
  hero: {
    label: 'Urgent Needs',
    title: 'Immediate Needs, Lasting Impact',
  },
  vision: {
    label: 'Vision & Mission',
    title: 'Our Mission to Make a Difference',
    body: "Every child deserves a chance to learn, grow, and thrive. Kukua's urgent needs focus on life-changing initiatives-education, clean water, nutrition, and healthcare-to ensure children and communities receive the essentials they need today for a better tomorrow.",
    cardTitle: 'Our Vision',
    cardBody: 'Our vision is simple: a world where no child goes hungry, lacks education, or suffers due to preventable hardships. Together, we can make this vision a reality.',
    checklist: ['Education for Every Child', 'Clean Water for All', 'Nutrition & Healthcare as a Right'],
  },
  impact: {
    label: 'Impact Stories',
    title: 'See the Impact of Your Support',
    body: 'Your contributions truly make a difference. From providing access to education and nourishing meals to supporting healthcare and community initiatives, your generosity transforms lives. See the impact of your support in empowering children, uplifting families, and creating opportunities for brighter futures.',
    stats: [
      { value: 0, suffix: '+', label: 'Volunteer Hours Logged' },
      { value: 0, suffix: '+', label: 'Meals Served' },
      { value: 0, suffix: '+', label: 'Water Wells Installed' },
    ] satisfies StatItem[],
  },
  cta: {
    label: 'Urgent Need',
    title: 'Be a Part of the Change',
    buttonLabel: 'Boys Home Construction',
    href: '/urgent-needs-project',
    email: siteEmail,
  },
}

export const programDetailPages = {
  ramadan: {
    heroLabel: 'Ramadan at Kukua',
    heroTitle: 'Bringing the Blessings of Ramadan to Children & Families in Need',
    overview: {
      label: 'Program Overview',
      title: 'Nourishing Communities, Sharing the Joy of Ramadan',
      body: [
        'Kukua works tirelessly during Ramadan to provide warm meals and support, allowing every child and family in our care to observe the sacred month with dignity.',
        'Kukua ensures that no one goes hungry during this holy month through community Iftar meals, food distribution, and special celebrations.',
      ],
      features: [
        {
          title: 'Ramadan Initiatives at Kukua',
          description: 'From daily Iftar sponsorships providing warm meals to over 265 children, to grocery distributions ensuring families have essentials for Suhoor and Iftar, and community gatherings fostering the spirit of togetherness, we make Ramadan meaningful for all.',
        },
        {
          title: 'Our Achievements Last Year',
          description: "We hosted 18 Iftars at Fadhillah Orphanage and distributed groceries to families at the Multidome Relief Centre, ensuring no child or family went without food. This year, we're determined to expand our reach even further.",
        },
        {
          title: 'The Blessings of Ramadan',
          description: 'Ramadan is about more than just food-it is about hope, community, and connection. Every donation made during this sacred time helps us continue providing vital support to children and families year-round.',
        },
      ] satisfies FeatureItem[],
    },
    impact: {
      label: 'Ramadan Project',
      title: 'Feed a Child, Change a Life This Ramadan',
      stats: [
        { value: 50000, suffix: '+', label: 'Nutritious meals have been served.' },
        { value: 265, suffix: '+', label: 'children & families have received essential resources.' },
      ] satisfies StatItem[],
    },
    campaign: {
      label: 'the Campaign',
      title: 'How You Can Help This Ramadan',
      prices: [
        { amount: '$250 CAD', description: 'Sponsors an Iftar for 40 children at Multidome.' },
        { amount: '$850 CAD', description: 'Sponsors an Iftar for 200 children at Fadhillah Orphanage.' },
      ],
      body: 'Every Donation Counts - No amount is too small to make a difference.',
      checklist: ['Community First', 'No Child Goes Hungry', 'Giving with Dignity'],
      buttonLabel: 'donate now',
    },
    cta: {
      title: 'Be a Part of Ramadan at Kukua-Your Support Matters',
      buttonLabel: 'Sponsor an Iftar',
      href: '/donate',
      email: siteEmail,
    },
  },
  food: {
    heroLabel: "Kukua's Commitment",
    heroTitle: 'Food & Nutrition: Nourishing the Future',
    overview: {
      label: 'Program Overview',
      title: 'Building a Healthier Tomorrow, One Meal at a Time',
      features: [
        { title: 'Nourishment for a Brighter Future', description: "Kukua's meal programs help children grow, learn, and thrive by providing essential daily nutrition." },
        { title: 'More Than Meals: A Holistic Approach', description: 'Beyond food, we support healthcare and mobility aids, ensuring children live healthier, happier lives.' },
        { title: 'Daily Nutrition for Growing Minds', description: 'Regular meals help children focus better in school and support healthy development.' },
        { title: 'Community-Based Food Programs', description: 'Kukua collaborates with communities to provide sustainable meal solutions.' },
        { title: 'Special Meals for Ramadan and Eid', description: 'Distributing food during special occasions fosters community spirit and joy.' },
        { title: 'Healthcare Support Alongside Nutrition', description: 'Ensuring access to healthcare and mobility aids enhances overall well-being.' },
        { title: 'Long-Term Impact on Communities', description: 'Proper nutrition leads to healthier, more resilient communities.' },
      ] satisfies FeatureItem[],
    },
    impact: {
      label: 'Empowering the Future',
      title: "Kukua's Commitment: Fighting Malnutrition with Care",
      body: "In many Tanzanian communities, malnutrition poses a significant challenge, affecting children's health and ability to concentrate in school. Kukua's food programs provide daily meals, ensuring children receive the nutrients they need to thrive. Additionally, during Ramadan and Eid, we distribute essential food supplies to families, spreading joy and relief.",
      image: '/images/pages/img-1409.jpg',
    },
    cta: {
      title: 'Be the Change: Join Us in Nourishing Young Lives',
      buttonLabel: 'Donate Now',
      href: '/donate',
    },
  },
  urgent: {
    heroLabel: 'the urgent need',
    heroTitle: 'Boys Home construction',
    overview: {
      label: 'Program Overview',
      title: 'Building Hope, Strengthening Communities',
      body: [
        'At Kukua, we believe in empowering communities with long-term solutions that provide dignity, security, and opportunity. For years, the boys of MultiDome Relief Centre have found safety in temporary housing, but now they face the risk of losing their dormitory by February 28, 2025. This is our chance to build a permanent home-a space where they can grow, learn, and thrive. With the support of our community, we can turn this challenge into an opportunity for lasting change.',
      ],
      features: [
        { title: 'A Safe Place for Growth and Dreams', description: 'A nurturing environment where children receive education, care, and support to pursue their dreams and build a brighter future.' },
        { title: 'Stability and Security for Every Child', description: 'Providing protection from displacement and uncertainty, ensuring children have a stable home where they feel safe, valued, and supported.' },
        { title: 'A Foundation for Learning and Thriving', description: 'A secure space where children can grow, learn, and thrive with access to essential resources, guidance, and opportunities for success.' },
        { title: 'A Lifelong Shelter of Care and Opportunity', description: 'A safe and supportive space where children are nurtured, educated, and empowered to overcome challenges and reach their full potential.' },
      ] satisfies FeatureItem[],
    },
    impact: {
      label: 'Empowering the Future',
      title: 'Be a Part of Something Lasting',
      body: [
        'Your contribution goes beyond building walls-it builds futures. Each brick you donate ensures stability, hope, and opportunities for countless lives.',
        'Every dollar is a Sadaqah Jariyah (ongoing charity) that creates lasting blessings for generations.',
      ],
      checklist: ['Brick', 'Restroom', 'Bedroom', 'Office', 'Classroom/Madresa', 'Kitchen/Dining Hall'],
    },
    floorPlans: {
      label: 'our vision',
      title: 'Actual Floor Plans for the New Home',
      body: 'With your help, this vision can become a reality.',
      images: ['/images/pages/floorplan-1.jpg', '/images/pages/floorplan-2.jpg', '/images/pages/floorplan-3.jpg'],
    },
    cta: {
      title: 'Your donation has the power to transform lives',
      buttonLabel: 'Donate Now',
      href: '/donate',
    },
  },
  healthcare: {
    heroLabel: "Kukua's Impact",
    heroTitle: 'Healthcare: Access to Life-Saving Treatment',
    overview: {
      label: 'Program Overview',
      title: 'Healthcare for Every Child: A Step Toward a Healthier Future',
      body: [
        'Kukua ensures children stay healthy and thrive by providing annual health insurance, regular check-ups, and timely medical interventions.',
        "From preventive care to emergency treatments, we prioritize every child's well-being through accessible, reliable, and compassionate healthcare services.",
      ],
      features: [
        { title: 'Annual Health Insurance Coverage', description: 'Ensuring children receive necessary medical care without financial burdens.' },
        { title: 'Early Detection Through Medical Check-Ups', description: 'Identifying and addressing health issues before they become severe.' },
        { title: 'Collaborations with Local Clinics', description: 'Partnering with healthcare professionals for regular care and specialized treatments.' },
        { title: 'Preventive Care for Long-Term Health', description: "Focusing on preventive measures to safeguard children's well-being." },
        { title: 'Emergency Medical Support', description: 'Providing access to urgent care when unexpected health concerns arise.' },
      ] satisfies FeatureItem[],
    },
    impact: {
      label: 'Empowering the Future',
      title: 'Proactive Care Through Medical Check-Ups',
      body: 'Kukua bridges this gap by funding annual health insurance and conducting regular medical check-ups for children. Through strategic partnerships with local clinics and healthcare professionals, we ensure timely diagnosis, preventive care, and necessary treatments.',
      image: '/images/pages/img-0997.jpg',
    },
    cta: { title: 'Support Life-Saving Healthcare for Children', buttonLabel: 'Donate Now', href: '/donate' },
  },
  education: {
    heroLabel: 'Access To education',
    heroTitle: 'Education: A Pathway to Opportunity',
    overview: {
      label: 'Program Overview',
      title: "Breaking Barriers: Kukua's Commitment to Education",
      body: [
        'Access to education provides children with the tools to break free from poverty, fostering a brighter future filled with opportunity and growth.',
        'By providing school supplies, tuition support, and resources, Kukua helps children stay in school, learn with confidence, and pursue their dreams.',
      ],
      features: [
        { title: 'Access to Basic Educational Supplies', description: 'Essential materials like books, pencils, and backpacks ensure children are prepared to learn.' },
        { title: 'Financial Support for School Fees', description: 'Tuition assistance helps break the financial barriers to education.' },
        { title: 'Community Involvement and Awareness', description: 'Educating communities about the importance of schooling fosters long-term growth.' },
        { title: 'Inspiring Dreams and Aspirations', description: 'Education opens pathways for children to dream big and achieve more.' },
        { title: 'Sustainable Educational Programs', description: 'Kukua focuses on long-term solutions to ensure ongoing access to education.' },
      ] satisfies FeatureItem[],
    },
    impact: {
      label: 'Empowering the Future',
      title: 'Providing Essential Resources for Lifelong Learning',
      body: 'In Tanzania, countless children face the challenge of accessing quality education due to financial constraints. Kukua addresses this issue by providing essential school supplies, tuition assistance, and resources that empower young minds.',
      stat: { value: 230, suffix: '+', label: 'children receive school supplies, tuition support, and learning resources.' } satisfies StatItem,
      image: '/images/pages/img-1182.jpg',
    },
    cta: { title: 'Be the Change Join Us in Empowering Young Minds', buttonLabel: 'Donate Now', href: '/donate' },
  },
  wheelchairs: {
    heroLabel: 'Transforming Lives',
    heroTitle: 'Wheelchairs: Restoring Dignity & Mobility',
    overview: {
      label: 'Program Overview',
      title: "Kukua's Impact: Restoring Freedom and Independence",
      body: [
        "Kukua's wheelchairs offer independence and dignity, helping individuals live fuller, more active lives.",
        'With 150+ wheelchairs distributed, we provide freedom of movement and a renewed sense of purpose.',
      ],
      features: [
        { title: 'Independence through Mobility', description: 'Wheelchairs empower individuals to move freely and live more independently.' },
        { title: 'Improved Quality of Life', description: 'Access to mobility aids reduces dependency and enhances participation in daily activities.' },
        { title: 'Strengthening Family Bonds', description: 'Families experience relief as their loved ones gain mobility and confidence.' },
        { title: 'Community Inclusion and Participation', description: 'Mobility fosters better access to education, work, and social interactions.' },
        { title: 'Sustainable Support for Accessibility', description: 'Kukua ensures durable, long-lasting wheelchairs for enduring impact.' },
      ] satisfies FeatureItem[],
    },
    impact: {
      label: 'Gift of Independence',
      title: 'Mobility Matters: Transforming Lives with Wheelchairs',
      body: 'For individuals with physical disabilities, mobility is more than movement-it is a gateway to independence and self-reliance. Kukua has provided over 150 wheelchairs, giving children and adults the freedom to explore, engage, and contribute to their communities. Each wheelchair represents restored dignity, greater access to education and work, and the ability to participate fully in family and community life.',
      stat: { value: 175, suffix: '+', label: 'Wheelchairs provided' } satisfies StatItem,
      image: '/images/pages/img-1369.jpg',
    },
    cta: { title: 'Be the Change: Help Us Restore Mobility and Dignity', buttonLabel: 'Donate Now', href: '/donate' },
  },
  water: {
    heroLabel: "Kukua's Mission",
    heroTitle: 'Water Wells: The Gift of Clean Water',
    overview: {
      label: 'Program Overview',
      title: 'Clean Water: A Lifeline for Communities',
      body: [
        'Clean water transforms communities by reducing disease, saving time, and creating opportunities for education and growth.',
        'With 77+ wells built, Kukua provides reliable access to safe water, empowering communities to thrive and prosper.',
      ],
      features: [
        { title: 'Clean Water for Better Health', description: 'Access to clean water reduces waterborne diseases and promotes healthier communities.' },
        { title: 'Time Saved, Lives Improved', description: 'Water wells eliminate long walks for water, giving children more time for school and play.' },
        { title: 'Sustainable Solutions for the Future', description: 'Kukua ensures wells are durable, reliable, and accessible for years to come.' },
        { title: 'Community Involvement in Every Step', description: 'We engage locals to build, maintain, and cherish their water sources.' },
      ] satisfies FeatureItem[],
    },
    impact: {
      label: 'Empowering the Future',
      title: 'Transforming Lives with Every Drop',
      body: 'Clean water is not just a necessity; it is a catalyst for growth, health, and opportunity. In many Tanzanian communities, fetching water requires hours of walking each day. Kukua has built over 77 water wells, bringing safe, accessible water closer to homes.',
      stat: { value: 79, suffix: '+', label: 'Water Wells built' } satisfies StatItem,
      image: '/images/pages/img-1235.jpg',
    },
    cta: { title: 'Help Us Bring Water to More Communities', buttonLabel: 'Donate Now', href: '/donate' },
  },
  childrenRun: {
    heroLabel: 'Children-Run Initiatives',
    heroTitle: 'Empowering the Next Generation to Lead Change',
    overview: {
      label: 'Program Overview',
      title: 'Inspiring Leadership Through Action',
      body: [
        'At Kukua, we believe children are the changemakers of today. Through hands-on initiatives, they lead community projects, organize school supply distributions, and assist with food programs, gaining skills to create lasting change.',
        'Through hands-on initiatives, children in our programs take active roles in leading community projects, organizing school supply distributions, and assisting with food programs, leadership, teamwork, and the power of giving back.',
      ],
      features: [
        { title: 'How Our Children Lead', description: 'Through peer-led education programs, older students mentor younger ones. Community service projects allow children to take charge of maintaining school spaces and organizing meal distributions.' },
        { title: 'The Power of Giving Back', description: 'Children learn the value of giving back by engaging in small actions with big impacts, supporting their communities in meaningful and transformative ways.' },
        { title: 'Building Future Leaders', description: 'These initiatives nurture confidence, leadership, and responsibility, empowering children to realize their potential and shape their own futures.' },
      ] satisfies FeatureItem[],
    },
    project: {
      label: 'the Project',
      title: 'Leadership in Action',
      stats: [
        { value: 265, suffix: '+', label: 'Children actively participate in our programs' },
        { value: 10, suffix: '+', label: 'Initiatives are designed and led by children' },
      ] satisfies StatItem[],
    },
    campaign: {
      label: 'the Campaign',
      title: 'How You Can Support These Initiatives',
      prices: [
        { amount: '$50 CAD', description: 'Provides materials for child-led school workshops.' },
        { amount: '$100 CAD', description: "Supports a child's first entrepreneurial project." },
      ],
      body: 'Every Contribution Matters - Help a child take the lead in changing their community.',
      checklist: ['Leadership Begins Early', 'Learning Through Doing', 'Community-Led Growth'],
      buttonLabel: 'donate now',
    },
    cta: { title: 'Be a Part of Their Journey-Support a Young Changemaker Today', buttonLabel: 'Empower a Child Leader', href: '/donate', email: siteEmail },
  },
  sustainability: {
    heroLabel: 'Sustainability - Training Centre',
    heroTitle: 'Creating Opportunities for Self-Sufficiency & Community Growth',
    overview: {
      label: 'Program Overview',
      title: 'Vocational Training for a Brighter Future',
      body: [
        'The Kukua Training Centre is a hub for sustainability and empowerment. We equip individuals, especially women and youth, with essential skills that allow them to build self-sufficient futures.',
        'Through hands-on training programs in tailoring, agriculture, and entrepreneurship, we provide the tools needed for financial independence and long-term stability to the individuals.',
      ],
      features: [
        { title: 'Key Programs at the Training Centre', description: 'The Training Centre offers sewing and tailoring courses to help women create and sell handmade goods, sustainable farming lessons, and business support to empower individuals to start their ventures.' },
        { title: 'Empowering Families and Communities', description: 'By teaching valuable vocational skills, the Training Centre uplifts individuals, supports families, and strengthens communities, creating lasting opportunities for future generations.' },
        { title: 'A Hub for Growth and Sustainability', description: 'The Training Centre is a space for learning, innovation, and sustainability, enabling graduates to build successful livelihoods with dignity, pride, and independence.' },
      ] satisfies FeatureItem[],
    },
    project: {
      label: 'the Project',
      title: 'Success Stories: Transforming Lives Through Training',
      stats: [
        { value: 100, suffix: '+', label: 'Women have received training in tailoring' },
        { value: 50, suffix: '+', label: 'Individuals Now Running Small Businesses' },
      ] satisfies StatItem[],
    },
    campaign: {
      label: 'the Campaign',
      title: 'How You Can Support Sustainable Growth',
      prices: [
        { amount: '$50', description: 'Provides sewing materials for a trainee.' },
        { amount: '$100', description: 'Funds a full month of vocational training.' },
      ],
      body: 'Your support helps build a sustainable future for families.',
      checklist: ['Empower Through Skills', 'Build Financial Independence', 'Strengthen Communities'],
      buttonLabel: 'Donate now',
    },
    cta: { title: 'Help Us Train & Empower More Individuals-Get Involved Today', buttonLabel: 'Donate now', href: '/donate', email: siteEmail },
  },
} as const

export const contactPage = {
  hero: {
    label: 'Contact Us',
    title: 'Connect With Our Volunteer Organization',
  },
  info: {
    label: 'Contact Information',
    title: 'Have Queries or Need More Information? Contact Us Today!',
    cards: [
      { kind: 'email', title: 'Email Us At', value: siteEmail, href: `mailto:${siteEmail}` },
    ] satisfies ContactItem[],
  },
  form: {
    label: 'Reach Out and Connect',
    title: 'Have Queries or Need More Information? Contact Us Today!',
  },
}

export const donatePage = {
  hero: {
    label: 'Donations',
    title: 'Donate to Transform Lives',
  },
  steps: {
    label: 'Giving Made Easy',
    title: "We've made it simple and convenient for you to support our Events & cause",
    items: [
      { number: '01', title: 'Make a Donation' },
      { number: '02', title: 'Donation Options' },
      { number: '03', title: 'Your Money Goes' },
      { number: '04', title: 'Donation Impact' },
    ],
  },
}

export const defaultContactCards = contactCards
export const aboutTimelineItems = aboutPage.timeline.items
export const aboutStats = aboutPage.stats
export const childrenStats = childrenPage.stats
export const homeStats = homePage.stats.items
