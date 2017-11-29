
ReactDOM.render(
  React.createElement(Adder,{n1:2, n2:4}),
  document.getElementById('app'));

  function Adder({n1,n2}) {
      const sum = n1 + n2;
      return (<h1>{sum}</h1>)
      // return React.createElement('h1',{},sum)
  }

  // ReactDOM.render(
  //     React.createElement(Adder, {n1:4, n2:4}),
  //     document.getElementById('app'));

ReactDOM.render(
  <Adder n1 ={2} n2={4}/>,
  document.getElementById('app')
);
