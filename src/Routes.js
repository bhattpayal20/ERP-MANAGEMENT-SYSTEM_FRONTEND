import React from 'react'
import MainPage from './components/MainPage';
import EmployeeProfile from './components/EmployeeProfile';
import Attendence from './components/Attendance';
import Application from './components/Application';
import TaskManager from './components/TaskManager';
import Invoices from './components/Invoices';
import TeamAnalysis from './components/TeamAnalysis';
import Holidays from './components/Holidays';
import {useState}  from 'react';
import {RiMenuLine} from 'react-icons/ri' ;
import Button from '@mui/material/Button';
import RefreshButton from './components/RefreshButton';
import ProfilePage from './UserPages/ProfilePage';

import AdminApp from './AdminApp';
import UserApp from './UserApp'
import PageNotFound from './PageNotFound'


// Admin 
// import MainPage from './components/MainPage';
// import EmployeeProfile from './components/EmployeeProfile';
// import Attendence from './components/Attendance';
// import Application from './components/Application';
// import TaskManager from './components/TaskManager';
// import Invoices from './components/Invoices';
// import TeamAnalysis from './components/TeamAnalysis';
// import Holidays from './components/Holidays';
// import {useState}  from 'react';
// import {RiMenuLine} from 'react-icons/ri' ;
// import Button from '@mui/material/Button';
// import RefreshButton from './components/RefreshButton';
// import ProfilePage from './UserPages/ProfilePage';


// users
// import MainPage from './Usercomponents/MainPage'
import TasksPage from './UserPages/TasksPage'
import ApplicationPage from './UserPages/ApplicationPage'
import AttendancePage from './UserPages/AttendancePage'
import HolidayPage from './UserPages/HolidayPage'
// import ProfilePage from './UserPages/ProfilePage'
import Login from './Login/Login';

const routes = [
	{
		path: '/user',
		element: (
            <>
			<UserApp/>
            </>
		),
		children: [
			{ path:"/user", element:<MainPage/>},
             
            {path:"/user/TasksPage" ,element:<TasksPage/>},
                        
            {path:"/user/ApplicationPage", element:<ApplicationPage/>},
            
            {path:"/user/AttendancePage", element:<AttendancePage/>},
              
            {path:"/user/HolidayPage", element:<HolidayPage/>},
                    
            {path:"/user/ProfilePage", element:<ProfilePage/>},

		]
	},
    {
		path: '/admin',
		element: (
			<AdminApp/>
		),
		children: [
            {path:"/admin", element:<MainPage/>},
            {path:"/admin/EmployeeProfile" ,element:<EmployeeProfile/>},
            {path:"/admin/Attendence", element:<Attendence/>},
                
            {path:"/admin/TaskManager", element:<TaskManager/>},
            
            {path:"/admin/Application", element:<Application/>},
            
            {path:"/admin/invoices" ,element:<Invoices/>},
                    
            {path:"/admin/holidays", element:<Holidays/>},
                    
            {path:"/admin/TeamAnalysis", element:<TeamAnalysis/>},

            {path:"/admin/users/:id" ,element:<ProfilePage  />},

		]
	},
	{
		path: '/',
		element: <Login />,
		
	},
	{
		path:'*',
		element:<PageNotFound/>
	}
];

export default routes;