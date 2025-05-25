import balloon from "../../balloon/main.js"

export default function heart(){
    let style = `
        {
            position:absolute;
            width:150px;
            height:150px;
            cursor:pointer;
            opacity:0;
            transition:opacity 1s, transform 3s;
            animation:goDown 4s linear 0s infinite alternate, goRight 2.73s linear 0s infinite alternate, rotating 2s linear 0s infinite forwards;
        }
        @keyframes goDown{
            0%[top:0%;]
            100%[top:calc(100% - 150px);]
        }
        @keyframes goRight{
            0%[left:0%]
            100%[left:calc(100% - 150px);]
        }
        @keyframes rotating{
            0%[transform:rotate(0deg)]
            100%[transform:rotate(360deg)]
        }`

    const heart = cE("img", style)
    heart.src = "./assets/heart.png"
    let k = balloon() // Para gerar mais rapidamente as imagens depois
    heart.addEventListener(
        "click",
        async function a(){
            heart.style.animationPlayState = "paused";
            heart.style.transform = "scale(10)"
            let main = document.getElementById("root").children[0]

            for(let i = 0; i < 300; i++){
                let b = balloon()
                b.style.width = "15%"
                b.style.top = "100%"
                b.style.left = Math.random()*100 + "%"
                b.style.transition = "top 2s"
                main.appendChild(b)
                await new Promise(resolve => setTimeout(resolve, 5))
                b.style.top = "-100%"
            }
            main.children[0].style.opacity = 0
            await new Promise(resolve => setTimeout(resolve, 1000))
            main.removeChild(main.children[0])
            let text = main.children[0].children[1].children
            await new Promise(resolve => setTimeout(resolve, 2000))
            for(let i = 0; i < text.length; i++){
                if(text[i].innerHTML != "<br>"){
                    text[i].scrollIntoView({behavior:"smooth",block: "end",inline: "nearest"})
                }
                text[i].style.opacity = 1;
                let l = text[i].innerHTML.length
                await new Promise(resolve => setTimeout(resolve, 200))
                if(i + 1 != text.length && (text[i].innerHTML == "<br>" || text[i].innerHTML[l - 1] == "." || text[i].innerHTML[l - 1] == "," || text[i].innerHTML[l - 1] == ";") && text[i + 1].innerHTML != "<br>"){
                    await new Promise(resolve => setTimeout(resolve, 1500))
                }
            }

            document.getElementById("content").scrollBy(0,1000)
            
            while(true){
                let b = balloon()
                b.style.width = "2%"
                b.style.top = "100%"
                b.style.left = Math.random()*100 + "%"
                main.appendChild(b)
                await new Promise(resolve => setTimeout(resolve, 1000))
                b.style.top = "0%"
                await new Promise(resolve => setTimeout(resolve, 3000))
            }
        }
    )
    return(heart)
}