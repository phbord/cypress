import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const inputName = useRef(null)
  const inputCountry = useRef(null)
  const [isNotValidatedName, setIsNotValidatedName] = useState(false)
  const [isNotValidatedCountry, setIsNotValidatedCountry] = useState(false)

  const handleSubmit = (e, url) => {
    e.preventDefault()
    
    if (inputName.current.value && inputCountry.current.value) {
      navigate(url)
    }
    if (!inputName.current.value) {
      setIsNotValidatedName(true)
    }
    if (!inputCountry.current.value) {
      setIsNotValidatedCountry(true)
    }
  }

  return (
    <>
      <h4 className="mb-3">Informations</h4>
      {/* FORMULAIRE */}
      <form className="needs-validation" 
            onSubmit={(e) => handleSubmit(e, '/modal-page')}>
        <div className="row g-3">
          {/* Input Name */}
          <div className="col-sm-6">
            <label htmlFor="firstName" className="form-label">Name</label>
            <input type="text" className="form-control" id="firstName" ref={inputName} />
            {
              isNotValidatedName && (
                <div className="invalid-feedback d-block" id="firstNameErr">
                  Valid first name is required.
                </div>
              )
            }
          </div>
          {/* Input Country */}
          <div className="col-md-5">
            <label htmlFor="country" className="form-label">Country</label>
            <select className="form-select" id="country" ref={inputCountry}>
              <option value="">Choose...</option>
              <option value="usa">United States</option>
              <option value="fr">France</option>
            </select>
            {
              isNotValidatedCountry && (
                <div className="invalid-feedback d-block" id="countryErr">
                  Please select a valid country.
                </div>
              )
            }
          </div>
        </div>
        {/* Submit Button */}
        <button className="w-100 btn btn-primary btn-lg mt-4" 
                type="submit">Continue to checkout</button>
      </form>
      {/* FORMULAIRE - end */}
    </>
  )
}

export default Home