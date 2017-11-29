/* global twttr */
import React from 'react'
import { css } from 'glamor'
import { isClientSide } from '../../utils'
import styles from './index.css'

const tweetCardStyles = css({
  display: `inline-block`,
  width: `100%`,
  fontFamily: `"Helvetica Neue", Roboto, "Segoe UI", Calibri, sansserif`,
  fontSize: `12px`,
  fontWeight: `bold`,
  lineHeight: `16px`,
  borderColor: `#eee #ddd #bbb`,
  borderRadius: `5px`,
  borderStyle: `solid`,
  borderWidth: `1px`,
  boxShadow: `0 1px 3px rgba(0, 0, 0, 0.15)`,
  padding: `0`,
  overflow: `hidden`,
})

export default class LatestTweet extends React.Component {
  componentDidMount() {
    if (isClientSide() && typeof twttr !== 'undefined' && twttr.widgets) {
      twttr.widgets.load(document.getElementById('latestTweet'))
    }
  }

  render() {
    return (
      <div id="latestTweet" {...tweetCardStyles}>
        <h3 style={{ textAlign: 'center' }}>Latest Tweet</h3>
        <a
          className="twitter-timeline"
          data-width="180"
          data-dnt="true"
          data-tweet-limit="1"
          data-chrome="nofooter noheader transparent"
          href="https://twitter.com/cmichelio"
        />
      </div>
    )
  }

  shouldComponentUpdate() {
    return false
  }
}
