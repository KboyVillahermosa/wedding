import Navbar from '../components/Navbar';
import Header from '../components/Header';
import WeddingDetails from '../components/WeddingDetails';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="home">
        <Header />
      </div>
      <WeddingDetails />
    </div>
  );
}
