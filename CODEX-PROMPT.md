# Codex Prompt: Full Clone of kukua.ca

## Project Overview

Clone the nonprofit website kukua.ca as a **Next.js 14 App Router** static site with **Tailwind CSS**. The site is for Kukua Orphanage, a 100% non-profit supporting orphans in rural Tanzania. All images are already downloaded in `/public/images/`.

**Deploy target**: Vercel (static export)

---

## Tech Stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS** (no component libraries — custom components only)
- **`<img>` tags** or a custom Image component (no `next/image` optimization — static export requires `images.unoptimized: true` in next.config, so just use plain `<img>` or set that config flag)
- **Framer Motion** for subtle animations (counters, fade-ins)
- **React Hook Form** for contact form
- **Lucide React** for icons

---

## Design System

### Color Palette (CSS Variables in globals.css)
```
--color-gold: #fbe8a6        /* Primary accent — warm gold */
--color-gold-dark: #f3d97a   /* Hover gold */
--color-brown-dark: #2c2927  /* Dark brown — headings, dark backgrounds */
--color-brown: #534a45       /* Body text brown */
--color-cream: #f2f1e5       /* Page background — warm cream */
--color-white: #ffffff        /* White */
--color-light-gray: #f2f5f7  /* Subtle backgrounds */
```

### Typography
- **Headings**: `DM Serif Display`, serif (Google Fonts)
- **Body**: `Poppins`, sans-serif (Google Fonts)
- **H1**: 95px desktop / 50px tablet / 32px mobile
- **H2**: 52px desktop / 32px tablet / 28px mobile
- **H3**: 36px desktop / 26px tablet / 22px mobile
- **H4**: 25px
- **Body**: 17px, line-height 1.6

### Buttons
- **Primary (outline)**: Border 1px solid dark-brown, transparent bg, brown text, square corners (0 border-radius)
- **Hover**: White text, dark-brown bg, same border
- **"Donate Now" button**: Same outline style, used as main CTA throughout
- Font: inherit, font-weight 600, line-height 1em, padding 14px 16px

---

## Site Structure — All Pages

### Global Layout
- **Top Bar**: Cream/gold bar with "Kukua, Tanzania & Canada" location + "kukuaorg@gmail.com" email + Instagram social link
- **Header**: Logo (left) + Navigation (center/right) + "Donate Now" CTA button (right)
- **Footer**: Logo, email (kukuaorg@gmail.com), Quick Links (Home, About Kukua, Our Impact, Donate, Programs & Initiatives, Contact Us), tagline "Building Bridges, Creating Opportunities" + sub "Empowering communities with resources, respect, and resilience for a brighter future.", Instagram link, copyright "Allright Reserved - Yellow octo llp"
- **Mobile**: Hamburger menu with slide-out navigation

### Canonical Contact Info (use ONLY these everywhere)
- **Email**: kukuaorg@gmail.com
- **Phone Canada**: +1 416 123 4567
- **Phone Tanzania**: +255 123 456 789
- These are the values on the live site. Use them consistently on every page.

### Navigation Structure
```
Home
About ▾
  ├── About Kukua
  └── Our Children
Programs & Initiatives ▾
  ├── Ramadan At Kukua
  ├── Food & Nutrition
  ├── Urgent Needs Project
  ├── Healthcare
  ├── Education
  ├── Wheelchairs
  └── Water Wells
Our Impact ▾
  ├── Children Run Initiatives
  └── Sustainability – Training Centre
Contact Us
[Donate Now] (button)
```

---

## Page-by-Page Content & Layout

### 1. HOME PAGE (`/`)

**Section 1 — Hero**
- Full-width section with warm background
- H2: "Empowering Communities, One Step at a Time" (with "Communities" styled in gold/accent, rest in normal heading color)
- Body: "At Kukua, we believe in the power of compassion, collaboration, and community-driven change. Our mission is to bridge the gap in access to education, healthcare, clean water, and nutrition for children and families in rural Tanzania—ensuring that every individual has the opportunity to thrive."
- CTA Button: "Our Initiatives" → links to `/programs-initiatives`
- Right side: decorative image collage (use `group-1.jpg`, `children-1.jpg`, `child-portrait-1.jpg`)

**Section 2 — Vision & Mission**
- Label tag: "Vision & Mission"
- H3: "Bridging Gaps, Building Futures"
- Body: "Kukua provides essential resources like education, healthcare, clean water, and nutrition to rural communities. With humility and respect, Kukua empowers children and families to thrive while preserving their culture, strengths, and traditions."
- Sub-card "Our Vision": "We envision a world where opportunity knows no boundaries—where communities are empowered to shape their own futures with dignity and resilience."
- Checklist items with checkmark icons:
  - Creating Lasting Impact
  - Strengthening Communities
  - Uplifting Lives with Dignity
- Image: `child-portrait-2.jpg`

**Section 3 — Build a Future, Brick by Brick**
- H4: "Build a Future, Brick by Brick"
- Body: "Help Us Secure a Permanent Home for the Children of MultiDome Relief Centre"
- Image: `brick.jpg`

**Section 4 — Why This Matters**
- Label: "Why This Matters"
- H3: "Together, We Can Build a Secure Future"
- Body: "This new, permanent structure will provide:"
- Checklist:
  - A safe space for children to grow, learn, and thrive.
  - Protection from displacement and uncertainty.
  - A nurturing environment where they can achieve their dreams.
- Image: `school.jpg`
- "Donate Now" CTA button → `/donate`

