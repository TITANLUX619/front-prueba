import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        resources: []
    };
}
  
  componentDidMount() {
    axios.get('https://guadaltech-fulllstack.herokuapp.com/api/becarios/')
        .then(res => {
            this.setState({ resources: res.data });
            console.log(this.state.resources);
        });
}
  
  render() {
    return (
        <div>
            <div className="container">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    Resources List
                  </h3>
                  </div>        
                  <div>
                    <div className="panel-body">
                      <table className="table table-hover table-dark">
                        <thead>
                          <tr>
                            <th>DNI</th>
                              <th>First Name</th>
                                <th>Last Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.resources.map(resource =>
                            <tr>
                              <td><Link to={`/show/${resource.dni}`}>{resource.dni}</Link></td>
                              <td>{resource.firstName}</td>
                              <td>{resource.lastName}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>      
                  </div>    
                </div>
            </div>
        </div>
    );
}
}

export default App;