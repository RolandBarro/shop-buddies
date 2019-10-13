import NavMenuBar from './shared/NavMenuBar';
import HeaderBar from './shared/HeaderBar';
import ProductList from './content/ProductList';

const App = () => {
  return (
    <div>
      <NavMenuBar />
      <div className="container">
        <HeaderBar />
        <ProductList />
      </div>
    </div>
    
  );
}

export default App;
