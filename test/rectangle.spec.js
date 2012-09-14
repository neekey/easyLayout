var D = require( '../lib/core/2DGeometry/2d' );
var Point = D.Point;
var Line = D.Line;
var Rectangle = D.Rectangle;
var assert = require( 'assert' );

describe( 'Rectangle Test', function(){
    describe( 'Initialize', function(){
        it( 'use leftTop point and width and height.', function( done ){

            var width = 2;
            var height = 2;
            var newRect = new Rectangle( 1, 1, width, height );
            var expectPoints = {
                leftTop: { x: 1, y: 1 },
                rightTop: { x: 3, y: 1 },
                rightBottom: { x: 3, y: -1 },
                leftBottom: { x: 1, y: -1 }
            };
            var expectLines = {
                top: new Line( expectPoints.leftTop, expectPoints.rightTop ),
                right: new Line( expectPoints.rightTop, expectPoints.rightBottom ),
                bottom: new Line( expectPoints.rightBottom, expectPoints.leftBottom ),
                left: new Line( expectPoints.leftTop, expectPoints.leftBottom )
            };

            var actualLines = newRect.lines;
            var actualPoints = newRect.points;
            var type;

            for( type in actualPoints ){
                assert.equal( actualPoints[ type ].equal( expectPoints[ type ] ), true );
            }

            for( type in actualLines ){
                assert.equal( actualLines[ type ].equal( expectLines[ type ] ), true );
            }
            done();
        });

        it( 'with four points normal order', function(done){

            var leftTop = new Point( 1, 1 );
            var rightTop = new Point( 3, 1 );
            var rightBottom = new Point( 3, -1 );
            var leftBottom = new Point( 1, -1 );

            var newRect = new Rectangle( leftTop, rightTop, rightBottom, leftBottom );
            var expectPoints = {
                leftTop: { x: 1, y: 1 },
                rightTop: { x: 3, y: 1 },
                rightBottom: { x: 3, y: -1 },
                leftBottom: { x: 1, y: -1 }
            };
            var expectLines = {
                top: new Line( leftTop, expectPoints.rightTop ),
                right: new Line( expectPoints.rightTop, expectPoints.rightBottom ),
                bottom: new Line( expectPoints.rightBottom, expectPoints.leftBottom ),
                left: new Line( expectPoints.leftTop, expectPoints.leftBottom )
            };

            var actualLines = newRect.lines;
            var actualPoints = newRect.points;
            var type;

            for( type in actualPoints ){
                assert.equal( actualPoints[ type ].equal( expectPoints[ type ] ), true );
            }

            for( type in actualLines ){
                assert.equal( actualLines[ type ].equal( expectLines[ type ] ), true );
            }
            done();
        });

        it( 'with three points normal order', function(done){

            var leftTop = new Point( 1, 1 );
            var rightTop = new Point( 3, 1 );
            var rightBottom = new Point( 3, -1 );
            var leftBottom = new Point( 1, -1 );

            var newRect = new Rectangle( rightTop, rightBottom, leftBottom );
            var expectPoints = {
                leftTop: { x: 1, y: 1 },
                rightTop: { x: 3, y: 1 },
                rightBottom: { x: 3, y: -1 },
                leftBottom: { x: 1, y: -1 }
            };
            var expectLines = {
                top: new Line( leftTop, expectPoints.rightTop ),
                right: new Line( expectPoints.rightTop, expectPoints.rightBottom ),
                bottom: new Line( expectPoints.rightBottom, expectPoints.leftBottom ),
                left: new Line( expectPoints.leftTop, expectPoints.leftBottom )
            };

            var actualLines = newRect.lines;
            var actualPoints = newRect.points;
            var type;

            for( type in actualPoints ){
                assert.equal( actualPoints[ type ].equal( expectPoints[ type ] ), true );
            }

            for( type in actualLines ){
                assert.equal( actualLines[ type ].equal( expectLines[ type ] ), true );
            }
            done();
        });

        it( 'with three points random order', function(done){

            var leftTop = new Point( 1, 1 );
            var rightTop = new Point( 3, 1 );
            var rightBottom = new Point( 3, -1 );
            var leftBottom = new Point( 1, -1 );

            var newRect = new Rectangle( leftBottom, rightTop, rightBottom );
            var expectPoints = {
                leftTop: { x: 1, y: 1 },
                rightTop: { x: 3, y: 1 },
                rightBottom: { x: 3, y: -1 },
                leftBottom: { x: 1, y: -1 }
            };
            var expectLines = {
                top: new Line( leftTop, expectPoints.rightTop ),
                right: new Line( expectPoints.rightTop, expectPoints.rightBottom ),
                bottom: new Line( expectPoints.rightBottom, expectPoints.leftBottom ),
                left: new Line( expectPoints.leftTop, expectPoints.leftBottom )
            };

            var actualLines = newRect.lines;
            var actualPoints = newRect.points;
            var type;

            for( type in actualPoints ){
                assert.equal( actualPoints[ type ].equal( expectPoints[ type ] ), true );
            }

            for( type in actualLines ){
                assert.equal( actualLines[ type ].equal( expectLines[ type ] ), true );
            }
            done();
        });
    });
});