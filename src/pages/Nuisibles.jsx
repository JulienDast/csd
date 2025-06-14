import frelonAsiat from '../assets/images/nuisibles/frelonasiatique.jpg';
import frelonEur from '../assets/images/nuisibles/freloneuropeen.jpg';
import nidabeilles from '../assets/images/nuisibles/nidabeilles.jpg';
import nidguepes from '../assets/images/nuisibles/nidguepes.jpg';
import fourmis from '../assets/images/nuisibles/fourmis.jpg';
import puces from '../assets/images/nuisibles/puces.jpg';
import mouche from '../assets/images/nuisibles/mouche.jpg';
import rat from '../assets/images/nuisibles/rat.jpg';
import chenille from '../assets/images/nuisibles/chenille.jpg';

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

      <div className="flex flex-col md:flex-row justify-center mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={fourmis}
          alt="fourmilière"
          className="w-full md:w-1/2 h-full object-cover"
        />
        <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2 text-center">Fourmis</h2>
          <p className="text-gray-700 text-center">
          Les fourmis communes dans le nord de la France mesurent entre 3 et 5 mm. Leur corps est généralement noir ou brun foncé. Peu agressives envers l'homme, elles peuvent mordre si elles se sentent menacées.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={puces}
          alt="puce"
          className="w-full md:w-1/2 h-full object-cover"
        />
        <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2 text-center">Puces</h2>
          <p className="text-gray-700 text-center">
            Les puces ont un corps brun foncé est aplati latéralement. Très agiles, elles peuvent sauter jusqu'à 30 cm de haut. Ces parasites se nourrissent du sang, causant démangeaisons et allergies. Une femelle peut pondre jusqu'à 50 œufs par jour.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={mouche}
          alt="mouche"
          className="w-full md:w-1/2 h-full object-cover"
        />
        <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2 text-center">Mouches</h2>
          <p className="text-gray-700 text-center">
            La mouche domestique mesure entre 5 et 8 mm. Ces insectes sont attirés par les déchets organiques et se reproduisent rapidement, pondant jusqu'à 1 000 œufs au cours de leur vie. Elles peuvent transmettre des maladies en se posant sur les aliments. 
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={rat}
          alt="rat"
          className="w-full md:w-1/2 h-full object-cover"
        />
        <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2 text-center">Rats</h2>
          <p className="text-gray-700 text-center">
            Les rats ont un pelage gris ou brun et un corps allongé. Très rapides, ils grimpent et nagent aisément. Ces rongeurs nuisibles s’attaquent à la nourriture et propagent des maladies. Une femelle peut avoir jusqu’à 60 petits par an.
          </p> 
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={chenille}
          alt="chenille"
          className="w-full md:w-1/2 h-full object-cover"
        />
        <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2 text-center">Chenilles precessionnaires</h2>
          <p className="text-gray-700 text-center">
            Les chenilles processionnaires sont brun orangé ou gris argenté, avec un corps velu de 4 cm. Elles vivent en groupe et se déplacent en file indienne. Leurs poils urticants provoquent démangeaisons, allergies et inflammations graves. Pour les chiens, le danger est majeur : un simple contact peut entraîner douleur intense, nécrose de la langue, voire la mort. Une colonie peut contenir plusieurs centaines d’individus.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Nuisibles;
