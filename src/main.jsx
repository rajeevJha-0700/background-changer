import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ColorBtn from './colors.jsx';
import Div from './div.jsx';
import Resizable_div from './resizableDiv.jsx';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("BLACK");

  return (
    <StrictMode>
      <Resizable_div  bgColor={color}>
        <Div>
          <ColorBtn colorName="RED" COLOR={setColor} />
          <ColorBtn colorName="YELLOW" COLOR={setColor} />
          <ColorBtn colorName="BLUE" COLOR={setColor} />
          <ColorBtn colorName="PURPLE" COLOR={setColor} />
          <ColorBtn colorName="BLACK" COLOR={setColor} />
          <ColorBtn colorName="GOLD" COLOR={setColor} />
          <ColorBtn colorName="ORANGE" COLOR={setColor} />
          <ColorBtn colorName="BROWN" COLOR={setColor} />
          <ColorBtn colorName="INDIGO" COLOR={setColor} />
        </Div>
      </Resizable_div>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
