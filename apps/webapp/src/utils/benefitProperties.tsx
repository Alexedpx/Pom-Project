import { Benefit } from '@/typings/benefit.type'
import { Category } from '@pom/shared-dtos'

export const sportyBenefits: Benefit[] = [
  { category: Category.SPORTY, details: 'Améliore la Santé', emoji: '❤️' },
  { category: Category.SPORTY, details: 'Clarifie l’Esprit', emoji: '✨' },
  { category: Category.SPORTY, details: 'Réduit le Stress', emoji: '🔥' },
  { category: Category.SPORTY, details: 'Boost l’Énergie', emoji: '⚡' },
]

export const audioBenefits: Benefit[] = [
  { category: Category.AUDIO, details: 'Stimule la Créativité', emoji: '☀️' },
  { category: Category.AUDIO, details: 'Favorise le Bien-être', emoji: '❤️' },
  { category: Category.AUDIO, details: 'Renforce la Mémoire', emoji: '💪' },
  { category: Category.AUDIO, details: 'Améliore la Productivité', emoji: '🚀' },
]

export const creativeBenefits: Benefit[] = [
  { category: Category.CREATIVE, details: 'Améliore la Résilience Émotionnelle', emoji: '❤️' },
  { category: Category.CREATIVE, details: 'Stimule la Réflexion', emoji: '☀️' },
  { category: Category.CREATIVE, details: 'Réduit le Stress', emoji: '🔥' },
  { category: Category.CREATIVE, details: 'Boost la Confiance', emoji: '⚡' },
]

export const cerebralBenefits: Benefit[] = [
  { category: Category.CEREBRAL, details: 'Augmente la Concentration', emoji: '☀️' },
  { category: Category.CEREBRAL, details: 'Améliore la Mémoire', emoji: '✨' },
  { category: Category.CEREBRAL, details: 'Réduit le Stress', emoji: '🔥' },
  { category: Category.CEREBRAL, details: 'Développe les Capacités Cognitives', emoji: '🚀' },
]

export const relaxationBenefits: Benefit[] = [
  { category: Category.RELAXATION, details: 'Améliore la Concentration', emoji: '☀️' },
  { category: Category.RELAXATION, details: 'Améliore le Sommeil', emoji: '😴' },
  { category: Category.RELAXATION, details: 'Réduit le Stress', emoji: '🔥' },
  { category: Category.RELAXATION, details: 'Renforce le Bien-être', emoji: '❤️' },
]
