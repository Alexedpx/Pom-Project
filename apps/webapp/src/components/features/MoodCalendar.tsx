import { useEffect, useState } from "react";
import Layout from "./Layout";
import HomePageSvg from './background/HomepageSvg'
import { Moods } from "@pom/shared-dtos";
import { moodProperties } from "./Choices";

const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate().toString().padStart(2, '0');
    return `${date}/${month}`;
}

function MoodCalendar() {
    const [background] = useState('bg-tertiary');
    const [userMood, setUserMood] = useState<Moods | null>(null);
    const [currentDate] = useState(getDate());

    useEffect(() => {
        const storedMood = localStorage.getItem("userMood") as Moods;
        if (storedMood && Object.values(Moods).includes(storedMood)) {
            setUserMood(storedMood);
        }
    }, []);

    return (
        <Layout
            background={background}
            svg={<HomePageSvg fill="#364861" width="100%" height="auto" />}
        >
            <Layout.Header>
                <div className="w-[345px] h-[134px] border border-lightBlue rounded-xl bg-softBlue">
                    <div className="pl-5 flex-col h-full flex justify-evenly ">
                        <h2 className="text-lg font-medium">Historique</h2>
                        {userMood && (
                            <div className="flex flex-col justify-center gap-1">
                                <span className="text-2xl">
                                    {moodProperties[userMood].emoji}
                                </span>
                                <p className="text-sm">{currentDate}</p>
                            </div>
                        )}
                    </div>
                </div>
            </Layout.Header>

            <Layout.Footer></Layout.Footer>
        </Layout>
    );
}

export default MoodCalendar;
