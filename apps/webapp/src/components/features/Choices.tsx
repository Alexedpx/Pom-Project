import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import Layout from './Layout';
import { useState } from 'react';
import BgDefault from '../../assets/background/BgDefault.png';
import BgVhappy from '../../assets/background/BgVhappy.png';
import BgHappy from '../../assets/background/BgHappy.png';
import BgSad from '../../assets/background/BgSad.png';
import BgAngry from '../../assets/background/BgAngry.png';
import BgTired from '../../assets/background/BgTired.png';
import { Check } from 'lucide-react';
import ReactEmojis from "@souhaildev/reactemojis";
import { toast, Toaster } from 'sonner';
import { useNavigate } from 'react-router';
import EmojiButton from './buttons/EmojiButtons';
import { EmojiType } from '@/typings/emoji.types';



function Choices() {
    const { t } = useTranslation('common', {
        keyPrefix: 'Choices',
    });
    const navigate = useNavigate()
    const [background, setBackground] = useState('bg-tertiary');
    const [vector, setVector] = useState<string>(BgDefault);
    const [selectedIcon, setSelectedIcon] = useState<EmojiType | null>(null);
    const emojis: EmojiType[] = ['😀', '🙂', '😓', '😡', '🥱'];


    const handleIconClick = (icon: EmojiType) => {
        setSelectedIcon(icon);
        switch (icon) {
            case '😀':
                setBackground('bg-veryHappy');
                setVector(BgVhappy);
                break;
            case '🙂':
                setBackground('bg-happy');
                setVector(BgHappy);
                break;
            case '😓':
                setBackground('bg-sad');
                setVector(BgSad);
                break;
            case '😡':
                setBackground('bg-angry');
                setVector(BgAngry);
                break;
            case '🥱':
                setBackground('bg-tired');
                setVector(BgTired);
                break;
            default:
                setBackground('bg-tertiary');
                setVector(BgDefault);
                break;
        }
    };

    const getButtonVariant = (icon: string | null) => {
        switch (icon) {
            case '😀':
                return 'veryHappy';
            case '🙂':
                return 'happy';
            case '😓':
                return 'sad';
            case '😡':
                return 'angry';
            case '🥱':
                return 'tired';
            default:
                return 'default';
        }
    };

    const getMoodText = (text: string | null) => {
        switch (text) {
            case '😀':
                return t('moods.veryGood');
            case '🙂':
                return t('moods.good');
            case '😓':
                return t('moods.quiteSad');
            case '😡':
                return t('moods.angry');
            case '🥱':
                return t('moods.tired');
            default:
                return 'default';
        }
    };


    const handleValidate = () => {
        if (selectedIcon) {
            localStorage.setItem('userMood', selectedIcon);
            toast.success('mood saved !');
            setTimeout(() => {
                navigate('/homepage');
            }, 1500);
        } else {
            toast.error('mood not saved');
        }
        console.log('icons', selectedIcon)
    };

    return (
        <>
            <Toaster position="top-center" />
            <Layout background={background} vector={vector}>
                <Layout.Header>
                    {selectedIcon ? (
                        <h1 className="font-semibold text-4xl text-white">{getMoodText(selectedIcon)}</h1>
                    ) : (

                        <h1 className="font-semibold text-4xl">{t('header.hello')}</h1>
                    )}

                </Layout.Header>
                <Layout.Content>
                    {selectedIcon ? (
                        <ReactEmojis emoji={selectedIcon} emojiStyle="3" style={{ width: 180, height: 180 }} />
                    ) : (
                        <h2 className="font-semibold text-2xl">{t('content.howDoYouFeelToday')}</h2>
                    )}
                </Layout.Content>
                <Layout.Footer>
                    <div className="flex gap-3 justify-center">
                        {emojis.map((emoji) => (
                            <EmojiButton key={emoji} emoji={emoji} onClick={handleIconClick} />
                        ))}
                    </div>
                    <div className="flex justify-center ">
                        {selectedIcon ? (
                            <Button onClick={handleValidate} variant={getButtonVariant(selectedIcon)} size='default' className='text-xl font-normal text-white' iconRight={<Check className="ml-1" />}>{t('button.validate')}</Button>
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
