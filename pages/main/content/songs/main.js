import song from "./song/main.js"

export default function songs(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:90%;
            margin:20px 0px 0px 0px;
            opacity:0;
            transition:opacity 1s;
        }
        :responsive{
            flex-direction:column;
        }`

    const songs = cE("div", style)
    let s = ["A - Tem alguém de aniversário","B - Depois de alguma chuva, eu conheci alguém","C - Algumas distâncias. Alguns reencontros",
        "D - Outras distâncias. Outros reencontros","E - Um Te Amo","F - O Fim de um Aniversário"
    ]
    for(let i = 0; i < s.length; i++){songs.appendChild(song(s[i]))}

    return(songs)
}