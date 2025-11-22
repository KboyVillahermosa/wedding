import Navbar from '../components/Navbar';
import Header from '../components/Header';
import WeddingDetails from '../components/WeddingDetails';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navbar />
      <Header />
      <WeddingDetails />
    </div>
  );
}
