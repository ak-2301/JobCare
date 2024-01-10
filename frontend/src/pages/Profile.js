import Layout from "../components/Layout/Layout";

const Profile = () => {
  return (
    <>
      <div className="row">
        <div className="col-1">
          <Layout />
        </div>
        <div className="col-11 ">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-5">
            <div className="h-32 rounded-lg bg-gray-200">
              <div className="d-flex flex-row justify-center">
                <h1>Ankit kansal</h1>
              </div>
            </div>
            <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2">
              <div className="d-flex flex-row  mt-5 justify-evenly">
                <div className="d-flex flex-row">
                  <i
                    class="fa-solid fa-envelope"
                    style={{ fontSize: "20px", paddingRight: "10px" }}
                  ></i>
                  <h4>demo@gmail..com</h4>

                  <i
                    className="fa-solid fa-copy pl-2 cursor-pointer"
                    style={{ fontSize: "15px", color: "grey" }}
                  ></i>
                </div>
                <div className="d-flex flex-row">
                  <i
                    class="fa-solid fa-phone"
                    style={{ fontSize: "20px", paddingRight: "10px" }}
                  ></i>
                  <p>+91-7906578868</p>
                </div>
                <div className="d-flex flex-row">
                  <i
                    class="fa-brands fa-linkedin-in"
                    style={{ fontSize: "20px", paddingRight: "10px" }}
                  ></i>
                  <p>linkedin.com/ankit2301</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container ">
            <h3>education</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
