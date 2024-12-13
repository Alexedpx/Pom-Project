import { useEffect, useState } from 'react'
import Layout from './Layout'
import { Mood } from '@pom/shared-dtos'
import { generateFakeData } from '../../services/fakeData'
import { useTranslation } from 'react-i18next'
import { moodProperties } from '../../utils/moodProperties'
import { Bell, Play, Timer } from 'lucide-react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router'
import RightWaveSvg from './background/RightWaveSvg'

//todo : use date-fns
const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

const getMonday = (currentDate: Date): Date => {
  const day = currentDate.getDay()
  const diff = day === 0 ? -6 : 1 - day
  const monday = new Date(currentDate)
  monday.setDate(currentDate.getDate() + diff)
  return monday
}

const formatDate = (date: Date): string => {
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`
}

function MoodCalendar() {
  const { t } = useTranslation('common', { keyPrefix: 'MoodCalendar' })
  const navigate = useNavigate()
  const [userMood, setUserMood] = useState<Mood | null>(null)
  // Index du jour actuel
  const [currentDayIndex] = useState(new Date().getDay() - 1)
  const [historicalMoods, setHistoricalMoods] = useState<{ date: string; mood: Mood }[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activities, setActivities] = useState<{ title: string; duration: number; background: string }[]>([])
  // Dates dynamiques de la semaine
  const [weekDates, setWeekDates] = useState<string[]>([])

  useEffect(() => {
    // Calculer les dates de la semaine actuelle
    const monday = getMonday(new Date())
    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(monday)
      date.setDate(monday.getDate() + i)
      return formatDate(date)
    })
    setWeekDates(dates)

    // Récupérer l'humeur stockée dans le localStorage
    const storedMood = localStorage.getItem('userMood') as Mood
    if (storedMood && Object.values(Mood).includes(storedMood)) {
      setUserMood(storedMood)
      console.log('Stored mood:', storedMood)

      const activities = moodProperties[storedMood]?.activities
      if (activities) {
        setActivities(
          activities.map((activity) => ({
            title: activity.title,
            duration: activity.duration || 0,
            background: activity.background,
          }))
        )
      }
    }

    const fakeMoods = generateFakeData(currentDayIndex)
    setHistoricalMoods(fakeMoods)
  }, [currentDayIndex])

  const addActivites = () => {
    navigate('/activities')
  }

  return (
    <Layout background="bg-tertiary" svg={<RightWaveSvg />}>
      <Layout.Header>
        <div className="border h-auto rounded-lg flex flex-col justify-around p-8 ">
          <div className="grid grid-cols-7 gap-8 ">
            {daysOfWeek.map((day, index) => {
              let emoji = null

              if (index === currentDayIndex) {
                emoji = userMood ? moodProperties[userMood]?.emoji : null
              } else if (index < currentDayIndex) {
                const mood = historicalMoods[index]?.mood
                emoji = mood ? moodProperties[mood]?.emoji : null
              } else {
                emoji = null
              }

              return (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center text-center gap-2 h-full"
                >
                  <span className="text-3xl">{emoji}</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium"> {index === currentDayIndex ? 'Auj' : day}</span>
                    <span className="text-xs text-gray-500">{weekDates[index]}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Layout.Header>
      <Layout.Section>
        <h1 className="mb-6 pl-2 text-xl font-semibold">{t('content.yourDailyProgram')}</h1>
        <div className="flex justify-between items-center  pl-2 pr-2">
          <div className="w-fit ">
            <p className="text-sm font-medium">{t('content.activitiesList')}</p>
            <p className="mb-6 text-xs font-extralight">Activités réalisées (0/3)</p>
          </div>
          <p className="text-sm font-light text-gray-400">{t('content.seeAll')}</p>
        </div>
      </Layout.Section>
      <Layout.Content>
        {userMood && (
          <ul>
            {moodProperties[userMood]?.activities?.map((activity, index) => (
              <li key={index} className="mb-3">
                <div
                  className={`w-[345px] h-[100px] rounded-3xl ${activity.background} flex justify-around gap-2  `}
                >
                  <div className="flex gap-1 flex-col w-fit justify-center ">
                    <p className="font-medium">{activity.title}</p>
                    <div className="flex gap-4">
                      <div className="bg-softWhite w-[68px] h-[28px] rounded-3xl flex items-center justify-center gap-1 ">
                        <Timer style={{ width: '16px', color: '#FFB76D' }} />
                        <p className="text-lightBlack font-semibold text-xs">{activity.duration} min</p>
                      </div>
                      <div className="border-2 border-softWhite w-[68px] h-[28px] rounded-3xl flex items-center justify-center gap-1">
                        <Bell style={{ width: '14px', color: '#FFB76D' }} />
                        <p className=" font-semibold text-xs">{activity.reminderTime}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Button variant="icon" size="md">
                      <Play style={{ fill: '#2D3342', color: '#2D3342' }} />
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Layout.Content>
      <Layout.Footer>
        <Button onClick={addActivites}>+ Ajouter une nouvelle activité</Button>
      </Layout.Footer>
    </Layout>
  )
}

export default MoodCalendar
