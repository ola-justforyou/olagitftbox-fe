import '../App.css';
// import { useEffect } from 'react';
import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getWaybill } from '../actions';
import { getAllProducts } from '../actions/productAction';
function App(props) {
  const { state, products, getWaybill, getAllProducts } = props;
  const getDataWaybill = async () => {
    await getWaybill();
  };
  const getDataProducts = async () => {
    await getAllProducts();
  };
  useEffect(() => {
    getDataWaybill();
    getDataProducts();
  }, []);
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
  products: state.products.data,
});
export default connect(mapStateToProps, {
  getWaybill,
  getAllProducts,
})(App);
