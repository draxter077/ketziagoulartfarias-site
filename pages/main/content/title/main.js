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
        }`

    const title = cE("div", style)
    let text = 'Querida Ketzia Goulart Farias, <br> Poucos chegam aos 62 anos... e dos que chegam, pouquíssimos com costas tão definidas e um delineado tão em dia. <br> Dessas seis décadas e dois verões, eu só te conheci por algumas poucas luas cheias. Lembro-me como se fosse ontem quando nosso amigo em comum nos apresentou. Eu estava um pouco molhado de chuva, mas nada que impedisse você de me abraçar. Sentamos, eu pedi uma soda italiana com pão de queijo e você um doce esquisito; ficou surpresa com a minha profissão de advogado triburário, tanto que precisou comprar alguns ovos de páscoa para se acalmar (custaram R$ 13,00). <br> Trocamos contato e... bem, seria mentira dizer que conversamos todos os dias desde então. Não foi tão fácil assim. Paramos de nos falar por mais vezes do que eu gostaria de admitir... <br> Independente disso, <br> Você me deu ouvidos e acabou ouvindo uma certa história sobre pés e dedadas... Eu te dei ouvidos e acabei deixando de usar minhas camisas estampadas... <br> Para cada década de sua vida, uma música. Feliz aniversário!'
    text = text.split(" ")
    for(let i = 0; i < text.length; i++){title.appendChild(word(text[i]))}
    return(title)
}