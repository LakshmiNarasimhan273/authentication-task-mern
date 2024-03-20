import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.jpg"; // Replace with your image path

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success(data.message, {
          icon: "👏",
        });
        navigate("/dashboard");
        toast(
          "Welcome to our application! It seems that your username couldn't be retrieved at the moment. To ensure optimal performance and view your name correctly, please refresh the page to clear the session. I apologize for any inconvenience caused and appreciate your cooperation."
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${loginImage})` }}
      ></div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="max-w-md w-full">
          <h1 className="text-2xl text-center font-semibold mb-6">Sign in</h1>
          <form onSubmit={handleLogin}>
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
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
