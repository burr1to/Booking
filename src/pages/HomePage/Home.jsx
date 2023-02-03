import "./home.css";
import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/fProperties";
import PropertyList from "../../components/Property/pList";

function Home() {
  return (
    <Layout>
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList />
        <h1 className='homeTitle'>Homes guests love</h1>
        <FeaturedProperties />
      </div>
    </Layout>
  );
}

export default Home;
