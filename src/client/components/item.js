import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from '~client/store/slices/itemActions';
import Image from "next/image";
import { HomeIcon, CollectionIcon, ServerIcon, PlusIcon } from "@heroicons/react/outline";
import { useRouter } from 'next/router';


function item(props) {
    const dispatch = useDispatch()
    const router = useRouter();
    const { loading, userInfo, error, success } = useSelector((state) => state.user)
    useEffect(() => {
        if (userInfo) {
            dispatch(getAllItems());
        }

    }, [])
    return (
        <> <div className="flex items-center cursor-pointer group mt-7 hover:text-white" on onClick={() => { router.push('/MyPages/createItem') }}>
            <PlusIcon className="h-8 m-1" />
            <p >New Item</p>
        </div>
            <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4'>

                {
                    props.item && props.item.categories?.Items?.length !== 0 ? props.item.categories?.Items?.map((el, key) => (
                        <div key={key} className="cursor-pointer group p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
                            <Image src="https://images.spoonacular.com/file/wximages/423186-636x393.png" height={1080} width={1920} />
                            <div className='p-2'>
                                <p className='truncate max-w-md '>{el.description}</p>
                                <h2 className='mt-1 text-white text-2xl transition-all duration-100 ease-in-out group-hover:font-bold'>
                                    {el.name}
                                </h2>
                                <h2>
                                    {el.price}
                                </h2>
                            </div>
                        </div>

                    )) : ''
                }</div>
        </>
    )
}


const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps)(item);