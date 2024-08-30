import { useState, useRef, useEffect } from "react";

function App() {
    const [firstName, setFirstName] = useState(null);
    const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
    const [SecondName, setSecondName] = useState(null);
    const [isSecondNameEmpty, setIsSecondNameEmpty] = useState(false);
    const [email, setEmail] = useState(null);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [type, setType] = useState("");
    const [isTypeEmpty, setIsTypeEmpty] = useState(false);
    const [message, setMessage] = useState(null);
    const [isMessageEmpty, setIsMessageEmpty] = useState(false);
    const [checked, setChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const formRef = useRef(0);

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            {isSubmitted && <SuccessState />}
            <div className="app">
                <h1 className="header">Contact Us</h1>
                <Form
                    setFirstName={setFirstName}
                    setSecondName={setSecondName}
                    setEmail={setEmail}
                    setType={setType}
                    setChecked={setChecked}
                    handleSubmit={handleSubmit}
                    formRef={formRef}
                    isFirstNameEmpty={isFirstNameEmpty}
                    isSecondNameEmpty={isSecondNameEmpty}
                    isEmailEmpty={isEmailEmpty}
                    isTypeEmpty={isTypeEmpty}
                    isMessageEmpty={isMessageEmpty}
                    isChecked={isChecked}
                    type={type}
                    checked={checked}
                />
            </div>
        </>
    );
}

function Form({
    setFirstName,
    isFirstNameEmpty,
    isSecondNameEmpty,
    isEmailEmpty,
    isTypeEmpty,
    isMessageEmpty,
    isChecked,
    setSecondName,
    setEmail,
    setType,
    setChecked,
    handleSubmit,
    formRef,
    type,
    checked
}) {
    return (
        <form onSubmit={handleSubmit} ref={formRef}>
            <div className="names">
                <div className={`first__name ${isFirstNameEmpty ? "error" : ""}`}>
                    <label for="first" className="labels">First Name <span className="required">*</span></label>
                    <input type="text" name="first" autoComplete="false" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                {isFirstNameEmpty ? <span className="error">This field is required</span> : ""}
                <div className={`second__name ${isSecondNameEmpty ? "error" : ""}`}>
                    <label for="second" className="labels">Second Name <span className="required">*</span></label>
                    <input type="text" name="second" autoComplete="false" onChange={(e) => setSecondName(e.target.value)} />
                </div>
                {isSecondNameEmpty ? <span className="error">This field is required</span> : ""}
            </div>
            <div className={`mail ${isEmailEmpty ? "error" : ""}`}>
                <label for="mail" className="labels">Email Address <span className="required">*</span></label>
                <input type="text" name="mail" autoComplete="false" onChange={(e) => setEmail(e.target.value)} />
            </div>
            {isEmailEmpty ? <span className="error">This field is required</span> : ""}
            <div className="radio__btn">
                <label className="labels">Query Type <span className="required">*</span></label>
                <div className="btns">
                    <div className={`Enquiry ${type === 'enquiry' ? "enquiry__selected" : ""}`}>
                        <label className="radio__label">
                            <input
                                type="radio"
                                name="enquiry"
                                value="enquiry"
                                onChange={(e) => setType(e.target.value)}
                            />
                            General Enquiry
                        </label>
                    </div>
                    <div className={`Request ${type === 'request' ? "request__selected" : ""}`}>
                        <label className="radio__label">
                            <input
                                type="radio"
                                name="request"
                                value="request"
                                onChange={(e) => setType(e.target.value)}
                            />
                            Support Request
                        </label>
                    </div>
                </div>
            </div>
            {isTypeEmpty ? <span className="error">Please select a query type</span> : ""}
            <div className="message">
                <label for="message" className="labels">Message <span className="required">*</span></label>
                <textarea
                    name="message"
                    rows="4"
                    cols="33"
                    autoComplete="off"
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            {isMessageEmpty ? <span className="error">Please select a query type</span> : ""}
            <div className="check">
                <label class="check__container">
                    <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                    <span class="checkmark"></span>
                    I consent to being contacted by the team
                </label>
            </div>
            {isChecked ? (
                <span className="error">You must agree to the terms</span>
            ) : null}
            <button type="submit" className="btn__submit">Submit</button>
        </form>
    );
}

function SuccessState() { }

export default App;
