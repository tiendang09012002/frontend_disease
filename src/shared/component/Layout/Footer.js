import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      &lt;&gt;
      <section className="info_section">
        <div className="container">
          <div className="info_top">
            <div className="info_logo">
              <a href>
                <img src="images/logo.png" alt />
              </a>
            </div>
            <div className="info_form">
              <form action>
                <input type="email" placeholder="Email của bạn" />
                <button>Đăng Ký</button>
              </form>
            </div>
          </div>
          <div className="info_bottom layout_padding2">
            <div className="row info_main_row">
              <div className="col-md-6 col-lg-3">
                <h5>Địa chỉ</h5>
                <div className="info_contact">
                  <a href>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>Vị trí</span>
                  </a>
                  <a href>
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span>Gọi +01 1234567890</span>
                  </a>
                  <a href>
                    <i className="fa fa-envelope" />
                    <span>demo@gmail.com</span>
                  </a>
                </div>
                <div className="social_box">
                  <a href>
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href>
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href>
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                  <a href>
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="info_links">
                  <h5>Liên kết hữu ích</h5>
                  <div className="info_links_menu">
                    <a className="active" href="index.html">
                      Trang chủ
                    </a>
                    <a href="about.html">Giới thiệu</a>
                    <a href="treatment.html">Dịch vụ điều trị</a>
                    <a href="doctor.html">Bác sĩ</a>
                    <a href="testimonial.html">Đánh giá</a>
                    <a href="contact.html">Liên hệ</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="info_post">
                  <h5>BÀI VIẾT MỚI NHẤT</h5>
                  <div className="post_box">
                    <div className="img-box">
                      <img src="images/post1.jpg" alt />
                    </div>
                    <p>Phân phối chuẩn</p>
                  </div>
                  <div className="post_box">
                    <div className="img-box">
                      <img src="images/post2.jpg" alt />
                    </div>
                    <p>Phân phối chuẩn</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="info_post">
                  <h5>Tin tức</h5>
                  <div className="post_box">
                    <div className="img-box">
                      <img src="images/post3.jpg" alt />
                    </div>
                    <p>Phân phối chuẩn</p>
                  </div>
                  <div className="post_box">
                    <div className="img-box">
                      <img src="images/post4.png" alt />
                    </div>
                    <p>Phân phối chuẩn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* kết thúc phần thông tin */}
      {/* phần chân trang */}
      <footer className="footer_section">
        <div className="container">
          <p>
            
          </p>
        </div>
      </footer>
      {/* kết thúc phần chân trang */}
    </div>
  );
};
export default Footer;
