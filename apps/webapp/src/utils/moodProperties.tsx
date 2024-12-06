import CustomSvg from '../components/features/background/MoodSvg'
import { MoodProperties } from '../typings/moodProperties.type'
import { Moods } from '@pom/shared-dtos'

export const moodProperties: Record<Moods, MoodProperties> = {
  [Moods.VERY_GOOD]: {
    emoji: '😀',
    background: 'bg-veryHappy',
    moodSvg: <CustomSvg fill="#89B892" />,
    text: 'moods.veryGood',
    buttonVariant: 'veryHappy',
  },
  [Moods.GOOD]: {
    emoji: '🙂',
    background: 'bg-happy',
    moodSvg: <CustomSvg fill="#FECF58" />,
    text: 'moods.good',
    buttonVariant: 'happy',
  },
  [Moods.QUITE_SAD]: {
    emoji: '😓',
    background: 'bg-sad',
    moodSvg: <CustomSvg fill="#4D70A4" />,
    text: 'moods.quiteSad',
    buttonVariant: 'sad',
  },
  [Moods.ANGRY]: {
    emoji: '😡',
    background: 'bg-angry',
    moodSvg: <CustomSvg fill="#DEA097" />,
    text: 'moods.angry',
    buttonVariant: 'angry',
  },
  [Moods.TIRED]: {
    emoji: '🥱',
    background: 'bg-tired',
    moodSvg: <CustomSvg fill="#4E395B" />,
    text: 'moods.tired',
    buttonVariant: 'tired',
  },
}
