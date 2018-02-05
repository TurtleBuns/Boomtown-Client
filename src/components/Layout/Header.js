import React, { Component } from 'react';
import Logo from '../../images/boomtown-logo.svg';
import './styles.css';

import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
};
const tags = [
  { value: 0, name: 'Electronis' },
  { value: 1, name: 'Household Items' },
  { value: 2, name: 'Musical Instruments' },
  { value: 3, name: 'Physical Media' },
  { value: 4, name: 'Recreational Equipment' },
  { value: 5, name: 'Sporting Goods' },
  { value: 6, name: 'Tools' }
];

class Header extends Component {
  state = {
    values: []
  };

  handleChange = (event, index, values) => this.setState({ values });

  menuItems(tags) {
    return tags.map(tag => (
      <MenuItem
        key={tag.value}
        insetChildren={true}
        checked={this.state.values.indexOf(tag.value) > -1}
        value={tag.value}
        primaryText={tag.name}
      />
    ));
  }

  render() {
    return (
      <div className="headerbar">
        <div className="titlewrapper">
          <a href="">
            <img className="headerlogo" src={Logo} alt="boomtown" />
          </a>
          <SelectField
            multiple={true}
            hintText="Select a tag"
            value={this.state.values}
            onChange={this.handleChange}
            selectionRenderer={this.selectionRenderer}
          >
            {this.menuItems(tags)}
          </SelectField>
        </div>
        <div className="header-btn">
          <NavLink to="/profile" exact activeClassName="selected">
            <RaisedButton
              className="profile-btn"
              label="Profile"
              primary={true}
              style={style}
            />
          </NavLink>
          <NavLink to="/items" exact activeClassName="selected">
            <RaisedButton
              className="log-btn"
              label="LOG OUT"
              primary={true}
              style={style}
            />
          </NavLink>
        </div>
      </div>
    );
  }
}

////////////
// const Header = () => {
//   return (
//     <div className="headerbar">
//       <div className="titlewrapper">
//         <a href="">
//           <img className="headerlogo" src={Logo} alt="boomtown" />
//         </a>
//         <SelectField
//           multiple={true}
//           hintText="Select a name"
//           value={this.state.values}
//           onChange={this.handleChange}
//           selectionRenderer={this.selectionRenderer}
//         >
//           {this.menuItems(tags)}
//         </SelectField>
//       </div>
//       <div className="header-btn">
//         <NavLink to="/profile" exact activeClassName="selected">
//           <RaisedButton
//             className="profile-btn"
//             label="Profile"
//             primary={true}
//             style={style}
//           />
//         </NavLink>
//         <NavLink to="/items" exact activeClassName="selected">
//           <RaisedButton
//             className="log-btn"
//             label="LOG OUT"
//             primary={true}
//             style={style}
//           />
//         </NavLink>
//       </div>
//     </div>
//   );
// };

export default Header;
