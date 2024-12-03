import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button'
import Layout from './Layout';


function Choices() {
    const { t } = useTranslation('common', {
        keyPrefix: 'Choices',
    })
    return (

        <>
            <Layout>
                <Layout.Header>
                    <h1 className='font-bold text-4xl'>{t('hello')}</h1>
                </Layout.Header>
                <Layout.Content>
                    <h2 className='font-bold text-3xl'>{t('howDoYouFeelToday')}</h2>
                </Layout.Content>
                <Layout.Footer>
                    <div className='flex justify-evenly'>
                        <Button variant='icon' size='lg' style={{ fontSize: '2rem' }}>😃</Button>
                        <Button variant='icon' size='lg' style={{ fontSize: '2rem' }}>😊</Button>
                        <Button variant='icon' size='lg' style={{ fontSize: '2rem' }}>😢</Button>
                        <Button variant='icon' size='lg' style={{ fontSize: '2rem' }}>😡</Button>
                    </div>
                    <div className='flex justify-center pt-5'>
                        <p className='text-base'>{t('selectYourMood')}</p>
                    </div>
                </Layout.Footer >
            </Layout >
        </>
    )
}

export default Choices;

