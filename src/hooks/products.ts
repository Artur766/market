import React from 'react';
import { getAllPorducts } from '../utils/MainApi';
import { IProduct } from '../module';

export default function useProducts() {
  const [allProducts, setAllProducts] = React.useState<IProduct[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  function addProduct(product: IProduct) {
    setAllProducts(prev => [...prev, product])
  }

  React.useEffect(() => {
    setLoading(true);
    getAllPorducts()
      .then(res => {
        setAllProducts(res);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])
  return { allProducts, loading, error, addProduct }
}