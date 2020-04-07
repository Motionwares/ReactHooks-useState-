import React from "react";

function About() {
  const [name, setName] = React.useState("");
  const [hobbies, setHobbies] = React.useState("Coding");
  const [city, setCity] = React.useState("");
  return (
    <>
      <h1 className="bg-secondary mb-0 py-2 px-5 font-weight-bold text-light">
        About Me
      </h1>
      <div className="container-fluid vh-100 bg-light">
        <div className="row">
          <div className="col-4 mx-auto">
            <div className="py-5">
              <div className="card mx-auto my-5 p-3 shadow-lg">
                <p>Name: {name}</p>
                <p>City: {city}</p>
                <p>Hobbies: {hobbies}</p>
              </div>
              <formgroup>
                <label>Name</label>
                <input
                  type="text"
                  onChange={e => setName(e.target.value)}
                  className="form-control"
                />
              </formgroup>
              <formgroup>
                <label>City</label>
                <input
                  type="text"
                  onChange={e => setCity(e.target.value)}
                  className="form-control"
                />
              </formgroup>
              <formgroup>
                <label>Hobbies</label>
                <input
                  type="text"
                  onChange={e => setHobbies(e.target.value)}
                  className="form-control"
                />
              </formgroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
