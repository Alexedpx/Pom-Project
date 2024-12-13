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
    activities: [activity[Category.AUDIO], activity[Category.SPORTY], activity[Category.CEREBRAL]],
  },
  [Mood.GOOD]: {
    emoji: '🙂',
    background: 'bg-happy',
    moodSvg: <MoodSvg fill="#FECF58" />,
    text: 'moods.good',
    buttonVariant: 'happy',
    activities: [activity[Category.CEREBRAL]],
  },
  [Mood.QUITE_SAD]: {
    emoji: '😓',
    background: 'bg-sad',
    moodSvg: <MoodSvg fill="#2E4574" />,
    text: 'moods.quiteSad',
    buttonVariant: 'sad',
    activities: [activity[Category.CREATIVE]],
  },
  [Mood.ANGRY]: {
    emoji: '😡',
    background: 'bg-angry',
    moodSvg: <MoodSvg fill="#CE6C5F" />,
    text: 'moods.angry',
    buttonVariant: 'angry',
    activities: [activity[Category.RELAXATION]],
  },
  [Mood.TIRED]: {
    emoji: '🥱',
    background: 'bg-tired',
    moodSvg: <MoodSvg fill="#392645" />,
    text: 'moods.tired',
    buttonVariant: 'tired',
    activities: [activity[Category.AUDIO]],
  },
}
