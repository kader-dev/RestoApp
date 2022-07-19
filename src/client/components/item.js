import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from '~client/store/slices/itemActions';
import Image from "next/image";
import axios from 'axios'
const options = {
    method: 'GET',
    url: 'https://pizza-and-desserts.p.rapidapi.com/deserts',
    headers: {
        'X-RapidAPI-Key': 'cac705d78amsh451398b45c870a5p176014jsn44aed69a4449',
        'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
    }
};


function item(props) {
    const dispatch = useDispatch()
    const { loading, userInfo, error, success } = useSelector((state) => state.user)
    useEffect(() => {
        if (userInfo) {
            dispatch(getAllItems());
        }
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
    return (
        <>
            <div className='px-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-4'>
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