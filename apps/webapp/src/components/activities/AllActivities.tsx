import { Check, SlidersHorizontal } from 'lucide-react'
import LeftWaveSvg from '../features/background/LeftWaveSvg'
import Layout from '../layout/Layout'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Badge } from '../ui/badge'

function AllActivities() {
  return (
    <Layout background="bg-tertiary" svg={<LeftWaveSvg fill="#364861" />}>
      <Layout.Header className=" w-full flex flex-row justify-between">
        <h1 className="text-xl font-semibold ">Toutes les activités</h1>
        <Button variant="icon" size="icon" iconRight={<SlidersHorizontal className="text-black/60" />} />
      </Layout.Header>
      <Layout.Content className="border gap-10">
        <Layout.Section className="border gap-5">
          <h1>Status</h1>
          <Checkbox type="button" className="bg-black" />
        </Layout.Section>
        <Layout.Section className="border gap-5">
          <h1>Catégories</h1>
          <Badge variant="outline" />
        </Layout.Section>
      </Layout.Content>
      <Layout.Footer>
        <Button variant="default">
          Appliquer les filtres
          <Check />
        </Button>
      </Layout.Footer>
    </Layout>
  )
}

export default AllActivities
