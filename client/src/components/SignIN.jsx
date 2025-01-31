import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIN = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <>
      {" "}
      <div className="flex items-center justify-center h-screen ">
        <div className="flex h-[500px] bg-yellow-400 rounded-full">
          <div className="w-[500px] h-full rounded-full bg-white flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-black">
              <a href="/"><span className="text-yellow-500">Honestly</span><span className="text-purple-500">-</span>Nvrmind</a>
            </h1>
            <p className="w-[90%] mt-5 font-Dancing">Glitch through reality, step into the future — where every 3D drop hits like a beat, every product drips like anime aesthetics. <span className="text-purple-500">Honestly-Nvrmind</span> isn’t just a shop, it’s a whole new dimension.</p>
          </div>
          <div>
            <div className="w-[500px] h-full items-center justify-center flex flex-col">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black">
                SIGN IN
              </h1>
              <form
                className="flex flex-col items-center mt-10"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    required
                    className="rounded w-96 h-10 pl-4"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      className="rounded w-96 h-10 pl-4 mt-2"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash size={20} />
                      ) : (
                        <FaEye size={20} />
                      )}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-40 h-10 bg-black mt-2 text-white rounded transition-bg transition-text duration-200 hover:bg-yellow-300 hover:text-black"
                >
                  Sign In
                </button>
                <a
                  href="/forgot-password"
                  className="text-sm text-black duration-200 hover:text-blue-700 "
                >
                  Forgot Password?
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIN;
