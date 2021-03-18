import React, { useState } from "react";

function Contact() {

const [data , setData] = useState({
    fullname:"",
    email:"",
    phone:"",
    textarea:"",
});

const formSubmit = () =>{

};

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  value={data.email}

                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  name="textarea"
                  value={data.textarea}
                  onChange={InputEvent}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="mb-3">
                <input class="form-control" value="submit" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
