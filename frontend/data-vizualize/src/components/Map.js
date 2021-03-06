import React from 'react'
import { ResponsiveChoroplethCanvas } from '@nivo/geo'

import data from './data'
import countries from './world_countries.json'

import './Map.css'

class Map extends React.Component {
    render() {
        return (
            <div className="map">
                <ResponsiveChoroplethCanvas
        data={data}
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#FFFFFF"
        background-color= "#000000"
        label="properties.name"
        valueFormat=".2s"
        projectionType = 'equalEarth'
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="rgba(0, 0, 0, .2)"
        borderWidth={0.5}
        borderColor="#101b42"
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -60,
                itemsSpacing: 0,
                itemWidth: 86,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 18
            }
        ]}
    />
            </div>
        )
    }
}

export default Map