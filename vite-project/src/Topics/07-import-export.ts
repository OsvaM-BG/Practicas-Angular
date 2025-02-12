import { calcularcompra, Producto } from './06-desArgumentos';

const ComprarProd: Producto[]=[
    {
        descripcion:'Nokia',
        precio:100
    },
    {
        descripcion:'ipad',
        precio:200
    }
];

const[total,imptotal] = calcularcompra({
    productos:ComprarProd,
    impuesto:0.15
});

console.log('Total', total);
console.log('Impuesto', imptotal);