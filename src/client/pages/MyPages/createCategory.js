import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { CreateNewCategory } from '../../store/slices/categoryActions'

const CreateCategory = () => {
    const [customError, setCustomError] = useState(null)
    const router = useRouter();
    const { loading, userInfo, error, success } = useSelector(
        (state) => state.user
    )
    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm()



    const submitForm = (data) => {
        const id = userInfo._id;
        dispatch(CreateNewCategory({ ...data, user: id }))
        router.push('/')
    }

    return (

        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 ">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Create New Category
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(submitForm)}>
                    <input type="hidden" name="remember" value="True" />
                    <div className="rounded-md shadow-sm -space-y-px">

                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input {...register('name')} id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
                        </div>
                    </div>
                    <button disabled={loading} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateCategory