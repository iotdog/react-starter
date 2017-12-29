import { connect } from 'react-redux';
import { SetVisibilityFilterAction } from '../../actions/todo';
import { Filter } from '../../components/todo';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
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
