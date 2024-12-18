import LeftWaveSvg from '../features/background/LeftWaveSvg'
import Layout from '../layout/Layout'
import { Button } from '../ui/button'

import { useTranslation } from 'react-i18next'
import { Input } from '../ui/input'
import { Filter, Search } from 'lucide-react'

function AllActivities() {
  const { t } = useTranslation('common', {
    keyPrefix: 'AllActivities',
  })
  return (
    <>
      <Layout background="bg-tertiary" svg={<LeftWaveSvg fill="#364861" />}>
        <Layout.Header>
          <Layout.Section>
            <div className="w-full flex flex-col gap-5 h-full">
              <h1 className="text-xl font-semibold ">{t('title.allActivities')}</h1>
              <Input placeholder="Rechercher une activité" className="relative font-light italic  text-xs" />
              <Filter className="absolute right-14 top-[8.70rem]  bg-black/80 p-2 rounded-full w-8 h-8 text-white cursor-pointer" />
            </div>
          </Layout.Section>
        </Layout.Header>
        <Layout.Content className="gap-10">
          <Layout.Section>{/* <Filters /> */}</Layout.Section>
        </Layout.Content>
        <Layout.Footer>
          <Button variant="default">{t('footer.saveFilter')}</Button>
        </Layout.Footer>
      </Layout>
    </>
  )
}
export default AllActivities
