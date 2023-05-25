import Cella from "./Cella.js";

class JatekTer {
    #db;
    #allapotLista;
    #elemLista;
    #lepes;

    constructor() {
        this.#db = 3;
        this.#allapotLista = ["♟️", "♟️ ", "♟️ ", " ", " ", " ", " ♟️", " ♟️", " ♟️"];
        this.#elemLista;
        this.#lepes;
        this.#jatekter();
        this.#lepesekKeresese();

    }

    #jatekter() {
        const ARTICLE = $("article");
        for (let index = 0; index < this.#allapotLista.length; index++) {
            new Cella(this.#allapotLista[index], index, ARTICLE);

        }
    }

    #lepesekKeresese() {
        $(window).on("kapcsolas", (event) => {
            if (this.#lepes % 2 === 0) {
                
            } else {
                
            }
            

        });

    }

    #init() {

    }

    #ellenorzes() {

    }

}

export default JatekTer;