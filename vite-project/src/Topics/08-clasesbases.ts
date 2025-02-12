
export class Persona{
constructor (public nombre1:string, public direccion1:string, public peso:number)
{}
}

const ObjPersona= new Persona('Jen','CDMX',52);

console.log(ObjPersona)

export class SuperHero extends Persona{
    constructor(public sobrenombre:string, public edad:number, public nombre:string)
    {
        super(nombre, 'CDMX',8);
    }
}    

const pers=new SuperHero('Alias', 25, 'Ana')
console.log(pers);

export class SuperHero2{
    constructor(public sobrenombre:string, public edad:number, public nombre:string, public person:Persona)
    {

        this.person=new Persona('', 'rrr', 80);
    }

}

const objPer=new Persona('Anita','CDMX',12);
const ana2= new SuperHero2('An', 23, 'Anita', objPer);

console.log(ana2);