import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-pink-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-black">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-black">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex">
              <button
                className="bg-yellow-100 text-black shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              ><img
              src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
              />
              </button>
              <button
                className="bg-yellow-100 text-black shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
              <img src="https://img.icons8.com/?size=100&id=13912&format=png&color=000000" 
              />
              </button>
              <button
                className="bg-yellow-100 text-black shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <img src="https://img.icons8.com/?size=100&id=I24lanX6Nq71&format=png&color=000000"
                />
              </button>
              <button
                className="bg-yellow-100 text-black shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <img src="https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png&color=000000"
                />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-black text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Blog
                    </a>
                  </li>
                  
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-black text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us?ref=njs-profile"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <hr className="my-6 border-black" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-black font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-black hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                fiore
              </a>{' '}
              all 
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-black hover:text-black"
              >
                {' '}
                rights are reserved
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
