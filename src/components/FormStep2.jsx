// import React from 'react'




const FormSpep2 = () => {
  return (
    <div className="container">
       <form>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            FirstName
          </label>
          <input
            type="text"
            name="firstName"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            LastName
          </label>
          <input
            type="text"
            name="lastName"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormSpep2
