import "./ContactInformation.css";

export default function ContactInformation({iconContact, iconName, myContact}) {
    console.log("Recibí iconName:", iconName);
    return (
        <div className="contact-info">
            <ion-icon name={iconName}></ion-icon>
            <div className="contactt">
                <h3>{iconContact}</h3>
                <p>{myContact}</p>
            </div>
        </div>
    )
}