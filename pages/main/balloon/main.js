export default function balloon(){
    let style = `
        {
            position:fixed;
            top:100%;
            left:0%;
            width:100%;
            transition:top 10s;
            z-index:5;
        }`

    const balloon = cE("img", style)
    balloon.src = "./assets/balloon.png"
    return(balloon)
}