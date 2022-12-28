import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import LoadingModal from "./Components/LoadingModal";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountrySlices.js"
import { useSelector } from "react-redux";
import { selectDisplay } from "./redux/slices/displayCountrySlice.js"
import { selectLoading } from "./redux/slices/loadingSlice"

function App() {
    let potentials = useSelector(selectPotentials)
    console.log(potentials)
    let currentDisplay = useSelector(selectDisplay)
    console.log("DISPLAY", currentDisplay)
    let isLoading = useSelector(selectLoading)
    return (
        <div className="App font-link">
            {isLoading && <LoadingModal />}
            <Header />
            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
        </div>
    );
}

export default App;
