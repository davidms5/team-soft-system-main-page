import { useState } from "react";
import { SectionTitle } from "@/styles/GlobalComponents";
import { ButtonForm, ContactMeContainer, DivSuccess } from "./FooterStyles";

const ContactForm = () => {

    const [contactForm, setContactForm] = useState({
        Name: "",
        email: "",
        message: "",
        //poner otro campo tipo where did you hear about us?
    });

    const [isValidEmail, setIsValidEmail] = useState(true);

    const [successMessage, setSuccessMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState({
      Name:"",
      message:""
    });

  

    const handleEmailChange = (e) => {

      const inputEmail = e.target.value;

      setContactForm(prevValue => ({...prevValue, email: inputEmail}));
      // Custom email validation logic
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailRegex.test(inputEmail));
    };
  
    const handleChange = (e) => {
      const {name, value} = e.target;
      setContactForm(prevValue => ({...prevValue, [name]: value}))

      if(name === "Name" && value !== "") setErrorMessage(preValue => ({...preValue, Name:""}))

      if(name === "message" && value !== "") setErrorMessage(preValue => ({...preValue, message:""}))
      
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!isValidEmail) {
          console.log('Invalid email. Please enter a valid email address.');
          return;
        };

        if(!contactForm.Name.trim()) {
            setErrorMessage(preValue => ({...preValue, Name:"A name is required"}));
            return;
        };
        
        if(!contactForm.message.trim()) {
          setErrorMessage(preValue => ({...preValue, message:"the message cannot be empty"}));
          return;
      };
        
        try {
          const response = await fetch("/api/send", {
            method:"POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactForm)
          });

          if (response.ok) {
            // Handle successful submission
            console.log('Form submitted successfully!');

            setSuccessMessage('Form submitted successfully!');

        // Clear the success message after 3 seconds
            setTimeout(() => {
              setSuccessMessage('');
              
            }, 3000);
          } else {
            // Handle submission error
            console.error('Failed to submit form.');
          };

        } catch (error) {
           // Handle any unexpected errors
          console.error('Error during form submission:', error);
        }

    };

    return (
      <div style={{display: "flex", alignItems:"center", justifyContent: "center"}}>
        <ContactMeContainer>
        <SectionTitle id='contact'>contact us</SectionTitle>
        <form style={{display:"flex", flexDirection: "column"}} onSubmit={handleSubmit}>
        {/*arreglar el tema de width aqui */}
          <div style={{display: "flex", marginBottom: "20px"}}>
      <label>
        Name:
        </label>
        <input style={{marginRight:"10px"}} type="text" value={contactForm.Name} name="Name" onChange={handleChange} />
        
      
      <label>
        Email:
        </label>
        <input type="email" name="email" value={contactForm.email} onChange={handleEmailChange} style={{ borderColor: isValidEmail ? 'initial' : 'red' }} />
      
        </div>
      <label>
        Message:
        </label>
        <textarea style={{width:"100%", boxSizing: "border-box", padding: "10px", height: "100px"}} name="message" value={contactForm.message} onChange={handleChange} />
        {errorMessage.message && <span style={{color: "red"}} className="error-message">{errorMessage.message}</span>}
        {errorMessage.Name && <span style={{color: "red"}} className="error-message">{errorMessage.Name}</span>}
      <br/>
      {!isValidEmail && <p style={{ color: 'red' }}>Invalid email. Please enter a valid email address.</p>}
      {successMessage && (
        <DivSuccess className="success-message" >
          <p>{successMessage}</p>
        </DivSuccess>
      )}
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>

      
      <br/>
      <ButtonForm type="submit">Submit</ButtonForm>
      </div>
         </form>
        </ContactMeContainer>

        </div>
    )
}

export default ContactForm;