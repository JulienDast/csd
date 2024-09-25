import { ClockIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid';
import PhotoContact from '../assets/images/contact.jpg';
import { BriefcaseIcon, DocumentCurrencyEuroIcon } from '@heroicons/react/20/solid';


const Contact = () => {
  return (
    <div className='px-4 py-2 lg:px-8 lg:py-4 mx-auto'>
      <div className="w-9/12 mx-auto my-10 text-center">
        <h1 className="sm:text-5xl text-2xl !leading-[2.5rem] sm:!leading-[3.5rem]">
          Vous avez besoin de mes services ?<br/> D'une expertise ?
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-y-8 gap-x-12 lg:gap-x-36">
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <img src={PhotoContact} className='rounded-2xl drop-shadow-xl' alt='Photo Christophe Sabine Contact nid guêpe frelon'/>
        </div>
        <div className="w-full md:w-2/3  flex flex-col items-center gap-y-6 justify-between font-text bg-white rounded-2xl p-4 border-4 border-green-200">
          <p className='my-1 flex items-center text-center'><PhoneIcon className="w-5 h-5 mr-5 "/>06.33.61.10.72</p>
          <p className='my-1 flex items-center text-center'><EnvelopeIcon className='w-5 h-5 mr-5'/>christophe.sabine4@gmail.com</p>
          <p className='my-1 flex items-center text-center'><MapPinIcon className='w-5 h-5 mr-5'/>24 Chaussée du Moulin<br/>80860 Noyelles-sur-Mer</p>
          <p className='my-1 flex items-center text-center'><DocumentCurrencyEuroIcon className='w-5 h-5 mr-5'/>Devis en fonction de la prestation</p>
          <p className='my-1 flex items-center text-center'><BriefcaseIcon className='w-5 h-5 mr-5'/>Siret : 898020532 00013</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;