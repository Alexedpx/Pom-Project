import { useState } from 'react'
import { Timer, Bell, Play } from 'lucide-react'
import { Button } from '../ui/button'
import { activity } from '../../utils/activityProperties'
import { moodProperties } from '../../utils/moodProperties'
import { Mood } from '@pom/shared-dtos'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { Badge } from '../ui/badge'

function CurrentActivities() {
  useTranslation('common', { keyPrefix: 'CurrentActivities' })
  const navigate = useNavigate()
  const [, setActivities] = useState<
    { details: string; duration: number; background: string; reminderTime: string }[]
  >([])

  const storedMood = localStorage.getItem('userMood') as Mood
  const activitiesList = activity[storedMood.toUpperCase() as keyof typeof activity] || []

  if (activitiesList.length > 0) {
    setActivities(
      activitiesList.map((activity) => ({
        title: activity.title,
        benefits: activity.benefits || '',
        details: activity.details || '',
        duration: activity.duration || 0,
        background: activity.background,
        reminderTime: activity.reminderTime || '',
      }))
    )
  }

  // Fonction qui démarre l'activité
  const addActivity = (activityDetails: {
    title: string
    benefits: string
    details: string
    duration: number
    background: string
  }) => {
    navigate('/details', { state: { activityDetails } })
  }

  return (
    <>
      {storedMood && (
        <ul>
          {moodProperties[storedMood]?.activities?.map((activity, index) => (
            <li key={index} className="mb-3">
              <div
                className={`w-[345px] h-[100px] rounded-3xl ${activity.background} flex justify-around gap-2`}
              >
                <div className="flex gap-1 flex-col justify-center">
                  <p className="font-medium">{activity.details}</p>
                  <div className="flex gap-4">
                    <Badge variant="default">
                      <Timer style={{ width: '16px', color: '#FFB76D' }} />
                      <p className="text-lightBlack font-semibold text-xs">{activity.duration} min</p>
                    </Badge>
                    <Badge variant="outline">
                      <Bell style={{ width: '14px', color: '#FFB76D' }} />
                      <p className="font-semibold text-xs">{activity.reminderTime}</p>
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button variant="icon" size="md" onClick={() => addActivity(activity)}>
                    <Play style={{ fill: '#2D3342', color: '#2D3342' }} />
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default CurrentActivities
