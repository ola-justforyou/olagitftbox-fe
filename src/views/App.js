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
import { Image, Search, X } from 'lucide-react';
import CardProduct from '../components/CardProduct';
import { useDebounce } from 'use-debounce';
import { Skeleton } from '@mui/material';
import SwiperCards from '../components/SwiperCards/SwiperCards';
import ModalCard from '../components/ModalCard';
import { useSearchParams } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search');
  const [value] = useDebounce(query, 1000);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [short, setShort] = useState(1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
    getDataProductsCategories();
    // getDataProductsByCategory('smartphones');
  }, []);
  useEffect(() => {
    if (value) {
      getSearchDataProducts(value);
    } else {
      getAllProducts();
    }
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
  // console.log(searchParams, 'searchParams');
  console.log('Search parameter from URL:', query);

  return (
    <div className='min-h-screen flex pb-48'>
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
            <div
              class='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
              onClick={() => {
                // setQuery('');
                setSearchParams({ search: '' });
                // getDataProducts();
              }}
            >
              {query ? (
                <X
                  style={{
                    height: '17px',
                    width: '17px',
                    color: 'gray',
                  }}
                />
              ) : (
                ''
              )}
            </div>
            <input
              type='text'
              id='search-navbar'
              class='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
              placeholder='Search...'
              onChange={(e) => {
                setSearchParams({ search: e.target.value.slice(0, 35) });
              }}
              value={query}
            />
          </div>
        </div>
        {!value ? (
          <>
            <SwiperEffect />
            <div className='text-white text-3xl ml-4  md:ml-0 sm:ml-0'>
              <h2 className='text-lg font-medium text-black mb-2'>Category</h2>
              <div className='flex flex-col h-full h w-full overflow-auto no-scrollbar overflow-y-hidden '>
                <div className='flex min-w-min h-full text-black sm:gap-x-20  gap-x-4 justify-between pr-8'>
                  {categories?.map((item, i) => (
                    <>
                      {loading ? (
                        <div>
                          <Skeleton
                            style={{
                              width: '6rem',
                              height: '5rem',
                              maxWidth: '20rem',
                              border: '1px solid #e2e8f0',
                              borderRadius: '0.5rem',
                              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                            animation='wave'
                            variant='rounded'
                          />
                        </div>
                      ) : (
                        <div className='flex flex-col rounded-lg h-16 w-24 '>
                          <div
                            className='basis-11/12 relative w-full h-full flex '
                            onClick={(e) => console.log(e)}
                          >
                            <Image
                              style={{
                                margin: 'auto',
                                width: '1.8rem',
                                height: '1.8rem',
                              }}
                            />
                          </div>
                          <p className='mt-1 mx-auto basis-1/12 text-gray-500 font-medium text-xs flex flex-col'>
                            {item}
                          </p>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
        <div className='text-white text-3xl ml-4  md:ml-0 sm:ml-0'>
          <div className='w-full flex justify-between'>
            <h2
              className={`text-lg font-medium  ${
                short != 1
                  ? 'px-2 bg-blue-100  text-blue-900 rounded-lg mb-4 mt-1'
                  : 'text-black mb-2'
              }`}
            >
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
          <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-x-3 gap-y-6 justify-between pr-4 sm:pr-0'>
            {products?.map((product, index) => (
              <div className='hover:cursor-pointer'>
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
                      animation='wave'
                      variant='rounded'
                    />
                  </div>
                ) : (
                  <CardProduct
                    onClick={(e) => {
                      console.log('-----');
                      getDataProduct(product.id);
                    }}
                    data={product}
                    key={index}
                  />
                )}
              </div>
            ))}
          </div>
          {products?.length == 0 ? (
            <div className=' flex'>
              <h3 class='text-xl font-semibold text-gray-900 mx-auto mt-32'>
                Produk Tidak Tersedia...
              </h3>
            </div>
          ) : (
            ''
          )}
        </div>

        <div class='fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-sm  bottom-0 left-1/2 '>
          <div class='grid h-full max-w-lg grid-cols-5 mx-auto'>
            <button
              data-tooltip-target='tooltip-home'
              type='button'
              class='inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50  group'
            >
              <svg
                class='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' />
              </svg>
              <span class='sr-only'>Home</span>
            </button>
            <div
              id='tooltip-home'
              role='tooltip'
              class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip '
            >
              Home
              <div class='tooltip-arrow' data-popper-arrow></div>
            </div>
            <button
              data-tooltip-target='tooltip-wallet'
              type='button'
              class='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group'
            >
              <svg
                class='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z' />
                <path d='M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z' />
              </svg>
              <span class='sr-only'>Wallet</span>
            </button>
            <div
              id='tooltip-wallet'
              role='tooltip'
              class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip '
            >
              Wallet
              <div class='tooltip-arrow' data-popper-arrow></div>
            </div>
            <div
              class='flex items-center justify-center'
              onClick={() => setIsOpenModal(!isOpenModal)}
            >
              <button
                data-tooltip-target='tooltip-new'
                type='button'
                class='inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800'
              >
                <svg
                  class='w-4 h-4 text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
                <span class='sr-only'>New item</span>
              </button>
            </div>
            <div
              id='tooltip-new'
              role='tooltip'
              class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip '
            >
              Create new item
              <div class='tooltip-arrow' data-popper-arrow></div>
            </div>
            <button
              data-tooltip-target='tooltip-settings'
              type='button'
              class='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group'
            >
              <svg
                class='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
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
                  d='M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2'
                />
              </svg>
              <span class='sr-only'>Settings</span>
            </button>
            <div
              id='tooltip-settings'
              role='tooltip'
              class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip '
            >
              Settings
              <div class='tooltip-arrow' data-popper-arrow></div>
            </div>
            <button
              data-tooltip-target='tooltip-profile'
              type='button'
              class='inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50  group'
            >
              <svg
                class='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
              </svg>
              <span class='sr-only'>Profile</span>
            </button>
            <div
              id='tooltip-profile'
              role='tooltip'
              class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip '
            >
              Profile
              <div class='tooltip-arrow' data-popper-arrow></div>
            </div>
          </div>
        </div>
        {isOpenModal ? (
          <div className='relative '>
            <div
              className='fixed z-50 inset-0  bg-black opacity-70  flex'
              onClick={() => setIsOpenModal(!isOpenModal)}
            ></div>
            <SwiperCards />
          </div>
        ) : (
          // <ModalCard />
          ''
        )}
        <ModalCard />
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
