import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer text-light text-center py-6 text-sm backdrop-blur-sm ">
      <p>Designed and built by Sameer Jha</p>
      <p>&copy; {new Date().getFullYear()} Sameer Jha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
