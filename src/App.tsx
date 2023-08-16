import React, { useContext } from 'react';
import Product from './components/Product';
import useProducts from './hooks/products';
import Loader from './components/Loader';
import Error from './components/Error';
import Modal from './components/Modal';
import CreateProduct from './components/CreateProduct';
import { IProduct } from './module';
import { ModalContext } from './context/ModalContext';
function App() {

  const { loading, error, allProducts, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  function createHandler(product: IProduct) {
    addProduct(product);
    close();
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {allProducts.map((item, i) => (
        <Product product={item} key={i} />
      )).reverse()}
      {modal &&
        <Modal title="Create new Product" onClose={() => close()}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      }
      <button
        className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
        onClick={() => open()}>+</button>
    </div>
  );
}

export default App;
