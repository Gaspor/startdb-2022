class Forca {
    constructor(word) {
        this.word = word;
        this.lifes = 6;
        this.attempt = "";
        this.answer = Array(this.word.length).fill("_");

    }

    chutar(letra) {
        /* Verifica se o que foi digitado é uma letra */
        if(!letra.match(/[A-Za-z]/g)) {
            console.log("Digite apenas letras!");
            return false;

        }
        
        const letter = letra.toLowerCase();

        /* Verifica se o usuário digitou apenas uma letra */
        if (letter.length > 1) {
            console.log("Digite apenas uma letra por vez!");
            return false;

        }

        /* Verifica se a letra já foi digitada */
        if (this.attempt.includes(letter)) {
            console.log("Essa letra já foi usada!");
            return false;

        }

        this.attempt += letter;
        
        /* Verifica se a letra existe na palavra */
        if (!this.word.includes(letter)) {
          this.lifes--;
          return false;

        }
        
        this.replaceAnswer(letter);

        return true;
    }

    buscarEstado() {
        if (this.lifes == 0) {
          return "perdeu";
        
        } else if (this.answer.join("") == this.word) {
          return "ganhou";

        }

        return "aguardando chute";
    } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

    buscarDadosDoJogo() {
        return {
            letrasChutadas: [this.attempt], // Deve conter todas as letras chutadas
            vidas: this.lifes, // Quantidade de vidas restantes
            palavra: this.answer // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
        }
    }

    replaceAnswer(letter) {
        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i] == letter) {
                this.answer[i] = letter;

            }
        }
    }
}

module.exports = Forca;
