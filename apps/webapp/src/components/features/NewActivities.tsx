import { Check } from 'lucide-react'
import { Button } from '../ui/button'
import LeftWaveSvg from './background/LeftWaveSvg'
import Layout from './Layout'

function NewActivities() {
  return (
    <>
      <Layout background="bg-tertiary" svg={<LeftWaveSvg fill="#364861" />}>
        <Layout.Section className="">
          <h1>Sélectionnez une catégorie</h1>
        </Layout.Section>
        <Layout.Section className="">
          <h1>Sélectionnez les activités à effectuer</h1>
        </Layout.Section>
        <Layout.Section className="">
          <h1>Définissez la durée et l'heure du rappel</h1>
        </Layout.Section>
        <Layout.Footer>
          <Button variant="secondary">
            Valider l’activité <Check />
          </Button>
        </Layout.Footer>
      </Layout>
    </>
  )
}
export default NewActivities
