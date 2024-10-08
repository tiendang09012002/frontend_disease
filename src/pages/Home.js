import { getAllSymtoms, diagnoseDisease } from "../services/Api";
import React, { useEffect, useState } from "react";
const Home = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [diseaseInfo, setDiseaseInfo] = useState(null); // State lưu trữ thông tin bệnh sau khi chẩn đoán

  console.log(selectedSymptoms);

  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setSelectedSymptoms((prev) => [...prev, id]);
    } else {
      setSelectedSymptoms((prev) => prev.filter((itemId) => itemId !== id));
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Kiểm tra xem người dùng đã chọn triệu chứng chưa
    if (selectedSymptoms.length === 0) {
      alert("Vui lòng chọn ít nhất một triệu chứng.");
      return;
    }
  
    // Gọi API và truyền object chứa triệu chứng
    await diagnoseDisease({ symptoms: selectedSymptoms })
      .then((res) => {
        console.log(res);
  
        // Kiểm tra xem dữ liệu trả về có tồn tại không
        if (res.data && res.data.diseases && res.data.diseases.length > 0) {
          // Có thể hiển thị thêm thông tin bệnh tại đây, ví dụ:
          setDiseaseInfo(res.data.diseases);
        } else {
          alert("Không tìm thấy bệnh phù hợp.");
        }
      })
      .catch((error) => {
        console.error("Đã xảy ra lỗi:", error);
        alert("Đã xảy ra lỗi khi gửi yêu cầu.");
      });
  };
  
  useEffect(() => {
    getAllSymtoms().then((res) => {
      setSymptoms(res.data);
    });
  }, []);
  return (
    <div>
      {/* book section */}
      <section className="book_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <form id="form_disease">
              <h4>
                DISEASE <span>DIAGNOSIS</span>
              </h4>

              {/* Hiển thị thông tin bệnh nếu có, nếu không thì hiển thị triệu chứng */}
              {!diseaseInfo ? (
                <>
                  <h4>Chọn triệu chứng:</h4>
                  <div className="row">
                    {symptoms && symptoms.length > 0 ? (
                      symptoms.map((item) => (
                        <div className="col-md-2" key={item._id}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={item.name}
                              id={`symptom${item._id}`}
                              onChange={(event) =>
                                handleCheckboxChange(event, item._id)
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`symptom${item._id}`}
                            >
                              {item.name}
                            </label>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No symptoms available</p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Hiển thị thông tin bệnh */}
                  <h4>Kết quả chẩn đoán bệnh:</h4>
                  <div className="row">
                    {diseaseInfo.map((disease, index) => (
                      <div className="col-md-12" key={index}>
                        <h5>{disease.disease}</h5>
                        <p><strong>Mô tả:</strong> {disease.description}</p>
                        <p><strong>Phương pháp điều trị:</strong> {disease.treatment}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Căn giữa nút ở dưới cùng của form */}
              {!diseaseInfo && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <button
                    type="submit"
                    id="submit_disease"
                    className="btn btn-primary"
                    onClick={(event) => handleSubmit(event)}
                  >
                    Gửi
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
      {/* end book section */}
      {/* about section */}
      <section className="about_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.jpg" alt />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    Về <span>Bệnh Viện</span>
                  </h2>
                </div>
                <p>
                  có sự phân bố các ký tự gần như bình thường, thay vì sử dụng
                  'Nội dung ở đây, nội dung ở đây', khiến nó trông giống như
                  tiếng Anh dễ đọc. Nhiều gói phần mềm xuất bản trên máy tính và
                  trình chỉnh sửa trang web có sự phân bố các ký tự gần như bình
                  thường, thay vì sử dụng 'Nội dung ở đây, nội dung ở đây',
                  khiến nó trông giống như tiếng Anh dễ đọc. Nhiều gói phần mềm
                  xuất bản trên máy tính và trình chỉnh sửa trang web.
                </p>
                <a href>Đọc Thêm</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
      {/* treatment section */}
      <section className="treatment_section layout_padding">
        <div className="side_img">
          <img src="images/treatment-side-img.jpg" alt />
        </div>
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Điều Trị Tại <span>Bệnh Viện</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="box ">
                <div className="img-box">
                  <img src="images/t1.png" alt />
                </div>
                <div className="detail-box">
                  <h4>Chăm Sóc Thận</h4>
                  <p>
                    thay đổi dưới một hình thức nào đó, bởi sự hài hước hoặc các
                    từ ngẫu nhiên không hề giống nhau, đảm bảo rằng không có bất
                    cứ điều gì.
                  </p>
                  <a href>Đọc Thêm</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box ">
                <div className="img-box">
                  <img src="images/t2.png" alt />
                </div>
                <div className="detail-box">
                  <h4>Chăm Sóc Mắt</h4>
                  <p>
                    thay đổi dưới một hình thức nào đó, bởi sự hài hước hoặc các
                    từ ngẫu nhiên không hề giống nhau, đảm bảo rằng không có bất
                    cứ điều gì.
                  </p>
                  <a href>Đọc Thêm</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box ">
                <div className="img-box">
                  <img src="images/t3.png" alt />
                </div>
                <div className="detail-box">
                  <h4>Phòng Khám Nhi Khoa</h4>
                  <p>
                    thay đổi dưới một hình thức nào đó, bởi sự hài hước hoặc các
                    từ ngẫu nhiên không hề giống nhau, đảm bảo rằng không có bất
                    cứ điều gì.
                  </p>
                  <a href>Đọc Thêm</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box ">
                <div className="img-box">
                  <img src="images/t4.png" alt />
                </div>
                <div className="detail-box">
                  <h4>Chăm Sóc Cha Mẹ</h4>
                  <p>
                    thay đổi dưới một hình thức nào đó, bởi sự hài hước hoặc các
                    từ ngẫu nhiên không hề giống nhau, đảm bảo rằng không có bất
                    cứ điều gì.
                  </p>
                  <a href>Đọc Thêm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end treatment section */}
      {/* team section */}
      <section className="team_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>Doctors</span>
            </h2>
          </div>
          <div className="carousel-wrap ">
            <div className="owl-carousel team_carousel">
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="../../../public/images/team1.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <h5>Hennry</h5>
                    <h6>MBBS</h6>
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
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/team2.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <h5>Jenni</h5>
                    <h6>MBBS</h6>
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
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/team3.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <h5>Morco</h5>
                    <h6>MBBS</h6>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end team section */}
      {/* client section */}
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              <span>Đánh Giá Khách Hàng</span>
            </h2>
          </div>
        </div>
        <div className="container px-0">
          <div
            id="customCarousel2"
            className="carousel  carousel-fade"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="box">
                  <div className="client_info">
                    <div className="client_name">
                      <h5>Morijorch</h5>
                      <h6>Mẫu văn bản mặc định</h6>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true" />
                  </div>
                  <p>
                    Các biên tập viên hiện nay sử dụng Lorem Ipsum như văn bản
                    mẫu mặc định, và khi tìm kiếm 'lorem ipsum' sẽ phát hiện
                    nhiều trang web vẫn còn non trẻ. Các biên tập viên hiện nay
                    sử dụng Lorem Ipsum như văn bản mẫu mặc định, và khi tìm
                    kiếm 'lorem ipsum' sẽ phát hiện nhiều trang web vẫn còn non
                    trẻ.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="client_info">
                    <div className="client_name">
                      <h5>Rochak</h5>
                      <h6>Mẫu văn bản mặc định</h6>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true" />
                  </div>
                  <p>
                    Các biên tập viên hiện nay sử dụng Lorem Ipsum như văn bản
                    mẫu mặc định, và khi tìm kiếm 'lorem ipsum' sẽ phát hiện
                    nhiều trang web vẫn còn non trẻ. Lorem Ipsum được sử dụng
                    như văn bản mẫu mặc định, và khi tìm kiếm sẽ phát hiện nhiều
                    trang web non trẻ.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="client_info">
                    <div className="client_name">
                      <h5>Brad Johns</h5>
                      <h6>Mẫu văn bản mặc định</h6>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true" />
                  </div>
                  <p>
                    Các biên tập viên hiện nay sử dụng Lorem Ipsum như văn bản
                    mẫu mặc định, và khi tìm kiếm 'lorem ipsum' sẽ phát hiện
                    nhiều trang web non trẻ. Lorem Ipsum được dùng như văn bản
                    mẫu mặc định và sẽ phát hiện nhiều trang web trong giai đoạn
                    ban đầu.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel_btn-box">
              <a
                className="carousel-control-prev"
                href="#customCarousel2"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" aria-hidden="true" />
                <span className="sr-only">Trước</span>
              </a>
              <a
                className="carousel-control-next"
                href="#customCarousel2"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" aria-hidden="true" />
                <span className="sr-only">Sau</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end client section */}
      {/* contact section */}
      <section className="contact_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Liên Hệ</h2>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="form_container">
                <form action>
                  <div>
                    <input type="text" placeholder="Họ và tên" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Số điện thoại" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Tin nhắn"
                    />
                  </div>
                  <div className="btn_box">
                    <button>GỬI</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5">
              <div className="img-box">
                <img src="images/contact-img.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end contact section */}
    </div>
  );
};
export default Home;
