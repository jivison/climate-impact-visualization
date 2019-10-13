import React from "react"

class Description extends React.Component {
    render() {
        return (
            <div className="description">
              <h3>More Information {this.props.name}</h3>
              <p>
                Paragraph about the information and some references or something
              </p>
            </div>
          );
    }
}

export default Description