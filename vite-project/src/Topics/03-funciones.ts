function addnumeros(a:number, b:number):number{ /*Tipo de datos*/
    return a+b;
}

const result:number=addnumeros(1,2)
console.log((result));

const addnumerosA=(a:number, b:number):string => {
    return `${a+b}`;
}

function otraFun()
{

}

const re:string=addnumerosA(4,5)
console.log({re});

function masdatos(n1:number, n2?:number, base:number=2){
    return n1*base;
}

interface datosymasDatos{
    nombre:string;
    edad:number;
    mostrarDatos: ()=>void;
}

const misDatos=(dato: datosymasDatos, masEdad:number)=>{
    dato.edad+=masEdad;
}

const persona: datosymasDatos={
    nombre:'Ashly',
    edad:20,
    mostrarDatos(){
        console.log(`La edad es ${this.edad}`);
    }
}

misDatos(persona,10);
misDatos(persona,30);
persona.mostrarDatos();

const result1:number=addnumeros(1,2);
const result2:string=addnumerosA(1,2);
const result3:number=masdatos(8);
console.log({result1,result2,result3});


