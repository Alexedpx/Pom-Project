import { ReactElement } from 'react'

export interface TaskProperties {
  icon?: ReactElement
  title: string
  details?: string
  duration?: number
  background: string
}
