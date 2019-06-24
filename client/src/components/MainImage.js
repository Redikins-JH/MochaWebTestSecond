import React from 'react';
import Background from './ParkImage.png';

var MainImageStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover"
};


class MainImage extends React.Component {
  render() { 
    return (
        <div style={MainImageStyle}>
            <p>주변을 둘러 보세요</p>
            <p>다양한 취미/여가 Class를</p>
            <p>찾아 보세요</p>
        </div>
    )
  }    
}    

export default MainImage;