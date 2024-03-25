import React from 'react'

const Pagination = () => {
    return (
        <div className='text-white justify-center items-center w-full flex mt-2'>
            <button className="mr-4 px-3 py-2 rounded-lg hover:text-red-500 text-xl border border-red-100 w-fit hover:border-red-500">Previous</button>
            <button className="ml-4 px-3 py-2  rounded-lg hover:text-red-500 text-xl border border-red-100 w-fit hover:border-red-500">Next</button>
        </div>
    )
}

export default Pagination