import Baner from '../component/Baner';
import CraftItemsSection from '../component/CraftItemsSection';
import Section from '../component/Section';
import SectionTwo from '../component/SectionTwo';
import Subcategory from '../component/Subcategory';

const Home = () => {
  return (
    <div>
      <div className="p-5">
        <Baner></Baner>
        <Section></Section>
        <CraftItemsSection></CraftItemsSection>
        <SectionTwo></SectionTwo>
        <Subcategory></Subcategory>
      </div>
    </div>
  );
};

export default Home;
