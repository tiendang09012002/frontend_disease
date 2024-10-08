import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <div className="header_top">
            <div className="container">
              <div className="contact_nav">
                <a href>
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>Call : +01 123455678990</span>
                </a>
                <a href>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <span>Email : demo@gmail.com</span>
                </a>
                <a href>
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <span>Location</span>
                </a>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="/">
                  <img src="images/logo.png" alt />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className> </span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="/">
                          Trang Chủ <span className="sr-only">(hiện tại)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">
                          Giới Thiệu
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/treatment">
                          Điều Trị
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/doctor">
                          Bác Sĩ
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                          Liên Hệ
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="quote_btn-container">
                    <a href>
                      <i className="fa fa-user" aria-hidden="true" />
                      <span>Đăng Nhập</span>
                    </a>
                    <a href>
                      <i className="fa fa-user" aria-hidden="true" />
                      <span>Đăng Ký</span>
                    </a>
                    <form className="form-inline">
                      <button
                        className="btn my-2 my-sm-0 nav_search-btn"
                        type="submit"
                      >
                        <i className="fa fa-search" aria-hidden="true" />
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {/* end header section */}
        {/* slider section */}
        <section className="slider_section ">
          <div className="dot_design">
            <img src="images/dots.png" alt />
          </div>
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <div className="play_btn">
                          <button>
                            <i className="fa fa-play" aria-hidden="true" />
                          </button>
                        </div>
                        <h1>
                          Bệnh Viện <br />
                          <span>Mico</span>
                        </h1>
                        <p>
                          Khi xem xét cách bố trí của nó. Điểm đặc biệt của việc
                          sử dụng Lorem Ipsum là nó có sự phân bố các ký tự gần
                          như bình thường, thay vì
                        </p>
                        <a href>Liên Hệ Chúng Tôi</a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.jpg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <div className="play_btn">
                          <button>
                            <i className="fa fa-play" aria-hidden="true" />
                          </button>
                        </div>
                        <h1>
                          Bệnh Viện <br />
                          <span>Mico</span>
                        </h1>
                        <p>
                          Khi xem xét cách bố trí của nó. Điểm đặc biệt của việc
                          sử dụng Lorem Ipsum là nó có sự phân bố các ký tự gần
                          như bình thường, thay vì
                        </p>
                        <a href>Liên Hệ Chúng Tôi</a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.jpg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <div className="play_btn">
                          <button>
                            <i className="fa fa-play" aria-hidden="true" />
                          </button>
                        </div>
                        <h1>
                          Bệnh Viện <br />
                          <span>Mico</span>
                        </h1>
                        <p>
                          Khi xem xét cách bố trí của nó. Điểm đặc biệt của việc
                          sử dụng Lorem Ipsum là nó có sự phân bố các ký tự gần
                          như bình thường, thay vì
                        </p>
                        <a href>Liên Hệ Chúng Tôi</a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.jpg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-box">
              <a
                className="carousel-control-prev"
                href="#customCarousel1"
                role="button"
                data-slide="prev"
              >
                <img src="images/prev.png" alt />
                <span className="sr-only">Trước</span>
              </a>
              <a
                className="carousel-control-next"
                href="#customCarousel1"
                role="button"
                data-slide="next"
              >
                <img src="images/next.png" alt />
                <span className="sr-only">Tiếp Theo</span>
              </a>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
    </>
  );
};
export default Header;
