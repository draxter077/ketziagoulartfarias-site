import heart from "./heart/main.js"

export default function loading(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            width:100%;
            height:100dvh;
            overflow:hidden;
            background:var(--colorBlack);
            z-index:3;
            transition:opacity 1s;
        }`

    const loading = cE("div", style)
    loading.appendChild(heart())
    return(loading)
}