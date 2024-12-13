import { ReactElement } from 'react'
import { EmojiType } from './emoji.types'
import { ActivityType } from './activity.type'

export interface MoodType {
  emoji: EmojiType
  background: string
  moodSvg: ReactElement
  text: string
  buttonVariant: 'veryHappy' | 'happy' | 'sad' | 'angry' | 'tired'
  activities: ActivityType[]
}
