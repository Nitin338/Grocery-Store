// async function callApi(){
//     let result=await fetch("https://fakestoreapi.com/products");
//     result=await result.json();
//     console.warn(result)
// }
// callApi()

fetch("https://fakestoreapi.com/products").then((data)=>{
   
    return data.json();//converted to obj
}).then((objectData)=>{
    let tableData="";
    objectData.map((values)=>{
        tableData+= `  <div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} alt="img" class="images">
        <p>${values.description}</p>
        <p class ="category">${values.category}</p>
        <p class="price">${values.price}</p>
        <button style="background-color:#2D9596;margin:0 0 5% 10%;width:50%";>Add Cart</button>
        </div>`
    });
    document.getElementById("cards").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})