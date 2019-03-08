import React, { Component } from "react";
import Team from "./Team";

class DevList extends Component {
  render() {
    return (
      <div>
        <h1>Users & Developer List </h1>
        <ul>
          {this.props.users.map(user => {
            return (
              <Team
                first={user.firstName}
                last={user.lastName}
                id={user.id}
                key={user.id + user.firstName + user.lastName}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DevList;
