import React from 'react';

const Products = () => {
    return (
        <div>
            <h1 className='font-bold text-error text-3xl text-center my-12'>All Products</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1*/}
                        <tr> 
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">


                                            <img
                                                src="https://t4.ftcdn.net/jpg/00/96/91/23/360_F_96912393_et1FLAuWz8H7rU5JU2QvzJ8SHacFHeHm.jpg"
                                                alt="Avatar Tailwind CSS Component" />


                                        </div>
                                    </div>
                                    <div>

                                        <div>Shoes</div>


                                    </div>
                                </div>
                            </td>
                            <td>

                                <p>Fashion</p>


                            </td>
                            <td>2,000tk</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        {/* row 2*/}
                        <tr> 
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">


                                            <img
                                                src="https://thumbs.dreamstime.com/b/shopping-cart-supermarket-transition-shelves-30701259.jpg"
                                                alt="Avatar Tailwind CSS Component" />


                                        </div>
                                    </div>
                                    <div>

                                        <div>Tometo</div>


                                    </div>
                                </div>
                            </td>
                            <td>

                                <p>Grocery</p>


                            </td>
                            <td>35tk</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                          {/* row 3*/}
                          <tr> 
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">


                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirp2zm_fhNf_2Unj5sGcMB1D_OSSRtAugiA&s"
                                                alt="Avatar Tailwind CSS Component" />


                                        </div>
                                    </div>
                                    <div>

                                        <div>Shirt</div>


                                    </div>
                                </div>
                            </td>
                            <td>

                                <p>Fashion</p>


                            </td>
                            <td>1,500tk</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                          {/* row 4*/}
                          <tr> 
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">


                                            <img
                                                src="https://media.istockphoto.com/id/1073589496/photo/senior-unrecognizable-woman-picking-up-a-red-wallet-from-a-rack-in-a-bags-and-wallets-store.jpg?s=612x612&w=0&k=20&c=wESJSXPXcbpJslHcS6BJbRr1CNgdBMGfLwWdrv2_cnc="
                                                alt="Avatar Tailwind CSS Component" />


                                        </div>
                                    </div>
                                    <div>

                                        <div>Wallet</div>


                                    </div>
                                </div>
                            </td>
                            <td>

                                <p>Fashion</p>


                            </td>
                            <td>500tk</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                          {/* row 5*/}
                          <tr> 
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">


                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuqFM5L7OQMSfP1ZOrGj5WML_4i5Mv_mJlQ&s"
                                                alt="Avatar Tailwind CSS Component" />


                                        </div>
                                    </div>
                                    <div>

                                        <div>Toys</div>


                                    </div>
                                </div>
                            </td>
                            <td>

                                <p>Toys</p>


                            </td>
                            <td>300tk</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                          {/* row 6*/}
                          <tr> 
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">


                                            <img
                                                src="https://media.istockphoto.com/id/1465543112/photo/in-a-musical-instrument-store.jpg?s=612x612&w=0&k=20&c=LyyDfpTgfuujfMB_LHlV2L7-Eeyu3h6UXgiSCVWH5Mk="
                                                alt="Avatar Tailwind CSS Component" />


                                        </div>
                                    </div>
                                    <div>

                                        <div>Guitar</div>


                                    </div>
                                </div>
                            </td>
                            <td>

                                <p>Instruments</p>


                            </td>
                            <td>12,000tk</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                          {/* row 7*/}
                          <tr> 
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">


                                            <img
                                                src="https://arnolfini.org.uk/app/uploads/2022/09/LoResArnolfini2022LisaWhitingPhoto-56.jpg"
                                                alt="Avatar Tailwind CSS Component" />


                                        </div>
                                    </div>
                                    <div>

                                        <div>Book</div>


                                    </div>
                                </div>
                            </td>
                            <td>

                                <p>Books</p>


                            </td>
                            <td>200tk</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>  {/* row 8*/}
                        <tr> 
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">


                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlc-5R1o4yLYiYSSXRZrLBHhR8y-UJ8pTiw&s" />


                                        </div>
                                    </div>
                                    <div>

                                        <div>Fruits</div>


                                    </div>
                                </div>
                            </td>
                            <td>

                                <p>Fruits</p>


                            </td>
                            <td>350tk</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-center my-10">
                <h1 className='btn btn-error px-6 text-white'> See More...</h1>
            </div>
        </div>
    );
};

export default Products;