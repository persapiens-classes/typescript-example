export interface Veiculo{
    marca: string;
    modelo: string;
    acelerar(): void;
}

export class Moto implements Veiculo{
    public marca: string;
    public modelo: string;
    public cilindradas: string;
    public velocidadeMax: number;

    constructor (marca: string, modelo: string, cilindradas: string, velocidadeMax: number){
        this.modelo = modelo;
        this.cilindradas = cilindradas;
        this.marca = marca;
        this.velocidadeMax = velocidadeMax;
    }

    acelerar(): string {
        return(`A moto ${this.modelo} acelera a: ${this.velocidadeMax}km/h`)
    }
}

export class Carro implements Veiculo{
    public marca: string;
    public modelo: string;
    public quatroPortas: boolean;
    public velocidadeMax: number;

    constructor (marca: string, modelo: string, quatroPortas: boolean, velocidadeMax: number){
        this.marca = marca;
        this.modelo = modelo;
        this.quatroPortas = quatroPortas;
        this.velocidadeMax = velocidadeMax;
    }
    acelerar(): string {
        return(`O carro ${this.modelo} acelera a: ${this.velocidadeMax}km/h`)
    }
}