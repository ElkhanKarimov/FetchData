fetch("https://northwind.vercel.app/api/products").then(res=>res.json()).then(data=>{
    const tbody=document.getElementById("tbody")
    const thead=document.getElementById("thead")
    for (let i = 0; i < Object.keys(data[0]).length; i++) {
        const th=document.createElement("th")
        th.innerText=Object.keys(data[0])[i]
        thead.appendChild(th)
    }
 
    data.forEach(item => {
        const tr=document.createElement("tr")
        for (const key in item) {
            
            const td=document.createElement("td")
            td.innerText=item[key]
            tr.appendChild(td)
       

        }
        tbody.appendChild(tr)
    });
})