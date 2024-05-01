class Carro {
    constructor(modelo, fabricante, ano, placa) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.ano = ano;
        this.placa = placa;
    }
    test() {
        console.log(`O carro ${this.fabricante} ${this.modelo} funciona.`);
    }
}

class Moto extends Carro {
    constructor(modelo, fabricante, ano, placa, roubada) {
        super(modelo, fabricante, ano, placa);
        this.roubada = roubada;
    }
    test() {
        console.log(`O carro ${this.fabricante} ${this.modelo} funciona.`);
    }
}

class Sucata extends Carro {
    constructor(modelo, fabricante, ano, placa, tipoDeDano) {
        super(modelo, fabricante, ano, placa);
        this.tipoDeDano = tipoDeDano;
    }
    test() {
        console.log(`O carro ${this.fabricante} ${this.modelo} possui peças ultilizaveis.`);
    }
}

const fiatCarro = new Carro("Uno", "Fiat", 2009, "KFW-1235");
const FordCarro = new Carro("Ka", "Ford", 2014, "OLW-1737");
const mazdaCarro = new Carro("MX5", "Mazda", 1994, "THB-7452");
const hondaMoto = new Moto("CG", "Honda", 2020, "HGE-6248", false);
const sucata = new Sucata("Palio", "Fiat", 2002, "PJY-7862", "Capotamento");

fiatCarro.test();
FordCarro.test();
mazdaCarro.test();
hondaMoto.test();
sucata.test();