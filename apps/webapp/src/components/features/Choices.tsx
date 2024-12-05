import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import Layout from './Layout';
import { useState } from 'react';
import { Check } from 'lucide-react';
import ReactEmojis from "@souhaildev/reactemojis";
import { toast, Toaster } from 'sonner';
import { useNavigate } from 'react-router';
import EmojiButton from './buttons/EmojiButtons';
import { Moods } from '@pom/shared-dtos';
import { MoodProperties } from '@/typings/moodProperties.type';
import CustomSvg from './background/MoodSvg';

// eslint-disable-next-line react-refresh/only-export-components
export const moodProperties: Record<Moods, MoodProperties> = {
    [Moods.VERY_GOOD]: { emoji: '😀', background: 'bg-veryHappy', moodSvg: <CustomSvg fill="#89B892" />, text: 'moods.veryGood', buttonVariant: 'veryHappy', },
    [Moods.GOOD]: { emoji: '🙂', background: 'bg-happy', moodSvg: <CustomSvg fill="#FECF58" />, text: 'moods.good', buttonVariant: 'happy', },
    [Moods.QUITE_SAD]: { emoji: '😓', background: 'bg-sad', moodSvg: <CustomSvg fill="#4D70A4" />, text: 'moods.quiteSad', buttonVariant: 'sad', },
    [Moods.ANGRY]: { emoji: '😡', background: 'bg-angry', moodSvg: <CustomSvg fill="#DEA097" />, text: 'moods.angry', buttonVariant: 'angry', },
    [Moods.TIRED]: { emoji: '🥱', background: 'bg-tired', moodSvg: <CustomSvg fill="#4E395B" />, text: 'moods.tired', buttonVariant: 'tired', },
};


function Choices() {
    const { t } = useTranslation('common', {
        keyPrefix: 'Choices',
    });
    const navigate = useNavigate()
    const [selectedMood, setSelectedMood] = useState<Moods | null>(null);
    // Permet de définir si un emoji est sélectionné, sinon met les valeurs par défaut
    const currentMood = selectedMood ? moodProperties[selectedMood] : null;


    // Change les propriétés selon l'emoji sélectionné
    const handleIconClick = (mood: Moods) => {
        setSelectedMood(mood);
    };

    // Enregistre l'emoji sélectionné dans le localstorage
    const handleValidate = () => {
        if (selectedMood) {
            localStorage.setItem('userMood', selectedMood);
            toast.success('Your mood has been saved !');
            setTimeout(() => navigate('/homepage'), 1500);
        } else {
            toast.error(t('toast.error'));
        }
    };

    return (
        <>
            <Toaster position="top-center" />
            <Layout
                background={currentMood?.background || 'bg-tertiary'}
                svg={currentMood?.moodSvg || <CustomSvg />}
            >
                <Layout.Header>
                    {selectedMood ? (
                        <h1 className="font-semibold text-4xl text-white">
                            {t(moodProperties[selectedMood].text)}
                        </h1>
                    ) : (
                        <h1 className="font-semibold text-4xl">{t('header.hello')}</h1>
                    )}
                </Layout.Header>
                <Layout.Content>
                    {selectedMood ? (
                        <ReactEmojis
                            emoji={moodProperties[selectedMood].emoji}
                            emojiStyle="3"
                            style={{ width: 180, height: 180 }}
                        />
                    ) : (
                        <h2 className="font-semibold text-2xl">{t('content.howDoYouFeelToday')}</h2>
                    )}
                </Layout.Content>
                <Layout.Footer>
                    <div className="flex gap-3 justify-center">
                        {Object.values(Moods).map((mood) => (
                            <EmojiButton
                                key={mood}
                                emoji={moodProperties[mood].emoji}
                                onClick={() => handleIconClick(mood)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center">
                        {selectedMood ? (
                            <Button
                                onClick={handleValidate}
                                variant={moodProperties[selectedMood].buttonVariant}
                                size="default"
                                className="text-xl font-normal text-white"
                                iconRight={<Check className="ml-1" />}
                            >a
                                {t('button.validate')}
                            </Button>
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
