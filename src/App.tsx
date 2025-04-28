import { PixelContainer } from "./core/components/PixelContainer/PixelContainer";

function App() {
  return (
    <>
      <PixelContainer thickness="5px" color="blue">
        <p className="p-2">Your content here</p>
      </PixelContainer>
      <PixelContainer thickness="2px" color="#00ff00">
        <p className="p-2">Your content here</p>
      </PixelContainer>
    </>
  );
}

export default App;