**Section 5 — Stats Counter**
- Dark brown (#2c2927) background section, white/gold text
- Animated counting numbers (use Framer Motion + intersection observer to trigger on scroll):
  - Volunteer Hours: 0+ (animate from 0, display as "0" with "+" suffix)
  - Meals Served: 0+
  - Funds Directly Impacting Lives: $0+
- Quote below stats: `"CHARITY DOES NOT DIMINISH WEALTH." — Prophet Muhammad (PBUH)`

**Section 6 — Our Story**
- Label: "Our Story"
- H3: "Rooted in Community, Built on Trust"
- Body: "Kukua was founded with a simple yet profound belief: sustainable change happens when communities are empowered, not rescued. From providing school supplies and clean water to supporting local caregivers, our work is shaped by the needs and strengths of the people we serve."
- CTA: "Our Initiatives" → `/programs-initiatives`
- 4 timeline-style cards (horizontal on desktop, vertical on mobile):
  - **Beginnings**: "What started as a small effort to support children in need quickly grew into a movement, driven by compassion and action."
  - **Growth**: "Through partnerships and community efforts, we reached more children with education, healthcare, and essential resources."
  - **Resilience**: "Despite challenges, we remained steadfast, adapting with creative solutions to continue supporting those who needed us most."
  - **Future**: "With a focus on sustainability, we are committed to long-term impact—empowering communities to build a better future on their own terms."

**Section 7 — How Your Donation Helps**
- Label: "How Your Donation Helps"
- H3: "Be a Part of Something Lasting"
- Body: "Your contribution goes beyond building walls—it builds futures. Each brick you donate ensures stability, hope, and opportunities for countless lives."
- Body: "Every dollar is a Sadaqah Jariyah (ongoing charity) that creates lasting blessings for generations. Here is what your donations will be used for:"
- 2-column checklist with checkmarks: Brick, Restroom, Bedroom, Office, Classroom/Madresa, Kitchen/Dining Hall
- "Donate Now" CTA → `/donate`

**Section 8 — Floor Plans**
- Label: "our vision"
- H3: "Actual Floor Plans for the New Home"
- Body: "With your help, this vision can become a reality."
- "know more" button → `/urgent-needs-project`
- 3 floor plan images side by side: `floorplan-1.jpg`, `floorplan-2.jpg`, `floorplan-3.jpg`

**Section 9 — Donation Cards (Support Our Cause)**
- Label: "Support Our Cause"
- H3: "Make a difference today by donating to our cause"
- 6 donation tier cards in a responsive grid (3 cols desktop, 2 tablet, 1 mobile):
  - **1 Brick** — Cost: $10, progress bar at 0%, "Donate Now" button, image: `brick.jpg`
  - **1 Restroom** — Cost: $2,000, progress bar at 0%, image: `warm-stalls.jpg`
  - **1 Bedroom** — Cost: $5,000, progress bar at 0%, image: `children-1.jpg`
  - **Office** — Cost: $5,000, progress bar at 0%, image: `school.jpg`
  - **Classroom/Madresa** — Cost: $7,000, progress bar at 0%, image: `img-1023.jpg`
  - **Kitchen/Dining Hall** — Cost: $10,000, progress bar at 0%, image: `img-1077.jpg`
- Each card layout: image at top → "Social" tag → "Collected" label → progress bar with 0% → H4 title → cost list item → Donate Now button

**Section 10 — FAQ**
- Label: "Question Answer"
- H3: "Frequently Asked Question"
- Accordion items (click to expand/collapse, only one open at a time):
  1. **"How can I support Kukua?"** → "Help us spread the word! Follow us on Instagram and share our mission on social media to inspire others."
  2. **"I want to volunteer. How can I join the Kukua family?"** → "We'd be honored to have you on our team! Send us a message here to get started."
  3. **"How can I donate?"** → "Your generosity makes a difference! Click here to make a donation."
  4. **"Do you provide tax receipts for donations?"** → "As a not-for-profit organization, we are unable to issue tax receipts. However, your kindness will be rewarded in blessings!"

**Section 11 — CTA Banner**
- H4: "Your donation has the power to transform lives."
- "Donate Now" button → `/donate`

**Section 12 — Donate Now Section**
- Label: "Donate Now"
- H3: "Give a Brick, Build a Future"

**Section 13 — Contact Information**
- Label: "Contact Information"
- H3: "Have Queries or Need More Information? Contact Us Today!"
- 3 icon cards in a row:
  - Phone icon + H4 "Telephone" + "+1 416 123 4567 (Canada)"
  - Mail icon + H4 "Email Us At" + "kukuaorg@gmail.com"
  - Phone icon + H4 "Telephone" + "+255 123 456 789 (Tanzania)"

**Section 14 — Contact Form**
- Label: "Reach Out and Connect"
- H3: "Use the form below to send us a message directly"
- Fields: Name (text input), Email (email input), Message (textarea)
- Submit button: "Send" (outline style)
- On submit: show success toast/message "Thank you! Your message has been sent." (client-side only)

---

### 2. ABOUT KUKUA (`/about-kukua`)

**Hero**: Label "About Kukua", H1 "Bridging hope & opportunity for children & communities"

**About Us Section**:
- Label: "we're making a difference"
- H3: "Learn more about our mission, values, and the impact we've made"
- Body: "Kukua stands for 'growth' in Swahili, and that's exactly what we strive for—creating opportunities for children and communities in Tanzania to flourish. Our mission is simple: provide access to education, nutrition, healthcare, and resources that empower lives while respecting the culture and strength of the people we serve."

**Stats Section** (animated counters, dark bg):
- Water Wells Installed: 0+
- Volunteer Hours: 0+
- Meals Served: 0+
- Funds Directly Impacting Lives: $0+
- "donate now" CTA button below

**Vision & Mission Section**:
- Label: "Vision & Mission"
- H3: "we believe in standing alongside communities, not changing them"
- Body: "Kukua is rooted in humility, respect, and the belief that every child deserves the tools to grow, thrive, and reach their full potential, fostering hope, opportunity, and lasting change."
- Sub-card H4 "Our Vision": "Our vision is simple: a world where no child goes hungry, lacks education, or suffers due to preventable hardships. Together, we can make this vision a reality."
- Checklist: Dignity First, Community-Led Change, Lasting Impact
- Quote: `"We do not give charity, we share opportunity."`
- Image: `img-0991.jpg`

**Our Story Timeline**:
- Label: "Our Story"
- H3: "Community founded with a vision to address critical societal challenges"
- 4 timeline entries (vertical timeline with year markers):
  - **2018** — H4 "Kukua Founded"
  - **2020** — H4 "First 50 Water Wells Installed"
  - **2023** — H4 "Supporting Over 265 Children"
  - **Now** — H4 "Empowering communities"

**Volunteer Team Grid**:
- Label: "Volunteer Team"
- H3: "Meet the Volunteer Team"
- Grid of team member cards (4 cols desktop, 3 tablet, 2 mobile) with circular/rounded photo + name below:
  - Meryem → `/images/team/meryem.jpg`
  - Jamal → `/images/team/jamal.jpg`
  - Farishta → `/images/team/farishta.jpg`
  - Fareedah → `/images/team/fareedah.jpeg`
  - Shamaz → `/images/team/shamaz.jpeg`
  - Fauzi Uncle → `/images/team/fauzi-uncle.jpeg`
  - Omer → `/images/team/omer.jpeg`
  - Nadeem → `/images/team/nadeem.jpg`
  - Nabeel → `/images/team/nabeel.jpeg`
  - Mohamad Ali → `/images/team/mohamadali.jpg`
  - Jackson → `/images/team/jackson.jpeg`
  - Rifai → `/images/team/rifai.jpg`
  - Shamsad → `/images/team/shamsad.jpeg`
  - Anisha → `/images/team/anisha.jpg`

**CTA Section**:
- Label: "Be a Force for Good"
- H3: "Join us in our mission to create a brighter future for all"
- "Contact Us" button → `/contact-us`
- Email: kukuaorg@gmail.com

---

### 3. OUR CHILDREN (`/our-children`)

**Hero**: Label "Our children", H1 "Meet the children whose resilience, hope, and dreams inspire everything we do"

**Champions Section**:
- Label: "Champions of Compassion"
- H3: "The children of Fadhillah Orphanage and Multidome Relief Centre—growing, learning, and thriving with your support"
- Body: "Kukua currently supports two key facilities in Tanzania: the **Multidome Relief Centre** and the **Fadhillah Orphanage Centre**, collectively providing care, resources, and opportunities to over **265 children**."
- Callout card H4: "Your support changes lives" + "From providing school supplies to ensuring daily meals, every effort makes a lasting impact on a child's future."

**Stats Section** (dark bg):
- Children Supported: 265+
- Meals Provided: 0+
- of Donations Reach the Children: 0%

**Impact Story Section**:
- Label: "Impact Stories"
- H3: "Shadiya and Nadiya's Journey with Kukua"
- Full narrative body text: "Shadiya and Nadiya, twin sisters, joined the Multi-Dome Relief Centre at 11 months old, facing malnutrition due to their family's struggles. Kukua's team provided immediate medical care and personalized nutrition plans, ensuring their recovery. Surrounded by love and emotional support, the twins flourished—Shadiya with her bold, protective nature and Nadiya with her gentle curiosity. Their second birthday, celebrated with colorful decorations and matching pink dresses, highlighted the Centre's commitment to creating joyful, nurturing experiences. Their story reflects the transformative power of care, community, and compassion in helping children overcome early hardships."
- 3 feature cards below the narrative:
  - H3 "Medical Care": "Shadiya and Nadiya arrived malnourished, but Kukua's team quickly implemented tailored nutrition plans and regular follow-ups to restore their health."
  - H3 "Emotional Growth": "The twins received loving care, with Shadiya bonding closely with Fauzi Uncle and Nadiya bringing peaceful calmness with her gentle nature."
  - H3 "Milestone Celebration": "Their second birthday at the Centre was a joyful celebration with balloons, treats, and love from the Kukua family, reflecting the community's dedication."
- Image: `twins-1.jpg`

**Leadership Grid**:
- Label: "Meet Our Leadership"
- H3: "Their smiles tell stories of resilience, hope, and the boundless potential of every child"
- Same team grid as About page

**CTA Section**:
- "donate now" button
- H1: "Join Us & Change a Child's Life Today"
- "Support a Child" button → `/contact-us`
- Email: kukuaorg@gmail.com

---

### 4. PROGRAMS & INITIATIVES (`/programs-initiatives`)

**Hero**: Label "Urgent Needs", H1 "Immediate Needs, Lasting Impact"

**Vision & Mission Section**:
- Label: "Vision & Mission"
- H3: "Our Mission to Make a Difference"
- Body: "Every child deserves a chance to learn, grow, and thrive. Kukua's urgent needs focus on life-changing initiatives—education, clean water, nutrition, and healthcare—to ensure children and communities receive the essentials they need today for a better tomorrow."
- Sub-card H4 "Our Vision": "Our vision is simple: a world where no child goes hungry, lacks education, or suffers due to preventable hardships. Together, we can make this vision a reality."
- Checklist items:
  - Education for Every Child
  - Clean Water for All
  - Nutrition & Healthcare as a Right

**Programs Grid** (Label: "Programs & Initiatives", H3: "Our Urgent Needs"):
6 program cards, each with image, H3 title, description, and "Know more" link:

1. **Education: A Pathway to Opportunity** → `/education`
   - "Kukua supports over 230 children with school supplies, tuition aid, and learning resources, breaking the cycle of poverty through education."
   - Image: `img-1182.jpg`

2. **Water Wells: The Gift of Clean Water** → `/water-wells`
   - "With 77+ water wells built, Kukua provides clean drinking water to communities that once walked miles to access it."
   - Image: `img-1235.jpg`

3. **Ramadan: Nourishing Communities** → `/ramadan-at-kukua`
   - "Kukua's annual Ramadan food drives supply families with essential groceries and daily Iftar meals, fostering unity and care."
   - Image: `img-1290.jpg`

4. **Wheelchairs: Restoring Dignity & Mobility** → `/wheelchairs`
   - "By providing over 150 wheelchairs, Kukua helps children and adults regain independence and a renewed sense of purpose."
   - Image: `img-1369.jpg`

5. **Food & Nutrition: Nourishing the Future** → `/food-nutrition`
   - "Daily meal programs provide children with the essential nutrition and energy they need to grow, learn, and thrive."
   - Image: `img-1409.jpg`

6. **Healthcare: Access to Life-Saving Treatment** → `/healthcare`
   - "Kukua funds annual health insurance and medical check-ups for children, ensuring access to urgent and preventive care."
   - Image: `img-0997.jpg`

**Impact Stats Section** (Label: "Impact Stories", H3: "See the Impact of Your Support"):
- Body: "Your contributions truly make a difference. From providing access to education and nourishing meals to supporting healthcare and community initiatives, your generosity transforms lives. See the impact of your support in empowering children, uplifting families, and creating opportunities for brighter futures."
- "Donate Now" button
- Stats: Volunteer Hours Logged: 0+, Meals Served: 0+, Water Wells Installed: 0+

**CTA Section**:
- Label: "Urgent Need"
- H3: "Be a Part of the Change"
- "Boys Home Construction" link → `/urgent-needs-project`
- Email: kukuaorg@gmail.com

---

### 5. RAMADAN AT KUKUA (`/ramadan-at-kukua`)

**Hero**: Label "Ramadan at Kukua", H1 "Bringing the Blessings of Ramadan to Children & Families in Need"

**Program Overview Section**:
- Label: "Program Overview"
- H3: "Nourishing Communities, Sharing the Joy of Ramadan"
- Body: "Kukua works tirelessly during Ramadan to provide warm meals and support, allowing every child and family in our care to observe the sacred month with dignity."
- Body: "Kukua ensures that no one goes hungry during this holy month through community Iftar meals, food distribution, and special celebrations."
- 3 feature cards:
  - H4 "Ramadan Initiatives at Kukua": "From daily Iftar sponsorships providing warm meals to over 265 children, to grocery distributions ensuring families have essentials for Suhoor and Iftar, and community gatherings fostering the spirit of togetherness, we make Ramadan meaningful for all."
  - H4 "Our Achievements Last Year": "We hosted 18 Iftars at Fadhillah Orphanage and distributed groceries to families at the Multidome Relief Centre, ensuring no child or family went without food. This year, we're determined to expand our reach even further."
  - H4 "The Blessings of Ramadan": "Ramadan is about more than just food—it's about hope, community, and connection. Every donation made during this sacred time helps us continue providing vital support to children and families year-round."

**Ramadan Project Section**:
- Label: "Ramadan Project"
- H3: "Feed a Child, Change a Life This Ramadan"
- Stats: H4 "50,000+" with "Nutritious meals have been served.", H4 "265+" with "children & families have received essential resources."

**Campaign Section**:
- Label: "the Campaign"
- H3: "How You Can Help This Ramadan"
- H4 "$250 CAD": "Sponsors an Iftar for 40 children at Multidome."
- H4 "$850 CAD": "Sponsors an Iftar for 200 children at Fadhillah Orphanage."
- "donate now" button
- Body: "Every Donation Counts — No amount is too small to make a difference."
- Checklist: Community First, No Child Goes Hungry, Giving with Dignity

**Donation Cards Section** (Label: "Support Our Cause", H3: "Make a difference today by donating to our cause"):
6 cards:
  - **Iftar at Multidome** — "40 kids and 5-6 adults" — Cost: $250, image: `img-1290.jpg`
  - **Iftar at Fadhillah** — "218 kids and 12-15 adults" — Cost: $850, image: `img-1077.jpg`
  - **Sewing machine + Ramadhan groceries** — Cost: $500, image: `img-1409.jpg`
  - **Quran sharif** — "These will be distributed in Masjids by request only" — Cost: $10, image: `ayah.jpg`
  - **Prayer mats** — "Will be distributed by request to places of work where workers currently pray" — Cost: $10, image: `prayer-mat.jpg`
  - **Eid clothes** — "Abaya or Thobes" — Cost: $15, image: `img-1182.jpg`

**CTA**: H1 "Be a Part of Ramadan at Kukua—Your Support Matters", "Sponsor an Iftar" button, email: kukuaorg@gmail.com

---

### 6. FOOD & NUTRITION (`/food-nutrition`)

**Hero**: Label "Kukua's Commitment", H1 "Food & Nutrition: Nourishing the Future"

**Program Overview Section**:
- Label: "Program Overview"
- H3: "Building a Healthier Tomorrow, One Meal at a Time"
- 7 feature cards:
  - H4 "Nourishment for a Brighter Future": "Kukua's meal programs help children grow, learn, and thrive by providing essential daily nutrition."
  - H4 "More Than Meals: A Holistic Approach": "Beyond food, we support healthcare and mobility aids, ensuring children live healthier, happier lives."
  - H4 "Daily Nutrition for Growing Minds": "Regular meals help children focus better in school and support healthy development."
  - H4 "Community-Based Food Programs": "Kukua collaborates with communities to provide sustainable meal solutions."
  - H4 "Special Meals for Ramadan and Eid": "Distributing food during special occasions fosters community spirit and joy."
  - H4 "Healthcare Support Alongside Nutrition": "Ensuring access to healthcare and mobility aids enhances overall well-being."
  - H4 "Long-Term Impact on Communities": "Proper nutrition leads to healthier, more resilient communities."

**Empowering Section**:
- Label: "Empowering the Future"
- H3: "Kukua's Commitment: Fighting Malnutrition with Care"
- Body: "In many Tanzanian communities, malnutrition poses a significant challenge, affecting children's health and ability to concentrate in school. Kukua's food programs provide daily meals, ensuring children receive the nutrients they need to thrive. Additionally, during Ramadan and Eid, we distribute essential food supplies to families, spreading joy and relief."
- Image: `img-1409.jpg`

**CTA**: H1 "Be the Change: Join Us in Nourishing Young Lives", "Donate Now" button → `/donate`

---

### 7. URGENT NEEDS PROJECT (`/urgent-needs-project`)

**Hero**: Label "the urgent need", H1 "Boys Home construction"

**Program Overview Section**:
- Label: "Program Overview"
- H3: "Building Hope, Strengthening Communities"
- Body: "At Kukua, we believe in empowering communities with long-term solutions that provide dignity, security, and opportunity. For years, the boys of MultiDome Relief Centre have found safety in temporary housing, but now they face the risk of losing their dormitory by February 28, 2025. This is our chance to build a permanent home—a space where they can grow, learn, and thrive. With the support of our community, we can turn this challenge into an opportunity for lasting change."
- 4 feature cards:
  - H4 "A Safe Place for Growth and Dreams": "A nurturing environment where children receive education, care, and support to pursue their dreams and build a brighter future."
  - H4 "Stability and Security for Every Child": "Providing protection from displacement and uncertainty, ensuring children have a stable home where they feel safe, valued, and supported."
  - H4 "A Foundation for Learning and Thriving": "A secure space where children can grow, learn, and thrive with access to essential resources, guidance, and opportunities for success."
  - H4 "A Lifelong Shelter of Care and Opportunity": "A safe and supportive space where children are nurtured, educated, and empowered to overcome challenges and reach their full potential."

**Be a Part of Something Lasting Section**:
- Label: "Empowering the Future"
- H3: "Be a Part of Something Lasting"
- Body: "Your contribution goes beyond building walls—it builds futures. Each brick you donate ensures stability, hope, and opportunities for countless lives."
- Body: "Every dollar is a Sadaqah Jariyah (ongoing charity) that creates lasting blessings for generations."
- Checklist (2 cols): Brick, Restroom, Bedroom, Office, Classroom/Madresa, Kitchen/Dining Hall

**Floor Plans Section**:
- Label: "our vision"
- H3: "Actual Floor Plans for the New Home"
- Body: "With your help, this vision can become a reality."
- Images: `floorplan-1.jpg`, `floorplan-2.jpg`, `floorplan-3.jpg`

**Donation Cards Section** (same as homepage Section 9 — reuse DonationGrid component):
- Same 6 cards: 1 Brick ($10), 1 Restroom ($2,000), 1 Bedroom ($5,000), Office ($5,000), Classroom/Madresa ($7,000), Kitchen/Dining Hall ($10,000)

**CTA**: H1 "Your donation has the power to transform lives", "Donate Now" button

---

### 8. HEALTHCARE (`/healthcare`)

**Hero**: Label "Kukua's Impact", H1 "Healthcare: Access to Life-Saving Treatment"

**Program Overview Section**:
- Label: "Program Overview"
- H3: "Healthcare for Every Child: A Step Toward a Healthier Future"
- Body: "Kukua ensures children stay healthy and thrive by providing annual health insurance, regular check-ups, and timely medical interventions."
- Body: "From preventive care to emergency treatments, we prioritize every child's well-being through accessible, reliable, and compassionate healthcare services."
- 5 feature cards:
  - H4 "Annual Health Insurance Coverage": "Ensuring children receive necessary medical care without financial burdens."
  - H4 "Early Detection Through Medical Check-Ups": "Identifying and addressing health issues before they become severe."
  - H4 "Collaborations with Local Clinics": "Partnering with healthcare professionals for regular care and specialized treatments."
  - H4 "Preventive Care for Long-Term Health": "Focusing on preventive measures to safeguard children's well-being."
  - H4 "Emergency Medical Support": "Providing access to urgent care when unexpected health concerns arise."

**Empowering Section**:
- Label: "Empowering the Future"
- H3: "Proactive Care Through Medical Check-Ups"
- Body: "Kukua bridges this gap by funding annual health insurance and conducting regular medical check-ups for children. Through strategic partnerships with local clinics and healthcare professionals, we ensure timely diagnosis, preventive care, and necessary treatments."
- Image: `img-0997.jpg`

**CTA**: H1 "Support Life-Saving Healthcare for Children", "Donate Now" button → `/donate`

---

### 9. EDUCATION (`/education`)

**Hero**: Label "Access To education", H1 "Education: A Pathway to Opportunity"

**Program Overview Section**:
- Label: "Program Overview"
- H3: "Breaking Barriers: Kukua's Commitment to Education"
- Body: "Access to education provides children with the tools to break free from poverty, fostering a brighter future filled with opportunity and growth."
- Body: "By providing school supplies, tuition support, and resources, Kukua helps children stay in school, learn with confidence, and pursue their dreams."
- 5 feature cards:
  - H4 "Access to Basic Educational Supplies": "Essential materials like books, pencils, and backpacks ensure children are prepared to learn."
  - H4 "Financial Support for School Fees": "Tuition assistance helps break the financial barriers to education."
  - H4 "Community Involvement and Awareness": "Educating communities about the importance of schooling fosters long-term growth."
  - H4 "Inspiring Dreams and Aspirations": "Education opens pathways for children to dream big and achieve more."
  - H4 "Sustainable Educational Programs": "Kukua focuses on long-term solutions to ensure ongoing access to education."

**Empowering Section**:
- Label: "Empowering the Future"
- H3: "Providing Essential Resources for Lifelong Learning"
- Body: "In Tanzania, countless children face the challenge of accessing quality education due to financial constraints. Kukua addresses this issue by providing essential school supplies, tuition assistance, and resources that empower young minds."
- Stat: H4 "230+" with "children receive school supplies, tuition support, and learning resources."
- Image: `img-1182.jpg`

**CTA**: H1 "Be the Change Join Us in Empowering Young Minds", "Donate Now" button → `/donate`

---

### 10. WHEELCHAIRS (`/wheelchairs`)

**Hero**: Label "Transforming Lives", H1 "Wheelchairs: Restoring Dignity & Mobility"

**Program Overview Section**:
- Label: "Program Overview"
- H3: "Kukua's Impact: Restoring Freedom and Independence"
- Body: "Kukua's wheelchairs offer independence and dignity, helping individuals live fuller, more active lives."
- Body: "With 150+ wheelchairs distributed, we provide freedom of movement and a renewed sense of purpose."
- 5 feature cards:
  - H4 "Independence through Mobility": "Wheelchairs empower individuals to move freely and live more independently."
  - H4 "Improved Quality of Life": "Access to mobility aids reduces dependency and enhances participation in daily activities."
  - H4 "Strengthening Family Bonds": "Families experience relief as their loved ones gain mobility and confidence."
  - H4 "Community Inclusion and Participation": "Mobility fosters better access to education, work, and social interactions."
  - H4 "Sustainable Support for Accessibility": "Kukua ensures durable, long-lasting wheelchairs for enduring impact."

**Gift of Independence Section**:
- Label: "Gift of Independence"
- H3: "Mobility Matters: Transforming Lives with Wheelchairs"
- Body: "For individuals with physical disabilities, mobility is more than movement—it's a gateway to independence and self-reliance. Kukua has provided over 150 wheelchairs, giving children and adults the freedom to explore, engage, and contribute to their communities. Each wheelchair represents restored dignity, greater access to education and work, and the ability to participate fully in family and community life."
- Stat: H4 "175+" with "Wheelchairs provided"
- Image: `img-1369.jpg`

**CTA**: H1 "Be the Change: Help Us Restore Mobility and Dignity", "Donate Now" button → `/donate`

---

### 11. WATER WELLS (`/water-wells`)

**Hero**: Label "Kukua's Mission", H1 "Water Wells: The Gift of Clean Water"

**Program Overview Section**:
- Label: "Program Overview"
- H3: "Clean Water: A Lifeline for Communities"
- Body: "Clean water transforms communities by reducing disease, saving time, and creating opportunities for education and growth."
- Body: "With 77+ wells built, Kukua provides reliable access to safe water, empowering communities to thrive and prosper."
- 4 feature cards:
  - H4 "Clean Water for Better Health": "Access to clean water reduces waterborne diseases and promotes healthier communities."
  - H4 "Time Saved, Lives Improved": "Water wells eliminate long walks for water, giving children more time for school and play."
  - H4 "Sustainable Solutions for the Future": "Kukua ensures wells are durable, reliable, and accessible for years to come."
  - H4 "Community Involvement in Every Step": "We engage locals to build, maintain, and cherish their water sources."

**Empowering Section**:
- Label: "Empowering the Future"
- H3: "Transforming Lives with Every Drop"
- Body: "Clean water is not just a necessity; it is a catalyst for growth, health, and opportunity. In many Tanzanian communities, fetching water requires hours of walking each day. Kukua has built over 77 water wells, bringing safe, accessible water closer to homes."
- Stat: H4 "79+" with "Water Wells built"
- Image: `img-1235.jpg`

**CTA**: H1 "Help Us Bring Water to More Communities", "Donate Now" button → `/donate`

---

### 12. CHILDREN RUN INITIATIVES (`/children-run-initiatives`)

**Hero**: Label "Children-Run Initiatives", H1 "Empowering the Next Generation to Lead Change"

**Program Overview Section**:
- Label: "Program Overview"
- H3: "Inspiring Leadership Through Action"
- Body: "At Kukua, we believe children are the changemakers of today. Through hands-on initiatives, they lead community projects, organize school supply distributions, and assist with food programs, gaining skills to create lasting change."
- Body: "Through hands-on initiatives, children in our programs take active roles in leading community projects, organizing school supply distributions, and assisting with food programs, leadership, teamwork, and the power of giving back."
- 3 feature cards:
  - H4 "How Our Children Lead": "Through peer-led education programs, older students mentor younger ones. Community service projects allow children to take charge of maintaining school spaces and organizing meal distributions."
  - H4 "The Power of Giving Back": "Children learn the value of giving back by engaging in small actions with big impacts, supporting their communities in meaningful and transformative ways."
  - H4 "Building Future Leaders": "These initiatives nurture confidence, leadership, and responsibility, empowering children to realize their potential and shape their own futures."

**Project Stats Section**:
- Label: "the Project"
- H3: "Leadership in Action"
- H4 "265+" with "Children actively participate in our programs"
- H4 "10+" with "Initiatives are designed and led by children"

**Campaign Section**:
- Label: "the Campaign"
- H3: "How You Can Support These Initiatives"
- H4 "$50 CAD": "Provides materials for child-led school workshops."
- H4 "$100 CAD": "Supports a child's first entrepreneurial project."
- "donate now" button
- Body: "Every Contribution Matters — Help a child take the lead in changing their community."
- Checklist: Leadership Begins Early, Learning Through Doing, Community-Led Growth

**CTA**: H1 "Be a Part of Their Journey—Support a Young Changemaker Today", "Empower a Child Leader" button, email: kukuaorg@gmail.com

---

### 13. SUSTAINABILITY — TRAINING CENTRE (`/sustainability-training-centre`)

**Hero**: Label "Sustainability - Training Centre", H1 "Creating Opportunities for Self-Sufficiency & Community Growth"

**Program Overview Section**:
- Label: "Program Overview"
- H3: "Vocational Training for a Brighter Future"
- Body: "The Kukua Training Centre is a hub for sustainability and empowerment. We equip individuals, especially women and youth, with essential skills that allow them to build self-sufficient futures."
- Body: "Through hands-on training programs in tailoring, agriculture, and entrepreneurship, we provide the tools needed for financial independence and long-term stability to the individuals."
- 3 feature cards:
  - H4 "Key Programs at the Training Centre": "The Training Centre offers sewing and tailoring courses to help women create and sell handmade goods, sustainable farming lessons, and business support to empower individuals to start their ventures."
  - H4 "Empowering Families and Communities": "By teaching valuable vocational skills, the Training Centre uplifts individuals, supports families, and strengthens communities, creating lasting opportunities for future generations."
  - H4 "A Hub for Growth and Sustainability": "The Training Centre is a space for learning, innovation, and sustainability, enabling graduates to build successful livelihoods with dignity, pride, and independence."

**Project Stats Section**:
- Label: "the Project"
- H3: "Success Stories: Transforming Lives Through Training"
- H4 "100+" with "Women have received training in tailoring"
- H4 "50+" with "Individuals Now Running Small Businesses"

**Campaign Section**:
- Label: "the Campaign"
- H3: "How You Can Support Sustainable Growth"
- H4 "$50": "Provides sewing materials for a trainee."
- H4 "$100": "Funds a full month of vocational training."
- "Donate now" button
- Body: "Your support helps build a sustainable future for families."
- Checklist: Empower Through Skills, Build Financial Independence, Strengthen Communities

**CTA**: H1 "Help Us Train & Empower More Individuals—Get Involved Today", "Donate now" button, email: kukuaorg@gmail.com

---

### 14. CONTACT US (`/contact-us`)

**Hero**: Label "Contact Us", H1 "Connect With Our Volunteer Organization"

**Contact Information Section**:
- Label: "Contact Information"
- H3: "Have Queries or Need More Information? Contact Us Today!"
- Single card: Mail icon + H4 "Email Us At" + "kukuaorg@gmail.com"

**Contact Form Section**:
- Label: "Reach Out and Connect"
- H3: "Have Queries or Need More Information? Contact Us Today!"
- Fields: Name (text), Email (email), Message (textarea)
- Submit: "Send" button (outline style)

---

### 15. DONATE (`/donate`)

**Hero**: Label "Donations", H1 "Donate to Transform Lives"

**Giving Made Easy Section**:
- Label: "Giving Made Easy"
- H3: "We've made it simple and convenient for you to support our Events & cause"
- 4 numbered steps in a row:
  - **01** H4 "Make a Donation"
  - **02** H4 "Donation Options"
  - **03** H4 "Your Money Goes"
  - **04** H4 "Donation Impact"

**Donation Cards Section** (reuse DonationGrid):
- Label: "Support Our Cause"
- H3: "Make a difference today by donating to our cause"
- Same 6 cards: 1 Brick ($10), 1 Restroom ($2,000), 1 Bedroom ($5,000), Office ($5,000), Classroom/Madresa ($7,000), Kitchen/Dining Hall ($10,000)

---

## Reusable Components to Build

```
src/
├── components/
│   ├── layout/
│   │   ├── TopBar.tsx          (top info bar with location, email, social)
│   │   ├── Header.tsx          (logo + nav + donate CTA, sticky on scroll)
│   │   ├── Footer.tsx          (full footer with links, tagline, copyright)
│   │   ├── MobileNav.tsx       (hamburger slide-out drawer with sub-menus)
│   │   └── Layout.tsx          (wraps TopBar + Header + children + Footer)
│   ├── ui/
│   │   ├── Button.tsx          (outline button with hover, accepts href or onClick)
│   │   ├── SectionLabel.tsx    (small uppercase label tag, gold/accent style)
│   │   ├── StatCounter.tsx     (animated counting number with suffix, prefix)
│   │   ├── DonationCard.tsx    (image, social tag, progress bar, title, cost, CTA)
│   │   ├── FeatureCard.tsx     (optional icon + H4 + body text)
│   │   ├── TeamCard.tsx        (circular photo + name)
│   │   ├── TimelineItem.tsx    (year marker + H4 title + optional body)
│   │   ├── Accordion.tsx       (expandable FAQ, single-open behavior)
│   │   ├── ChecklistItem.tsx   (checkmark icon + text)
│   │   ├── ContactCard.tsx     (icon + H4 title + info text)
│   │   └── ProgressBar.tsx     (thin bar showing % filled)
│   └── sections/
│       ├── HeroSection.tsx     (reusable: accepts label, h1, optional bg image)
│       ├── StatsSection.tsx    (dark bg row of StatCounters)
│       ├── CTABanner.tsx       (full-width CTA with heading + button + optional email)
│       ├── ContactForm.tsx     (name, email, message form with client-side handling)
│       ├── DonationGrid.tsx    (grid of DonationCards, accepts array of donation data)
│       └── ProgramCard.tsx     (image + H3 + body + "Know more" link)
├── app/
│   ├── layout.tsx              (root layout: fonts, global styles, Layout component)
│   ├── page.tsx                (home page)
│   ├── about-kukua/page.tsx
│   ├── our-children/page.tsx
│   ├── programs-initiatives/page.tsx
│   ├── ramadan-at-kukua/page.tsx
│   ├── food-nutrition/page.tsx
│   ├── urgent-needs-project/page.tsx
│   ├── healthcare/page.tsx
│   ├── education/page.tsx
│   ├── wheelchairs/page.tsx
│   ├── water-wells/page.tsx
│   ├── children-run-initiatives/page.tsx
│   ├── sustainability-training-centre/page.tsx
│   ├── contact-us/page.tsx
│   └── donate/page.tsx
├── data/
│   ├── donations.ts            (donation tier data arrays — building, ramadan)
│   ├── team.ts                 (team member names + image paths)
│   ├── programs.ts             (program card data)
│   └── faq.ts                  (FAQ Q&A pairs)
└── styles/
    └── globals.css             (Tailwind + CSS variables + base styles)
```

---

## Image Mapping

All images are in `/public/images/`. Use standard `<img>` tags with proper alt text.

**Logo**: `/images/logo/kukua-logo.png`

**Team** (all in `/images/team/`):
meryem.jpg, jamal.jpg, farishta.jpg, fareedah.jpeg, shamaz.jpeg, fauzi-uncle.jpeg, omer.jpeg, nadeem.jpg, nabeel.jpeg, mohamadali.jpg, jackson.jpeg, rifai.jpg, shamsad.jpeg, anisha.jpg

**Page images** (all in `/images/pages/`):
children-1.jpg, children-2.jpg, brick.jpg, school.jpg, group-1.jpg, child-portrait-1.jpg, child-portrait-2.jpg, warm-stalls.jpg, twins-1.jpg, img-0997.jpg, img-1023.jpg, img-1077.jpg, img-1182.jpg, img-1235.jpg, img-1290.jpg, img-1369.jpg, img-1409.jpg, ayah.jpg, prayer-mat.jpg, floorplan-1.jpg, floorplan-2.jpg, floorplan-3.jpg, img-0991.jpg, img-1023-full.jpg

### Per-Page Image Assignments
- **Home hero**: `group-1.jpg`, `children-1.jpg`, `child-portrait-1.jpg`
- **Home Vision**: `child-portrait-2.jpg`
- **Home Brick**: `brick.jpg`
- **Home Why This Matters**: `school.jpg`
- **Home Floor Plans**: `floorplan-1.jpg`, `floorplan-2.jpg`, `floorplan-3.jpg`
- **Home Donation Cards**: `brick.jpg`, `warm-stalls.jpg`, `children-1.jpg`, `school.jpg`, `img-1023.jpg`, `img-1077.jpg`
- **About Vision**: `img-0991.jpg`
- **Our Children twins**: `twins-1.jpg`
- **Programs cards**: `img-1182.jpg`, `img-1235.jpg`, `img-1290.jpg`, `img-1369.jpg`, `img-1409.jpg`, `img-0997.jpg`
- **Ramadan donations**: `img-1290.jpg`, `img-1077.jpg`, `img-1409.jpg`, `ayah.jpg`, `prayer-mat.jpg`, `img-1182.jpg`
- **Food & Nutrition**: `img-1409.jpg`
- **Healthcare**: `img-0997.jpg`
- **Education**: `img-1182.jpg`
- **Wheelchairs**: `img-1369.jpg`
- **Water Wells**: `img-1235.jpg`

---

## Key Implementation Notes

1. **Static export**: `next.config.js` must have `output: 'export'` and `images: { unoptimized: true }` for Vercel static hosting
2. **Responsive**: Desktop-first, fully responsive down to 375px mobile
3. **Animations**: Use Framer Motion for:
   - Stat counter counting animation (use `useInView` hook to trigger when scrolled into viewport)
   - Fade-in-up on section entry (subtle, 0.4s duration)
   - Accordion expand/collapse with height animation
4. **Contact form**: Client-side only. Show success message on submit. No backend needed.
5. **Donate Now buttons**: All `href="/donate"`
6. **"Know more" buttons** on program cards: Link to respective subpages
7. **Instagram link**: `href="#"` (placeholder — client will provide handle)
8. **SEO**: Each page gets a unique `<title>` and `<meta name="description">`. Pattern: "Page Title — Kukua Orphanage"
9. **Smooth scroll**: Add `scroll-behavior: smooth` to `html` in globals.css
10. **Active nav state**: Highlight current page in navigation using `usePathname()`
11. **Copyright**: The footer shows "Allright Reserved - Yellow octo llp" (this is the client's existing branding — keep as-is). The Freedom_EXE file header is for source code files only, not visible on the website.

## File Header Standard

Every `.ts` and `.tsx` source code file must include this comment at the top:
```
/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: [filename]
 *
 * Description:
 * [what this file does]
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
```

---

## Initialization Commands

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias
npm install framer-motion lucide-react react-hook-form
```

Add Google Fonts (DM Serif Display + Poppins) via `next/font/google` in `src/app/layout.tsx`.
