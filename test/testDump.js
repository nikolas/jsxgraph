/*
    Copyright 2008-2015
        Matthias Ehmann,
        Michael Gerhaeuser,
        Carsten Miller,
        Alfred Wassermann

    This file is part of JSXGraph.

    JSXGraph is free software dual licensed under the GNU LGPL or MIT License.

    You can redistribute it and/or modify it under the terms of the

      * GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version
      OR
      * MIT License: https://github.com/jsxgraph/jsxgraph/blob/master/LICENSE.MIT

    JSXGraph is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License and
    the MIT License along with JSXGraph. If not, see <http://www.gnu.org/licenses/>
    and <http://opensource.org/licenses/MIT/>.
 */


/*
 *  Js-Test-Driver Test Suite for the slider element
 *  http://code.google.com/p/js-test-driver
 */

TestCase("Dump", {
    board: null,

    setUp: function () {
        try {
            document.getElementsByTagName('body')[0].innerHTML = '<div id="jxgbox" style="width: 100px; height: 100px;"></div>';
            this.board = JXG.JSXGraph.initBoard('jxgbox', {axis: false, grid: false, boundingbox: [-5, 5, 5, -5], showCopyright: false, showNavigation: false});
        } catch (e) {
            console.log(e, e.stack);
        }
    },

    tearDown: function () {
        try {
            JXG.JSXGraph.freeBoard(this.board);
            this.board = null;
            document.getElementsByTagName('body')[0].innerHTML = '';
        } catch (e) {
            console.log(e, e.stack);
        }
    },

    testDumps: function () {
        expectAsserts(3);
        var s, p, txt;

        p = this.board.create('point', [2, 1]);
        s = this.board.create('line', [2, 1, 2]);
        s = this.board.create('text', [3, 2, 'test']);
        s = this.board.create('circle', [p, 5]);
        txt = JXG.Dump.toJessie(this.board);
        console.log(txt);
        
        assertTrue('toJessie point', txt.indexOf("s0 = point(2, 1) <<") > -1);
        assertTrue('toJessie point', txt.indexOf("s3 = line(2, 1, 2) <<") > -1);
        assertTrue('toJessie point', txt.indexOf("s4 = text(1, 3, 2, 'test') <<") > -1);
    }

});

