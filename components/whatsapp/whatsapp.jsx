import React from 'react';
import Image from 'next/image';
import styles from './whatsapp.module.css';

const WhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919447536644'; // Replace with your WhatsApp number
    const text = 'Hello Goec'; // Replace with your desired message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <a href="#" onClick={handleWhatsAppClick} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
      {/* Image component for WhatsApp icon */}
      <div className={styles.whatsappIcon}>
        <Image src="/images/icons/whatsapp.png" alt="" width={30} height={30} />
      </div>
    </a>
  );
};

export default WhatsApp;
