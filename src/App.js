import "./App.css";

import Title from "./component/Title";
import UploadCSV from "./uploadCSV/uploadCSV";

// Best practice is to have only single component in the App.js File.

function App() {
  return (
    <div className="flex flex-col justify-center items-center  py-0 gap-y-4">
      <Title />
      <UploadCSV />
    </div>
  );
}

export default App;
