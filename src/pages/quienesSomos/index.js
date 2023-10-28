import Layout from "../../../components/Layout";
import AboutUs from "./components/AboutUs";
import ImageTextSection from "./components/ImageTextSection";


const Index = () => {
  return (
    <Layout>
      
        <div className="bg-red-800">
        <AboutUs/>
      <ImageTextSection/>
        </div>
       
      
    </Layout>
  );
};

export default Index;
