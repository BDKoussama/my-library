import React from 'react'

const Profile = () => {
  return (
    	<div className="hidden absolute pin-b z-10 lg:relative lg:block w-full lg:w-1/5 bg-grey-lighter-2 px-6 pt-10" id="profile">
            <div className="flex items-center mb-6">
                <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"  id="avatar">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-1178.000000, -87.000000)">
                            <g transform="translate(1159.000000, 0.000000)">
                                <g transform="translate(0.000000, 87.000000)">
                                    <g transform="translate(19.000000, 0.000000)">
                                        <circle id="small-circle" fill="#5661B3" cx="30" cy="30" r="30"></circle>
                                        <path id="moon" d="M30.5,49.7304688 C40.7172679,49.7304688 30.5,43.266096 30.5,33.0488281 C30.5,22.8315603 40.7172679,12 30.5,12 C20.2827321,12 11.0390625,20.6479665 11.0390625,30.8652344 C11.0390625,41.0825022 20.2827321,49.7304688 30.5,49.7304688 Z" fill="#F4E1E0"></path>
                                        <circle id="big-circle" fill="#070707" cx="31" cy="31" r="11"></circle>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <div className="ml-3">
                    <p>Amie Chen</p>
                    <p className="text-grey-dark mt-1 text-sm">Joined since 2017</p>
                </div>
            </div>
            <div className="my-4 border-t pt-4">
                <h3 className="text-indigo-dark font-normal">You have read <strong>4 of 30 books</strong> in 2018</h3>
                <div className="flex flex-wrap -ml-2 justify-start items-center">
                    <img src="./images/read-01.jpg" alt="read" className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition-normal hover:brighter"/>
                    <img src="./images/read-02.jpg" alt="read" className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition-normal hover:brighter"/>
                    <img src="./images/read-03.jpg" alt="read" className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition-normal hover:brighter"/>
                    <img src="./images/read-04.jpg" alt="read" className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition-normal hover:brighter"/>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-grey-dark mt-1 text-sm">Currently Reading</p>
                <div className="flex items-start mt-2">
                    <img src="./images/read-04.jpg" alt="read" className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block transition-normal hover:brighter"/>
                    <div className="ml-3">
                        <p className="mt-1 leading-normal">Popular Lies* About Graphic Design</p>
                        <p className="text-indigo text-sm mt-1">15/250 pages</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Profile
