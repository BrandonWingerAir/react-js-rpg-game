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

export const magic = ({ attacker, target }) => {
    const recievedDamage = attacker.magic - (attacker.level - target.level) * 1.25;

    const finalDamage = recievedDamage - target.defense / 2;

    return finalDamage;
}

export const heal = ({ target }) => {
    return target.magic + target.level * 0.25;
}