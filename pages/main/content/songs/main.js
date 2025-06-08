import song from "./song/main.js"

export default function songs(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
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
    songs.id = "songs"
    let s = ["Tem alguém de aniversário","Na chuva, conheci alguém",
        "Algumas distâncias. Alguns reencontros","Um te amo","Fim de um aniversário",
        "Sábado, 7h40, Ibis, do seu lado"
    ]
    for(let i = 0; i < s.length; i++){songs.appendChild(song(s[i]))}

    return(songs)
}