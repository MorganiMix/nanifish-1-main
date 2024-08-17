import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      
    </div>
    <Services />
    
    <Footer />
  </div>
);
/*<Navbar />
<Welcome />
<Services />
<Transactions />
<Footer />
*/

export default App;
