import LeftWaveSvg from '../features/background/LeftWaveSvg'
import Layout from '../layout/Layout'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'
import { Input } from '../ui/input'
import { Filter } from 'lucide-react'
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle } from '../ui/drawer'
import ReactEmojis from '@souhaildev/reactemojis'
import { useState } from 'react'
import { Category, Status } from '@pom/shared-dtos'
import { activity } from '../../utils/activityProperties'
import { Badge } from '../ui/badge'

function AllActivities() {
  const { t } = useTranslation('common', {
    keyPrefix: 'AllActivities',
  })

  const categories = Object.keys(activity) as Category[]
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null)
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])

  const chooseStatus = (status: Status) => {
    setSelectedStatus(selectedStatus === status ? null : status)
  }

  const chooseCategory = (category: Category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((cat) => cat !== category)
      } else {
        return [...prevCategories, category]
      }
    })
  }

  return (
    <>
      <Layout background="bg-tertiary" svg={<LeftWaveSvg fill="#364861" />}>
        <Layout.Header>
          <Layout.Section>
            <div className="w-full flex flex-col gap-5 h-full relative">
              <h1 className="text-xl font-semibold">{t('title.allActivities')}</h1>
              <Input placeholder="Rechercher une activité" className="relative font-light italic  text-xs" />
              <Drawer>
                <DrawerTrigger asChild>
                  <Filter className="absolute right-8 top-14 bg-black/80 p-2 rounded-full w-8 h-8 text-white cursor-pointer" />
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerTitle>
                    <h1>Status</h1>
                  </DrawerTitle>
                  <DrawerHeader>
                    <div className="flex justify-between w-full">
                      <Button
                        type="button"
                        variant={selectedStatus === Status.IN_PROGRESS ? 'primary' : 'default'}
                        size="lg"
                        iconLeft={<ReactEmojis emoji="⚡" emojiStyle="3" style={{ width: 22, height: 22 }} />}
                        onClick={() => chooseStatus(Status.IN_PROGRESS)}
                      >
                        {t('status.inProgress')}
                      </Button>

                      <Button
                        type="button"
                        variant={selectedStatus === Status.DONE ? 'primary' : 'default'}
                        size="lg"
                        iconLeft={<ReactEmojis emoji="👍" emojiStyle="2" style={{ width: 20, height: 20 }} />}
                        onClick={() => chooseStatus(Status.DONE)}
                      >
                        {t('status.done')}
                      </Button>
                    </div>
                  </DrawerHeader>
                  <DrawerTitle>
                    <h1>Catégories</h1>
                  </DrawerTitle>
                  <DrawerHeader>
                    <div className="flex gap-4 flex-wrap">
                      {categories.map((category) => (
                        <Badge
                          key={category}
                          variant={selectedCategories.includes(category) ? 'primary' : 'outline'}
                          className="text-sm cursor-pointer "
                          onClick={() => chooseCategory(category as Category)}
                        >
                          {t(`categories.${category}`)}
                        </Badge>
                      ))}
                    </div>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button variant="noHover">{t('footer.saveFilter')}</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </Layout.Section>
        </Layout.Header>

        <Layout.Content className="gap-10 border">
          <Layout.Section>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ul>
                {filteredActivities.map((activity, index) => (
                  <li key={index} className="py-2">
                    {activity.title} - {activity.details} - {activity.duration} mins
                  </li>
                ))}
              </ul>
            </div> */}
          </Layout.Section>
        </Layout.Content>
      </Layout>
    </>
  )
}

export default AllActivities
