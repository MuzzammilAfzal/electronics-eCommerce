import { useState } from "react";
import { useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_URL;

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    keyFeatures:"",
    brand:"",
    categories:"",
    section:""
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log(product)
  };

  // const handleDescriptionChange = (e) => {
  //   setProduct({ ...product, description: e.target.value });
  // };

  // const handlePriceChange = (e) => {
  //   setProduct({ ...product, price: e.target.value });
  // };

  // const handleImageLinkChange = (e) => {
  //   setProduct({ ...product, imageLink: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/admin/addProduct`, {
      method: "POST",
      headers: {
        token: sessionStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      alert("product added successfully");
      setProduct({
        productName: "",
        price: "",
        keyFeatures:"",
        brand:"",
        categories:"",
        section:""
      });
      location.reload();
    } else {
      alert("error");
    }
  };

  return (
    <div className="flex justify-center items-center">
    <div className="flex justify-center items-center h-fit bg-white flex-wrap shadow-2xl shadow-black w-fit ">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="p-5 bg-white mr-2.5"
      >
        <h2 className="text-center text-xl font-semibold mb-4">Add Products</h2>

        <div className="mb-3">
          <label className="block">Product Name</label>
          <input
            type="text" name="productName"
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block">Price</label>
          <input
            type="text" name="price"
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </div>  

        <div className="mb-3">
          <label className="block">Key Features</label>
          <input
            type="text" name="keyFeatures"
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </div>


        <div className="mb-3">
          <label className="block">Brand</label>
          <input
            type="text" name="brand"
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block">Categories</label>
          <input
            type="text" name="categories"
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block">Section</label>
          <input
            type="text" name="section"
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
          
          />
        </div>

        <button
          type="submit"
          className="w-full p-2.5 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>

      <div className="block w-full">
        <button
          className="w-full p-2.5 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => {
            sessionStorage.removeItem("token");
            navigate("/admin", { replace: true });
          }}
        >
          Logout
        </button>
      </div>
    </div>
    </div>
  );
}