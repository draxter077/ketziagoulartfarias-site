export default function word(w){
    let style = `
        {
            margin:0px 5px 0px 0px;
            ${w == "<br>" ? "width:100%;" : ""}
            opacity:0;
            transition:opacity 1s;
        }`
    const word = cE("div", style)
    word.innerHTML = w
    return(word)
}