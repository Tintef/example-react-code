import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../../redux/actions/appActions';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import UserDataCard from '../../components/UserDataCard';

import './index.css';

class Dashboard extends React.Component {
  componentDidMount() {
    const { fetchUser } = this.props;

    fetchUser(1); // Using 1 as an example
  }

  render() {
    const {
      loading,
      user,
    } = this.props;

    if (loading) {
      return (
        <Layout>
          <Loader />
        </Layout>
      );
    }

    return (
      <Layout>
        {
          Object.keys(user).map((key) => (
            <UserDataCard
              data={user[key]}
              label={key}
            />
          ))
        }
      </Layout>
    );
  }
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.appReducer.toJS().user,
  loading: state.appReducer.toJS().loading,
});

const mapDispatchToProps = (dispatch) => {
  const {
    fetchUser,
    setLoading,
  } = bindActionCreators(appActions, dispatch);

  return {
    fetchUser,
    setLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));
