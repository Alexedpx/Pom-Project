import { ReactElement } from 'react'

export interface ActivityType {
  icon?: ReactElement
  title: string
  details?: string
  duration?: number
  background: string
  reminderTime?: string
}
