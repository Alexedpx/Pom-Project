import { ReactElement } from 'react'

export interface ActivityType {
  icon?: ReactElement
  title: string
  details?: string
  duration?: number
  benefits?: string
  background: string
  checkboxColor?: string
  reminderTime?: string
}
