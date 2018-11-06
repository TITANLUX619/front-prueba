import React, { Component } from 'react';
import axios from 'axios'; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        resources: []
    };
}
  
  componentDidMount() {
    axios.get('https://guadaltech-fullstack.herokuapp.com/api/becarios')
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
                            <th>ID</th>
                            <th>Mail</th>
                            <th>Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.resources.map(resource =>
                            <tr>
                              <td>{resource.id}</td>
                              <td>{resource.email}</td>
                              <td>{resource.name}</td>
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