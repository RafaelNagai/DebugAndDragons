import { PixelContainer } from "./core/components/PixelContainer/PixelContainer";
import { PixelDialog } from "./core/components/PixelDialog/PixelDialog";

function App() {
  return (
    <>
      {/* <PixelContainer thickness="5px" color="blue">
        <p className="p-2">Your content here</p>
      </PixelContainer>
      <PixelContainer thickness="2px" color="#00ff00">
        <p className="p-2">Your content here</p>
      </PixelContainer> */}
      <PixelDialog thickness="5px" color="blue">
        <div className="pixel-box__container">
          <h1>Pixel Dialog</h1>
          <p>This is a pixel dialog example.</p>
        </div>
      </PixelDialog>
    </>
  );
}

export default App;
