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
    var doc = new jsPDF();

    let titulo = 16;
    let subtitulo = 14;
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

    doc.text("360CYBERTECHNOLOGY", 15, 140);
    doc.setFontSize(paragrafo);
    doc.text("A página apresenta informações detalhadas sobre os serviços...", 15, 150);

    doc.text("DRIVEON", 15, 160);
    doc.setFontSize(paragrafo);
    doc.text("A página apresenta informações detalhadas sobre os serviços...", 15, 170);

    // Tecnologias
    doc.setFontSize(titulo);
    doc.text("Minhas Tecnologias", 14, 180);
    doc.setFontSize(paragrafo);
    doc.text("Java, PHP, JavaScript, MySql, WordPress, Git / Github, Bootstrap 5", 15, 190);

    // Formação Acadêmica
    doc.setFontSize(titulo);
    doc.text("Formação Acadêmica", 14, 210);
    doc.setFontSize(subtitulo);
    doc.text("Centro Universitário Senac", 15, 220);
    doc.setFontSize(paragrafo);
    doc.text("Análise e Desenvolvimento de Sistemas (Agosto/2022 – Cursando)", 15, 240);

    doc.setFontSize(subtitulo);
    doc.text("UpInside Treinamentos", 15, 250);
    doc.setFontSize(paragrafo);
    doc.text("Full Stack PHP Developer (Dezembro/2023 – Cursando)", 15, 260);

    doc.setFontSize(subtitulo);
    doc.text("Udemy", 15, 270);
    doc.setFontSize(paragrafo);
    doc.text("Java Programação Orientada a Objetos (Nélio Alves - 40h)", 15, 280);

    doc.setFontSize(subtitulo);
    doc.text("Plataforma Curso em Vídeo", 15, 290);
    doc.setFontSize(paragrafo);
    doc.text("Wordpress - 40h, Html5 e Css3 - 40h", 15, 300);

    doc.save();
}
