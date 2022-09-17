import React from 'react';
import '../Style/BookTable.css';


function Contact() {

  return (
    <section class="form" data-aos="fade-up">
    <div class="container">



      <div class="form__wrapper">

        <form name="booking" method="POST" netlify>
          <div class="form__group">
            <label for="firstName">Your Name</label>
            <input type="text"  name="Your Name" required/>
          </div>

          <div class="form__group">
            <label for="secondtName">Second Name</label>
            <input type="text"  name="Second Name" required/>
          </div>




          <div class="form__group">
            <label for="email">Email</label>
            <input type="email"  name="Email" required/>
          </div>


          <div class="form__group">
            <label for="Type">What about</label>
            <select name="Type" required>
               <option value="english village">General</option>
                <option value="ankawa">FeedBack</option>
                <option value="pirmam">Inquiry</option>
                <option value="esport">Other..</option>
            </select>
          </div>


          <div class="form__group form__group__full">
            <label for="note">Note</label>
            <textarea name="Note"  rows="4"></textarea>
          </div>
        </form>
        <button class="btn4 mt-4">Submit</button>

      </div>
    </div>
  </section>
  )
}

export default Contact;