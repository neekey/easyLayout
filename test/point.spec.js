var D = require( '../lib/core/2DGeometry/2d' );
var Point = D.Point;
var assert = require( 'assert' );


describe( '#Point test', function(){
    describe( 'Methods', function(){
        it( 'initialize', function( done ){
            var x = 10;
            var y = 20;
            var point = new Point( x, y );

            assert.equal( point.x, x );
            assert.equal( point.y, y );
            done();
        });

        it( '#distanceTo( point )', function(done){

            var meX = 10;
            var meY = 20;
            var youX = 30;
            var youY = 40;

            var me = new Point( meX, meY );
            var you = new Point( youX, youY );
            var distance = me.distanceTo( you );
            var expect = Math.sqrt( 800 );

            assert.equal( distance, expect );
            done();
        });
    });
});