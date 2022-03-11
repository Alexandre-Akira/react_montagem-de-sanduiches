import "../../Template/Home/style.css";
import SelectedItems from "../../Organisms/SelectedItems";
import SelectOptions from "../../Organisms/SelectOptions";

function Home() {
  return (
    <main className="home">
      <SelectedItems />
      <SelectOptions />
    </main>
  );
}

export default Home;
