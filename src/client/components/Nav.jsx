import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getCategories } from "~client/store/slices/categoryActions";
import { getItems } from '~client/store/slices/itemActions';
function Nav(props) {

    const { loading, userInfo, error, success } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const router = useRouter();
    useEffect(() => {
        if (userInfo) {
            dispatch(getCategories(userInfo._id));
        }
    }, [])

    const getItemsFunc = (id) => {
        dispatch(getItems(id));
    }

    return (
        <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap 
        space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>{
                props.category && props.category.categories.existingCategory?.length !== 0 ? props.category.categories.existingCategory?.map((el, key) => (
                    <h2 onClick={() => { getItemsFunc(el._id) }} key={key} className="last:pr-24 cursor-pointer transition duration-100
                 transform hover:scale-125 hover:text-white active:text-red-500"> {el.name}</h2>
                )) : ''
            }</div>
    )
}

const mapStateToProps = (state) => ({
    category: state.category,
});

export default connect(mapStateToProps)(Nav);
