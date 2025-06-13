// Interface comum para veículos
interface Veiculo {
    calcularConsumo(): number;
}

// Classe Carro
class Carro implements Veiculo {
    private quilometragem: number;
    private combustivelGasto: number;

    constructor(quilometragem: number, combustivelGasto: number) {
        this.quilometragem = quilometragem;
        this.combustivelGasto = combustivelGasto;
    }

    public calcularConsumo(): number {
        return this.quilometragem / this.combustivelGasto;
    }

    public setQuilometragem(km: number): void {
        this.quilometragem = km;
    }

    public setCombustivelGasto(litros: number): void {
        this.combustivelGasto = litros;
    }
}

class Aviao implements Veiculo {
    private altitude: number;
    private combustivelRestante: number;

    constructor(altitude: number, combustivelRestante: number) {
        this.altitude = altitude;
        this.combustivelRestante = combustivelRestante;
    }

    public calcularConsumo(): number {
        return this.altitude / this.combustivelRestante;
    }

    public setAltitude(alt: number): void {
        this.altitude = alt;
    }

    public setCombustivelRestante(litros: number): void {
        this.combustivelRestante = litros;
    }
}

export { Veiculo, Carro, Aviao }; 