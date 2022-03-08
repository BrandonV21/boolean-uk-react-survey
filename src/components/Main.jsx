import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [rate, setRate] = useState("")
  const [select, setSelect] = useState("")
  const [textInput, setTextInput] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  console.log(rate, select, textInput, name, email)

  const handleSubmit = (event) => {
    event.preventDefault()
    const userData = {rate, select, textInput, name, email}
    console.log("Form submitted:", userData)
    setRate("")
    setSelect("")
    setTextInput("")
    setName("")
    setEmail("")
  }

  const handleRate = (event) => {
    const inputValue = event.target.value
    setRate(inputValue)
  }

  const handleSelect = (event) => {
    const inputValue = event.target.value
    setSelect(inputValue)
  }

  const handleTextInput = (event) => {
    const inputValue = event.target.value
    setTextInput(inputValue)
  }

  const handleName = (event) => {
    const inputValue = event.target.value
    setName(inputValue)
  }

  const handleEmail = (event) => {
    const inputValue = event.target.value
    setEmail(inputValue)
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/* <!-- Radio inputs go here --> */}
            {/* <!-- This is a radio buttons group --> */}
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" onChange={handleRate} checked={rate === "1"} />
                <label for="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={handleRate} checked={rate === "2"} />
                <label for="color-two">2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" onChange={handleRate} checked={rate === "3"} />
                <label for="color-three">3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" onChange={handleRate} checked={rate === "4"} />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* <!-- checkboxes go here --> */}
            {/* <!-- This is a checkboxes group --> */}
            <ul>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="swimming" onChange={handleSelect} checked={select === "swimming"} />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="bathing" onChange={handleSelect} checked={select === "bathing"} />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="chatting" onChange={handleSelect} checked={select === "chatting"} />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="noTime" onChange={handleSelect} checked={select === "noTime"} />I
                  don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" onChange={handleTextInput} value={textInput} ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" onChange={handleName} value={name} />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" onChange={handleEmail} value={email} />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;
