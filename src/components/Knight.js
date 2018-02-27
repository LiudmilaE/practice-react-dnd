import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

//drag source specification
/* If we had a bunch of chess pieces,
 it might be a good idea to use the props parameter and return something like { pieceId: props.id }.
 In our case, an empty object will suffice*/
 const knightSource = {
    beginDrag(props) {
      return {};
    }
  };
  
  //a collecting function
  function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(), //specify the drag source node
      isDragging: monitor.isDragging()
    }
  }
  

class Knight extends Component {
    render() {
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <span style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: '2.5rem',
                fontWeight: 'bold',
                cursor: 'move'
            }}>♘</span>
        );
    }
}

Knight.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);