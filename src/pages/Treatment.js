const Treatment = () => {
  return (
    <div>
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
    </div>
  );
};
export default Treatment;
