const Contact = () => {
  return (
    <div>
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
      {/* end contact section */};
    </div>
  );
};
export default Contact;
