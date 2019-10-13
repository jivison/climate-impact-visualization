import React from "react"
import './Description.css'

class Description extends React.Component {
    render() {
        return (
            <div className="description">
              <h3>Description</h3>
              <p>
                This data charts sample data found on the Nivo webpage. We used the Nivo rocks library to chart data and present it as a div on the webpage. The main goal achieved here is that we learned how to use React.js components for the first time. 
                We also styled our React components using CSS.
              </p>
            </div>
          );
    }
}

export default Description