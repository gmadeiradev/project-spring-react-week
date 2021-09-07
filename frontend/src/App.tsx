import DataTable from "components/DataTable";
import Footer from "components/footer";
import Navbar from "components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Hello</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
