import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Order() {
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <span className='fs-2 fw-medium'> Doctor </span>
            <Link to={"/dashboard/addstd"} className="btn btn-primery float-end btn btn-warning text-white">Add Doctor</Link>
          </div>
        </div>


        <div className="row my-3 cart">
          <div className="col">
            <div className="table-responsive border">
              <table className="table table-hover align-middle align-middle">
                <thead className='table-light'>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Course ID</th>
                    <th scope="col">PhoneNo</th>
                    <th scope="col">Status</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
              

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="container paginat position-absolute bottom-0 end-0">
        <div className="row">
          <div className="col">
            <ul className="pagination modal-4 float-end">
              <li><a href="#" className="prev">
                <i className="fa fa-chevron-left"></i>
                Previous
              </a>
              </li>
              <li><a href="#">1</a></li>
              <li> <a href="#">2</a></li>
              <li> <a href="#" className="active">3</a></li>
              <li> <a href="#">4</a></li>
              <li><a href="#" className="next"> Next
                <i className="fa fa-chevron-right"></i>
              </a></li>
            </ul>
          </div>
        </div>
      </div> */}
    </>


  )
}
