let datos: string[]=['nombre','apellidoP','apellidoM']; 'datos is declar'
const masdatos: string[]=['nombre','apellidoP','apellidoM']; 'masdatos'

interface Iperfil{
    nombre:string;
    edad:number;
    sexo?:string |undefined;
    puesto:string[];
}

const perfil:Iperfil={
    nombre:"Juan",
    edad:30,
    sexo:"H",
    puesto: ['Analista','Programador','Diseñador']
};

perfil.nombre='Ashly';

console.table(perfil)