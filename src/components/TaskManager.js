import React from 'react'
// import AdminDropdown from './AdminDropdown'
import Tasktable from './Tables/Tasktable'

export default function TaskManager() {
    return (
        <div className='TaskManagerPage'>
            {/* <AdminDropdown/> */}
            <br />
            <br />
            {/* <h1 className='TaskManagerHead' >Task Manager</h1> */}
            <div>
            <Tasktable/>
            </div>
        </div>
    )
}
