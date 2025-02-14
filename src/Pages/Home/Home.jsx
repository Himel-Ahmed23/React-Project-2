import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      <div
        class="hero h-screen"
        style={{
          backgroundImage: "url(  https://watermark.lovepik.com/photo/50033/7484.jpg_wh1200.jpg)",
        }}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Our Online Shop</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Link to="/shop" className="btn btn-error px-8 text-white">Start Shoping</Link>
          </div>
        </div>
      </div>

      <div className="md:my-20 my-10 mx-8">
        <h1 className="text-center md:text-5xl text-3xl font-bold text-error ">Product Category</h1>

        <div className="grid md:grid-cols-4 gap-10 mt-15">

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://t4.ftcdn.net/jpg/00/96/91/23/360_F_96912393_et1FLAuWz8H7rU5JU2QvzJ8SHacFHeHm.jpg"
                alt="Shoes" className="w-full h-full"/>
            </figure>
            <div className="card-body">

              <h2 className="card-title">
                Shoe Shop
              </h2>

              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://thumbs.dreamstime.com/b/shopping-cart-supermarket-transition-shelves-30701259.jpg"
                alt="Shoes" className="w-full h-full" />
            </figure>
            <div className="card-body">

              <h2 className="card-title">
                Grocery Shop
              </h2>

              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirp2zm_fhNf_2Unj5sGcMB1D_OSSRtAugiA&s"
                alt="Shoes" className="w-full h-full"/>
            </figure>
            <div className="card-body">

              <h2 className="card-title">
                Dress Shop
              </h2>

              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://media.istockphoto.com/id/1073589496/photo/senior-unrecognizable-woman-picking-up-a-red-wallet-from-a-rack-in-a-bags-and-wallets-store.jpg?s=612x612&w=0&k=20&c=wESJSXPXcbpJslHcS6BJbRr1CNgdBMGfLwWdrv2_cnc="
                alt="Shoes" className="w-full" />
            </figure>
            <div className="card-body">

              <h2 className="card-title">
                Wallet Shop
              </h2>

              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuqFM5L7OQMSfP1ZOrGj5WML_4i5Mv_mJlQ&s"
                alt="Shoes" className="w-full" />
            </figure>
            <div className="card-body">

              <h2 className="card-title">
                Toys Shop
              </h2>

              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://media.istockphoto.com/id/1465543112/photo/in-a-musical-instrument-store.jpg?s=612x612&w=0&k=20&c=LyyDfpTgfuujfMB_LHlV2L7-Eeyu3h6UXgiSCVWH5Mk="
                alt="Shoes" className="w-full h-full"/>
            </figure>
            <div className="card-body">

              <h2 className="card-title">
                Guitar Shop
              </h2>

              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://arnolfini.org.uk/app/uploads/2022/09/LoResArnolfini2022LisaWhitingPhoto-56.jpg"
                alt="Shoes" className="w-full" />
            </figure>
            <div className="card-body">

              <h2 className="card-title">
                Books Shop
              </h2>

              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlc-5R1o4yLYiYSSXRZrLBHhR8y-UJ8pTiw&s"
                alt="Shoes" className="w-full"/>
            </figure>
            <div className="card-body">

              <h2 className="card-title">
                Fruits Shop
              </h2>

              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          

        </div>
      </div>

      <div className="font-semibold bg-error text-center p-2">
        <h1><a href="#">Back to Top</a></h1>
      </div>

    </div>
  );
};

export default Home;
