import { connect } from 'react-redux';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
    //state.user.categories 를 props.categories 와 연결
    categories : state.user.categories 
})

export default connect(mapStateToProps)(Nav);