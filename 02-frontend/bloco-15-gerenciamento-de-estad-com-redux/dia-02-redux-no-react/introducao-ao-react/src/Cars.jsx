import React from 'react';
import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { moveCar } from './redux/actionCreators';

function Cars({
  redCar, blueCar, yellowCar, moveCar
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button type="button" onClick={() => moveCar('red', !redCar)}>Move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button type="button" onClick={() => moveCar('blue', !blueCar)} >Move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button type="button" onClick={() => moveCar('yellow', !yellowCar) }>Move</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  redCar: state.moveCarReducer.red,
  blueCar: state.moveCarReducer.blue,
  yellowCar: state.moveCarReducer.yellow,
})

const mapDispatchToProps = (dispatch) => ({
  moveCar: (color, side) => dispatch(moveCar(color, side))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars)
