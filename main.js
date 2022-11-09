function createGame(icon, hour, icon2){
 return `
  <li>
 <img src="/assets/icon=${icon}.svg" alt="bandeira ${icon}"/>
          <strong>${hour}</strong>
<img src="/assets/icon=${icon2}.svg" alt="bandeira da ${icon2}"/>
   </li>
 ` 
}
let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.4;
return`
<div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
                    
          <ul>
            ${games}
           </ul>
    </div>
`
}

document.querySelector("#cards").innerHTML = 
createCard('20/11', 'domingo',
  createGame('Qatar', '13:00', 'Ecuador'))+

createCard('21/11', 'segunda',
  createGame('England', '10:00', 'iran')+
  createGame('Senegal', '13:00', 'Netherlands'))+

createCard('22/11', 'terça',
  createGame('Argentina', '07:00', 'saudi arabia')+
  createGame('France', '16:00', 'Australia'))+

createCard('23/11', 'quarta',
  createGame('Germany', '10:00', 'Japan')+
  createGame('Spain','13:00','Costa Rica')+
  createGame('Belgium', '16:00', 'Canada'))+

createCard('24/11', 'quinta',
  createGame('Uruguay', '10:00', 'South korea')+
  createGame('Portugal', '13:00', 'Ghana')+
  createGame('Brazil', '16:00', 'Serbia'))+
  
createCard('27/11', 'domingo',  
  createGame('Belgium', '10:00', 'Morocco')+
  createGame('Spain', '16:00', 'Germany'))+

createCard('28/11', 'segunda',
  createGame('Brazil', '13:00', 'Switzerland')+ 
  createGame('Portugal','16:00','Uruguay'))+
  
createCard('02/12', 'sexta',
  createGame('Cameroon', '16:00', 'Brazil'))
