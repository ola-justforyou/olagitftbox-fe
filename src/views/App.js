import '../App.css';
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
import { Search } from 'lucide-react';
import CardProduct from '../components/CardProduct';
import { useDebounce } from 'use-debounce';
import { Skeleton } from '@mui/material';
function App(props) {
  const {
    state,
    products,
    product,
    loading,
    categories,
    getWaybill,
    getAllProducts,
    getProductById,
    getSearchProducts,
    getAllProductsCategories,
    getAllProductsByCategory,
  } = props;
  const [query, setQuery] = useState('');
  const [value] = useDebounce(query, 1200);
  const [isOpen, setIsOpen] = useState(false);
  const [short, setShort] = useState(1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
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
    getDataProducts();
    // getDataProduct(1);
    // getSearchDataProducts('samsung');
    getDataProductsCategories();
    // getDataProductsByCategory('smartphones');
  }, []);
  useEffect(() => {
    getSearchDataProducts(value);
    setShort(1);
  }, [value]);
  const newArray = Array.from({ length: 12 }, () => ({
    title: 'Judul Film Acak',
    releaseYear: Math.floor(Math.random() * 1000) + 1000,
  }));
  const sortByPriceAscending = (products) =>
    products?.sort((a, b) => a?.price - b?.price);

  const sortByPriceDescending = (products) =>
    products?.sort((a, b) => b?.price - a?.price);
  const sortBySale = (products) => products?.sort((a, b) => b?.sale - a?.sale);
  const sortByNewProduct = (products) =>
    products?.sort((a, b) => b?.create_at - a?.create_at);
  const shortBy = [
    {
      id: '1',
      name: 'Semua',
      function: () => getDataProducts(),
    },
    {
      id: '2',
      name: 'Terbaru',
      function: (products) => sortByNewProduct(products),
    },
    {
      id: '3',
      name: 'Harga Tertinggi',
      function: (products) => sortByPriceDescending(products),
    },
    {
      id: '4',
      name: 'Harga Terendah',
      function: (products) => sortByPriceAscending(products),
    },
    {
      id: '5',
      name: 'Pembelian Terbanyak',
      function: (products) => sortBySale(products),
    },
  ];

  // console.log(products?.sort((a, b) => a?.price - b?.price));
  return (
    <div className='w-screen min-h-screen flex pb-48'>
      <div className='mx-auto container md:px-6 gap-y-6 flex flex-col'>
        <div className='mt-12 px-3 md:px-0 sm:px-0'>
          <div class='relative '>
            <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                class='w-4 h-4 text-gray-500 '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
              <span class='sr-only'>Search icon</span>
            </div>
            <input
              type='text'
              id='search-navbar'
              class='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
              placeholder='Search...'
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <SwiperEffect />
        <div className='text-white text-3xl ml-4  md:ml-0 sm:ml-0'>
          <h2 className='text-lg font-medium text-black mb-2'>Category</h2>
          <div className='flex flex-col h-full h w-full overflow-auto no-scrollbar overflow-y-hidden '>
            <div className='flex min-w-min h-full text-black sm:gap-x-20  gap-x-6 justify-between pr-8'>
              {newArray.map((item, i) => (
                <div className='flex flex-col rounded-lg h-24 w-24 bg-blue-900'>
                  <div
                    className='basis-11/12 relative'
                    onClick={(e) => console.log(e)}
                  >
                    <img
                      src={''}
                      className='object-cover rounded-3xl shadow-2xl h-full z-0 overflow-hidden'
                    />
                  </div>
                  <p className='mt-1 mx-auto basis-1/12 text-white font-medium text-sm flex flex-col'>
                    {/* {item} */}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='text-white text-3xl ml-4  md:ml-0 sm:ml-0'>
          <div className='w-full flex justify-between'>
            <h2 className='text-lg font-medium text-black mb-2'>
              {shortBy.find((item) => item.id == short)?.name}
            </h2>
            <div className='flex justify-between items-center relative mr-3 mb-2 '>
              <button
                id='dropdownDefaultButton'
                onClick={toggleDropdown}
                className={`text-sm font-medium text-gray-500  text-center inline-flex items-center `}
                type='button'
              >
                Short by
                <svg
                  className='w-2.5 m-2.5 ml-1.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
              {isOpen && (
                <div
                  id='lastDaysdropdown'
                  className=' absolute top-7 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 '
                >
                  <ul
                    className='py-2 text-sm text-gray-700 border border-gray-100 rounded-md'
                    aria-labelledby='dropdownDefaultButton'
                  >
                    {shortBy.map((by, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setShort(by.id);
                          setIsOpen(!isOpen);
                          by.function(products);
                        }}
                      >
                        <a
                          href='#'
                          className='block px-4 py-2 hover:bg-gray-100 '
                        >
                          {by.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-4  gap-x-3 gap-y-6 justify-between pr-4 sm:pr-0'>
            {products?.map((product, index) => (
              <>
                {loading ? (
                  <div>
                    <Skeleton
                      style={{
                        width: '100%',
                        height: '16rem',
                        maxWidth: '20rem',
                        border: '1px solid #e2e8f0',
                        borderRadius: '0.5rem',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      }}
                      variant='rounded'
                    />
                  </div>
                ) : (
                  <CardProduct data={product} key={index} />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state.waybill.data,
  products: state.products.datas.products,
  product: state.products.data,
  loading: state.products.loading,
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
