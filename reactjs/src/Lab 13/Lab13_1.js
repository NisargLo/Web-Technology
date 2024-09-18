import { useState } from 'react';
import './Lab13_1 Style.css';

function ChangeButtonState() {
     const [count, setCount] = useState(0);
     return (
          <>
               <center>
                    <p className="h1 mt-4">Current Count = {count}</p>
                    <button className="m-4 btn btn-danger p-3" onClick={
                         () => setCount(count - 1)
                    }><p>Decrease Count</p></button>
                    <button className="m-4 btn btn-success p-3" onClick={
                         () => setCount(count + 1)
                    }><p>Increase Count</p></button>
               </center>
          </>
     );
}

export default ChangeButtonState;