import NavMenuBar from './shared/NavMenuBar';
import HeaderBar from './shared/HeaderBar';
import Listings from './contents/Listings';

const App = () => {
  return (
    <div>
      <NavMenuBar />
      <div className="container">
        <HeaderBar />
        <Listings />
      </div>
    </div>
    
  );
}

export default App;
