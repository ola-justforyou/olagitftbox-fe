import '../App.css';
// import { useEffect } from 'react';
import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getWaybill } from '../actions';
import {
  getAllProducts,
  getProductById,
  getSearchProducts,
  getAllProductsCategories,
  getAllProductsByCategory,
} from '../actions/productAction';
import SwiperEffect from '../components/SwiperEffect';
function App(props) {
  const {
    state,
    products,
    product,
    categories,
    getWaybill,
    getAllProducts,
    getProductById,
    getSearchProducts,
    getAllProductsCategories,
    getAllProductsByCategory,
  } = props;
  const getDataWaybill = async () => {
    await getWaybill();
  };
  const getDataProducts = async () => {
    await getAllProducts();
  };
  const getDataProduct = async (id) => {
    await getProductById(id);
  };
  const getSearchDataProducts = async (query) => {
    await getSearchProducts(query);
  };
  const getDataProductsCategories = async () => {
    await getAllProductsCategories();
  };
  const getDataProductsByCategory = async (category) => {
    await getAllProductsByCategory(category);
  };
  useEffect(() => {
    // getDataWaybill();
    // getDataProducts();
    // getDataProduct(1);
    // getSearchDataProducts('samsung');
    getDataProductsCategories();
    getDataProductsByCategory('smartphones');
  }, []);
  const newArray = Array.from({ length: 12 }, () => ({
    title: 'Judul Film Acak',
    releaseYear: Math.floor(Math.random() * 1000) + 1000,
  }));

  console.log(categories, 'categories');
  console.log(products, 'products');
  return (
    <div className='w-screen h-screen flex'>
      <div className='mx-auto container gap-y-6 flex flex-col'>
        <h1>hello world</h1>
        <SwiperEffect />
        <div className='text-white text-3xl  ml-7 sm:ml-0'>
          <h2 className='text-lg font-medium text-black mb-2'>Category</h2>
          <div className='flex flex-col h-full h w-full overflow-auto no-scrollbar overflow-y-hidden '>
            <div className='flex min-w-min h-full text-black sm:gap-x-20  gap-x-6 justify-between pr-8'>
              {newArray.map((item, i) => (
                <div className='flex flex-col rounded-lg h-24 w-16 bg-blue-900'>
                  <div
                    className='basis-11/12 relative'
                    onClick={(e) => console.log(e)}
                  >
                    <img
                      src={''}
                      className='object-cover rounded-3xl shadow-2xl h-full z-0 overflow-hidden'
                    />
                  </div>
                  <p className='mt-1 mx-auto basis-1/12 text-white font-bold text-sm flex flex-col'>
                    test
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state.waybill.data,
  products: state.products.datas,
  product: state.products.data,
  categories: state.products.categories,
});
export default connect(mapStateToProps, {
  getWaybill,
  getAllProducts,
  getProductById,
  getSearchProducts,
  getAllProductsByCategory,
  getAllProductsCategories,
})(App);
