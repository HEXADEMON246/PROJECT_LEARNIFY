import { Palette, CodeXml, ChartNoAxesColumn, Target, Clock, Trophy } from "lucide-react";

export const courses = [
  {
    category: "DEVELOPMENT",
    icon: CodeXml,
    duration: "8 weeks",
    level: "Beginner",
    title: "Web Development",
    description:
      "Build modern websites using HTML, CSS and JavaScript.",
    price: "₦25,000",
    color: "blue",
  },
  {
    category: "DESIGN",
    icon: Palette,
    duration: "6 weeks",
    level: "Beginner",
    title: "UI/UX Design",
    description:
      "Learn to design beautiful and user-friendly interfaces.",
    price: "₦20,000",
    color: "purple",
  },
  {
    category: "DATA",
    icon: ChartNoAxesColumn,
    duration: "10 weeks",
    level: "Intermediate",
    title: "Data Analytics",
    description:
      "Turn raw data into meaningful insights and decisions.",
    price: "₦30,000",
    color: "orange",
  },
];

export const features = [
  {
    icon: Target,
    title: "Learn by doing",
    description:
      "Build practical projects and apply what you learn to real-world problems.",
  },
  {
    icon: Clock,
    title: "Learn at your pace",
    description:
      "Study when it works for you and revisit lessons whenever you need.",
  },
  {
    icon: Trophy,
    title: "Build real skills",
    description:
      "Develop practical knowledge that helps you grow professionally.",
  },
];

export const testimonials = [
  {
    initials: "SJ",
    name: "Sarah Johnson",
    role: "Frontend Developer",
    review:
      "Learnify helped me understand web development and gave me the confidence to build my first portfolio.",
  },
  {
    initials: "DW",
    name: "David Williams",
    role: "Product Designer",
    review:
      "The lessons were practical and easy to follow. I could apply what I learned immediately.",
  },
  {
    initials: "AO",
    name: "Amara Okafor",
    role: "Student",
    review:
      "I love being able to learn at my own pace while working on projects that actually make sense.",
  },
];

export const faqs = [
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "Yes. Many courses start with the fundamentals and guide you through practical exercises step by step.",
  },
  {
    question: "How long do I have access to a course?",
    answer:
      "You can access your course at your own pace and revisit lessons whenever you need.",
  },
  {
    question: "Do I receive a certificate?",
    answer:
      "Yes. You can receive a certificate after successfully completing your course.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely! Learnify allows you to study whenever and wherever it is convenient for you.",
  },
];
