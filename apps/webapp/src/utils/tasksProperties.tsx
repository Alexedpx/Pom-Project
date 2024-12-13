import { TaskType } from '@/typings/task.type'
import { TaskCategories } from '@pom/shared-dtos'
import { Brush } from 'lucide-react'
import IconLeaves from '../assets/svg/icon-leaves.svg'

export const tasksProperties: Record<TaskCategories, TaskType> = {
  [TaskCategories.SPORTY]: {
    // icon: <Dumbell />,
    title: 'Effectuer 20 squats',
    details: '',
    duration: 2,
    background: 'bg-sporty',
    reminderTime: '14:00',
  },
  [TaskCategories.AUDIO]: {
    // icon: <Headphones />,
    title: 'Ecouter un podcast',
    details: '',
    duration: 10,
    background: 'bg-audio',
    reminderTime: '09:00',
  },
  [TaskCategories.CEREBRAL]: {
    // icon: <Brain />,
    title: 'Faire un sudoku',
    details: '',
    duration: 5,
    background: 'bg-cerebral',
    reminderTime: '08:00',
  },
  [TaskCategories.RELAXATION]: {
    icon: <IconLeaves />,
    title: 'Faire 5 respirations profondes',
    details: '',
    duration: 2,
    background: 'bg-relaxation',
    reminderTime: '18:00',
  },
  [TaskCategories.CREATIVE]: {
    icon: <Brush />,
    title: 'Ecrire ses pensées',
    details: '',
    duration: 5,
    background: 'bg-creative',
    reminderTime: '16:00',
  },
}
