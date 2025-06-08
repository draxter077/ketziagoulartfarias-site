export default function photo(){
    let style = `
        {
            width:20%;
            animation:pulsing 3s ease 0s infinite alternate;
        }
        :responsive{
            width:60%;
        }
        @keyframes pulsing{
            0%[transform:scale(0.95)]
            100%[transform:scale(1.05)]
        }`

    const photo = cE("img", style)
    photo.src = "./assets/heart.png"
    return(photo)
}