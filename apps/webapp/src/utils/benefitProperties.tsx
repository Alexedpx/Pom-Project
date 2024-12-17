import { Benefit } from '@/typings/benefit.type'
import { Category } from '@pom/shared-dtos'

export const sportyBenefits: Benefit[] = [
  { category: Category.SPORTY, details: 'Amélioration Cardiovasculaire', emoji: '❤️' },
  { category: Category.SPORTY, details: 'Clarté Mentale', emoji: '✨' },
  { category: Category.SPORTY, details: 'Réduction du Stress', emoji: '🔥' },
  { category: Category.SPORTY, details: "Boost de L'énergie", emoji: '⚡' },
]

export const audioBenefits: Benefit[] = [
  { category: Category.AUDIO, details: 'Amélioration cardiovasculaire' },
  { category: Category.AUDIO, details: 'Clarté mentale' },
  { category: Category.AUDIO, details: 'Réduction du stress' },
  { category: Category.AUDIO, details: "Boost de l'énergie" },
]

export const creativeBenefits: Benefit[] = [
  { category: Category.CREATIVE, details: 'Amélioration cardiovasculaire' },
  { category: Category.CREATIVE, details: 'Clarté mentale' },
  { category: Category.CREATIVE, details: 'Réduction du stress' },
  { category: Category.CREATIVE, details: "Boost de l'énergie" },
]

export const cerebralBenefits: Benefit[] = [
  { category: Category.CEREBRAL, details: 'Amélioration cardiovasculaire' },
  { category: Category.CEREBRAL, details: 'Clarté mentale' },
  { category: Category.CEREBRAL, details: 'Réduction du stress' },
  { category: Category.CEREBRAL, details: "Boost de l'énergie" },
]

export const relaxationBenefits: Benefit[] = [
  { category: Category.RELAXATION, details: 'Amélioration cardiovasculaire' },
  { category: Category.RELAXATION, details: 'Clarté mentale' },
  { category: Category.RELAXATION, details: 'Réduction du stress' },
  { category: Category.RELAXATION, details: "Boost de l'énergie" },
]
