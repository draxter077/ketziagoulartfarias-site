export default function photo(){
    let style = `
        {
            width:20%;
            animation:pulsing 3s ease 0s infinite alternate;
        }
        @keyframes pulsing{
            0%[transform:scale(0.95)]
            100%[transform:scale(1.05)]
        }`

    const photo = cE("img", style)
    photo.src = "./assets/ketzia.png"
    return(photo)
}