import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [rub, setRub] = React.useState('');
  const [dol, setDol] = React.useState('');

  function rubToDol(rub) {
    return rub * 75;
  }
  
  function dolToRub(dol) {
    return dol / 75;
  }

  React.useEffect(() => {
    setDol(rubToDol(+rub))
  }, [rub])

  React.useEffect(() => {
    setRub(dolToRub(+dol))
  }, [dol])

  return (
    <>
      <Rubbles rub={rub} setRub={setRub}/>
      <Dollars dol={dol} setDol={setDol}/>
    </>
  );
}

const Rubbles = ({rub, setRub}) => {
  const handleChange = (e) => {
    setRub(e.target.value);
  }

  return (
    <>
      <div>DOL</div>
      <input value={rub} onChange={handleChange} />
    </>
  )
}

const Dollars = ({dol, setDol}) => {
  const handleChange = (e) => {
    setDol(e.target.value)
  }

  return (
    <>
      <div>RUB</div>
      <input value={dol} onChange={handleChange} />
    </>
  )
}

export default App;
