import React from 'react'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      color1: 'rojo',
      color2: 'amarillo',
      color3: 'dever',
    }
  }


  br() {
    this.setState({
      color1: 'red',
      color2: 'amarillo',
      color3: 'dever',
    })
  }

  ba() {
    this.setState({
      color1: 'rojo',
      color2: 'yellow',
      color3: 'dever',
    })
  }

  bv() {
    this.setState({
      color1: 'rojo',
      color2: 'amarillo',
      color3: 'green',
  })
  }

render(){
  return (
    <>
      <div className="semaforo" >

        <button className={this.state.color1} onClick={() => {
          this.br()
        }} />

        <button className={this.state.color2} onClick={() => {
          this.ba()
        }} />

        <button className={this.state.color3} onClick={() => {
          this.bv()
        }} />

      </div>

    </>
  )
}
}

export default App;
