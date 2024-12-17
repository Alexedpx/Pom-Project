import { Benefit } from './benefit.type'
import { EmojiType } from './emoji.types'

export type ActivityType = {
  emoji?: EmojiType
  title: string
  details?: string
  duration?: number
  benefits?: Benefit[]
  background: string
  checkboxColor?: string
  reminderTime?: string
}
