import galerie1 from '../assets/images/galerie/galerie1-min.jpg';
import galerie2 from '../assets/images/galerie/galerie2-min.jpg';
import galerie3 from '../assets/images/galerie/galerie3-min.jpg';
import galerie4 from '../assets/images/galerie/galerie4-min.jpg';
import galerie5 from '../assets/images/galerie/galerie5-min.jpg';
import galerie6 from '../assets/images/galerie/galerie6-min.jpg';
import galerie7 from '../assets/images/galerie/galerie7-min.jpg';
import galerie8 from '../assets/images/galerie/galerie8-min.jpg';
import galerie9 from '../assets/images/galerie/galerie9-min.jpg';
import galerie10 from '../assets/images/galerie/galerie10-min.jpg';
import galerie11 from '../assets/images/galerie/galerie11-min.jpg';
import galerie12 from '../assets/images/galerie/galerie12-min.jpg';
import galerie13 from '../assets/images/galerie/galerie13-min.jpg';
import galerie14 from '../assets/images/galerie/galerie14-min.jpg';

const data = [
  {imageLink: galerie1},
  {imageLink: galerie2},
  {imageLink: galerie3},
  {imageLink: galerie4},
  {imageLink: galerie5},
  {imageLink: galerie6},
  {imageLink: galerie7},
  {imageLink: galerie8},
  {imageLink: galerie9},
  {imageLink: galerie10},
  {imageLink: galerie11},
  {imageLink: galerie12},
  {imageLink: galerie13},
  {imageLink: galerie14},
];

const Galerie = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-10">
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <img
            className="h-80 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-désinsectisation-photo"
          />
        </div>
      ))}
    </div>
  );
};

export default Galerie;