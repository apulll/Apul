import React, { Component } from 'react'
import './aaa.css'
import Modal from 'components/Modal'
const imgMap = require.context('static/images', false, /\.png$/);
console.log(imgMap, 'imgMap')
imgMap.keys().map((key) => {
  console.log(key,imgMap(key), 'keys')
});

export default class App extends Component {
  render() {
    return (
      <div>
        <Modal></Modal>
      </div>
    )
  }
}
