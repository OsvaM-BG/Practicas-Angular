interface superHero{
    nombre:string;
    age:number;
    adress:{
        calle:string,
        pais:string,
        ciudad:string
    };
    showAddress():string;
}

interface superHero{
    nombre:string;
    age:number;
    adress:{
        calle:string,
        pais:string,
        ciudad:string
    };
    showAddress:()=>string;
}

const superHeroe: superHero={
    nombre: 'spiderman',
    age:30,
    adress:{
        calle:'2 sur',
        pais:'USA',
        ciudad:'NY'
    },
    showAddress(){
        return this.nombre + ', ' + this.adress.ciudad +',' + this.adress.calle;
    }
}

const adress = superHeroe.showAddress();
console.log(adress);
