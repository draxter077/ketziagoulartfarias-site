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
    let text = 'Para a melhor pseudonamorada do mundo. <br> <br> Queria escrever um texto capaz de expressar o que sinto por você, mas falhei miseravelmente em todas as tentativas. Uma hora começava falando dos seus 52 anos; outra, começava falando de nosso amigo em comum que nos apresentou na Degusto; teve até hora na qual comecei falando da saudade que notei ser sua quando te vi na noite do boliche. <br> Mas mesmo que fossem começos válidos, alguma coisa me dizia que não era a coisa certa... Percebi que não existe meio de expressar toda a multiplicidade do que sinto em uma mera frase. Até mesmo um "eu te amo" parece falho. <br> Assim, tomei a decisão de tornar esse um presente longo, de alguns dias, quem sabe semanas, quiçá meses. Cada parte dele expressando uma das partes do que sinto por você. Não parece algo tão complicado, mas por onde começar? <br> Nada mais representa o amor para mim do que as coisas nas quais vemos a pessoa que amamos. Desde a primeira vez que te vi, veio-me um poema na cabeça. Ele é mais ou menos assim: <br> <br> Quando ela fala <br> parece que a voz da brisa se cala; <br> talvez um anjo emudece <br> quando ela fala. <br> Meu coração dolorido <br> as suas mágoas exala. <br> E volta ao gozo perdido <br> quando ela fala. <br> Pudesse eu eternamente, <br> ao lado dela, escutai-a, <br> ouvir sua alma inocente <br> quando ela fala. <br> Minha alma, já semimorta, <br> conseguira ao céu alçá-la, <br> porque o céu abre uma porta <br> quando ela fala. <br> <br> Nem só de declarações e textos vivem os presentes de aniversário; por isso, aqui embaixo, existem cinco presentes, um para cada década de sua vida. Lembre-se de colocar os fones de ouvido e continuar indo me ver sem sutiã. <br> Feliz aniversário!'
    text = text.split(" ")
    for(let i = 0; i < text.length; i++){title.appendChild(word(text[i]))}
    return(title)
}