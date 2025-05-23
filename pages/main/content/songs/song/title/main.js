export default function title(s){
    let style = `
        {
            width:100%;
            font-size:22px;
            border-bottom:1px solid var(--colorWhite);
            color:var(--colorWhite);
            padding:5px 10px;
            margin:10px 0px;
        }
        :responsive{
            font-size:17px;
        }`

    const title = cE("div", style)
    title.innerHTML = s.split(" - ")[1]
    return(title)
}