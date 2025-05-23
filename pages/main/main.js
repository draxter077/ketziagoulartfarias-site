import loading from "./loading/main.js"
import content from "./content/main.js"

export default function main(){
    let style = `
        {
            position:relative;
            width:100%;
        }`

    const main = cE("div", style)
    main.appendChild(loading())
    main.appendChild(content())
    return(main)
}