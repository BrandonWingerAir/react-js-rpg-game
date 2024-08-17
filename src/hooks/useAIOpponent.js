import { useEffect, useState } from "react";

export const useAIOpponent = turn => {
    const [opponentChoice, setOpponentChoice] = useState();

    useEffect(() => {
        if (turn === 1) {
            const options = ['attack', 'affect', 'heal'];
            setOpponentChoice(options[Math.floor(Math.random() * options.length)]);
        }
    }, [turn]);

    return opponentChoice;
};