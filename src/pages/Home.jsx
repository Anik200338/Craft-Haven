import { Helmet } from 'react-helmet';
import Baner from '../component/Baner';
import Coustomers from '../component/Coustomers';
import CraftItemsSection from '../component/CraftItemsSection';
import Members from '../component/Members';
import Section from '../component/Section';
import SectionTwo from '../component/SectionTwo';
import Subcategory from '../component/Subcategory';

const Home = () => {
  return (
    <div>
      <div className="p-5">
        <Helmet>
          <title>Craft Haven | Home</title>
        </Helmet>
        <Baner></Baner>
        <Section></Section>
        <CraftItemsSection></CraftItemsSection>
        <SectionTwo></SectionTwo>
        <Subcategory></Subcategory>
        <Members></Members>
        <Coustomers></Coustomers>
      </div>
    </div>
  );
};

export default Home;
