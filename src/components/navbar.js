import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-shadow">
        <div className="container-fluid">
          <span type="submit" className="btn btn-outline-light">
            Movie-app by Khaydarkhujaev Akbar
          </span>
          <div className="collapse navbar-collapse" id="navbarCollapse1">
            <form className="d-flex ms-auto">
              <Link to="">
                <input
                  type="text"
                  className="form-control me-sm-2"
                  placeholder="Search Movies"
                  id="searchInput"
                  onChange={(event) =>
                    this.props.handleChange(event.target.value)
                  }
                />
              </Link>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
