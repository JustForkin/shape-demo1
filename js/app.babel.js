import Polyfill       from 'classlist-polyfill';
import MojsPlayer     from 'mojs-player'
import Module         from './components/module';
import TriangleLines  from './components/triangle-lines';
import Triangles      from './components/triangles';
import GreenScene     from './components/green-scene';

// require('css/blocks/mojs-player.postcss.css');
// let CLASSES = require('css/blocks/mojs-player.postcss.css.json');


class Demo extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    this.mainTimeline = new mojs.Timeline();
    this.mainTimeline.add( new Triangles );
    this.mainTimeline.append( new GreenScene );

    this.player = new MojsPlayer({
      add: this.mainTimeline
    });
  }
}

new Demo;

// if ( (typeof define === "function") && define.amd ) {
//   define(function () { return MojsPlayer; });
// }
// if ( (typeof module === "object") && (typeof module.exports === "object") ) {
//   module.exports = MojsPlayer;
// }

// let _global = ( typeof global !== 'undefined' ) ? global : window;
// _global.MojsPlayer = MojsPlayer;

export default Demo;