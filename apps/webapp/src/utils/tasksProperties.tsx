import { TaskProperties } from '@/typings/task.type'
import { Tasks } from '@pom/shared-dtos'
import { Brush } from 'lucide-react'
import IconLeaves from '../assets/svg/icon-leaves.svg'

export const tasksProperties: Record<Tasks, TaskProperties> = {
  [Tasks.SPORTY]: {
    // icon: <Dumbell />,
    title: 'Effectuer 20 squats',
    details: '',
    duration: 2,
    background: 'bg-sporty',
  },
  [Tasks.AUDIO]: {
    // icon: <Headphones />,
    title: 'Ecouter un podcast',
    details: '',
    duration: 10,
    background: 'bg-audio',
  },
  [Tasks.CEREBRAL]: {
    // icon: <Brain />,
    title: 'Faire un sudoku',
    details: '',
    duration: 5,
    background: 'bg-cerebral',
  },
  [Tasks.RELAXATION]: {
    icon: <IconLeaves />,
    title: 'Faire 5 respirations profondes',
    details: '',
    duration: 2,
    background: 'bg-relaxation',
  },
  [Tasks.CREATIVE]: {
    icon: <Brush />,
    title: 'Ecrire ses pensées',
    details: '',
    duration: 5,
    background: 'bg-creative',
  },
}
