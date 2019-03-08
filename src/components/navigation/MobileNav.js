import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes, FaCloud, FaUserCircle, FaAngleRight } from 'react-icons/fa'
import classNames from 'classnames'
import { userLogout } from '../../actions/userActions'
import { NavItems } from '../../data/Navigation'

import './navigation.css'

class MobileNav extends Component {

  constructor() {
    super()

    this.state = {
      lastY: 0
    }

    this.touchStart = this.touchStart.bind(this)
    this.touchMove = this.touchMove.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {

    if ('ontouchstart' in document) {

      this.props.mobileNavRef.current.addEventListener('touchstart', this.touchStart)
      this.props.mobileNavRef.current.addEventListener('touchmove', this.touchMove)
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.navOpen !== this.props.navOpen) {

      this.props.mobileNavRef.current.scrollTop = 1
    }
  }

  touchStart(e) {

    this.setState({
      lastY: e.touches[0].clientY
    })
  }

  touchMove(e) {

    let top       =   e.touches[0].clientY,
    scrollTop     =   e.currentTarget.scrollTop,
    direction     =   (this.state.lastY - top) < 0 ? "up" : "down"

    if (scrollTop == 0 && direction == "up") {

      e.preventDefault()

    } else if (scrollTop >= (e.currentTarget.scrollHeight - e.currentTarget.offsetHeight) && direction == "down") {

      e.preventDefault()
    }

    this.setState({
      lastY: top
    })
  }

  logOut() {

    this.props.dispatch(userLogout())
  }

  render() {

    let loggedIn = this.props.user.loggedIn
    let developer = this.props.user.profile.developer

    let navClass = classNames(
      'nav-mobile-nav-container',
      {
        'nav-openMobileNav': this.props.navOpen,
        'nav-closeMobileNav': !this.props.navOpen,
      }
    )

    console.log(this.props.user)

    return (
      
      <ul className={navClass} ref={this.props.mobileNavRef}>

        {NavItems.filter(array => {

          return loggedIn ? (array.loginRequired !== false) : (array.loginRequired !== true)

        }).filter(array => {

          return developer ? (array.development !== false) : (array.development !== true)

        }).map((list, i, arr) => {

          return (

            <div key={list.key} className='nav-mobile-liWrapper'>
              
              <div className='nav-mobile-listMainHeading'>{list.category}</div>

              {list.items.filter(array => {

                return loggedIn ? (array.loginRequired !== false) : (array.loginRequired !== true)

              }).filter(array => {

                return developer ? (array.development !== false) : (array.development !== true)

              }).map(item => {

                let component = {
                  link: (listItem) => {

                    return (
                      <NavLink
                        exact
                        to={listItem.to}
                        className={'nav-mobile-navlinks'}
                        activeClassName={'nav-activeLink'}
                      >
                        {listItem.name}
                      </NavLink>
                    )
                  },
                  button: (listItem) => {

                    return (
                      <div onClick={this[listItem.method]} className={'nav-mobile-navlinks'}>
                        {listItem.name}
                      </div>
                    )
                  },
                  alink: (listItem) => {

                    return (
                      <a href={listItem.to} className={'nav-mobile-navlinks'}>
                        {listItem.name}
                      </a>
                    )
                  }
                }

                return (
                  <div key={item.key}>
                    <li 
                      className={'nav-mobile-liItems'}
                      onClick={this.props.closeWhenLinkClicked}
                      >
                      {component[item.type](item)}
                    </li>
                  </div>
                )
              })}

              {arr.length - 1 !== i && <div className='nav-line' />}

            </div>
          )
        })}
      </ul>
    )
  }
}

export default hot(module)(MobileNav)