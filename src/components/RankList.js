import React, { useEffect, useState } from 'react';
import '../styles/ranklist.css'; 
import placeholder from '../assets/Svg/material-symbols--circle.svg';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useSnackbar } from '../components/Snackbar';

const RankList = () => {
    const [ranks, setRanks] = useState([]);
    const showSnackbar = useSnackbar();

    useEffect(() => {
        const fetchRanks = async () => {
            try {
                const ranksCollection = collection(db, 'Ranks');
                const ranksSnapshot = await getDocs(ranksCollection);
                const ranksList = ranksSnapshot.docs.map(doc => doc.data());
                setRanks(ranksList);
            } catch (error) {
                console.error("Error fetching ranks: ", error);
                showSnackbar("Error fetching ranks", { variant: "error" });
            }
        };

        fetchRanks();
    }, []);

    return (
        <>
            <h1>LeaderBoard</h1>
            {ranks.slice(0, 4).map((rank, index) => (
                <div key={rank.UID} className="leadboard_card">
                    <img id={`leadboard_card_profile_${index + 1}`} src={rank.ProfileUrl || placeholder} alt="Profile" />
                    <p id={`leadboard_card_username_${index + 1}`}>{rank.UserName}</p>
                    <p className="highlight" id={`leadboard_card_profits_${index + 1}`}>{rank.Profits}%</p>
                </div>
            ))}
        </>
    );
};

export default RankList;
