import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="bg-slate-50 text-gray-700 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <HomePage />
      </div>
      <Footer />
    </div>
  )
}

export default App
