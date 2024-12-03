import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import Layout from './Layout';
import { useState } from 'react';
import BgDefault from '../../assets/background/BgDefault.png';
import BgVhappy from '../../assets/background/BgVhappy.png';
import BgHappy from '../../assets/background/BgHappy.png';
import BgSad from '../../assets/background/BgSad.png';
import BgAngry from '../../assets/background/BgAngry.png';

function Choices() {
    const { t } = useTranslation('common', {
        keyPrefix: 'Choices',
    });
    const [background, setBackground] = useState('bg-tertiary');
    const [vector, setVector] = useState<string>(BgDefault);
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

    const handleIconClick = (icon: string) => {
        setSelectedIcon(icon);
        switch (icon) {
            case '😃':
                setBackground('bg-veryHappy');
                setVector(BgVhappy);
                break;
            case '😊':
                setBackground('bg-happy');
                setVector(BgHappy);
                break;
            case '😢':
                setBackground('bg-sad');
                setVector(BgSad);
                break;
            case '😡':
                setBackground('bg-angry');
                setVector(BgAngry);
                break;
            default:
                setBackground('bg-tertiary');
                setVector(BgDefault);
                break;
        }
    };

    const getButtonVariant = (icon: string | null) => {
        switch (icon) {
            case '😃':
                return 'veryHappy';
            case '😊':
                return 'happy';
            case '😢':
                return 'sad';
            case '😡':
                return 'angry';
            default:
                return 'default';
        }
    };

    const getMoodText = (text: string | null) => {
        switch (text) {
            case '😃':
                return t('moods.veryGood');
            case '😊':
                return t('moods.good');;
            case '😢':
                return t('moods.quiteSad');;
            case '😡':
                return t('moods.angry');;
            default:
                return 'default';
        }
    };

    return (
        <>
            <Layout background={background} vector={vector}>
                <Layout.Header>
                    {selectedIcon ? (
                        <h1 className="font-semibold text-4xl">{getMoodText(selectedIcon)}</h1>
                    ) : (
                        <h1 className="font-semibold text-4xl">{t('header.hello')}</h1>
                    )}

                </Layout.Header>
                <Layout.Content>
                    {selectedIcon ? (
                        <div className="text-9xl">{selectedIcon}</div>
                    ) : (
                        <h2 className="font-semibold text-3xl">{t('content.howDoYouFeelToday')}</h2>
                    )}
                </Layout.Content>
                <Layout.Footer>
                    <div className="flex justify-evenly">
                        <Button
                            variant="icon"
                            size="icon"
                            style={{ fontSize: '2rem' }}
                            onClick={() => handleIconClick('😃')}
                        >
                            😃
                        </Button>
                        <Button
                            variant="icon"
                            size="icon"
                            style={{ fontSize: '2rem' }}
                            onClick={() => handleIconClick('😊')}
                        >
                            😊
                        </Button>
                        <Button
                            variant="icon"
                            size="icon"
                            style={{ fontSize: '2rem' }}
                            onClick={() => handleIconClick('😢')}
                        >
                            😢
                        </Button>
                        <Button
                            variant="icon"
                            size="icon"
                            style={{ fontSize: '2rem' }}
                            onClick={() => handleIconClick('😡')}
                        >
                            😡
                        </Button>
                    </div>
                    <div className="flex justify-center ">
                        {selectedIcon ? (
                            <Button variant={getButtonVariant(selectedIcon)} size='default' className='text-xl font-normal'>{t('buttons.validate')}</Button>
                        ) : (
                            <p className="text-base">{t('footer.selectYourMood')}</p>
                        )}

                    </div>
                </Layout.Footer>
            </Layout>
        </>
    );
}

export default Choices;
