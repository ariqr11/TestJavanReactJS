import React from 'react'
import { IoMdTrash, IoMdHeart, IoMdArrowDropdown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../action/cartAction'

const UserCart = () => {
    const dispatch = useDispatch()
    const [modalNote, setModalNote] = React.useState(false)
    const { cartData } = useSelector((state) => {
        return {
            cartData: state.cartReducer.cart
        }
    })

    React.useEffect(() => {

    }, [cartData, dispatch]);

    const printCart = () => {
        return cartData.map((val) => {
            return (
                <div className='grid grid-cols-4 my-5 py-2'>
                    <div className=' bg-gray-200 md:p-10 p-3'>
                        <img src={val.image} className="h-auto rounded" alt="image description" />
                    </div>
                    <div className='col-span-3 md:col-span-2 mx-1 md:mx-5'>
                        <h1 className='text-md md:text-xl font-bold mb-2'>{val.name}</h1>
                        <h1 className='text-sm md:text-md font-thin my-2'>{val.type} - {val.color}</h1>
                        <h1 className='text-sm md:text-md font-thin my-2'>COLOR : {val.color}</h1>
                        <h1 className='text-sm md:text-md font-thin my-2'>SIZE : {val.size}</h1>
                        <div className='md:flex'>
                            <button type='button' className='flex text-sm md:text-md font-thin items-center mr-5' onClick={() => updateCart(val.name, "delete")}><IoMdTrash className='md:mr-2' /> REMOVE ITEM</button>
                            <button type='button' className='flex text-sm md:text-md font-thin items-center'><IoMdHeart className='md:mr-2' /> MOVE TO WISHLIST</button>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center font-bold'>
                            <button type='button' className='w-96 border text-center text-lg' onClick={() => updateCart(val.name, "minus")} disabled={val.qty > 1 ? false : true} >-</button>
                            <div className='w-96 text-center'>
                                <p>{val.qty}</p>
                            </div>
                            <button type='button' className='w-96 border text-center text-lg' onClick={() => updateCart(val.name, "plus")} >+</button>
                        </div>
                        <div className='text-center md:text-right md:mt-24'>
                            ${val.price * val.qty}
                        </div>
                    </div>
                </div>
            )
        })
    }

    const updateCart = (name, type) => {
        dispatch(cartAction(name, type))
    }

    const totalPrice = () => {
        let total = cartData.reduce((a, b) => {
            return a + (b.price * b.qty)
        }, 0)
        return total
    }

    return (
        <div className="md:w-screen">
            <p className='flex sm:justify-center p-5 md:p-20 text-xl md:text-4xl font-bold'>Shopping Cart</p>
            <div className='md:grid md:grid-cols-3 w-72 sm:w-full md:px-72'>
                <div className='border md:col-span-2 mx-1 sm:mx-5 p-3 sm:p-10'>
                    <h1 className='font-bold text-xl md:text-2xl mb-10'>Cart ({cartData.length} items)</h1>
                    <div className='divide-y'>
                        {printCart()}
                    </div>
                </div>
                <div className='col-span-1 my-5 mx-2 md:my-0'>
                    <div className='border divide-y px-1 md:px-5'>
                        <div>
                            <h1 className='font-bold p-1 md:p-3 text-lg md:text-2xl mb-3 md:mb-10'>The total amount of</h1>
                            <div className='mb-5 px-1 md:px-3 flex justify-between'>
                                <h1 className='text-sm md:text-xl'>Temporary Amount</h1>
                                <h1 className='text-sm md:text-xl'>${totalPrice()}</h1>
                            </div>
                            <div className='mb-5 px-1 md:px-3 flex justify-between'>
                                <h1 className='text-sm md:text-xl'>Shipping</h1>
                                <h1 className='text-sm md:text-xl'>Gratis</h1>
                            </div>
                        </div>
                        <div>
                            <div className='p-1 md:p-3 flex justify-between'>
                                <h1 className='text-sm md:text-xl w-40 md:w-60 font-bold'>The total amount of (including VAT)</h1>
                                <h1 className='text-sm md:text-xl'>${totalPrice()}</h1>
                            </div>
                            <button type='button' className='text-white text-sm md:text-lg rounded-lg m-3 w-60 md:w-96 py-1 md:py-3 bg-blue-500' onClick={() => {
                                setModalNote(true)
                                updateCart(cartData, "checkout")
                            }
                            }>GO TO CHECKOUT</button>
                        </div>
                    </div>
                    <div className='border mt-5 p-2 md:p-5 justify-between flex'>
                        <h1 className='text-sm md:text-xl font-thin'>Add a discount code (optional)</h1>
                        <IoMdArrowDropdown size={30} />
                    </div>
                </div>
            </div>
            {/* MODAL NOTE */}
            {modalNote ?
                <div id="SuccessModal" tabindex="-1" aria-hidden='true' className="sm:pl-[32%] sm:pt-[10%] backdrop-blur-sm fixed z-30 justify-center w-full inset-0">
                    <div className=" max-w-xl mt-20 bg-white rounded-lg border-2" >
                        <div className="flex justify-between p-4 dark:border-gray-600">
                            <p />
                            <button type="button" onClick={() => {
                                setModalNote(false)
                            }} className="text-gray-400 bg-transparent border hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="">
                            <div className='items-center justify-center'>
                                <img className='w-80 h-auto mx-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFM9wutUSbns18WLwMp6kNOm_wIMiP2rRA9w&usqp=CAU' alt='image description' />
                                <p className='sm:text-3xl font-bold py-3 text-center'>Checkout Success</p>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
            {/* END MODAL NOTE */}
        </div>
    )
}

export default UserCart