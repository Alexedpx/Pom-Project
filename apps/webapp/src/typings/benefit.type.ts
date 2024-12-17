import { Category } from '@pom/shared-dtos'
import { EmojiType } from './emoji.types'

export type Benefit = {
  category?: Category
  emoji?: EmojiType
  details?: string
}
