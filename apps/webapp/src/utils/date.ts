import { eachDayOfInterval, startOfWeek, addDays, format } from 'date-fns'
import { fr } from 'date-fns/locale'

// Formatage de la date
export const formatDate = (date: Date): string => {
  return format(date, 'dd/MM')
}

// Fonction pour obtenir les jours de la semaine
export const getDaysOfWeek = (): string[] => {
  const monday = startOfWeek(new Date(), { weekStartsOn: 1 })

  return eachDayOfInterval({
    start: monday,
    end: addDays(monday, 6),
  }).map((day) => {
    return format(day, 'EEE', { locale: fr }).replace(/\.$/, '').toUpperCase() // Suppression du "." et ajout d'une majuscule au jour
  })
}

const daysOfWeek = getDaysOfWeek()
console.log(daysOfWeek)
