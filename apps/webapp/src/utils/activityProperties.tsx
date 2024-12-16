import { ActivityType } from '@/typings/activity.type'
import { Category } from '@pom/shared-dtos'

const sportyBenefits = [
  {
    details: 'Amélioration cardiovasculaire',
  },
  {
    details: 'Clarté mentale',
  },
  {
    details: 'Réduction du stress',
  },
  {
    details: "Boost de l'énergie",
  },
]

export const activity: Record<Category, ActivityType[]> = {
  [Category.SPORTY]: [
    {
      title: 'Activité physique',
      details: 'Effectuer 20 squats',
      duration: 2,
      benefits: sportyBenefits.join(', '),
      background: 'bg-sporty',
      checkboxColor: 'bg-primary',
      reminderTime: '14:00',
    },
    {
      title: 'Activité physique',
      details: 'Faire 20 pompes',
      duration: 3,
      benefits: sportyBenefits.join(', '),
      background: 'bg-sporty',
      checkboxColor: 'bg-primary',
      reminderTime: '15:00',
    },
    {
      title: 'Activité physique',
      details: 'Courir 5km',
      duration: 30,
      benefits: sportyBenefits.join(', '),
      background: 'bg-sporty',
      checkboxColor: 'bg-primary',
      reminderTime: '16:00',
    },
  ],
  [Category.AUDIO]: [
    {
      title: 'Activité Audio',
      details: 'Ecouter un podcast',
      duration: 10,
      background: 'bg-audio',
      checkboxColor: 'bg-audio-foreground',
      reminderTime: '09:00',
    },
    {
      title: 'Activité Audio',
      details: 'Choisir une playlist relaxante',
      duration: 15,
      background: 'bg-audio',
      checkboxColor: 'bg-audio-foreground',
      reminderTime: '11:00',
    },
    {
      title: 'Activité Audio',
      details: 'Choisir une playlist relaxante',
      duration: 15,
      background: 'bg-audio',
      checkboxColor: 'bg-audio-foreground',
      reminderTime: '11:00',
    },
  ],
  [Category.CEREBRAL]: [
    {
      title: 'Faire un sudoku',
      details: '',
      duration: 5,
      background: 'bg-cerebral',
      checkboxColor: 'bg-cerebral-foreground',
      reminderTime: '08:00',
    },
    {
      title: 'Résoudre une énigme',
      details: '',
      duration: 10,
      background: 'bg-cerebral',
      checkboxColor: 'bg-cerebral-foreground',
      reminderTime: '17:00',
    },
    {
      title: 'Résoudre une énigme',
      details: '',
      duration: 10,
      background: 'bg-cerebral',
      checkboxColor: 'bg-cerebral-foreground',
      reminderTime: '17:00',
    },
  ],
  [Category.RELAXATION]: [
    {
      title: 'Faire 5 respirations profondes',
      details: '',
      duration: 2,
      background: 'bg-relaxation',
      checkboxColor: 'bg-relaxation-foreground',
      reminderTime: '18:00',
    },
    {
      title: 'Méditer pendant 10 minutes',
      details: '',
      duration: 10,
      background: 'bg-relaxation',
      checkboxColor: 'bg-relaxation-foreground',
      reminderTime: '19:00',
    },
    {
      title: 'Méditer pendant 10 minutes',
      details: '',
      duration: 10,
      background: 'bg-relaxation',
      checkboxColor: 'bg-relaxation-foreground',
      reminderTime: '19:00',
    },
  ],
  [Category.CREATIVE]: [
    {
      title: 'Ecrire ses pensées',
      details: '',
      duration: 5,
      background: 'bg-creative',
      checkboxColor: 'bg-creative-foreground',
      reminderTime: '16:00',
    },
    {
      title: 'Dessiner quelque chose',
      details: 'Laissez libre cours à votre imagination.',
      duration: 10,
      background: 'bg-creative',
      checkboxColor: 'bg-creative-foreground',
      reminderTime: '20:00',
    },
    {
      title: 'Dessiner quelque chose',
      details: 'Laissez libre cours à votre imagination.',
      duration: 10,
      background: 'bg-creative',
      checkboxColor: 'bg-creative-foreground',
      reminderTime: '20:00',
    },
  ],
}
