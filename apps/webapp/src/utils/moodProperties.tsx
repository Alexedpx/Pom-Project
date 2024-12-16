import { MoodType } from '@/typings/mood.type'
import MoodSvg from '../components/features/background/MoodSvg'
import { Category, Mood } from '@pom/shared-dtos'
import { activity } from './activityProperties'

export const moodProperties: Record<Mood, MoodType> = {
  [Mood.VERY_GOOD]: {
    emoji: '😀',
    background: 'bg-veryHappy',
    moodSvg: <MoodSvg fill="#5E9268" />,
    text: 'moods.veryGood',
    buttonVariant: 'veryHappy',
    activities: [
      activity[Category.AUDIO][Math.floor(Math.random() * activity[Category.AUDIO].length)],
      activity[Category.SPORTY][Math.floor(Math.random() * activity[Category.SPORTY].length)],
      activity[Category.CEREBRAL][Math.floor(Math.random() * activity[Category.CEREBRAL].length)],
    ],
  },
  [Mood.GOOD]: {
    emoji: '🙂',
    background: 'bg-happy',
    moodSvg: <MoodSvg fill="#FECF58" />,
    text: 'moods.good',
    buttonVariant: 'happy',
    activities: [activity[Category.CEREBRAL][Math.floor(Math.random() * activity[Category.CEREBRAL].length)]],
  },
  [Mood.QUITE_SAD]: {
    emoji: '😓',
    background: 'bg-sad',
    moodSvg: <MoodSvg fill="#2E4574" />,
    text: 'moods.quiteSad',
    buttonVariant: 'sad',
    activities: [activity[Category.CREATIVE][Math.floor(Math.random() * activity[Category.CREATIVE].length)]],
  },
  [Mood.ANGRY]: {
    emoji: '😡',
    background: 'bg-angry',
    moodSvg: <MoodSvg fill="#CE6C5F" />,
    text: 'moods.angry',
    buttonVariant: 'angry',
    activities: [
      activity[Category.RELAXATION][Math.floor(Math.random() * activity[Category.RELAXATION].length)],
    ],
  },
  [Mood.TIRED]: {
    emoji: '🥱',
    background: 'bg-tired',
    moodSvg: <MoodSvg fill="#392645" />,
    text: 'moods.tired',
    buttonVariant: 'tired',
    activities: [activity[Category.AUDIO][Math.floor(Math.random() * activity[Category.AUDIO].length)]],
  },
}
