import { Course, Difficulty, Category } from '../types/course'

const curriculumTemplate = [
  'Introduction',
  'Core Concepts',
  'Tools',
  'Practical Workflow',
  'Real Project',
  'Advanced Techniques',
  'Final Project',
]

function buildCurriculum(freeCount = 2) {
  return curriculumTemplate.map((title, i) => ({
    order: i + 1,
    title,
    free: i < freeCount,
  }))
}

interface RawCourse {
  number: string
  title: string
  description: string
  price: number
  lessons: number
  duration: string
  difficulty: Difficulty
  category: Category
  skills: string[]
  projects: number
  featured?: boolean
}

const raw: RawCourse[] = [
  { number: '01', title: 'AI Foundations', description: 'The core mental models behind modern AI, explained without the jargon, so every later course builds on solid ground.', price: 29, lessons: 24, duration: '4 Hours', difficulty: 'Beginner', category: 'Technical', skills: ['AI Literacy', 'Model Types', 'Use Cases'], projects: 2 },
  { number: '02', title: 'Prompt Engineering Mastery', description: 'Structured techniques for getting reliable, high-quality output from any language model, every time.', price: 39, lessons: 32, duration: '5 Hours', difficulty: 'Beginner', category: 'Technical', skills: ['Prompt Design', 'Chain-of-Thought', 'Evaluation'], projects: 3 },
  { number: '03', title: 'ChatGPT Mastery', description: 'Turn ChatGPT into a daily production tool for writing, research, planning and decision-making.', price: 39, lessons: 30, duration: '5 Hours', difficulty: 'Beginner', category: 'Business', skills: ['Custom GPTs', 'Workflows', 'Automation Basics'], projects: 3 },
  { number: '04', title: 'Generative AI', description: 'How generative models actually work, and how to combine text, image and audio generation in real workflows.', price: 49, lessons: 38, duration: '7 Hours', difficulty: 'Intermediate', category: 'Creative', skills: ['Diffusion Models', 'Multi-modal Workflows'], projects: 4 },
  { number: '05', title: 'AI Automation', description: 'Connect AI models to real tools and triggers to remove repetitive work from your business.', price: 59, lessons: 42, duration: '8 Hours', difficulty: 'Intermediate', category: 'Business', skills: ['No-code Automation', 'APIs', 'Triggers'], projects: 5 },
  { number: '06', title: 'AI Agents Masterclass', description: 'Design autonomous, multi-step AI agents that plan, act and adapt without constant supervision.', price: 79, lessons: 42, duration: '8 Hours', difficulty: 'Advanced', category: 'Technical', skills: ['Agent Architecture', 'Tool Use', 'Memory Systems'], projects: 6, featured: true },
  { number: '07', title: 'AI Content Creation', description: 'Build a repeatable content engine across writing, video and social using AI at every stage.', price: 49, lessons: 35, duration: '6 Hours', difficulty: 'Intermediate', category: 'Creative', skills: ['Content Systems', 'Repurposing', 'Voice & Style'], projects: 4 },
  { number: '08', title: 'AI Digital Marketing', description: 'Plan, write and optimize full marketing campaigns with AI as your always-on strategist.', price: 59, lessons: 40, duration: '7 Hours', difficulty: 'Intermediate', category: 'Business', skills: ['Campaign Strategy', 'Ad Copy', 'Analytics'], projects: 5 },
  { number: '09', title: 'AI Business Systems', description: 'Rebuild core business operations — sales, support, reporting — around AI-native processes.', price: 69, lessons: 36, duration: '7 Hours', difficulty: 'Advanced', category: 'Business', skills: ['Ops Design', 'Process Mapping'], projects: 4 },
  { number: '10', title: 'AI Freelancing', description: 'Package AI skills into services clients will pay for, from first outreach to delivery.', price: 49, lessons: 28, duration: '5 Hours', difficulty: 'Beginner', category: 'Business', skills: ['Client Pitching', 'Service Packaging'], projects: 3 },
  { number: '11', title: 'AI Coding', description: 'Ship production software faster by pairing with AI across planning, writing and debugging code.', price: 69, lessons: 45, duration: '9 Hours', difficulty: 'Advanced', category: 'Technical', skills: ['AI Pair Programming', 'Code Review', 'Refactoring'], projects: 6 },
  { number: '12', title: 'AI Image Generation', description: 'Direct image models with precision — composition, lighting and style — like a trained art director.', price: 39, lessons: 25, duration: '4 Hours', difficulty: 'Beginner', category: 'Creative', skills: ['Visual Prompting', 'Style Control'], projects: 3 },
  { number: '13', title: 'AI Video Creation', description: 'Produce polished short-form and long-form video using AI generation, editing and voice tools together.', price: 59, lessons: 34, duration: '6 Hours', difficulty: 'Intermediate', category: 'Creative', skills: ['AI Video Tools', 'Editing Workflows'], projects: 4 },
  { number: '14', title: 'AI Voice & Audio', description: 'Generate natural voiceovers, clone styles responsibly and produce clean audio for any project.', price: 39, lessons: 22, duration: '4 Hours', difficulty: 'Beginner', category: 'Creative', skills: ['Voice Synthesis', 'Audio Editing'], projects: 2 },
  { number: '15', title: 'AI SEO', description: 'Use AI to research, structure and produce content that ranks — without losing quality or accuracy.', price: 49, lessons: 30, duration: '5 Hours', difficulty: 'Intermediate', category: 'Business', skills: ['Keyword Systems', 'Content Briefs'], projects: 3 },
  { number: '16', title: 'AI For Students', description: 'Study faster and understand more deeply using AI as a tutor, researcher and study partner.', price: 29, lessons: 20, duration: '3 Hours', difficulty: 'Beginner', category: 'Business', skills: ['Study Systems', 'Research'], projects: 2 },
  { number: '17', title: 'AI For Designers', description: 'Integrate AI into a real design workflow, from concepting to production-ready assets.', price: 49, lessons: 28, duration: '5 Hours', difficulty: 'Intermediate', category: 'Creative', skills: ['Design Workflows', 'Asset Generation'], projects: 3 },
  { number: '18', title: 'AI Startup Builder', description: 'Go from idea to working AI product, using every skill in the platform to build and launch.', price: 89, lessons: 45, duration: '9 Hours', difficulty: 'Advanced', category: 'Business', skills: ['Product Strategy', 'MVP Building', 'Launch'], projects: 6 },
]

export const courses: Course[] = raw.map((c) => ({
  id: `course-${c.number}`,
  number: c.number,
  title: c.title,
  description: c.description,
  instructor: 'Nexora Faculty',
  price: c.price,
  lessons: c.lessons,
  duration: c.duration,
  difficulty: c.difficulty,
  category: c.category,
  featured: c.featured,
  skills: c.skills,
  projects: c.projects,
  curriculum: buildCurriculum(2),
}))

export const featuredCourse = courses.find((c) => c.featured)!
