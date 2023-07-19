import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/user/login", { email, password })
      .then((res) => {
        if (res.data.message === "success") {
          setauthenticated(true);
          localStorage.setItem("authenticated", true);
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" bg-light">
      <div className="container text-white">
        <div className="">
          <div className="row d-flex  vh-100  justify-content-center align-items-center">
            <div className="col-12 col-xxl-4 col-lg-5 col-md-6 col-sm-8">
              <div className="card shadow-lg p-sm-3">
                <div className="card-body px-3 py-4 px-sm-2 px-md-1 px-lg-2 px-xl-5">
                  <h3 className="fs-3 text-center mb-4">Sign In</h3>
                  <form method="POST" onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <label htmlFor="email" className="form-label w-75">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pass" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="pass"
                        id="pass"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="d-grid mt-4">
                      <button
                        className="btn btn-pink shadow-sm"
                        onClick={handleSubmit}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>

                  <hr className="m-4" />

                  <div className="d-inline-flex w-100 justify-content-center gap-3">
                    <div className="d-inline-flex justify-content-center align-items-center p-2">
                      <i class="fa-brands fa-google text-danger fs-3 Logo"></i>
                    </div>
                    <div className="pt-2 ps-2">
                      <i class="fa-brands fa-facebook-f fs-4 text-primary Logo"></i>
                    </div>
                    <div className="d-inline-flex justify-content-center align-items-center p-2">
                      <i class="fa-brands fa-linkedin-in linkedinLogo fs-3 Logo"></i>
                    </div>
                  </div>
                  <p className="card-text text-center mt-3">
                    Already a user?{"  "}
                    <a href="#" className="text-black">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
