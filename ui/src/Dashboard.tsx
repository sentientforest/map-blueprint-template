import React, { Component } from 'react';
import { Navbar, Button } from '@blueprintjs/core';
import './Dashboard.css';

interface IDashboardProps {
  title: string;
}
interface IDashboardState {
  count: number;
}
class Dashboard extends Component {
  state: IDashboardState = {
    count: 0
  };
  constructor(props: IDashboardProps) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
      <Navbar>
        <Navbar.Group>
          <Navbar.Heading>TC Maps</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
      </Navbar>
      <div className="ol-map">
      </div>
      </div>
    );
  }
}

export default Dashboard
