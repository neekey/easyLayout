var D = require( '../lib/core/2DGeometry/2d' );
var Point = D.Point;
var Line = D.Line;
var assert = require( 'assert' );

describe( 'Line Test', function(){
    describe( 'Initialize', function(){
        it( 'attribute exists', function( done ){

            var startX = 0;
            var startY = 1;
            var endX = 1;
            var endY = 0;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );

            assert.equal( newLine.start.x, startX );
            assert.equal( newLine.start.y, startY );
            assert.equal( newLine.end.x, endX );
            assert.equal( newLine.end.y, endY );
            done();
        });

        it( 'A-B-C: k < 0, not through origin', function( done ){

            var startX = 0;
            var startY = 1;
            var endX = 1;
            var endY = 0;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );

            assert.equal( newLine._a, -1 );
            assert.equal( newLine._b, -1 );
            assert.equal( newLine._c, 1 );
            done();
        });

        it( 'A-B-C: k > 0, not through origin', function( done ){

            var startX = 0;
            var startY = 1;
            var endX = -1;
            var endY = 0;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );

            assert.equal( newLine._a, -1 );
            assert.equal( newLine._b, 1 );
            assert.equal( newLine._c, -1 );
            done();
        });

        it( 'A-B-C: k < 0, through origin', function( done ){

            var startX = -1;
            var startY = 1;
            var endX = 0;
            var endY = 0;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );
            assert.equal( newLine._a, -1 );
            assert.equal( newLine._b, -1 );
            assert.equal( newLine._c, 0 );
            done();
        });

        it( 'A-B-C: k > 0, through origin', function( done ){

            var startX = 1;
            var startY = 1;
            var endX = 0;
            var endY = 0;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );
            assert.equal( newLine._a, -1 );
            assert.equal( newLine._b, 1 );
            assert.equal( newLine._c, 0 );
            done();
        });

        it( 'A-B-C: k = Infinity, not through origin', function( done ){

            var startX = 1;
            var startY = 1;
            var endX = 1;
            var endY = 5;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );

            assert.equal( newLine._a, 4 );
            assert.equal( newLine._b, 0 );
            assert.equal( newLine._c, -4 );
            done();
        });

        it( 'A-B-C: k = Infinity, through origin', function( done ){

            var startX = 0;
            var startY = 1;
            var endX = 0;
            var endY = 5;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );

            assert.equal( newLine._a, 4 );
            assert.equal( newLine._b, 0 );
            assert.equal( newLine._c, 0 );
            done();
        });

        it( 'A-B-C: k = 0, not through origin', function( done ){

            var startX = 1;
            var startY = 1;
            var endX = 0;
            var endY = 1;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );
            assert.equal( newLine._a, 0 );
            assert.equal( newLine._b, 1 );
            assert.equal( newLine._c, -1 );
            done();
        });

        it( 'A-B-C: k = 0, through origin', function( done ){

            var startX = 1;
            var startY = 0;
            var endX = 0;
            var endY = 0;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );
            assert.equal( newLine._a, 0 );
            assert.equal( newLine._b, 1 );
            assert.equal( newLine._c, 0 );
            done();
        });

        it( 'Same point: show throw an error', function(){

            var startX = 1;
            var startY = 0;
            var ifError = false;

            try{
                var newLine = new Line( new Point( startX, startY ), new Point( startX, startY ) );
            }
            catch( e ){
                ifError = true;
            }

            assert( ifError, true );
        });
    });

    describe( '#getSlope()', function(){
        it( 'A-B-C: k < 0, not through origin', function( done ){

            var startX = 0;
            var startY = 1;
            var endX = 1;
            var endY = 0;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );

            assert.equal( newLine.getSlope(), -1 );
            done();
        });

        it( 'A-B-C: k > 0, not through origin', function( done ){

            var startX = 0;
            var startY = 1;
            var endX = -1;
            var endY = 0;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );

            assert.equal( newLine.getSlope(), 1 );
            done();
        });

        it( 'A-B-C: k < 0, through origin', function( done ){

            var startX = -1;
            var startY = 1;
            var endX = 0;
            var endY = 0;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );
            assert.equal( newLine.getSlope(), -1 );
            done();
        });

        it( 'A-B-C: k > 0, through origin', function( done ){

            var startX = 1;
            var startY = 1;
            var endX = 0;
            var endY = 0;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );
            assert.equal( newLine.getSlope(), 1 );
            done();
        });

        it( 'A-B-C: k = Infinity, not through origin', function( done ){

            var startX = 1;
            var startY = 1;
            var endX = 1;
            var endY = 5;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );
            assert.equal( newLine.getSlope(), Infinity );
            done();
        });

        it( 'A-B-C: k = Infinity, through origin', function( done ){

            var startX = 0;
            var startY = 1;
            var endX = 0;
            var endY = 5;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );

            assert.equal( newLine.getSlope(), Infinity );
            done();
        });

        it( 'A-B-C: k = 0, not through origin', function( done ){

            var startX = 1;
            var startY = 1;
            var endX = 0;
            var endY = 1;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );
            assert.equal( newLine.getSlope(), 0 );
            done();
        });

        it( 'A-B-C: k = 0, through origin', function( done ){

            var startX = 1;
            var startY = 0;
            var endX = 0;
            var endY = 0;
            var newLine = new Line( new Point( startX, startY ), new Point( endX, endY ) );
            assert.equal( newLine.getSlope(), 0 );
            done();
        });
    });

    describe( '#intersect()', function(){
        it( 'normal', function( done ){
            var meLine = new Line( new Point( 0, 1 ), new Point( 1, 0 ) );
            var youLine = new Line( new Point( 1, 1 ), new Point( 0, 0 ) );
            var intersectPoint = meLine.intersect( youLine );
            assert.equal( intersectPoint.x, 0.5 );
            assert.equal( intersectPoint.y, 0.5 );
            done();
        });

        it( '竖直-正常', function( done ){
            var meLine = new Line( new Point( 1, 1 ), new Point( 1, 0 ) );
            var youLine = new Line( new Point( 1, 0 ), new Point( 0, 1 ) );
            var intersectPoint = meLine.intersect( youLine );
            assert.equal( intersectPoint.x, 1 );
            assert.equal( intersectPoint.y, 0 );
            done();
        });

        it( '水平-正常', function( done ){
            var meLine = new Line( new Point( 0, 1 ), new Point( 1, 1 ) );
            var youLine = new Line( new Point( 1, 0 ), new Point( 0, 1 ) );
            var intersectPoint = meLine.intersect( youLine );
            assert.equal( intersectPoint.x, 0 );
            assert.equal( intersectPoint.y, 1 );
            done();
        });

        it( '竖直-水平', function( done ){
            var meLine = new Line( new Point( 1, 1 ), new Point( 0, 1 ) );
            var youLine = new Line( new Point( 1, 1 ), new Point( 1, 0 ) );
            var intersectPoint = meLine.intersect( youLine );
            assert.equal( intersectPoint.x, 1 );
            assert.equal( intersectPoint.y, 1 );
            done();
        });

        it( '竖直-正常 过原点', function( done ){
            var meLine = new Line( new Point( 0, 1 ), new Point( 0, 2 ) );
            var youLine = new Line( new Point( -1, 1 ), new Point( 1, -1 ) );
            var intersectPoint = meLine.intersect( youLine );
            assert.equal( intersectPoint.x, 0 );
            assert.equal( intersectPoint.y, 0 );
            done();
        });

        it( '水平-正常 过原点', function( done ){
            var meLine = new Line( new Point( -1, 1 ), new Point( 1, -1 ) );
            var youLine = new Line( new Point( 1, 0 ), new Point( 2, 0 ) );
            var intersectPoint = meLine.intersect( youLine );
            assert.equal( intersectPoint.x, 0 );
            assert.equal( intersectPoint.y, 0 );
            done();
        });

        it( '竖直-水平 过原点', function( done ){
            var meLine = new Line( new Point( 1, 0 ), new Point( 2, 0 ) );
            var youLine = new Line( new Point( 0, 1 ), new Point( 0, 2 ) );
            var intersectPoint = meLine.intersect( youLine );
            assert.equal( intersectPoint.x, 0 );
            assert.equal( intersectPoint.y, 0 );
            done();
        });
    });

    describe( '#distanceTo()', function(){
        it( 'normal', function( done ){

            var meLine = new Line( new Point( 0, 1 ), new Point( 1, 0 ) );
            var youLine = new Line( new Point( 0, 2 ), new Point( 2, 0 ) );
            var expect = 1 / Math.sqrt( 2 );
            var actual = meLine.distanceTo( youLine );
            assert.equal( actual, expect );
            done();
        });

        it( '竖直 平行', function( done ){

            var meLine = new Line( new Point( 1, 1 ), new Point( 1, 0 ) );
            var youLine = new Line( new Point( 2, 1 ), new Point( 2, 0 ) );
            var expect = 1;
            var actual = meLine.distanceTo( youLine );
            assert.equal( actual, expect );
            done();
        });

        it( '水平 平行', function(done){
            var meLine = new Line( new Point( 1, 1 ), new Point( 0, 1 ) );
            var youLine = new Line( new Point( 1, 2 ), new Point( 0, 2 ) );
            var expect = 1;
            var actual = meLine.distanceTo( youLine );
            assert.equal( actual, expect );
            done();
        });

        it( '竖直 平行 过原点', function( done ){

            var meLine = new Line( new Point( 0, 1 ), new Point( 0, 0 ) );
            var youLine = new Line( new Point( 2, 1 ), new Point( 2, 0 ) );
            var expect = 2;
            var actual = meLine.distanceTo( youLine );
            assert.equal( actual, expect );
            done();
        });

        it( '水平 平行 过原点', function(done){
            var meLine = new Line( new Point( 1, 0 ), new Point( 0, 0 ) );
            var youLine = new Line( new Point( 1, 2 ), new Point( 0, 2 ) );
            var expect = 2;
            var actual = meLine.distanceTo( youLine );
            assert.equal( actual, expect );
            done();
        });
    });

    describe( '#distanceToPoint()', function(){
        it( '一般线', function( done ){
            var newLine = new Line( new Point( 0, 1 ), new Point( 1, 0 ) );
            var newPoint = new Point( 1, 1 );
            var expect = 1 / Math.sqrt( 2 );
            var actual = newLine.distanceToPoint( newPoint );
            assert.equal( actual, expect );
            done();
        });

        it( '一般线 重合', function( done ){
            var newLine = new Line( new Point( 0, 1 ), new Point( 1, 0 ) );
            var newPoint = new Point( 0.5, 0.5 );
            var expect = 0;
            var actual = newLine.distanceToPoint( newPoint );
            assert.equal( actual, expect );
            done();
        });

        it( '竖直', function( done ){
            var newLine = new Line( new Point( 1, 1 ), new Point( 1, 0 ) );
            var newPoint = new Point( 2, 0 );
            var expect = 1;
            var actual = newLine.distanceToPoint( newPoint );
            assert.equal( actual, expect );
            done();
        });

        it( '竖直 重合', function( done ){
            var newLine = new Line( new Point( 1, 1 ), new Point( 1, 0 ) );
            var newPoint = new Point( 1, 2 );
            var expect = 0;
            var actual = newLine.distanceToPoint( newPoint );
            assert.equal( actual, expect );
            done();
        });

        it( '水平', function(done){
            var newLine = new Line( new Point( 1, 1 ), new Point( 0, 1 ) );
            var newPoint = new Point( 0, 2 );
            var expect = 1;
            var actual = newLine.distanceToPoint( newPoint );
            assert.equal( actual, expect );
            done();
        });

        it( '水平 重合', function(done){
            var newLine = new Line( new Point( 1, 1 ), new Point( 0, 1 ) );
            var newPoint = new Point( 2, 1 );
            var expect = 0;
            var actual = newLine.distanceToPoint( newPoint );
            assert.equal( actual, expect );
            done();
        });

        it( '一般线 过原点', function( done ){
            var newLine = new Line( new Point( 1, 1 ), new Point( 0, 0 ) );
            var newPoint = new Point( 1, 0 );
            var expect = 1 / Math.sqrt( 2 );
            var actual = newLine.distanceToPoint( newPoint );
            assert.equal( actual, expect );
            done();
        });

        it( '一般线 重合 过原点', function( done ){
            var newLine = new Line( new Point( 1, 1 ), new Point( 0, 0 ) );
            var newPoint = new Point( 0.5, 0.5 );
            var expect = 0;
            var actual = newLine.distanceToPoint( newPoint );
            assert.equal( actual, expect );
            done();
        });

        it( '竖直 过原点', function( done ){
            var newLine = new Line( new Point( 0, 1 ), new Point( 0, 0 ) );
            var newPoint = new Point( 1, 0 );
            var expect = 1;
            var actual = newLine.distanceToPoint( newPoint );
            assert.equal( actual, expect );
            done();
        });

        it( '竖直 重合 过原点', function( done ){
            var newLine = new Line( new Point( 0, 1 ), new Point( 0, 0 ) );
            var newPoint = new Point( 0, 2 );
            var expect = 0;
            var actual = newLine.distanceToPoint( newPoint );
            assert.equal( actual, expect );
            done();
        });

        it( '水平 过原点', function(done){
            var newLine = new Line( new Point( 1, 0 ), new Point( 0, 0 ) );
            var newPoint = new Point( 0, 1 );
            var expect = 1;
            var actual = newLine.distanceToPoint( newPoint );
            assert.equal( actual, expect );
            done();
        });

        it( '水平 重合 过原点', function(done){
            var newLine = new Line( new Point( 1, 0 ), new Point( 0, 0 ) );
            var newPoint = new Point( 2, 0 );
            var expect = 0;
            var actual = newLine.distanceToPoint( newPoint );
            assert.equal( actual, expect );
            done();
        });
    });

});