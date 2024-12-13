import { ActivityType } from '@/typings/activity.type'
import IconLeaves from '../assets/svg/icon-leaves.svg'
import { Category } from '@pom/shared-dtos'

export const activity: Record<Category, ActivityType> = {
  [Category.SPORTY]: {
    // icon: <Dumbell />,
    title: 'Effectuer 20 squats',
    details: '',
    duration: 2,
    background: 'bg-sporty',
    reminderTime: '14:00',
  },
  [Category.AUDIO]: {
    // icon: <Headphones />,
    title: 'Ecouter un podcast',
    details: '',
    duration: 10,
    background: 'bg-audio',
    reminderTime: '09:00',
  },
  [Category.CEREBRAL]: {
    // icon: <Brain />,
    title: 'Faire un sudoku',
    details: '',
    duration: 5,
    background: 'bg-cerebral',
    reminderTime: '08:00',
  },
  [Category.RELAXATION]: {
    icon: <IconLeaves />,
    title: 'Faire 5 respirations profondes',
    details: '',
    duration: 2,
    background: 'bg-relaxation',
    reminderTime: '18:00',
  },
  [Category.CREATIVE]: {
    // icon: <Brush />,
    title: 'Ecrire ses pensées',
    details: '',
    duration: 5,
    background: 'bg-creative',
    reminderTime: '16:00',
  },
}
