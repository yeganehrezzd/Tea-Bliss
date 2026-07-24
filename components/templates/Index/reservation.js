import { useState } from "react";

function Reservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [person, setPerson] = useState("");

  const addReserve = async (event) => {
    event.preventDefault();
    const reserve = {
      name,
      email,
      date,
      time,
      person,
    };
    const res = await fetch("http://localhost:4000/reserve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reserve),
    });
    if (res.status === 201) {
      setName("");
      setEmail("");
      setDate("");
      setTime("");
      setPerson("");
      alert("Your reservation has been submitted successfully!");
    }
  };

  return (
    <div class="container-fluid my-5">
      <div class="container">
        <div class="custom-radius reservation position-relative overlay-top overlay-bottom">
          <div class="row align-items-center">
            <div class="col-lg-6 my-5 my-lg-0">
              <div class="p-5">
                <div class="mb-4">
                  <h1 class="display-3 text-primary">20% OFF</h1>
                  <h1 class="text-white">For Your First Tea Tasting</h1>
                </div>
                <p class="text-white">
                  Experience the rich flavors of our signature herbal teas in a
                  relaxing atmosphere. Book your tea tasting today and enjoy a
                  special discount on your first visit.
                </p>
                <ul class="list-inline text-white m-0">
                  <li class="py-2">
                    Premium Herbal Blends
                  </li>
                  <li class="py-2">
                   Organic Ingredients
                  </li>
                  <li class="py-2">
                    Peaceful Tea Experience
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="custom-radius text-center p-5"
                style={{ background: "rgba(51, 33, 29, .8)" }}
              >
                <h1 class="text-white mb-4 mt-5">Reserve Your Tea Tasting</h1>
                <form class="mb-5">
                  <div class="form-group">
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      type="text"
                      class="form-control bg-transparent border-primary p-4"
                      placeholder="Full Name"
                      required="required"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      type="email"
                      class="form-control bg-transparent border-primary p-4"
                      placeholder="Email Address"
                      required="required"
                    />
                  </div>
                  <div class="form-group">
                    <div class="date" id="date" data-target-input="nearest">
                      <input
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                        type="text"
                        class="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Preferred Date"
                        data-target="#date"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="time" id="time" data-target-input="nearest">
                      <input
                        value={time}
                        onChange={(event) => setTime(event.target.value)}
                        type="text"
                        class="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Preferred Time"
                        data-target="#time"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <select
                      value={person}
                      onChange={(event) => setPerson(event.target.value)}
                      class="custom-select bg-transparent border-primary px-4"
                      style={{ height: "49px" }}
                    >
                      <option selected="">Person</option>
                      <option value="1">Person 1</option>
                      <option value="2">Person 2</option>
                      <option value="3">Person 3</option>
                      <option value="3">Person 4</option>
                    </select>
                  </div>

                  <div>
                    <button
                      class="btn btn-primary btn-block font-weight-bold py-3"
                      type="submit"
                      id="book"
                      onClick={addReserve}
                    >
                      Reserve Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
