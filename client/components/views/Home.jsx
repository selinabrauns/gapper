import React from 'react';
import { connect } from 'react-redux';
import bindActionCreators from '../../util/bindActionCreators';

import Icon from '../lib/Icon';
import Modal from '../lib/Modal';

import './home.scss';

import { test } from '../../store/actions/commonAction';

class Home extends React.Component {

  state = {
    add: '',
    showModal: false,
  };

  componentDidMount() {
    this.props.test('t')
  }

  handleClick = () => {

  }

  render() {
    return (
      <div className="home">
        <div className="panel projects">
          <div className="add" onClick={() => this.handleClick('project')}>
            <Icon iconName="folder-multiple-image" />
          </div>
        </div>
        <div className="panel groups">
          <div className="add">
            <Icon iconName="image-multiple" />
          </div>
        </div>
        <div className="panel screens">
          <div className="add">
            <Icon iconName="image" />
          </div>
        </div>
        {this.state.showModal && <Modal title="Add ">Test</Modal>}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({ test}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);