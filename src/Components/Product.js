import React,{useState} from 'react'
import './product.css'

function Product() {
    const [products ,setProducts] =useState([])



    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
   .then (data=>(setProducts(data)))
     
     
      
  


  return (
    

       <div className='main'>

    {
      
      
      
      products.map((prod, index)=>{
        return <div  className=" product" key ={index}>
                      
                    

<img src={prod.image} alt='hii'/>

                    <h4>{prod.title}t</h4>
                    <p>${prod.price}</p>

                
                
                   

                 </div>



})
}
</div>
      
  
  )
}

export default Product