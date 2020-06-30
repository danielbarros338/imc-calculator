function main() {
    let imc = {
        form: document.querySelector("#form"),
        peso: document.querySelector("#peso"),
        altura: document.querySelector("#altura"),
        tela: document.querySelector("#resultado"),

        calculoIMC: function () {
            this.form.addEventListener('submit', (e) => e.preventDefault());

            function getPeso(peso) {
                peso = this.peso.value;
                peso = peso.replace(",", "."); //Converte vírgulas em pontos
                peso = Number(peso);
                return peso
            }

            function getAltura(altura) {
                altura = this.altura.value;
                altura = altura.replace(",", ".");
                altura = Number(altura);
                return altura;
            }

            function imc() {
                let peso = getPeso();
                let altura = getAltura();
                let calculo = peso / (altura ** 2);
                return calculo.toFixed(2);
            }

            function validador() {
                if (getPeso() === 0 || getAltura() === 0) { //Confere se o input está vazio
                    return false;
                }
                if (isNaN(getPeso()) || isNaN(getAltura())) { //Confere se o value do input é NaN
                    return false;
                }
                return true
            }

            if (validador() === true) {
                let valor = imc();
                this.tela.textContent = `Valor do seu IMC: ${valor}`;
                this.tela.style.backgroundColor = "rgb(109,255,182)";
            }

            if (validador() === false) {
                this.tela.textContent = `Insira um valor valido!`;
                this.tela.style.backgroundColor = "#f88";
            }
        }
    }
    let btn = document.querySelector("#btn");
    btn.addEventListener("click", (a) => imc.calculoIMC());
}
main()