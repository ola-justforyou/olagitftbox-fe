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
  console.log(categories, 'categories');
  console.log(products, 'products');
  return (
    <div className='w-screen h-screen flex'>
      <div className='m-auto'>
        <h1>hello world</h1>
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
