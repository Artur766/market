import React from 'react'
import { IProduct } from '../module';

interface ProductProps {
  product: IProduct
}

function Product({ product }: ProductProps) {
  const [isDescription, setIsDescription] = React.useState(false);

  function handleShowDetails() {
    setIsDescription(prev => !prev);
  }
  const btnCLassName = isDescription ? "bg-yellow-400" : "bg-blue-400";
  const btnClasses = ["py-2 px-4 border", btnCLassName]

  return (
    <div className='border py-2 px-4 rounded flex flex-col items-container mb-2'>
      <img src={product.image} alt='товар' className='w-1/6' />
      <p>{product.title}</p>
      <p className='font-bold'>{product.price}</p>
      <button
        className={btnClasses.join(" ")}
        onClick={handleShowDetails}>{isDescription ? "HideDetails" : "ShowDetails"}</button>
      {isDescription && <>
        <p>{product.description}</p>
        <p>Rate: <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span></p>
      </>}
    </div>
  )
}

export default Product;