export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'
export type Category = 'Business' | 'Creative' | 'Technical'

export interface CurriculumItem {
  order: number
  title: string
  free: boolean
}

export interface Course {
  id: string
  number: string
  title: string
  description: string
  instructor: string
  price: number
  lessons: number
  duration: string
  difficulty: Difficulty
  category: Category
  featured?: boolean
  skills: string[]
  projects: number
  curriculum: CurriculumItem[]
}
