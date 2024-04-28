import Baner from '../component/Baner';
import CraftItemsSection from '../component/CraftItemsSection';
import Subcategory from '../component/Subcategory';

const Home = () => {
  return (
    <div>
      <div className="p-5">
        <Baner></Baner>
        <CraftItemsSection></CraftItemsSection>
        <Subcategory></Subcategory>
      </div>
    </div>
  );
};

export default Home;
