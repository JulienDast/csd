import frelonAsiat from '../assets/images/nuisibles/frelonasiatique.jpg';
import frelonEur from '../assets/images/nuisibles/freloneuropeen.jpg';
import nidabeilles from '../assets/images/nuisibles/nidabeilles.jpg';
import nidguepes from '../assets/images/nuisibles/nidguepes.jpg';

const Nuisibles = () => {
  return (
    <div className="my-10 w-4/5 ">
      <div className="flex flex-col md:flex-row justify-center mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={frelonAsiat}
          alt="frelon asiatique"
          className="w-full md:w-1/2 h-full object-cover"
        />
        <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2 text-center">Frelon asiatique</h2>
          <p className="text-gray-700 text-center">
            Le frelon asiatique mesure jusqu'à 30 mm. Son corps est noir avec des rayures jaunes. Considéré comme agressif, il attaque pour défendre son nid. Il chasse principalement les abeilles domestiques, ce qui peut perturber les écosystèmes locaux.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={frelonEur}
          alt="frelon européen"
          className="w-full md:w-1/2 h-full object-cover"
        />
        <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2 text-center">Frelon européen</h2>
          <p className="text-gray-700 text-center">
            Le frelon européen mesure 25 à 35 mm. Il a un corps robuste avec des rayures jaunes et noires. Peu agressif, il ne pique que s'il se sent menacé. Il est un prédateur d'insectes nuisibles et construit des nids en papier mâché.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={nidguepes}
          alt="nid de guêpes"
          className="w-full md:w-1/2 h-full object-cover"
        />
        <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2 text-center">Guêpes</h2>
          <p className="text-gray-700 text-center">
            Les guêpes, telles que la guêpe commune, sont caractérisées par leur abdomen étroit et leur couleur jaune vif avec des rayures noires. Elles mesurent entre 11 et 18 mm et sont plus agressives que les abeilles.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={nidabeilles}
          alt="nid d'abeilles"
          className="w-full md:w-1/2 h-full object-cover"
        />
        <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2 text-center">Abeilles</h2>
          <p className="text-gray-700 text-center">
            Les abeilles, comme les abeilles domestiques, sont principalement connues pour leur rôle dans la pollinisation. Elles mesurent entre 11 et 13 mm et sont peu agressives, sauf en cas de menace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nuisibles;