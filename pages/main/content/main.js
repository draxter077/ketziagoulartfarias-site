import photo from "./photo/main.js"
import title from "./title/main.js"
import songs from "./songs/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:100dvh;
            padding:50px 0px;
            background:var(--colorPurple);
            overflow-y:scroll;
        }`

    const content = cE("div", style)
    content.appendChild(photo())
    content.appendChild(title())
    content.appendChild(songs())

    content.addEventListener(
        "scroll",
        function a(){
            let s = content.children[2]
            let scrollY = content.scrollTop
            let windowHeight = window.innerHeight
            let contentHeight = content.children[2].offsetTop + content.children[2].offsetHeight
            if(scrollY + windowHeight >= contentHeight){
                s.style.opacity = 1
                content.removeEventListener("scroll", a)
            }
        }
    )

    return(content)
}