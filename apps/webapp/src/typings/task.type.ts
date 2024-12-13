import { ReactElement } from 'react'

export interface TaskType {
  icon?: ReactElement
  title: string
  details?: string
  duration?: number
  background: string
  reminderTime?: string
}
