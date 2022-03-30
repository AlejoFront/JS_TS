export class SingletonUno {
    private static instance: SingletonUno;
    private name: string;
    constructor(pNombre?: string) { this.name = pNombre; }

    public static getInstance(): SingletonUno {
        if (!this.instance) {
            this.instance = new SingletonUno();
        }
        return this.instance;
    }

    get getName(): string {
        return this.name;
    }

}

