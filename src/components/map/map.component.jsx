import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps";
import { geoPatterson } from "d3-geo-projection";
// import { geoOrthographic } from "d3-geo";
import './map.styles.scss';

const width = 390;
const height = 280;

const Map = () => {

  const projection = geoPatterson()
    .translate([width, height])
    .rotate([0, 0, 0])
    .scale(100);

  return (
    <div className="map" >
      <ComposableMap projection={projection}>
        <ZoomableGroup>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} style={{
                  default: {
                    fill: "#193d4e",
                    stroke: "#929ba8",
                    strokeWidth: "0.15",
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
          <Marker coordinates={[-71.0589, 42.3601]}>
            <circle r={2} fill="#c0bebe" />
          </Marker>
          <Marker coordinates={[77.026344, 28.457523]}>
            <circle r={2} fill="#c0bebe" />
          </Marker >
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}

export default Map;