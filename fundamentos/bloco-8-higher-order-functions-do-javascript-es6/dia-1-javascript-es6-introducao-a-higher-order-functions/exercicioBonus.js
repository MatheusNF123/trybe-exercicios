// Parte I - Game Actions Simulator

// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };


const dragonDmg = () =>{
    let dano = Math.round(Math.random() * dragon.strength)
    if (dano <= 15) dano = 15
    return dano
}


const warriorDmg = () =>{
    let danominimo = warrior.weaponDmg * warrior.strength
    let dano = Math.round(Math.random() * danominimo)
    if (dano <= warrior.strength) dano = warrior.strength    
    return dano
}


const mageDmg = () => {
    let mana = 15;
    let danominimo = mage.intelligence * 2
    let dano = Math.round(Math.random() * danominimo)
    if (dano <= mage.intelligence ) dano = mage.intelligence    
    if(mage.mana < 15) {
      dano = 'Nao possui mana o suficiente'
      mana = 0
      return {damage: dano, manaConsumida: mana}
    }
    
    return {damage: dano, manaConsumida: mana}
}

const gameActions = {
  // Crie as HOFs neste objeto.
  dmgWarrior: (warriorDmg) =>  {
   let damage = warriorDmg()
   dragon.healthPoints -= damage  
    warrior.damage = damage
  },
  dmgMage: (mageDmg) => {
  let damage = mageDmg().damage
  let mana = mageDmg().manaConsumida
  typeof damage !== 'number' ? dragon.healthPoints -= 0 : dragon.healthPoints -= damage
  mage.damage = damage
  mage.mana -= mana
  },
  dmgDragon: (dragonDmg) => {
    let damage = dragonDmg()
    mage.healthPoints -= damage
    warrior.healthPoints -= damage
    dragon.damage = damage
  },
  retorna: () => battleMembers
}




const rodaTudo = () => {
  gameActions.dmgWarrior(warriorDmg)
gameActions.dmgMage(mageDmg)
gameActions.dmgDragon(dragonDmg)
console.log(gameActions.retorna())
} 

setInterval(rodaTudo, 1000)
