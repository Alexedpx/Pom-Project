import { useState } from 'react'
import { activity } from '../../utils/activityProperties'
import { moodProperties } from '../../utils/moodProperties'
import { Mood } from '@pom/shared-dtos'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { ActivityType } from '@/typings/activity.type'
import { Benefit } from '@/typings/benefit.type'

function CurrentActivities() {
  useTranslation('common', { keyPrefix: 'CurrentActivities' })
  const navigate = useNavigate()
  const [, setActivities] = useState<ActivityType[]>([])

  const storedMood = localStorage.getItem('userMood') as Mood
  const activitiesList = activity[storedMood.toUpperCase() as keyof typeof activity] || []

  if (activitiesList.length > 0) {
    setActivities(
      activitiesList.map((activity) => ({
        title: activity.title,
        details: activity.details || '',
        icon: activity.icon,
        bgIcon: activity.bgIcon,
        reminderTime: activity.reminderTime || '',
      }))
    )
  }

  const addActivity = (activityDetails: {
    title: string
    icon: string
    bgIcon: string
    benefits: Benefit[]
    details: string
  }) => {
    navigate('/details', { state: { activityDetails } })
  }

  return (
    <>
      {storedMood && (
        <ul className="h-full flex flex-col gap-4">
          {moodProperties[storedMood]?.activities?.map((activity, index) => (
            <li
              key={index}
              className="flex cursor-pointer"
              onClick={() =>
                addActivity({
                  title: activity.title,
                  icon: activity.icon,
                  bgIcon: activity.bgIcon,
                  benefits: activity.benefits || [],
                  details: activity.details,
                })
              }
            >
              <div className={`w-full h-[90px] rounded-3xl bg-audio flex justify-around cursor-pointer`}>
                <div className="flex pl-10 items-center gap-8  w-full">
                  <div
                    className={`${activity.bgIcon} w-12 h-12 rounded-full flex items-center justify-center`}
                  >
                    {activity.icon}
                  </div>
                  <div className="flex flex-col">
                    <span>{activity.title}</span>
                    <span className="font-light text-sm text-gray-400">{activity.details}</span>
                  </div>
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
