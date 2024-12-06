import { MoodProperties } from '@/typings/mood.type'
import MoodSvg from '../components/features/background/MoodSvg'
import { Moods, Tasks } from '@pom/shared-dtos'
import { tasksProperties } from './tasksProperties'

export const moodsProperties: Record<Moods, MoodProperties> = {
  [Moods.VERY_GOOD]: {
    emoji: '😀',
    background: 'bg-veryHappy',
    moodSvg: <MoodSvg fill="#5E9268" />,
    text: 'moods.veryGood',
    buttonVariant: 'veryHappy',
    task: tasksProperties[Tasks.SPORTY],
    // task: ['Go for a walk ', 'Call a friend ', 'Watch a movie '],
  },
  [Moods.GOOD]: {
    emoji: '🙂',
    background: 'bg-happy',
    moodSvg: <MoodSvg fill="#FECF58" />,
    text: 'moods.good',
    buttonVariant: 'happy',
    task: tasksProperties[Tasks.CEREBRAL],
    // task: ['Read a book ', 'Listen to music ', 'Take a nap '],
  },
  [Moods.QUITE_SAD]: {
    emoji: '😓',
    background: 'bg-sad',
    moodSvg: <MoodSvg fill="#2E4574" />,
    text: 'moods.quiteSad',
    buttonVariant: 'sad',
    task: tasksProperties[Tasks.CREATIVE],
    // task: ['Listen to music ', 'Take a nap ', 'Talk to a friend '],
  },
  [Moods.ANGRY]: {
    emoji: '😡',
    background: 'bg-angry',
    moodSvg: <MoodSvg fill="#CE6C5F" />,
    text: 'moods.angry',
    buttonVariant: 'angry',
    task: tasksProperties[Tasks.RELAXATION],
    // task: ['Exercise ', 'Take deep breaths ', 'Write in a journal '],
  },
  [Moods.TIRED]: {
    emoji: '🥱',
    background: 'bg-tired',
    moodSvg: <MoodSvg fill="#392645" />,
    text: 'moods.tired',
    buttonVariant: 'tired',
    task: tasksProperties[Tasks.AUDIO],
    // task: ['Take a nap ', 'Drink water ', 'Relax with a book '],
  },
}
