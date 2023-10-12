import PropTypes from 'prop-types'
import logo from '../assets/logo.svg'

export function Header({ text }) {
  return (
    <div>
      <p>{text}</p>
      <img src={logo} alt="Les Pattes" />
    </div>
  )
}

Header.propTypes = {
  text: PropTypes.text,
};