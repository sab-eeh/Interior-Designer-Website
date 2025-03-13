import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white w-full px-14 py-16 flex gap-28">
        <div className="w-[auto] space-y-3">
          <h1 className="text-amber-200 font-bold text-xl tracking-wider">
            ABOUT
          </h1>
          <p>
            We offer services that cover the entire design and build of a
            project including architecture, interior design and project
            management. Clients can pick from our individual services or opt for
            a complete package covering a project from start to finish.
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="text-amber-200 font-bold text-xl tracking-wider">
            LINKS
          </h1>
          <div className="flex-col">
            <a className="block tracking-wider" href="">
              HOME
            </a>
            <a className="block tracking-wider" href="">
              ABOUT US
            </a>
            <a className="block tracking-wider" href="">
              PORTFOLIO
            </a>
            <a className="block tracking-wider" href="">
              GALLERY
            </a>
            <a className="block tracking-wider" href="">
              CONTACT
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-amber-200 font-bold text-xl tracking-wider">
            SERVICES
          </h1>
          <div>
            <a className="block tracking-wider" href="">
              ARCHITECTURE
            </a>
            <a className="block tracking-wider" href="">
              INTERIOR DESIGN
            </a>
            <a className="block tracking-wider" href="">
              PROJECT MANAGEMENT
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-amber-200 font-bold text-xl tracking-wider">
            GET IN TOUCH
          </h1>
          <div>
            <p>+92 331 290 4878</p>
            <p className="text-amber-200">info@wajeehdesigner.com</p>
          </div>
        </div>
      </footer>
      <footer className="bg-[#121212] text-white text-center py-4">
        <p>
          &copy; {new Date().getFullYear()} All rights
          reserved | <a className="text-amber-200" href="">Wajeeh Space Design</a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
