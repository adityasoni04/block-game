import './App.css';
import {useState} from "react"

function App() {

  const [position, setPosition] = useState({ top: 0, left: 0 });

  const moveBox = (direction) => {
    const boxSize = 50; // Size of the box 
    const blockWidth = 500; // Width of the block
    const blockHeight = 500; // Height of the block

    let newPosition = { ...position };

    switch (direction) {
      case 'top':
        newPosition.top = Math.max(newPosition.top - boxSize, 0);
        break;
      case 'bottom':
        newPosition.top = Math.min(newPosition.top + boxSize, blockHeight - boxSize);
        break;
      case 'left':
        newPosition.left = Math.max(newPosition.left - boxSize, 0);
        break;
      case 'right':
        newPosition.left = Math.min(newPosition.left + boxSize, blockWidth - boxSize);
        break;
      default:
        break;
    }

    setPosition(newPosition);
  };

  return (
    <div className='block'>
    <div
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        width: '50px',
        height: '50px',
        backgroundColor: 'green',
      }}
    />
    <div className='top'  >
      <button className='topButton' onClick={() => moveBox('top')}>Top</button>
    </div>
    <div className='bottom'>
      <button  className='bottomButton' onClick={() => moveBox('bottom')}>Bottom</button>
    </div>
    <div className='left'>
      <button className='leftButton' onClick={() => moveBox('left')}>Left</button>
    </div>
    <div className='right'>
      <button className='rightButton' onClick={() => moveBox('right')}>Right</button>
    </div>
  </div>
  )
}

export default App;
