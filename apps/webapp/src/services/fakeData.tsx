import { faker } from '@faker-js/faker'
import { Mood } from '@pom/shared-dtos'

//todo créer le service (usermood)
export const generateFakeData = (num: number) => {
  const moods: Mood[] = Object.values(Mood)

  const fakeMoods = Array.from({ length: num }).map(() => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)]
    const randomDate = faker.date.between({
      from: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
      to: new Date(Date.now()),
    })

    const month = randomDate.getMonth() + 1
    const date = randomDate.getDate().toString().padStart(2, '0')
    const formattedDate = `${date}/${month}`

    return {
      mood: randomMood,
      date: formattedDate,
    }
  })

  fakeMoods.sort((a, b) => {
    const [dayA, monthA] = a.date.split('/')
    const [dayB, monthB] = b.date.split('/')

    const dateA = new Date(`2024-${monthA}-${dayA}`)
    const dateB = new Date(`2024-${monthB}-${dayB}`)

    return dateA.getTime() - dateB.getTime()
  })

  return fakeMoods
}
