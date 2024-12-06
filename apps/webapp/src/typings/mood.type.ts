import { ReactElement } from 'react'
import { EmojiType } from './emoji.types'
import { TaskProperties } from './task.type'

export interface MoodProperties {
  emoji: EmojiType
  background: string
  moodSvg: ReactElement
  text: string
  buttonVariant: 'veryHappy' | 'happy' | 'sad' | 'angry' | 'tired'
  task: TaskProperties
}
