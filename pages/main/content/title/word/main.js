export default function word(w){
    let style = `
        {
            margin:0px 5px 0px 0px;
            ${w == "<br>" ? "width:100%;height:10px;" : ""}
            opacity:0;
            transition:opacity 0.5s;
        }`
    const word = cE("div", style)
    word.innerHTML = w
    return(word)
}