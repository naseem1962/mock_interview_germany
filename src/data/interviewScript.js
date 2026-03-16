/**
 * Germany Student Visa Embassy Interview – Full script (your questions & answers)
 * Each line: speaker, text, camera angle, duration (ms). Candidate gets 30s per answer in player.
 */
export const INTERVIEWEE_NAME = 'Zaeem Uz Zafar';

export const SCRIPT = [
  // --- Opening ---
  {
    speaker: 'interviewer',
    text: 'Good morning. Please have a seat.',
    camera: 'two-shot',
    durationMs: 2500,
  },
  // Q1
  {
    speaker: 'interviewer',
    text: 'What is your Student ID / Application Code / Reference ID?',
    camera: 'interviewer',
    durationMs: 4000,
  },
  {
    speaker: 'student',
    text: 'My Student ID / Application Code is Q1130024.',
    camera: 'student',
    durationMs: 4000,
  },
  // Q2
  {
    speaker: 'interviewer',
    text: 'What are your passport details? Number, Issue Date, and Expiry Date.',
    camera: 'interviewer',
    durationMs: 4000,
  },
  {
    speaker: 'student',
    text: 'Passport Number: CJ5529673. Issue Date: 21 May 2025. Expiry Date: 21 May 2035.',
    camera: 'student',
    durationMs: 7000,
  },
  // Q3
  {
    speaker: 'interviewer',
    text: 'Kindly introduce yourself. Give a brief introduction of yourself.',
    camera: 'interviewer',
    durationMs: 4500,
  },
  {
    speaker: 'student',
    text: 'My name is Zaeem Uz Zafar, and my date of birth is 17 November 1996. I have completed a Bachelor\'s degree in Software Engineering from Hamdard University. Currently, I am working as a Backend Engineer at Salsoft Technologies, mainly focusing on MERN and PERN stack development.',
    camera: 'student',
    durationMs: 15000,
  },
  // Q4
  {
    speaker: 'interviewer',
    text: 'Do you have any gaps in your studies?',
    camera: 'interviewer',
    durationMs: 3500,
  },
  {
    speaker: 'student',
    text: 'Yes, I had a gap in my studies due to waiting for my academic results.',
    camera: 'student',
    durationMs: 6000,
  },
  // Q4 follow-up
  {
    speaker: 'interviewer',
    text: 'Why was there a gap in your studies?',
    camera: 'interviewer',
    durationMs: 3500,
  },
  {
    speaker: 'student',
    text: 'During that time, I was waiting for my final academic results and also improving my technical skills in software development.',
    camera: 'student',
    durationMs: 9000,
  },
  // Q5
  {
    speaker: 'interviewer',
    text: 'Tell me about your educational background.',
    camera: 'interviewer',
    durationMs: 3800,
  },
  {
    speaker: 'student',
    text: 'I completed my Matriculation from White House Grammar School in 2011. After that, I completed my Diploma of Associate Engineering (DAE) from PSTC in 2016. Later, I pursued my Bachelor\'s degree in Software Engineering from Hamdard University, which I completed in 2021.',
    camera: 'student',
    durationMs: 14000,
  },
  // Q6
  {
    speaker: 'interviewer',
    text: 'Do you have any work experience?',
    camera: 'interviewer',
    durationMs: 3200,
  },
  {
    speaker: 'student',
    text: 'Yes, I have around 4 years of work experience in software development.',
    camera: 'student',
    durationMs: 5500,
  },
  // Q7
  {
    speaker: 'interviewer',
    text: 'If so, what kind of experience do you have?',
    camera: 'interviewer',
    durationMs: 3800,
  },
  {
    speaker: 'student',
    text: 'I have experience in software development, mainly working with MERN and PERN stacks, focusing on backend development, APIs, and database management.',
    camera: 'student',
    durationMs: 10000,
  },
  // Q8
  {
    speaker: 'interviewer',
    text: 'Do you have any visa history? Visit or Refusal?',
    camera: 'interviewer',
    durationMs: 3800,
  },
  {
    speaker: 'student',
    text: 'Yes, I had a Saudi Arabia visa refusal in 2018.',
    camera: 'student',
    durationMs: 5000,
  },
  // Q9
  {
    speaker: 'interviewer',
    text: 'What were the reasons for your visa refusal?',
    camera: 'interviewer',
    durationMs: 3800,
  },
  {
    speaker: 'student',
    text: 'The visa was refused due to documentation and sponsorship issues at that time.',
    camera: 'student',
    durationMs: 7000,
  },
  // Q10
  {
    speaker: 'interviewer',
    text: 'Who is going to sponsor you?',
    camera: 'interviewer',
    durationMs: 3200,
  },
  {
    speaker: 'student',
    text: 'My father is my primary sponsor, and I will also support myself partially through my personal income and savings.',
    camera: 'student',
    durationMs: 9000,
  },
  // Q11
  {
    speaker: 'interviewer',
    text: 'What is your sponsor\'s source of income?',
    camera: 'interviewer',
    durationMs: 3800,
  },
  {
    speaker: 'student',
    text: 'My father is a retired Deputy Director from Pakistan Meteorological Department (PMD) and currently receives a government pension. In addition, I also have my own income from my job as a software engineer.',
    camera: 'student',
    durationMs: 12000,
  },
  // Q12
  {
    speaker: 'interviewer',
    text: 'How many people are financially dependent on your sponsor?',
    camera: 'interviewer',
    durationMs: 4200,
  },
  {
    speaker: 'student',
    text: 'There are four people financially dependent on my sponsor.',
    camera: 'student',
    durationMs: 5500,
  },
  // Q13
  {
    speaker: 'interviewer',
    text: 'What do you know about your bank statement / blocked account?',
    camera: 'interviewer',
    durationMs: 4500,
  },
  {
    speaker: 'student',
    text: 'I have opened a blocked account with Fintiba at Frankfurt International Bank AG, and the total amount deposited in the account is 11,904 Euros, which will cover my living expenses in Germany during my studies.',
    camera: 'student',
    durationMs: 12000,
  },
  // Q14
  {
    speaker: 'interviewer',
    text: 'What is your visa fee and IHS fee?',
    camera: 'interviewer',
    durationMs: 3500,
  },
  {
    speaker: 'student',
    text: 'Visa Fee: 75 Euros. IHS Fee: Not applicable for Germany.',
    camera: 'student',
    durationMs: 6000,
  },
  // Q15
  {
    speaker: 'interviewer',
    text: 'What is the name of your university? Where are you going to study in Germany?',
    camera: 'interviewer',
    durationMs: 5000,
  },
  {
    speaker: 'student',
    text: 'I will be studying at the Berlin School of Business and Innovation (BSBI) in Germany.',
    camera: 'student',
    durationMs: 7000,
  },
  // Q16
  {
    speaker: 'interviewer',
    text: 'What is the title of your course? Which course are you going to study in Germany? What are the starting and ending dates?',
    camera: 'interviewer',
    durationMs: 6500,
  },
  {
    speaker: 'student',
    text: 'I will study MSc in Artificial Intelligence. Start Date: 21 May 2026. Expected End Date: 11 November 2027.',
    camera: 'student',
    durationMs: 9000,
  },
  // Q17
  {
    speaker: 'interviewer',
    text: 'What modules does your course offer? Tell me about your course modules.',
    camera: 'interviewer',
    durationMs: 5000,
  },
  {
    speaker: 'student',
    text: 'My MSc in Artificial Intelligence is structured into four terms over one year. Term 1 – Core Foundations: Introduction to Artificial Intelligence, Machine Learning Fundamentals, Ethics and Legal Framework in AI. Term 2 – Specialized Pathways: students can choose different pathways – Robotics Engineering (Advanced Robotics and Automation, Computer Vision, Robotics Software and Programming), Blockchain & FinTech (Blockchain Technology, Advanced FinTech and Regulatory Compliance), Chatbot Development (Natural Language Processing, Advanced Conversational UI Design and Chatbot Development), Metaverse & Digital Systems (Virtual Reality and Augmented Reality, Strategies for Digital Transformation and Metaverse Development). Term 3 – Advanced Applications: each pathway continues with more advanced subjects including Advanced Robotics Applications, Robotics Project Management, Blockchain Development and Implementation, FinTech Innovation and Risk Management, Multimodal Chatbots, Chatbot Analytics, Metaverse Content Creation and Security. Term 4 – Final Project: Research-based Final Project in Artificial Intelligence.',
    camera: 'student',
    durationMs: 35000,
  },
  // Q18
  {
    speaker: 'interviewer',
    text: 'How will your course be assessed? Tell me about the assessment methods.',
    camera: 'interviewer',
    durationMs: 5000,
  },
  {
    speaker: 'student',
    text: 'The course uses a variety of assessment methods to evaluate student performance. The learning methods include: lectures, tutorials, workshops, practical work, seminars, and field trips. Assessment methods include: individual and group reports, presentations, case studies, essays, portfolio development, reflective journals, and experimental and project-based activities. These assessments ensure that students develop both theoretical knowledge and practical skills.',
    camera: 'student',
    durationMs: 22000,
  },
  // Q19
  {
    speaker: 'interviewer',
    text: 'What are the future prospects or benefits of your course?',
    camera: 'interviewer',
    durationMs: 4500,
  },
  {
    speaker: 'student',
    text: 'This MSc in Artificial Intelligence will equip me with advanced technical skills and practical knowledge in AI technologies. Through this program I will gain expertise in designing intelligent systems, learn to implement machine learning algorithms, and develop strong problem-solving abilities. AI is becoming essential in industries such as healthcare, finance, transportation, manufacturing, and software development. Because the demand for AI professionals is rapidly increasing, this qualification will provide opportunities for high-level technical roles, leadership positions, and competitive salaries.',
    camera: 'student',
    durationMs: 25000,
  },
  // Q20
  {
    speaker: 'interviewer',
    text: 'How much is your tuition fee? What is your living cost and total expenses?',
    camera: 'interviewer',
    durationMs: 5000,
  },
  {
    speaker: 'student',
    text: 'The total tuition fee for my program is 13,920 Euros. I have already paid a deposit of 2,000 Euros. The remaining tuition fee is 11,920 Euros. My estimated monthly living expenses are around 900 Euros. So 900 times 12 months equals 10,800 Euros per year. Total estimated expense: tuition 13,920 plus living 10,800 equals 22,704 Euros.',
    camera: 'student',
    durationMs: 20000,
  },
  // Q21
  {
    speaker: 'interviewer',
    text: 'Why did you choose this course?',
    camera: 'interviewer',
    durationMs: 3500,
  },
  {
    speaker: 'student',
    text: 'I chose to pursue an MSc in Artificial Intelligence because it aligns closely with my Bachelor\'s degree in Software Engineering. During my undergraduate studies I developed a strong foundation in programming, algorithms, databases, and software system design. This naturally led to my interest in intelligent systems and data-driven technologies. Additionally, my professional experience as a Backend Engineer strengthened my understanding of scalable systems and data-centric applications, which are closely related to AI concepts. This MSc program provides advanced knowledge in Machine Learning, Deep Learning, Natural Language Processing, and Data Analytics. Studying this program will help me systematically develop expertise in AI and prepare me for advanced roles in the field.',
    camera: 'student',
    durationMs: 28000,
  },
  // Q22
  {
    speaker: 'interviewer',
    text: 'What are your career goals? What will you do after completing your degree?',
    camera: 'interviewer',
    durationMs: 5000,
  },
  {
    speaker: 'student',
    text: 'After completing my MSc in Artificial Intelligence, I plan to return to Pakistan and work in the technology and software development sector. My goal is to contribute to AI-based projects and help organizations implement intelligent systems. I aim to apply my knowledge in areas such as Machine Learning, Natural Language Processing, and AI-driven software solutions.',
    camera: 'student',
    durationMs: 18000,
  },
  // Q25
  {
    speaker: 'interviewer',
    text: 'Why did you choose this university for your studies in Germany? Give me reasons for choosing this.',
    camera: 'interviewer',
    durationMs: 5500,
  },
  {
    speaker: 'student',
    text: 'BSBI is a part of GGG (Global University Systems Germany GmbH) and it is in partnership with the University for the Creative Arts (UCA). Through this, the MSc in AI is awarded ensuring a globally recognized degree and high-quality education. GUS Germany GmbH (GGG) is the parent education group that manages BSBI and ensures academic and operational quality standards.',
    camera: 'student',
    durationMs: 18000,
  },
  // Q26
  {
    speaker: 'interviewer',
    text: 'What is your university ranking? Tell me about where your university stands in the ranking.',
    camera: 'interviewer',
    durationMs: 5000,
  },
  {
    speaker: 'student',
    text: 'BSBI is a private career-focused institution. It is not ranked among large public research universities in Germany, because global rankings mostly focus on research output. The program structure focuses on Artificial Intelligence specialization, industry-focused curriculum, international degree awarded by UCA, and location in Berlin, which is a strong tech and startup hub.',
    camera: 'student',
    durationMs: 20000,
  },
  // Q27
  {
    speaker: 'interviewer',
    text: 'Tell me about your university facilities.',
    camera: 'interviewer',
    durationMs: 4000,
  },
  {
    speaker: 'student',
    text: 'BSBI facilities include: modern classrooms with advanced teaching technology, dedicated study areas for group study, library books and e-sources and online research databases, computer labs for practical training, student engagement activities and campus life, career service center for internships and job placement and networking, student lounge and cafeteria for relaxation and interaction, and regular workshops, guest lectures, and industry events.',
    camera: 'student',
    durationMs: 22000,
  },
  // Q28
  {
    speaker: 'interviewer',
    text: 'Have you considered other universities?',
    camera: 'interviewer',
    durationMs: 3800,
  },
  {
    speaker: 'student',
    text: 'Yes. I considered BSBI – Berlin School of Business Innovation, FAU – Friedrich Alexander University, TUB – Technische University Berlin, Hochschule Darmstadt, and IU – International University of Applied Sciences.',
    camera: 'student',
    durationMs: 15000,
  },
  // Q29
  {
    speaker: 'interviewer',
    text: 'Why did you not choose the other universities?',
    camera: 'interviewer',
    durationMs: 4500,
  },
  {
    speaker: 'student',
    text: 'I compared universities based on course curriculum and program modules. FAU and TUB are strong public research universities, but their AI programs are more theory-focused. IU and Hochschule Darmstadt are also good options, but after reviewing the curriculum structure and program delivery, I preferred BSBI. The MSc in AI program includes specialized and industry-relevant modules aligned with current AI market trends. Additionally, Berlin provides strong exposure to startups and tech companies.',
    camera: 'student',
    durationMs: 22000,
  },
  // Q31
  {
    speaker: 'interviewer',
    text: 'What is the specific address of your university?',
    camera: 'interviewer',
    durationMs: 4000,
  },
  {
    speaker: 'student',
    text: 'Alte Post, Karl-Marx-Straße 97-99, 12043 Berlin.',
    camera: 'student',
    durationMs: 6000,
  },
  // Q32
  {
    speaker: 'interviewer',
    text: 'Tell me about your university in Germany.',
    camera: 'interviewer',
    durationMs: 4000,
  },
  {
    speaker: 'student',
    text: 'I researched private academic institutions and chose BSBI for its industry-focused AI program, partnership with UCA, and location in Berlin.',
    camera: 'student',
    durationMs: 12000,
  },
  // Q33
  {
    speaker: 'interviewer',
    text: 'Why are you not completing your degree in your country?',
    camera: 'interviewer',
    durationMs: 5000,
  },
  {
    speaker: 'student',
    text: 'I respect the education system in Pakistan; it provides a good theoretical foundation. I am choosing to study in Germany because of the strong practical and industry-oriented approach in Artificial Intelligence. Germany offers advanced research facilities, modern labs, and strong collaboration between universities and industry, which provides exposure to real-world AI applications. Germany is known for technological innovation and a structured academic environment, which will help me gain international exposure and specialized expertise in AI.',
    camera: 'student',
    durationMs: 25000,
  },
  // Q37
  {
    speaker: 'interviewer',
    text: 'Does your father expect or want you to return this money?',
    camera: 'interviewer',
    durationMs: 4500,
  },
  {
    speaker: 'student',
    text: 'Well, my father has not asked me to return this invested money on my education. Though I would still offer him, as I know my father very well, but he would not accept it.',
    camera: 'student',
    durationMs: 12000,
  },
  // Q38
  {
    speaker: 'interviewer',
    text: 'Will you be working in Germany?',
    camera: 'interviewer',
    durationMs: 3500,
  },
  {
    speaker: 'student',
    text: 'No, I will not be working in Germany, as this is not my intention. I am just coming to Germany for the purpose of education. I just want to focus on my studies.',
    camera: 'student',
    durationMs: 12000,
  },
  // Q39
  {
    speaker: 'interviewer',
    text: 'What are the working regulations in Germany?',
    camera: 'interviewer',
    durationMs: 4500,
  },
  {
    speaker: 'student',
    text: 'A student will be allowed to work 20 hours per week. And on vacations, students can work for 40 hours per week.',
    camera: 'student',
    durationMs: 10000,
  },
  // --- Closing ---
  {
    speaker: 'interviewer',
    text: 'Thank you for your time and the information provided. We will process your application and get back to you. You may leave now.',
    camera: 'two-shot',
    durationMs: 8000,
  },
  {
    speaker: 'student',
    text: 'Thank you very much. Good day.',
    camera: 'student',
    durationMs: 4000,
  },
];
