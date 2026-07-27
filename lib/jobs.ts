/**
 * Open positions shown on /about/career.
 * Add or remove roles here; the page and the application form's role
 * dropdown update automatically.
 */

export type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  salary?: string;
  /** The short, human pitch shown on the card. */
  intro: string;
  sections: { heading: string; items: string[] }[];
};

export const jobs: Job[] = [
  {
    id: "bde",
    title: "Business Development Executive",
    location: "Hyderabad · Work from office",
    type: "Full time",
    intro:
      "You open doors. You find the companies we should be talking to, get us in the room, and keep every conversation moving until it closes. If you enjoy the chase and the spreadsheet equally, this role fits you.",
    sections: [
      {
        heading: "What you'll do",
        items: [
          "Find and qualify new business leads",
          "Reach prospects through calls, email, and LinkedIn",
          "Book meetings with potential clients and keep them warm",
          "Keep lead trackers, Excel reports, and sales records clean and current",
          "Follow up with prospects and manage the sales pipeline",
          "Work closely with our internal sales team",
        ],
      },
      {
        heading: "What we need from you",
        items: [
          "MBA (mandatory)",
          "Excellent spoken and written English",
          "Strong communication and people skills",
          "Comfortable working in MS Excel",
        ],
      },
      {
        heading: "Bonus points",
        items: [
          "You can join immediately",
          "You're proactive and quick to learn new things",
        ],
      },
    ],
  },
  {
    id: "aiml-trainer",
    title: "Python AI/ML Trainer",
    location: "Hyderabad",
    type: "Full time",
    salary: "Up to ₹3.6 LPA",
    intro:
      "You've built models, and you can explain them. This role is half classroom, half code review: train students, mentor project teams, and put real industry experience in front of people who are just entering the field.",
    sections: [
      {
        heading: "What you'll do",
        items: [
          "Deliver Python and AI/ML training sessions",
          "Create practical learning content and assignments",
          "Guide students through live projects",
          "Own project execution and learning outcomes",
        ],
      },
      {
        heading: "What we need from you",
        items: [
          "Minimum 2 years of teaching experience",
          "Minimum 2 years of hands-on AI/ML project experience",
          "Strong knowledge of Python, Machine Learning, Deep Learning, NLP, and Computer Vision",
          "Hands-on with TensorFlow, PyTorch, scikit-learn, Pandas, NumPy, Jupyter, and Git",
          "Clear communication and a genuine interest in mentoring",
        ],
      },
    ],
  },
  {
    id: "designer",
    title: "Graphic Designer & Video Editor",
    location: "Hyderabad",
    type: "Full time · 1 to 2 years experience",
    intro:
      "Still and moving, one pair of hands. Social creatives in the morning, course reels in the afternoon, a thumbnail before you log off. You'll own how SmartGrow looks everywhere it shows up.",
    sections: [
      {
        heading: "What you'll do",
        items: [
          "Design brand and social media creatives",
          "Edit reels and videos for our courses and marketing",
          "Create thumbnails, banners, and presentation decks",
          "Add motion graphics where they earn their place",
          "Keep our visual identity consistent across everything",
        ],
      },
      {
        heading: "What we need from you",
        items: [
          "1 to 2 years of experience in design and video editing",
          "A portfolio or showreel we can watch (link it in the form)",
          "Photoshop and Illustrator, or equivalents you're fast in",
          "Premiere Pro or DaVinci Resolve for editing",
          "After Effects is a plus",
          "A good eye for typography, layout, and short-form video",
        ],
      },
    ],
  },
];
