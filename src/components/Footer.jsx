import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="px-4 py-2 lg:px-8 lg:py-4 bg-green-200 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center">
      <Typography 
        color="white"  
      >
        ©2025 ChristopheSabine_Désinsectisation
      </Typography>
      <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
        <li>
          <Typography
            color="white"
            className="flex items-center gap-x-1 text-sm sm:text-base hover:underline hover:decoration-1 hover:decoration-themeColor ease-in-out underline-offset-4"
          >
            <PhoneIcon className="w-5 h-5 text-black"/>
            06.33.61.10.72
          </Typography>
        </li>
        <li>
          <Typography
            color="white"
            className="flex items-center gap-x-1 text-sm sm:text-base hover:underline hover:decoration-1 hover:decoration-themeColor ease-in-out underline-offset-4"
          >
            <AtSymbolIcon className="w-5 h-5 text-black"/>
            christophe.sabine4@gmail.com
          </Typography>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

