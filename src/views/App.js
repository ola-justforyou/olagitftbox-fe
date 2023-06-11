import '../App.css';
// import { useEffect } from 'react';
import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getWaybill } from '../actions';
function App(props) {
  const { state, getWaybill } = props;
  const getDataWaybill = async () => {
    await getWaybill();
  };
  useEffect(() => {
    getDataWaybill();
  }, []);
  console.log(state, 'state');
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
});
export default connect(mapStateToProps, {
  getWaybill,
})(App);
