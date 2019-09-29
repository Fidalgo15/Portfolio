import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class extends React.Component {

  render() {
    return (
        <>
        <Nav tabs>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="/intro">Intro</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/work-school">Work/School</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="/projects">Projects</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
        </>
    )
  }
}