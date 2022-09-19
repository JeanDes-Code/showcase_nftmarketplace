
import { Download, Features, SectionWrapper} from "./components";
import assets from './assets'
import styles from './styles/Global';
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Votre propre boutique de NFTs. Commencez à Vendre et à vous Développer."
        description="Achetez, conservez, collectionnez des NFTs, échangez & gagnez des Cryptos. Rejoignez 25+ millions d'utilisateurs qui utilisent le Marketplace ProNef. "
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Un Marketplace Simple d'Utilisation"
        description="Découvrez l'interface utilisateur du marketplace ProNef NFT. Des couleurs constantes et douces pour une interface utilisateur fluide."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Déploiement"
        description="ProNef est construit à l'aide 
        d'Expo, qui fonctionne nativement 
        sur tous les appareils mobiles des utilisateurs. 
        Vous pouvez facilement mettre votre 
        application mobile entre les mains d'un maximum de personnes."
        reverse
        mockupImg={assets.feature}
      />
      <SectionWrapper
        title="Une manière Créative de mettre en Valeur votre Marketplace"
        description="L'application contient deux pages. La première page donne la liste de tous les NFTs, tandis que la seconde affiche les détails d'un NFT spécifique."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04 pt-10'>
        <p className={`${styles.pText} ${styles.whiteText}`}>Créé avec amour par {' '}
        <span className="bold">Jean Desauw </span>
        - © 2022
        </p>
      </div>
    </>
  );
}

export default App;