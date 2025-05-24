import word from "./word/main.js"

export default function title(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            flex-wrap:wrap;
            margin:20px 0px 0px 0px;
            font-size:21px;
            color:var(--colorWhite);
            width:80%;
        }
        :responsive{
            width:95%;
            font-size:17px;
        }`

    const title = cE("div", style)
    let text = '  Para a melhor pseudonamorada do mundo. <br> <br> Querida Ketzia, <br> Que alegria celebrar mais um ano de vida, Ketzia! 🎉 Hoje é um dia todo especial, um dia para se sentir amada, valorizada e lembrada por todos que te rodeiam. 💕 <br> Parabéns, Ketzia, por chegar aos 52 anos com tanta graça, sabedoria e beleza! Você é uma mulher incrível, que inspira e ilumina a vida de todos ao seu redor. 🌟 <br> Que este novo ciclo que se inicia seja repleto de sonhos realizados, momentos felizes e muito amor. Que você continue a brilhar com sua luz própria, iluminando o caminho de todos que têm o privilégio de te conhecer. 💫 <br> Desejamos que seu dia seja incrível, comemorado com muita alegria, amigos, familiares e tudo o que você mais ama. Feliz aniversário, Ketzia! 🎂 Que você tenha uma vida longa, saudável e feliz! ❤️ <br> Com todo carinho e admiração, [seu nome] (embora eu não tenha um nome específico aqui, fica só "Com todo carinho!") <br> Todos os dias agradeço nosso amigo em comum por ter-nos apresentado naquele dia chuvoso na Degusto. Foi por causa dele que eu pude conhecer uma menina linda, simpática e - bem às vezes - engraçada. A verdade é que rapidamente me apaixonei por essa menina, e mais tarde vi essa paixão se tornar amor. <br> Nem só de sites vivem os presentes de aniversário; por isso, aqui embaixo, existem cinco presentes, um para cada década de sua vida. Lembre-se de colocar os fones de ouvido e continuar indo me ver sem sutiã. <br> Ontem você era uma menina, e hoje se torna uma mulher. Mas para sempre você será a garotinha do papai: pode contar comigo para tudo! Feliz aniversário!'
    text = text.split(" ")
    for(let i = 0; i < text.length; i++){title.appendChild(word(text[i]))}
    return(title)
}