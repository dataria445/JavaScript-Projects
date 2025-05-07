let catlistItem=document.querySelector(".container aside ul")
catlistItem.innerHTML='';
fetch(`https://dummyjson.com/products/categories`)
.then((response)=>{
    console.log(response);
        return response.json()
})
.then((data)=> {

let liRow= ''
data.forEach((catItem,index)=>{
    liRow+= `<li onclick="getProduct('${catItem.slug}')">${catItem.name}</li>`
    console.log(catItem.name);
});
catlistItem.innerHTML=liRow;
})
.catch((error) => console.log(error));


let productOuter = document.querySelector(".productOuter");
productOuter.innerHTML = '';
let apiUrl;

let getProduct = (catName = '') => {
    if (catName === '') {
        apiUrl = `https://dummyjson.com/products`;
    } else {
        apiUrl = `https://dummyjson.com/products/category/${catName}`;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(finalRes => {
            let { products } = finalRes;
            let pItems = '';
            
            products.forEach((items, index) => {
                console.log(items);
                
                pItems += `
                <div class="productItems">
                    <img src="${items.thumbnail}" style="width:100%;height:240px">
                    <div class="product-body">
                        <h4>${items.title}| ₹ ${items.price}</h4>
                        <h5>${items.brand}</h5>
                    </div>
                </div>`;
            });
            
            productOuter.innerHTML = pItems;
        })
        .catch(error => console.log(error));
}

getProduct();

/*
let catlistItem=document.querySelector(".container aside ul")
catlistItem.innerHTML='';
let getCategory=async ()=>{
    let catData= await fetch(`https://dummyjson.com/products/categories`);
    let finalRes=await catData.json()
    console.log(finalRes);
    
    let liRow=''
    finalRes.forEach((catItem,index)=>{
        liRow+= `<li onclick="getProduct('${catItem}')">${catItem.name}</li>`
        console.log(catItem.name);
        
    })
    catlistItem.innerHTML=liRow;

}

getCategory()


let productOuter=document.querySelector(".productOuter")
productOuter.innerHTML='';
let apiUrl ;
let getProduct=async (catName='')=>{
if(catName ===''){
    apiUrl=`https://dummyjson.com/products`
} else{
    apiUrl=`https://dummyjson.com/products/category/${catName}`
}   
let fetchData=await fetch(apiUrl)
let finalRes=await fetchData.json()
let {products}=finalRes
let pItems=''
products.forEach((items,index)=>{
    console.log(items);
    
    pItems+=`
    <div class="productItems">
             <img src= "${items.thumbnail}" style="width=100%;height:240px"> 
                    <div class="product-body">
                        <h4>${items.title}| ₹ ${items.price}</h4>
                        <h5>${items.brand}</h5>
                    </div>
                </div> `
    
})
productOuter.innerHTML=pItems;
}
getProduct()

*/