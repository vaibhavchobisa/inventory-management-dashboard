import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { useState, useEffect } from "react";
// import { geoPatterson } from "d3-geo-projection";
import { geoOrthographic } from "d3-geo";
import './map.styles.css';

const width = 400;
const height = 390;

const Map = () => {
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);

  const projection = geoOrthographic()
    .translate([width, height])
    .rotate(rotation)
    .scale(280);


  const handleMouseDown = (event) => {
    setIsMouseDown(true);
    setStartX(event.clientX);
    setStartY(event.clientY);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setDeltaX(0);
    setDeltaY(0);
  };

  const handleMouseMove = (event) => {
    if (isMouseDown) {
      const newDeltaX = event.clientX - startX;
      const newDeltaY = event.clientY - startY;
      setDeltaX(newDeltaX);
      setDeltaY(newDeltaY);
      setRotation([deltaX, deltaY, 0]);
    }
  };

  return (
    <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} className="map" >
      <ComposableMap projection={projection}>
        {/* <ZoomableGroup> */}
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} style={{
                default: {
                  fill: "#193d4e",
                  stroke: "#929ba8",
                  strokeWidth: "0.15"
                },
                hover: {
                  fill: "#346b77",
                },
                pressed: {
                  fill: "#346b77",
                },
              }} />
            ))
          }
        </Geographies>
        {/* </ZoomableGroup> */}
      </ComposableMap>
    </div>
  )
}

export default Map;