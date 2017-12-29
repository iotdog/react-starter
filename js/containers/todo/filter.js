import { connect } from 'react-redux';
import { SetVisibilityFilterAction } from '../../actions/todo';
import { Filter } from '../../components/todo';

/**
 * ownProps is signed by react-redux
 * see https://stackoverflow.com/questions/41198842/what-is-the-use-of-the-ownprops-arg-in-mapstatetoprops-and-mapdispatchtoprops
 */
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.todo.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(SetVisibilityFilterAction(ownProps.filter))
    }
  }
}

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default FilterContainer
