'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';

const pageId = 2;

function mapStateToProps(state) {
  return {
    likes: state.rootReducer.likes[pageId]
  };
}

function mapDispatchToProps(dispatch) {
  return Object.assign({}, {
    actions: bindActionCreators(actions, dispatch)
  }, routeActions);
}

const pageTwo = React.createClass({
  propTypes: {
    likes: React.PropTypes.number,
    actions: React.PropTypes.object
  },

  handleLike: function(){
    const { actions } = this.props;
    return actions.likePostById(pageId);
  },

  render() {
    const { likes } = this.props;
    const likeCount = likes ? likes : 0;

    return (
      <div className="pageTwo">
        <h1>Geomancer</h1>
        <h2>Geomancer</h2>
        <h3>Geomancer</h3>
        <h4>Geomancer</h4>
        <p>
          In a world where man has the power to ignore the laws of nature, the Geomancer stands as a living reminder of why humanity discounts nature at its own peril. The Geomancer’s domain is the earth itself, tapping into the tiny flickers of sentience in the slumbering power of a great mountain, the boiling fury of an active volcano, or the swift and capricious course of a fast-moving river. By strategically reawakening those dormant energies, Geomancers can gain control over the entirety of the natural world: animals, spirits, weather, and even geography bend to their will with nary a twinge of resistance. The greater their proficiency, the more miraculous their feats become: an experienced Geomancer can summon a blizzard in the midst of a sea of fire, walk on quicksand, or make water fountain up from bone-dry desert soil. In ancient times, such powers could mean the difference between life and death for a village or town; geomancy and religion were often intertwined, and the act of calling up nature’s power a thing of ritual, song, and dance. Today’s Geomancers are far less likely to engage in such acts, though a few still ‘enhance their focus’ by painting themselves with mystical patterns or wielding ancient ceremonial bells reputed to resonate with the heartbeat of the world.
        </p>
      </div>
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(pageTwo);
