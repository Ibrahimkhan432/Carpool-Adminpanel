import React, { useContext, useState } from "react";
import Popup from "reactjs-popup";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";
import { CiEdit, CiMenuKebab } from "react-icons/ci";

const UserList = () => {
  const { AllUsers } = useContext(AuthContext);
  const [searchUser, setSearchUser] = useState("");
  // const [deleteUser, setDeleteUser] = useState("");
  console.log(searchUser);

  return (
    <div className=" min-h-screen overflow-y-scroll p-3 bg-white rounded-2xl border-2 border-green-600">
      <div className="font-semibold text-2xl  flex flex-row text-slate-900 justify-between mt-2 mb-3">
        <span>
          User List
        </span>
        <span>
          <input
            onChange={(e) => setSearchUser(e.target.value)}
            className="border-2 border-green-200 rounded-md mr-4" type="search" name="" id="" placeholder="Seacrh User" />
          <span className="text-sm mr-10 items-center justify-center">Total Users :{AllUsers.length} </span>
        </span>
      </div>
      <div className="relative overflow-x-auto  sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-white uppercase bg-green-600 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                S no.
              </th>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
              </th>
              <th scope="col" className="px-6 py-3">
                CNIC
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {AllUsers.filter((data) => {
              if (searchUser === "") {
                return data;
              } else if (
                data.name.toLowerCase().includes(searchUser.toLowerCase()) ||
                data.email.toLowerCase().includes(searchUser.toLowerCase()) ||
                data.role.toLowerCase().includes(searchUser.toLowerCase()) ||
                data.phoneNumber.toString().includes(searchUser)

              ) {
                return data;
              }

            }).map((data, index) => (
              <tr
                key={index}
                className="border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}.</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.name}
                </th>
                <td className="px-6 py-4">{data.email}</td>
                <td className="px-6 py-4">{data.role}</td>
                <td className="px-6 py-4">{data.phoneNumber}</td>
                <td className="px-6 py-4">{data.nicNo}</td>
                <td className="px-6 py-4">
                  <ul className="flex space-x-2 text-xl">
                    {/* deletetBtn */}
                    <li className="text-red-600 cursor-pointer"><MdDeleteForever 
                    // onClick={() => setDeleteUser(data._id)}
                    /></li>
                    {/* EditBtn */}
                    <li className="text-black cursor-pointer">
                      <Popup className="text-center"
                        trigger={
                          <CiEdit />
                        }
                        modal
                        overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
                      >
                        {(close) => (
                          <div className="bg-white p-4 rounded-lg shadow-lg w-[600px] mx-auto text-center">
                            {/* Header */}
                            <div className="text-2xl font-semibold text-red-900 flex justify-end">
                              <button onClick={close} className="text-red-500 text-xl cursor-pointer">
                                ✖
                              </button>
                            </div>
                            <div className="flex flex-col mt-4">
                              <div className="flex flex-row justify-between">
                                <div className="flex flex-col w-1/2">
                                  <label className="text-sm">Name</label>
                                  <input
                                    type="text"
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                  />
                                </div>
                                <div className="flex flex-col w-1/2 ml-4">
                                  <label className="text-sm">Email</label>
                                  <input
                                    type="text"
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row justify-between mt-4">
                                <div className="flex flex-col w-1/2">
                                  <label className="text-sm">Role</label>
                                  <input
                                    type="text"
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                  />
                                </div>
                                <div className="flex flex-col w-1/2 ml-4">
                                  <label className="text-sm">Contact</label>
                                  <input
                                    type="text"
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col mt-4">
                                <label className="text-sm">CNIC</label>
                                <input
                                  type="text"
                                  className="border-2 border-gray-300 p-2 rounded-lg"
                                />
                              </div>
                              <div className="flex justify-center mt-4">
                                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup></li>
                    {/* DetailBtn */}
                    <li className=" cursor-pointer">
                      <Popup className="text-center"
                        trigger={
                          <CiMenuKebab />
                        }
                        modal
                        overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }} // Semi-transparent background
                      >
                        {(close) => (
                          <div className="bg-white p-4 rounded-lg shadow-lg w-[600px] mx-auto text-center">
                            {/* Header */}
                            <div className="text-2xl font-semibold text-gray-900 flex justify-end">
                              <button onClick={close} className="text-red-500 text-xl cursor-pointer">
                                ✖
                              </button>
                            </div>

                            {/* User Info */}
                            <div className="mt-4 text-left space-y-2">
                              <span>
                                <img className="w-20 h-20 mx-auto rounded-full" src={data.profileImage} alt="Rounded avatar" />
                              </span>
                              <p><span className="font-semibold"> Role:</span> {data.role}</p>
                              <p><span className="font-semibold"> Gender:</span> {data.gender}</p>
                              <p><span className="font-semibold"> Name:</span> {data.name}</p>
                              <p><span className="font-semibold"> Email:</span> {data.email}</p>
                              <p><span className="font-semibold"> Contact:</span> {data.phoneNumber}</p>
                              <p><span className="font-semibold"> CNIC:</span> {data.nicNo}</p>
                              <p><span className="font-semibold"> Address:</span> {data.address}</p>
                              <p><span className="font-semibold"> Vehicle:</span> {data.vehicleCategory}</p>
                              <p><span className="font-semibold"> Vehicle No:</span> {data.vehicleNo}</p>
                              <p><span className="font-semibold"> Register Date:</span> {data.createdAt}</p>
                            </div>

                            {/* Buttons for Actions */}
                            <div className="mt-6 space-y-3">
                              <button className="w-full border-2 border-green-500 hover:bg-green-300 text-green-500 font-bold py-2 px-4 rounded-lg cursor-pointer">
                                Approve User
                              </button>
                              <button className="w-full border-2 border-red-500 hover:bg-red-300 text-red-500 font-bold py-2 px-4 rounded-lg cursor-pointer">

                                Suspend User
                              </button>
                              <button className="w-full border-2 border-blue-500 hover:bg-blue-300 text-blue-500 font-bold py-2 px-4 rounded-lg cursor-pointer">
                                Track Activity
                              </button>
                            </div>

                            {/* Close Button */}
                            <div className="mt-4">
                              <button
                                onClick={close}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        )}
                      </Popup></li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default UserList;
