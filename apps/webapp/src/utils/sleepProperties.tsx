import { SleepDurationType } from '@/typings/sleepDuration.type'
import { SleepDuration } from '@pom/shared-dtos'

export const sleepDurationProperties: Record<SleepDuration, SleepDurationType> = {
  [SleepDuration.MORE_THAN_7H]: {
    emoji: '⚡',
    title: 'Plus de 7H',
  },

  [SleepDuration.BETWEEN_5H_AND_7H]: {
    emoji: '👍',
    title: 'Entre 5 et 7H',
  },
  [SleepDuration.LESS_THAN_5H]: {
    emoji: '😴',
    title: 'Moins de 5H',
  },
}
