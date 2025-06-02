// import './App.css'
import { Toaster } from "react-hot-toast";
import { CardWithForm } from "./ConverterWindow";

function App() {
  return (
    <div className="flex justify-center">
      <CardWithForm />
      <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={10}
  containerClassName=""
  containerStyle={{marginTop:18}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    removeDelay: 1000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      iconTheme: {
        primary: '#7FFF00',
        secondary: 'black',
      },
    },
  }}
/>
    </div>
  );
}

export default App;
