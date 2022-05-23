let min = 9;
let max;

for (i=min; i < 12; i++) {
    const container = document.createElement("div");
    container.setAttribute("id",`container${i}`)
    const title = document.createElement("p");
    const text = document.createTextNode(`La tabla del ${i}`);
    title.appendChild(text);
    title.setAttribute("class","title")
    container.appendChild(title);
    document.getElementById("body").appendChild(container);
    for (j=1; j<10 ; j++) {
        const entry = document.createElement("p")
        const content = document.createTextNode(`${i} * ${j} = ${i * j}`)
        entry.appendChild(content);
        entry.setAttribute("class","entry")
        document.getElementById(`container${i}`).appendChild(entry)
    }
}