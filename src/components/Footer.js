const Footer = () => {
    return (
      <footer className="bg-[#44456d] text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Všechna práva vyhrazena. <a href="/podminky" className="text-blue-500">Podmínky</a></p>
      </footer>
    );
  };
  
  export default Footer;