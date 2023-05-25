class Cella{
    #adat;
    #id;
    #divElem;
    constructor(id, adat, szuloElem){
        this.#id=id;
        this.#adat = adat;
        const DIV = $("<div>").addClass("kapcsolas");
        DIV.text(id);
        szuloElem.append(DIV);
        this.#divElem = szuloElem.children("div:last-child");
        this.#szinBeallit();
    }

    setAllapot(){
        if (this.#id == 0) {
            this.#id = 1;
        }
        else{
            this.#id = 0;
        }
        
    }

    #szinBeallit(){
        if (this.#id % 2 == 0) {
            this.#divElem.css("background-color", "gray");
        }
        else{
            this.#divElem.css("background-color", "white");
        }
    }

    #kattintasTrigger(esemenyNev){
      const KAPCSOLAS = new CustomEvent(esemenyNev, { detail: this });
      window.dispatchEvent(KAPCSOLAS);
    }
}

export default Cella;