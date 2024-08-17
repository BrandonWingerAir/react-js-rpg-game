export const wait = ms => new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, ms);
});

export const attack = ({ attacker, target }) => {
    const recievedDamage = attacker.attack - (attacker.level - target.level) * 1.25;
    
    const finalDamage = recievedDamage - target.defense / 2;

    return finalDamage;
}

export const affect = ({ attacker, target }) => {
    const recievedDamage = attacker.affect - (attacker.level - target.level) * 1.25;

    const finalDamage = recievedDamage - target.affectDefense / 2;

    return finalDamage;
}

export const heal = ({ user }) => {
    return user.healing + user.level * 0.25;
}