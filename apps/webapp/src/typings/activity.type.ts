import { Benefit } from './benefit.type'
import { EmojiType } from './emoji.types'

export type ActivityType = {
  emoji?: EmojiType
  title: string
  icon?: JSX.Element
  bgIcon: string
  details: string
  duration?: number
  benefits?: Benefit[]
  checkboxColor?: string
  reminderTime?: string
}
