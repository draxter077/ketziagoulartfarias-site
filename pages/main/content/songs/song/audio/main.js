export default function audio(s){
    let style = `
        {
            width:90%;
        }
        ::-webkit-media-controls-mute-button,::-webkit-media-controls-volume-slider,::-webkit-media-controls-volume-slider-container{
            display:none;
        }`
    const audio = cE("audio", style)
    audio.src = "./assets/" + s + ".mp3"
    audio.controls = true
    return(audio)
}