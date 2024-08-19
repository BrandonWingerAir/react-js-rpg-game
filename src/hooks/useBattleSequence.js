import { useEffect, useState } from 'react';
import { wait, attack, magic, heal, userStats, opponentStats } from 'shared';

export const useBattleSequence = sequence => {
    const [userHealth, setUserHealth] = useState(userStats.maxHealth);
    const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
    const [announcerMessage, setAnnouncerMessage] = useState('');

    const [turn, setTurn] = useState(0);
    const [inSequence, setInSequence] = useState(false);

    const [userAnimation, setUserAnimation] = useState('static');
    const [opponentAnimation, setOpponentAnimation] = useState('static');

    useEffect(() => {
        const { mode, turn } = sequence;

        if (mode) {
            const attacker = turn === 0 ? userStats : opponentStats;
            const target = turn === 0 ? opponentStats : userStats;

            switch (mode) {
                case 'attack': 
                    {
                        const damage = attack({ attacker, target });

                        (async () => {
                            setInSequence(true);
                            setAnnouncerMessage(`${attacker.name} has chosen to attack`);
                            await wait(1000);

                            turn === 0
                                ? setUserAnimation('attack')
                                : setOpponentAnimation('attack');
                            await wait(100);
                            
                            turn === 0
                            ? setUserAnimation('static')
                            : setOpponentAnimation('static');
                            await wait(500);
                            
                            turn === 0
                            ? setOpponentAnimation('damage')
                            : setUserAnimation('damage');
                            await wait(750);
                            
                            turn === 0
                            ? setOpponentAnimation('static')
                            : setUserAnimation('static');
                            setAnnouncerMessage(`${target.name} received damage!`);
                            
                            turn === 0
                            ? setOpponentHealth(health => (health - damage > 0 ? health - damage : 0))
                            : setUserHealth(health => (health - damage > 0 ? health - damage : 0));
                            await wait(2000);

                            setAnnouncerMessage(`${target.name}'s turn!`);
                            await wait(1500);

                            setTurn(turn === 0 ? 1 : 0);
                            setInSequence(false);
                        })();

                        break;
                    }
                case 'magic':
                    {
                        const damage = magic({ attacker, target });

                        (async () => {
                            setInSequence(true);
                            setAnnouncerMessage(`${attacker.name} has used magic`);
                            await wait(1000);

                            turn === 0
                                ? setUserAnimation('magic')
                                : setOpponentAnimation('magic');
                            await wait(100);
                            
                            turn === 0
                            ? setUserAnimation('static')
                            : setOpponentAnimation('static');
                            await wait(500);
                            
                            turn === 0
                            ? setOpponentAnimation('damage')
                            : setUserAnimation('damage');
                            await wait(750);
                            
                            turn === 0
                            ? setOpponentAnimation('static')
                            : setUserAnimation('static');
                            setAnnouncerMessage(`${target.name} received damage!`);
                            
                            turn === 0
                            ? setOpponentHealth(health => (health - damage > 0 ? health - damage : 0))
                            : setUserHealth(health => (health - damage > 0 ? health - damage : 0));
                            await wait(2000);

                            setAnnouncerMessage(`${target.name}'s turn!`);
                            await wait(1500);

                            setTurn(turn === 0 ? 1 : 0);
                            setInSequence(false);
                        })();

                        break;
                    }

                case 'heal': 
                    {
                        const recovered = heal({ target: attacker });
                        
                        (async () => {
                            setInSequence(true);
                            setAnnouncerMessage(`${attacker.name} is healing!`);
                            await wait(1000);

                            turn === 0 ? setUserAnimation('magic') : setOpponentAnimation('magic');
                            await wait(1000);

                            turn === 0 ? setUserAnimation('static') : setOpponentAnimation('static');
                            await wait(500);
                            
                            setAnnouncerMessage(`${attacker.name} has recovered health.`);
                            turn === 0 
                                ? setUserHealth(health => 
                                    health + recovered <= attacker.maxHealth
                                    ? health + recovered
                                    : attacker.maxHealth
                                )
                                : setOpponentHealth(health =>
                                    health + recovered <= attacker.maxHealth
                                    ? health + recovered
                                    : attacker.maxHealth
                                );
                            await wait(2500);

                            setAnnouncerMessage(`${target.name}'s turn!`);
                            await wait(1500);

                            setTurn(turn === 0 ? 1 : 0);
                            setInSequence(false);
                        })();

                        break;
                    }
                default:
                    break;
            }
        }
    }, [sequence]);
    
    return {
        turn,
        inSequence,
        userHealth,
        opponentHealth,
        announcerMessage,
        userAnimation,
        opponentAnimation
    }
}
