import React from 'react';
import '../Style/BookTable.css';

function BookTable() {
  return (
    <section class="form" data-aos="fade-up">
    <div class="container">

    <div class="BookTable">
    <h3>BookTable</h3>
       </div>

      <div class="form__wrapper">

        <form name="booking" method="POST" netlify>
          <div class="form__group">
            <label for="firstName">First Name</label>
            <input type="text"  name="First Name" required/>
          </div>

          <div class="form__group">
            <label for="lastName">Last Name</label>
            <input type="text"  name="Last Name" required/>
          </div>

          <div class="form__group">
            <label for="email">Email</label>
            <input type="email"  name="Email" required/>
          </div>

          <div class="form__group">
            <label for="Locations">Which location</label>
            <select name="Locations" required>
               <option value="english village">English Village</option>
                <option value="ankawa">Ankawa</option>
                <option value="pirmam">Pirmam District</option>
                <option value="esport">Esporta Building</option>
               <option value="parkview">Park View</option>
               <option value="suleymaniyah">SULEYMANIYAH,Magma Square</option>
                <option value="baghdad">Baghdad,Mansour Mall</option>
            </select>
          </div>
          <div class="form__group">
            <label for="guestNumber">Guest Number</label>
            <input type="number"  name="Guest Number" min="1" max="10" required/>
          </div>
          <div class="form__group">
            <label for="placement">Placement</label>
            <select name="Placement" id="placement">
              <option selected disabled>Choose</option>
              <option value="outdoor">Outdoor</option>
              <option value="indoor">Indoor</option>
              <option value="rooftop">Rooftop</option>
            </select>
          </div>
          <div class="form__group">
            <label for="date">Date</label>
            <input type="date" id="date" name="Date" required/>
          </div>
          <div class="form__group">
            <label for="time">Time</label>
            <input type="time"  name="Time" required/>
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

export default BookTable;