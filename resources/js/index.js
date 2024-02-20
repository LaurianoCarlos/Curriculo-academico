const elemento = document.querySelector("#title");
const frase = "Conheça mais sobre mim!"
const intervalo = 300;

function escreverTexto(elemento, frase, intervalo) {

    let index = 0;
    
    let acao = setInterval(() => {
        if (index < frase.length) {
            elemento.innerHTML += frase.charAt(index);
            index++;
        } else {
            elemento.innerHTML = frase.substring(0, 1);
            index = 1;
        }
    }, intervalo);
    
}

escreverTexto(elemento, frase, intervalo);


function gerarPDF() {
    let doc = new jsPDF();

    let titulo = 16;
    let subtitulo = 13;
    let paragrafo = 12;

    // Adicionar título
    doc.setFontSize(20);
    doc.text("Currículo de Lauriano Carlos", 55, 12);

    // Sobre mim
    doc.setFontSize(titulo);
    doc.text("Sobre Mim", 12, 20);

    doc.setFontSize(subtitulo);
    doc.text("Desenvolvedor Júnior", 15, 28);
    doc.setFontSize(paragrafo);
    doc.text("Data de nascimento: 16/03/2000", 15, 34);

    // Experiência
    doc.setFontSize(titulo);
    doc.text("Experiência", 14, 45);
    doc.setFontSize(subtitulo);
    doc.text("Desenvolvedor Frontend ", 15, 52);
    doc.setFontSize(paragrafo);
    doc.text("Wordpress - 2022/Atual", 15, 58);

    // Projetos
    doc.setFontSize(titulo);
    doc.text("Projetos", 14, 70);
    doc.setFontSize(subtitulo)  
    doc.text("JBMQUALITY", 15, 78); 
    doc.setFontSize(paragrafo);
    doc.text("A página apresenta informações detalhadas sobre os serviços...", 15, 86);

    doc.text("360CYBERTECHNOLOGY", 15, 96);
    doc.setFontSize(paragrafo);
    doc.text("A página apresenta informações detalhadas sobre os serviços...", 15, 104);

    doc.text("DRIVEON", 15, 114);
    doc.setFontSize(paragrafo);
    doc.text("A página apresenta informações detalhadas sobre os serviços...", 15, 120);

    // Tecnologias
    doc.setFontSize(titulo);
    doc.text("Minhas Tecnologias", 14, 130);
    doc.setFontSize(paragrafo);
    doc.text("Java, PHP, JavaScript, MySql, WordPress, Git / Github, Bootstrap 5", 15, 136);

    // Formação Acadêmica
    doc.setFontSize(titulo);
    doc.text("Formação Acadêmica", 14, 146);
    doc.setFontSize(subtitulo);
    doc.text("Centro Universitário Senac", 15, 156);
    doc.setFontSize(paragrafo);
    doc.text("Análise e Desenvolvimento de Sistemas (Agosto/2022 – Cursando)", 15, 166);

    doc.setFontSize(subtitulo);
    doc.text("UpInside Treinamentos", 15, 176);
    doc.setFontSize(paragrafo);
    doc.text("Full Stack PHP Developer (Dezembro/2023 – Cursando)", 15, 186);

    doc.setFontSize(subtitulo);
    doc.text("Udemy", 15, 196);
    doc.setFontSize(paragrafo);
    doc.text("Java Programação Orientada a Objetos (Nélio Alves - 40h)", 15, 204);

    doc.setFontSize(subtitulo);
    doc.text("Plataforma Curso em Vídeo", 15, 214);
    doc.setFontSize(paragrafo);
    doc.text("Wordpress - 40h, Html5 e Css3 - 40h", 15, 220);

    doc.save("Lauriano-curriculo.pdf");
}
