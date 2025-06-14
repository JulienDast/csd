import React from "react";
import {Navbar, Typography, IconButton, Collapse} from "@material-tailwind/react";
import { BugAntIcon, HomeIcon, PaperAirplaneIcon, PhotoIcon } from "@heroicons/react/20/solid";
import Logo from "../../src/assets/images/logo.png";
import { Link } from "react-router-dom";

const NavbarApp = () => {
  const [openNav, setOpenNav] = React.useState(false);
  
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col items-center lg:mb-0 lg:mt-0 lg:flex-row lg:gap-10 xl:gap-20">
      <Typography
        as="li"
        variant="paragraph"
        color="white"
        className="flex items-center gap-x-2 p-1 font-medium hover:underline hover:decoration-2 hover:decoration-themeColor ease-in-out underline-offset-4" 
        placeholder="" 
        onPointerEnterCapture="" 
        onPointerLeaveCapture=""
      >
          <HomeIcon className="h-10 w-10 text-black" />
        <Link to='/'>
            ACCUEIL
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="white"
        className="flex items-center gap-x-2 p-1 font-medium hover:underline hover:decoration-2 hover:decoration-themeColor ease-in-out underline-offset-4" 
        placeholder="" 
        onPointerEnterCapture="" 
        onPointerLeaveCapture=""
      >
          <BugAntIcon className="h-10 w-10 text-black" />
        <Link to='/nuisibles'>
            LES NUISIBLES
        </Link>
      </Typography>
      <Typography
        as="li"           
        variant="paragraph"
        color="white"
        className="flex items-center gap-x-2 p-1 font-medium hover:underline hover:decoration-2 hover:decoration-themeColor ease-in-out underline-offset-4" 
        placeholder="" 
        onPointerEnterCapture="" 
        onPointerLeaveCapture=""
      >
          <PhotoIcon className="h-10 w-10 text-black" />
        <Link to='/galerie'>
            GALERIE
        </Link>
      </Typography>
      <Typography
        as="li"           
        variant="paragraph"
        color="white"
        className="flex items-center gap-x-2 p-1 font-medium hover:underline hover:decoration-2 hover:decoration-themeColor ease-in-out underline-offset-4" 
        placeholder="" 
        onPointerEnterCapture="" 
        onPointerLeaveCapture=""
      >
        <PaperAirplaneIcon className="h-10 w-10 text-black" />
        <Link to='/contact' className="flex items-center">
          CONTACT
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="w-full mx-auto px-4 py-2 lg:px-8 m-0 lg:py-4 !max-w-none bg-opacity-100 bg-green-200 border-none rounded-none">
      <div className="mx-auto flex items-center justify-around text-blue-gray-900">
        <div className="logo flex items-center">
          <Link to="/" className="flex items-center">
            <img className="w-16 h-16" src={Logo} alt="logo christophe sabien désinsectisation"/>
            <p className="font-playwriteArgentina">Christophe<br/>Sabine</p>
          </Link>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          placeholder=""
          onPointerEnterCapture="" 
          onPointerLeaveCapture=""
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)} 
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              color="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              color="white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarApp;
