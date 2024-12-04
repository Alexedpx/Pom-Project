import { useEffect, useState } from "react";
import Layout from "./Layout";
import BgHomepage from '../../assets/background/BgHomepage.png';



const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate().toString().padStart(2, '0');
    return `${date}/${month}`;
}

function MoodCalendar() {
    const [background] = useState('bg-tertiary');
    const [vector] = useState<string>(BgHomepage);
    const [userMood, setUserMood] = useState<string | null>(null);
    const [currentDate] = useState(getDate());

    useEffect(() => {
        const storedMood = localStorage.getItem('userMood');
        if (storedMood) {
            setUserMood(storedMood);
        }
    }, []);

    return (
        <Layout background={background} vector={vector}>
            <Layout.Header>
                <div className="w-[345px] h-[134px] border border-lightBlue rounded-xl bg-softBlue">
                    <div className="pl-5 flex-col h-full flex justify-evenly ">
                        <h2 className="text-lg font-medium">Historique</h2>
                        {userMood && (
                            <div className="flex flex-col justify-center ">
                                <span className="text-2xl ">{userMood}</span>
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
