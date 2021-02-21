import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <h4> We match you with your perfect companion.</h4>
            <Button color='blue' text='Register'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
