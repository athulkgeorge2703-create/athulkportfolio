export type Competency = {
  slug: string
  number: string
  title: string
  shortTitle: string
  teaser: string
  coreCompetency: string
  focusAreas: string[]
  practiceNote: string
}

// Concise, student-friendly summaries based on the UAE EmiratesMEDs framework.
// They are paraphrases of the framework's core and enabling competencies.
export const competencies: Competency[] = [
  {
    slug: 'medical-expert',
    number: '01',
    title: 'Medical Expert',
    shortTitle: 'Clinical knowledge',
    teaser: 'Connect biomedical science, clinical knowledge and sound reasoning to understand health and disease.',
    coreCompetency:
      'Bring established and emerging biomedical, clinical, epidemiological and psychosocial knowledge together, then apply it through clinical reasoning to the care of individuals and populations.',
    focusAreas: [
      'Use analytical and investigative thinking when approaching clinical problems.',
      'Connect basic and clinical sciences to diagnostic and therapeutic decisions.',
      'Consider the psychological, behavioural and cultural influences on health.',
      'Recognise reliable health information and communicate it responsibly.',
    ],
    practiceNote:
      'A medical expert does more than recall facts. They interpret the story, weigh the evidence and explain why a clinical decision makes sense.',
  },
  {
    slug: 'evidence-based-practitioner-and-scholar',
    number: '02',
    title: 'Evidence-Based Practitioner and Scholar',
    shortTitle: 'Evidence & learning',
    teaser: 'Keep improving through research, reflection, feedback and lifelong learning.',
    coreCompetency:
      'Continuously improve through self-evaluation and lifelong learning, and investigate patient care using high-quality research, clinical experience and patient values in the context of care.',
    focusAreas: [
      'Turn uncertainties in practice into focused, answerable questions.',
      'Find, appraise and apply relevant scientific evidence.',
      'Use health information systems and patient data to improve care.',
      'Learn from feedback and contribute to ethical research and quality improvement.',
    ],
    practiceNote:
      'Evidence-based practice brings research, clinical judgement and what matters to the patient into the same conversation.',
  },
  {
    slug: 'patient-care-provider-and-health-advocate',
    number: '03',
    title: 'Patient Care Provider and Health Advocate',
    shortTitle: 'Patient-centred care',
    teaser: 'Deliver compassionate, safe care while supporting prevention, patient rights and health promotion.',
    coreCompetency:
      'Provide compassionate, appropriate and effective patient- and population-centred care for the management and prevention of common health problems, while advocating for patient rights and safety.',
    focusAreas: [
      'Gather accurate information through history-taking and physical examination.',
      'Interpret investigations and use clinical judgement to guide decisions.',
      'Build safe, practical management plans around patient needs and preferences.',
      'Promote prevention, health education and patient safety.',
    ],
    practiceNote:
      'Good care sees the person behind the presentation and considers the family and community around them.',
  },
  {
    slug: 'communicator',
    number: '04',
    title: 'Communicator',
    shortTitle: 'Clear communication',
    teaser: 'Build trust through thoughtful listening and clear verbal, written and non-verbal communication.',
    coreCompetency:
      'Use effective written, verbal and non-verbal interpersonal communication to interact with patients, families and healthcare professionals.',
    focusAreas: [
      'Communicate respectfully across different languages, cultures and backgrounds.',
      'Listen actively and build therapeutic relationships with patients and families.',
      'Share information clearly with colleagues and other health professionals.',
      'Document clinical encounters accurately and handle sensitive conversations with compassion.',
    ],
    practiceNote:
      'Communication is a clinical skill: it helps uncover the right information, build trust and make shared decisions possible.',
  },
  {
    slug: 'collaborator-innovator-and-leader',
    number: '05',
    title: 'Collaborator, Innovator and Leader',
    shortTitle: 'Teamwork & leadership',
    teaser: 'Work across professional boundaries, strengthen teams and develop practical solutions.',
    coreCompetency:
      'Collaborate, lead and actively participate in interprofessional healthcare teams to support safe, effective and equitable patient- and population-centred care.',
    focusAreas: [
      'Build working relationships based on respect, trust and shared responsibility.',
      'Understand the roles and expertise of other healthcare professionals.',
      'Contribute to coordinated team decisions and patient-care plans.',
      'Use leadership, creativity and innovation to address health priorities.',
    ],
    practiceNote:
      'Healthcare is a team effort. Strong collaboration makes care safer, more coordinated and more human.',
  },
  {
    slug: 'professional',
    number: '06',
    title: 'Professional',
    shortTitle: 'Ethics & integrity',
    teaser: 'Act with compassion, integrity, accountability and respect for every patient.',
    coreCompetency:
      'Carry out professional responsibilities with commitment to ethical principles, accountability and respectful conduct.',
    focusAreas: [
      'Protect patient privacy, autonomy and confidentiality.',
      'Practise with compassion, honesty, integrity and accountability.',
      'Respect the diversity of people and communities in the UAE.',
      'Follow ethical duties, informed-consent principles and applicable laws and policies.',
    ],
    practiceNote:
      'Professionalism is visible in everyday choices: how information is protected, how people are treated and how responsibility is accepted.',
  },
  {
    slug: 'health-system-proponent',
    number: '07',
    title: 'Health System Proponent',
    shortTitle: 'Systems thinking',
    teaser: 'Understand the UAE healthcare landscape and use its resources responsibly to improve care.',
    coreCompetency:
      'Understand and respond to the wider UAE healthcare context, using resources effectively and contributing to the development of a system that provides optimal care.',
    focusAreas: [
      'Understand how care is delivered across different healthcare settings.',
      'Coordinate care and support safe transitions between services.',
      'Balance quality, cost, risk and benefit when considering care options.',
      'Recognise system gaps and contribute to patient-safety and quality-improvement efforts.',
    ],
    practiceNote:
      'A patient’s experience is shaped by the whole system. Understanding that system helps clinicians improve access, continuity and quality.',
  },
  {
    slug: 'self-and-profession-enhancer',
    number: '08',
    title: 'Self and Profession Enhancer',
    shortTitle: 'Growth & resilience',
    teaser: 'Develop self-awareness, resilience and the habits needed for a sustainable medical career.',
    coreCompetency:
      'Develop the qualities needed for lifelong learning, personal wellbeing and continued professional growth.',
    focusAreas: [
      'Recognise personal strengths, knowledge gaps and limits.',
      'Set learning goals and seek feedback, support and appropriate guidance.',
      'Build resilience and healthy responses to stress and uncertainty.',
      'Adapt to change, manage competing demands and support colleagues.',
    ],
    practiceNote:
      'Looking after your development and wellbeing is part of being able to care well for others over time.',
  },
  {
    slug: 'socially-accountable',
    number: '09',
    title: 'Socially Accountable',
    shortTitle: 'Community & equity',
    teaser: 'Respond to the health needs of society and help improve equity, relevance and outcomes.',
    coreCompetency:
      'Meet the health needs of patients and society, improve health outcomes and promote equity, relevance, collaboration, cost-effectiveness and quality.',
    focusAreas: [
      'Understand how social determinants influence health beliefs, behaviours and outcomes.',
      'Use public-health information to understand community health priorities.',
      'Recognise barriers to care and support fair, accessible health services.',
      'Reflect on bias and errors, then help reduce risks and improve outcomes.',
    ],
    practiceNote:
      'Social accountability connects medical education to the real health priorities of the people and communities it serves.',
  },
]
