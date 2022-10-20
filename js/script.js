// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede e stilarli a vostro gusto :faccia_leggermente_sorridente:
// BONUS 3:
// Aggiungere attraverso un form un membro al team
const dati=[
    {
      name:"Wayne Barnett",
      role:"Founder & CEO",
      image:"wayne-barnett-founder-ceo.jpg"
    },
    {
        name:"Angela Caroll",
        role:"Chief Editor",
        image:"angela-caroll-chief-editor.jpg"
      },
      {
        name:"Walter Gordon",
        role:"Office Manager",
        image:"walter-gordon-office-manager.jpg"
      },
      {
        name:"Angela Lopez",
        role:"Social Media Manager",
        image:"angela-lopez-social-media-manager.jpg"
      },
      {
        name:"Scott Estrada",
        role:"Developer",
        image:"scott-estrada-developer.jpg"
      },
      {
        name:"Barbara Ramos",
        role:"Graphic Designer",
        image:"barbara-ramos-graphic-designer.jpg"
      },

]
const appendi=document.getElementById("appendi")
 console.log(dati)
 const card=document.getElementById("card")
 card.innerHTML=`<img src="./img/${dati[0].image}" alt=""> <br>${dati[0].name}<br>${dati[0].role}`
//  2
const card2=document.getElementById("card2")
card2.innerHTML=`<img src="./img/${dati[1].image}" alt=""> <br>${dati[1].name}<br>${dati[1].role}`
// 3
const card3=document.getElementById("card3")
card3.innerHTML=`<img src="./img/${dati[2].image}" alt=""> <br>${dati[2].name}<br>${dati[2].role}`
// 4
const card4=document.getElementById("card4")
card4.innerHTML=`<img src="./img/${dati[3].image}" alt=""> <br>${dati[3].name}<br>${dati[3].role}`
// 5
const card5=document.getElementById("card5")
card5.innerHTML=`<img src="./img/${dati[4].image}" alt=""> <br>${dati[4].name}<br>${dati[4].role}`
// 6
const card6=document.getElementById("card6")
card6.innerHTML=`<img src="./img/${dati[5].image}" alt=""> <br>${dati[5].name}<br>${dati[5].role}`

const btn=document.getElementById("inserisci")
btn.addEventListener("click",function invia(){
    let nome=document.getElementById("nome").value
let professione=document.getElementById("professione").value
let immagine=document.getElementById("immagine").value
    console.log(nome)
    console.log(professione)
    console.log(immagine)
    if(!nome == "" && !professione == "" && !immagine== ""){
        dati.push({
            name:nome,
            role:professione,
            image:immagine
        })
        console.log(dati)
        const card7= document.createElement("div")
        card7.classList.add("card")
        card7.innerHTML=`<img src="${dati[dati.length-1].image}" alt=""> <br>${dati[dati.length-1].name}<br>${dati[dati.length-1].role}`
        appendi.append(card7)
    }
   
})