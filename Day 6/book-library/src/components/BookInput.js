import React from 'react'
import { Book } from '../classes/book';

export default function BookInput() {



    function submitBook () {

    }



    return (
        <div className='container p-3'>

            <form onSubmit={submitBook}>

                <div className='p-3'>

                    <input className='form-control' placeholder='Book Title'/>
                </div> 

                <div className='p-3'>
                    <input className='form-control' placeholder='Author'/>
                </div>

                <div className='p-3'>
                    <input className='form-control' placeholder='ISBN#'/>
                </div>

                <div className='p-3'>
                    <button className='form-control btn btn-primary'>
                        Submit
                    </button>
                </div>
               

            </form>
        </div>
    )
}
