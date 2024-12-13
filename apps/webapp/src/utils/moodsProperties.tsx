import { MoodType } from '@/typings/mood.type'
import MoodSvg from '../components/features/background/MoodSvg'
import { MoodValues, TaskCategories } from '@pom/shared-dtos'
import { tasksProperties } from './tasksProperties'

export const moodsProperties: Record<MoodValues, MoodType> = {
  [MoodValues.VERY_GOOD]: {
    emoji: '😀',
    background: 'bg-veryHappy',
    moodSvg: <MoodSvg fill="#5E9268" />,
    text: 'moods.veryGood',
    buttonVariant: 'veryHappy',
    task: [tasksProperties[TaskCategories.SPORTY], tasksProperties[TaskCategories.AUDIO]],
  },
  [MoodValues.GOOD]: {
    emoji: '🙂',
    background: 'bg-happy',
    moodSvg: <MoodSvg fill="#FECF58" />,
    text: 'moods.good',
    buttonVariant: 'happy',
    task: [tasksProperties[TaskCategories.CEREBRAL]],
  },
  [MoodValues.QUITE_SAD]: {
    emoji: '😓',
    background: 'bg-sad',
    moodSvg: <MoodSvg fill="#2E4574" />,
    text: 'moods.quiteSad',
    buttonVariant: 'sad',
    task: [tasksProperties[TaskCategories.CREATIVE]],
  },
  [MoodValues.ANGRY]: {
    emoji: '😡',
    background: 'bg-angry',
    moodSvg: <MoodSvg fill="#CE6C5F" />,
    text: 'moods.angry',
    buttonVariant: 'angry',
    task: [tasksProperties[TaskCategories.RELAXATION]],
  },
  [MoodValues.TIRED]: {
    emoji: '🥱',
    background: 'bg-tired',
    moodSvg: <MoodSvg fill="#392645" />,
    text: 'moods.tired',
    buttonVariant: 'tired',
    task: [tasksProperties[TaskCategories.AUDIO]],
  },
}
