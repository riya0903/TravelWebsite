import "./ContactFormStyles.css";
function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send Message</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>SEND</button>
      </form>
    </div>
  );
}
export default ContactForm;
