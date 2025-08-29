import "./Contact.css";
import React from "react";
import Encabezado from "../Components/Encabezado/Encabezado";
import ContactInformation from "./ContactInformation/ContactInformation";

export default function Contact() {
  return (
    <div className="contact-main" id="contact">
      <Encabezado
        title="My"
        span="Contact"
        description="Puedes contactarme a través de mis redes o enviarme un mensaje directo"
      />
      <div className="contact">
        <div className="infoo">
          <h2>Información de contacto</h2>
          <div className="contact-information">
            <ContactInformation
              iconContact="Email"
              iconName="mail-outline"
              myContact="rafael.chu.l@uni.pe"
            />
            <ContactInformation
              iconContact="Teléfono"
              iconName="call-outline"
              myContact="+51 948 497 266"
            />
            <ContactInformation
              iconContact="Ubicación"
              iconName="location-outline"
              myContact="Lima, Perú"
            />
          </div>
          <h3>Sígueme en redes sociales</h3>
          <div className="social-icons">
            <a href="#"><ion-icon name="logo-github"></ion-icon></a>
            <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
          </div>
        </div>

        <div className="send-message">
          <h2>Envíame un mensaje</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Nombre *" />
              <input type="email" placeholder="Email *" />
            </div>
            <textarea rows="5" placeholder="Cuéntame sobre tu proyecto o idea..." />
            <button type="submit">
              Enviar mensaje <ion-icon name="send-outline"></ion-icon>
            </button>
          </form>
          <p className="nota">
            También puedes contactarme directamente por email o teléfono. Te responderé lo antes posible, generalmente en menos de 24 horas.
          </p>
        </div>
      </div>
    </div>
  );
}
