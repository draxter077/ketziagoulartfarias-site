import title from "./title/main.js"
import audio from "./audio/main.js"

export default function song(s){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:30%;
            margin:10px 0px 0px 0px;
        }
        :responsive{
            width:95%;
        }`

    const song = cE("div", style)
    song.appendChild(title(s))
    song.appendChild(audio(s))
    return(song)
}