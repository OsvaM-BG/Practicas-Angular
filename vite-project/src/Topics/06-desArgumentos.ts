export interface Producto{
    descripcion:string;
    precio:number;
}

const telefono:Producto={
    descripcion: 'Nokia A1',
    precio: 150.0
}

const tableta:Producto={
    descripcion:'iPad Air',
    precio:250.0
}

interface ICalcularCompra{
    impuesto:number;
    productos: Producto[];
}

export function calcularcompra(options:ICalcularCompra):[number,number]
{
    const{impuesto,productos}=options;
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    });
    return [total, total * impuesto];
}
