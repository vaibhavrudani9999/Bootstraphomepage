import React from "react";

export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand text-secondary fw-bolder" href="#">
            Diu Island
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse text-dark" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <div
        className="d-flex align-items-center text-white text-center"
        style={{
          height: "80vh",
          backgroundImage:
            "url('https://images.pexels.com/photos/462089/pexels-photo-462089.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="fw-bold  fs-1">Welcome To Diu Island</h1>
          <p className="lead">
            An island is a landmass smaller than a continent, entirely
            surrounded by water, found in oceans, seas, lakes.{" "}
          </p>
          <button className="btn btn-dark mt-3">Explore More</button>
        </div>
      </div>

      {/* CARD SECTION WITH IMAGES */}
      <div className="container mt-5">
        <div className="row g-4">
          {/* CARD 1 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/1316897/pexels-photo-1316897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="Web Design"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">History Of Island</h5>
                <p className="card-text text-secondary">
                  Diu Island is an island off the southern coast of Gujarat's
                  Kathiawar peninsula, separated from the mainland by a tidal
                  creek. It has an area of 38 km2, and a population of 44,110
                  (2001 census).
                </p>
                <button className="btn btn-outline-secondary fw-bold">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/2196602/pexels-photo-2196602.jpeg"
                className="card-img-top"
                alt="React Development"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Nearest beach</h5>
                <p className="card-text text-secondary">
                  Administratively it belongs to the Diu district of the Dadra
                  and Nagar Haveli and Daman and Diu union territory of India,
                  both Damaon and Diu share the same elected representative as
                  the member of parliament.
                </p>
                <button className="btn btn-outline-secondary fw-bold">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg"
                className="card-img-top"
                alt="SEO Friendly"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold ">Fortim do Mar</h5>
                <p className="card-text text-secondary">
                  Built right at the mouth of the creek, the fortress of Fortim
                  do Mar (meaning Sea Fort in English or Pani-Kotha in Gujarati)
                  is a stone structure in the sea. Approximately one nautical
                  mile (1.852 km) from the Diu jetty, it also has a lighthouse
                  and a small chapel dedicated to Our Lady of the Sea.
                </p>
                <button className="btn btn-outline-secondary fw-bold">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div
            className="d-flex align-items-center text-white text-center mt-5"
            style={{
              height: "80vh",
              backgroundImage:
                "url('https://images.pexels.com/photos/906023/pexels-photo-906023.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container"></div>
          </div>

          <div className="col-md-4 mt-5">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg"
                className="card-img-top"
                alt="Web Design"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">General Island Serenity</h5>
                <p className="card-text text-secondary">
                  a small, historically rich island off the Gujarat coast,
                  famous for its Portuguese colonial past, beautiful beaches
                  like Nagoa, historic Diu Fort, and unique blend of Indian and
                  Portuguese cultures, offering a tranquil escape with sun,
                  sand, and history.
                </p>
                <button className="btn btn-outline-secondary fw-bold">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className="card h-100">
              <img
                src="
                            https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="Web Design"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Beauty Of Island </h5>
                <p className="card-text text-secondary">
                  Throughout the 15th century, especially under Muzaffar Han,
                  Diu flourished as a major port of the Gujarati state, with a
                  notable fleet. From 1510, it became the seat of the governors
                  of Surat. In 1535, the viceroy.
                </p>
                <button className="btn btn-outline-secondary fw-bold">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/2365700/pexels-photo-2365700.jpeg"
                className="card-img-top"
                alt="Web Design"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Breathe in the island air
                </h5>
                <p className="card-text text-secondary">
                  The Diu Fort is administered by the Government of India. The
                  fort was built by the Portuguese during their colonial rule of
                  the Diu island. The town of Diu is located to the west of the
                  fort.
                </p>
                <button className="btn btn-outline-secondary fw-bold">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT FORM */}
      <div className="container mt-5">
        <h2 className="text-center text-secondary mt-5">Contact Us</h2>

        <form className="w-50 mx-auto mt-3">
          <input className="form-control mb-2" placeholder="Name" />
          <input className="form-control mb-2" placeholder="Email" />
          <input className="form-control mb-2" placeholder="Address" />
          <textarea
            className="form-control mb-2"
            placeholder="Message"
          ></textarea>
          <button className="btn btn-success w-100 bg-secondary">Send</button>
        </form>
      </div>

      <div
        className="d-flex align-items-center text-white text-center mt-5"
        style={{
          height: "80vh",
          backgroundImage:
            "url('https://images.pexels.com/photos/8828674/pexels-photo-8828674.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container"></div>
      </div>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center p-5">
        © 2026 DiuIslands | All Rights Reserved
      </footer>
    </>
  );
}
