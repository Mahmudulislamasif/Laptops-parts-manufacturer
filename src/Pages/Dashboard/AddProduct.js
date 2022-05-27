import React from 'react';

const AddProduct = () => {
    const handleProduct=(event)=>{
        event.preventDefault()
        const addProduct={
         name: event.target.name.value,
         description: event.target.description.value,
         minimum: event.target.minimum.value,
         available: event.target.available.value,
         price: event.target.price.value,
         image:event.target.image.value,
        }
        fetch('http://localhost:5000/tools', {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(addProduct)
          })
         .then(res => res.json())
         .then(data => {
             console.log(data)
         });
     }
    return (
        <div>
             <div>
             <form onSubmit={handleProduct} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>  
                     <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                     <input type="text" name="description" placeholder="Product description" className="input input-bordered w-full max-w-xs" />
                     <input type="text" name="minimum" placeholder="Minimum Order" className="input input-bordered w-full max-w-xs" />
                     <input type="text" name="available" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs" />
                     <input type="text" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                     <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                     <input type="submit" value="Submit" className="btn btn-primary text-secondary w-full max-w-xs" required/>
             </form>
        </div>
        </div>
    );
};

export default AddProduct;