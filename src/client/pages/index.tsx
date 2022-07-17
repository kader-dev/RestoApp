import React from 'react'
import { NextPage } from 'next'
import { Dummy } from '~shared/types/dummy'
import { connect } from 'react-redux';
import { AppState, wrapper } from '~client/store/store';
import { fetchProduct } from '~client/store/slices/product';
import Head from "next/head";
import Header from '~client/components/Header';

type HomePageProps = {
  dummy: Dummy
}
const Home: NextPage<HomePageProps> = (props: any) => {
  const { product } = props;
  return (
    <>
      <Head>
        <title>RestoApp</title>
      </Head>
      <Header />
    </>
  );
}


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
  console.log('store state on the server before dispatch', store.getState());
  const productData = query.data || 'page data';
  await store.dispatch(fetchProduct());
  console.log('store state on the server after dispatch', store.getState());

  return {
    props: {
      productData
    }
  };
});

const mapStateToProps = (state: AppState) => ({
  product: state.product
});

export default connect(mapStateToProps)(Home);
