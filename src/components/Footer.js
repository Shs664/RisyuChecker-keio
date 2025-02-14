import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed-bottom text-center bg-white py-3">
      <Container className="footer-container">
        <p id="copyright" className="m-0">
          © {currentYear} 取得単位数抽出ツール. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
