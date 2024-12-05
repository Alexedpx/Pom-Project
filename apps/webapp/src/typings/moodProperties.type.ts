import { ReactElement } from 'react'
import { EmojiType } from './emoji.types'

export interface MoodProperties {
  emoji: EmojiType
  background: string
  moodSvg: ReactElement
  text: string
  buttonVariant: 'veryHappy' | 'happy' | 'sad' | 'angry' | 'tired'
}
