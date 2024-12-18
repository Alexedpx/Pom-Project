import Layout from '../layout/Layout'
import { Checkbox } from '../ui/checkbox'
import { Badge } from '../ui/badge'
import { Category, Status } from '@pom/shared-dtos'
import { activity } from '../../utils/activityProperties'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

function Filters() {
  const { t } = useTranslation('common', {
    keyPrefix: 'Filter',
  })
  const categories = Object.keys(activity) as Category[]
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  const chooseStatus = (status: Status) => {
    setSelectedStatus(selectedStatus === status ? null : status)
  }

  const chooseCategory = (category: Category) => {
    setSelectedCategory(selectedCategory === category ? null : category)
  }

  return (
    <>
      <Layout.Section className="gap-5">
        <h1 className="text-lg  font-semibold">Status</h1>
        <div className="flex gap-6 ">
          <div className="flex gap-3">
            <Checkbox
              type="button"
              className={`bg-softWhite ${
                selectedStatus === Status.IN_PROGRESS ? 'bg-primary text-white' : ''
              }`}
              onCheckedChange={() => chooseStatus(Status.IN_PROGRESS)}
            />
            <p>{t('status.inProgress')}</p>
          </div>
          <div className="flex gap-3">
            <Checkbox
              type="button"
              className={`bg-softWhite ${selectedStatus === Status.DONE ? 'bg-primary' : ''}`}
              onCheckedChange={() => chooseStatus(Status.DONE)}
            />

            <p>{t('status.done')}</p>
          </div>
        </div>
      </Layout.Section>
      <Layout.Section className="gap-5 mt-20">
        <h1 className="text-lg  font-semibold">Catégories</h1>
        <div className="flex gap-3 flex-wrap">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              className="text-sm cursor-pointer"
              onClick={() => chooseCategory(category as Category)}
            >
              {t(`categories.${category}`)}
            </Badge>
          ))}
        </div>
      </Layout.Section>
    </>
  )
}

export default Filters
