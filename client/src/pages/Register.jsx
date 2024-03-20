import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import registerImage from "../assets/login.jpg"; // Replace with your image path

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", { name, email, password });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Signup Successful");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${registerImage})` }}
      ></div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="max-w-md w-full">
          <h1 className="text-2xl font-semibold text-center mb-6">Sign up</h1>
          <form onSubmit={handleRegister}>
            <label className="block mb-2">Enter your username</label>
            <input
              type="text"
              placeholder="John Doe"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            />
            <label className="block mb-2">Enter your E-Mail</label>
            <input
              type="email"
              placeholder="john@mail.com"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            />
            <label className="block mb-2">Enter your Password</label>
            <input
              type="password"
              placeholder="*****"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
