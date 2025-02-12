interface Audio{
    nivelvolumen:number;
    duracion:number;
    sonido:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    año:number;
}

const audio:Audio={
    nivelvolumen: 0,
    duracion: 0,
    sonido: "Mess",
    detalles: {
        autor: 'Ed',
        año:2015
    }
}

/*const{
    /*nivelvolumen:volumen,
    /*detalles: {autor}
/*}=audio;*/


const{nivelvolumen:volumen, detalles}=audio;
const{año}=detalles;


console.log('Volumen con desestructuración', volumen);
console.log('sonido', audio.sonido);
console.log('Duracion', audio.duracion);
console.log('Autir', audio.detalles.autor);
/*console.log('Autor con desestructuración', autor);*/
console.log('Año', año);

const arre1:string[]=['Jeni Gonzalez','Sara Sosa','Itzel Almeyda','Osvaldo Gonzalez'];
console.log('Persona 3',arre1[3] || 'No hay personaje');

/*Desestructuracion de arreglos*/
const[,,,,ultimo='No existe']:string[]=['Angel Rojas',
    'Dolores Rodriguez','Sarita Sanchez','Magaly Santos'];

console.log('Personaje 3',ultimo);