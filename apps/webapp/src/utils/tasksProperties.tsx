import { TaskProperties } from '@/typings/task.type'
import { Tasks } from '@pom/shared-dtos'

export const tasksProperties: Record<Tasks, TaskProperties> = {
  [Tasks.SPORTY]: {
    // icon: <Dumbell />,
    title: 'Effectuer 20 squats',
    details: '',
    duration: 2,
  },
  [Tasks.AUDIO]: {
    // icon: <Headphones />,
    title: 'Ecouter un podcast',
    details: '',
    duration: 10,
  },
  [Tasks.CEREBRAL]: {
    // icon: <Brain />,
    title: '',
    details: 'Faire un sudoku',
    duration: 5,
  },
  [Tasks.RELAXATION]: {
    // icon: <IconLeaves />,
    title: '',
    details: 'Faire 5 respirations profondes',
    duration: 2,
  },
  [Tasks.CREATIVE]: {
    // icon: <Brush />,
    title: '',
    details: 'Ecrire ses pensées',
    duration: 5,
  },
}
