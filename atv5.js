const names = ['Ariane', 'Bia', 'Eugênia', 'Antonieta'];
const notes = [7, 8 ,9, 5]

for(let i = 0; i<notes.length; i++) {
    if(notes[i] >=7){
        console.log(`Passou, parabéns ${names[i]}`)
    }
    else{
        console.log(`Reprovou, estude mais ${names[i]}`)
    }
}