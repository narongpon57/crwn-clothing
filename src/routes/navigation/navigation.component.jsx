import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrnwLogo } from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.util'

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrnwLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={signOutUser} to="/auth">
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
