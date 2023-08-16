import React from 'react'
import { createProduct } from '../utils/MainApi';
import { IProduct } from '../module';
import Error from './Error';

const productData: IProduct = {
  "title": "",
  "price": 13.5,
  "description": 'lorem ipsum set',
  "category": 'electronic',
  "image": 'https://i.pravatar.cc',
  "rating": {
    "rate": 42,
    "count": 10
  }
}

interface createProductProps {
  onCreate: (product: IProduct) => void
}

function CreateProduct({ onCreate }: createProductProps) {

  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }

    productData.title = value;

    let response = await fetch('https://fakestoreapi.com/products', {
      method: "POST",
      body: JSON.stringify(productData),
    });
    let dataProduct = await response.json()

    onCreate({ ...dataProduct, ...productData })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        className='border py-2 px-4 mb-2 w-full outline-0'
        placeholder='Enter product title...'
        value={value}
        onChange={handleChange}
      />
      {error && <Error error={error} />}
      <button type="submit" className='py-2 px-4 border bg-yellow-400 hover:text-white'>Create</button>
    </form>
  )
}

export default CreateProduct