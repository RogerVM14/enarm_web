import React from 'react';
import doctorImage from '../assets/imgs/Dres/doctor_senalando.png';
import { frameIcons } from '../utils/FrameIcons';

const ModalContact = (props) => {

  const contacts = [
    { id: 0, icon: frameIcons.phone, isLink: false, title: "Informes", subtitle: "444 509 0543" },
    { id: 1, icon: frameIcons.emergency, isLink: false, title: "Urgencias", subtitle: "444 670 5090" },
    { id: 2, icon: frameIcons.inbox, isLink: true, title: "Inbox", subtitle: "https://m.me/1818426895148234?ref=Welcome%20Message" },
    { id: 3, icon: frameIcons.whatsapp, isLink: true, title: "WhatsApp", subtitle: "https://wa.me/message/FSXX6B5U7XDWF1" },
    { id: 4, icon: frameIcons.pinterest, isLink: true, title: "Pinterest", subtitle: "https://pin.it/1UbrEA8" },
    { id: 5, icon: frameIcons.twitter, isLink: true, title: "Twitter", subtitle: "https://twitter.com/EnarMoficial?s=09" },
    { id: 6, icon: frameIcons.email, isLink: false, title: "Corréo Electrónico", subtitle: "plataformaenarm@gmail.com" }
  ]

  return (
    <div className='modal-contact'>
      <div className="modal-contact-container">
        <div className="left">
          <div className="left-image" style={{ backgroundImage: `url('${doctorImage}')` }}></div>
        </div>
        <div className="right">
          <h1 className='semibold-24'>También puedes contactarnos por:</h1>
          {
            contacts.map((item, index) => {
              return (
                <div key={index}>
                  <div className="icon-contact">
                    <img className="modal-contact-icon" src={item.icon} alt="icon" />
                  </div>
                  <div className="info-contact">
                    <h1 className='semibold-16'>{item.title}</h1>
                    {
                      item?.isLink ? (
                        <a className='regular-14 gray-textColor noDecor' href={item.subtitle} target="_blank" rel='noreferrer'>{item.subtitle}</a>
                      ) : (<h3 className='regular-14 gray-textColor'>{item.subtitle}</h3>)
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <span className='contact-close-modal' onClick={(e) => props.closeModal(e)}></span>
    </div>
  )
}

export default ModalContact;