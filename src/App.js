import { useCallback, useMemo, useState } from 'react';
import Test from './components/Test';

const App = () => {
  console.log("APP");
  const [state, setState] = useState(10)
    
    const clickHandler=()=>{
      setState({})
    }
  
    const obj = useMemo(()=>{
      return {
        age: 50
      }
    },[])
    console.log(obj);

    const arr = useMemo(()=>{
      return [1,2]
    }, [])
    console.log(arr);
    

   const show = useCallback(()=>{
    return ()=>{}
   },[])

  return (
    <div>
      <Test state={show}/>
      <button onClick={clickHandler}>ADD</button>
      <h1>{}</h1>
    </div>
  )
}

export default App;

// memo()
// useMemo()
// useCallback()


// code  => React DOM => DOM

// uwefuvvf          =>  DOM