import contacts from "./data";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>이메일 혹은 오픈카톡을 통해 연락주세요!</p>
      <div className="container contact__container" data-aos="fade-up">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            title={contact.title}
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
