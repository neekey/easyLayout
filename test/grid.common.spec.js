var Grid = require( '../lib/core/grid' );
var assert = require( 'assert' );
var _ = require( 'underscore' );

describe( 'Grid API Test', function(){
    describe( 'initialize', function(){
        it( 'initialize', function( done ){
            var initializeData = {
                x: 0,
                y: 0,
                children: [],
                parent: undefined,
                style: {
                    width: 20,
                    height: 30,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                    display: 'block',
                    float: 'left',
                    position: 'normal',
                    clear: 'none'
                }
            };
            var newGrid = new Grid;
            var data = newGrid.toJSON();
            assert.deepEqual( data, initializeData );
            done();
        });

        it( 'initialize - custom', function(done){
            var initializeData = {
                x: 10,
                y: 20,
                children: [],
                parent: 'a',
                style: {
                    width: 2,
                    height: 3,
                    marginTop: 10,
                    marginRight: 20,
                    marginBottom: 30,
                    marginLeft: 40,
                    display: 'none',
                    float: 'right',
                    position: 'absolute',
                    clear: 'left'
                }
            };
            var newGrid = new Grid( initializeData );
            var data = newGrid.toJSON();
            assert.deepEqual( data, initializeData );
            done();
        });

        it( 'initialize - without style', function(done){
            var initializeData = {
                x: 10,
                y: 20,
                children: [],
                parent: 'a'
            };
            var expectData = {
                x: 10,
                y: 20,
                children: [],
                parent: 'a',
                style: {
                    width: 20,
                    height: 30,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                    display: 'block',
                    float: 'left',
                    position: 'normal',
                    clear: 'none'
                }
            };
            var newGrid = new Grid( initializeData );
            var data = newGrid.toJSON();
            assert.deepEqual( data, expectData );
            done();
        });
    });

    describe( 'style', function(){

        it( '#style()', function(done){

            var style = {
                width: 20,
                height: 30,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                display: 'block',
                float: 'left',
                position: 'normal',
                clear: 'none'
            };
            var newGrid = new Grid;
            var styleData = newGrid.style();
            assert.deepEqual( styleData, style );
            done();
        });

        it( '#style( attr )', function( done ){
            var style = {
                width: 20,
                height: 30,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                display: 'block',
                float: 'left',
                position: 'normal',
                clear: 'none'
            };
            var newGrid = new Grid;

            _.each( style, function( value, key ){
                assert.equal( newGrid.style( key ), value );
            });
            done();
        });

        it( '#style( attr, value )', function(done){

            var style = {
                width: 20,
                height: 30,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                display: 'block',
                float: 'left',
                position: 'normal',
                clear: 'none'
            };
            var styleUpdated = {
                width: 2,
                height: 3,
                marginTop: 10,
                marginRight: 20,
                marginBottom: 30,
                marginLeft: 10,
                display: 'none',
                float: 'right',
                position: 'none',
                clear: 'left'
            };

            var newGrid = new Grid;
            _.each( style, function( value, key ){
                // Before set.
                assert.equal( newGrid.style( key ), value );
                newGrid.style( key, styleUpdated[ key ] );
                // After set.
                assert.equal( newGrid.style( key ), styleUpdated[ key ] );
            });
            done();
        });

        it( '#style( styleObject )', function(done){

            var style = {
                width: 20,
                height: 30,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                display: 'block',
                float: 'left',
                position: 'normal',
                clear: 'none'
            };
            var styleUpdated = {
                width: 2,
                height: 3,
                marginTop: 10,
                marginRight: 20,
                marginBottom: 30,
                marginLeft: 10,
                display: 'none',
                float: 'right',
                position: 'none',
                clear: 'left'
            };

            var newGrid = new Grid;

            // Before change.
            _.each( style, function( value, key ){
                assert.equal( newGrid.style( key ), value );
            });

            newGrid.style( styleUpdated );

            // After change.
            _.each( styleUpdated, function( value, key ){
                assert.equal( newGrid.style( key ), value );
            });
            done();
        });
    });

    describe( 'children', function(){
        it( '#addChild( data )', function( done ){

            var newGrid = new Grid;
            var childData = {
                x: 10,
                y: 20,
                children: [],
                parent: 'a',
                style: {
                    width: 2,
                    height: 3,
                    marginTop: 10,
                    marginRight: 20,
                    marginBottom: 30,
                    marginLeft: 40,
                    display: 'none',
                    float: 'right',
                    position: 'absolute',
                    clear: 'left'
                }
            };
            var newChild = new Grid( childData );

            newGrid.addChild( childData );

            assert.equal( newGrid.get( 'children').length, 1 );
            assert.deepEqual( newGrid.get( 'children')[ 0 ].toJSON(), newChild.toJSON() );
            done();
        });

        it( '#addChild( grid )', function( done ){

            var newGrid = new Grid;
            var childData = {
                x: 10,
                y: 20,
                children: [],
                parent: 'a',
                style: {
                    width: 2,
                    height: 3,
                    marginTop: 10,
                    marginRight: 20,
                    marginBottom: 30,
                    marginLeft: 40,
                    display: 'none',
                    float: 'right',
                    position: 'absolute',
                    clear: 'left'
                }
            };

            var newChild = new Grid( childData );
            newGrid.addChild( newChild );
            assert.equal( newGrid.get( 'children').length, 1 );
            assert.strictEqual( newGrid.get( 'children')[ 0 ], newChild );
            done();
        });

        it( '#removeChild( child )', function( done ){
            var newGrid = new Grid;
            var childData = {
                x: 10,
                y: 20,
                children: [],
                parent: 'a',
                style: {
                    width: 2,
                    height: 3,
                    marginTop: 10,
                    marginRight: 20,
                    marginBottom: 30,
                    marginLeft: 40,
                    display: 'none',
                    float: 'right',
                    position: 'absolute',
                    clear: 'left'
                }
            };

            var newChild = new Grid( childData );
            newGrid.addChild( newChild );
            assert.equal( newGrid.get( 'children').length, 1 );
            assert.strictEqual( newGrid.get( 'children')[ 0 ], newChild );

            newGrid.removeChild( newChild );
            assert.equal( newGrid.get( 'children').length, 0 );

            done();
        });
    });

    describe( 'event bind', function(){
        it( '#onStyle( change ) / #onStyle( change:attr )', function( done ){

            var newGrid = new Grid;
            var updateData = {
                width: 2,
                height: 3,
                marginTop: 10,
                marginRight: 20,
                marginBottom: 30,
                marginLeft: 10,
                display: 'none',
                float: 'right',
                position: 'none',
                clear: 'left'
            };

            var ifTriggered = {
                width: false,
                height: false,
                marginTop: false,
                marginRight: false,
                marginBottom: false,
                marginLeft: false,
                display: false,
                float: false,
                position: false,
                clear: false
            };

            var ifTriggerIndividual = {
                width: false,
                height: false,
                marginTop: false,
                marginRight: false,
                marginBottom: false,
                marginLeft: false,
                display: false,
                float: false,
                position: false,
                clear: false
            };

            newGrid.onStyle( 'change', function( model, change ){
                _.each( change.changes, function( value, key ){
                    if( ifTriggered[ key ] === false && value ){
                        ifTriggered[ key ] = true;
                    }
                });
            });

            _.each( ifTriggerIndividual, function( value, key ){
                newGrid.onStyle( 'change:' + key, function( model , change ){
                    assert.equal( change, updateData[ key ] );
                    if( ifTriggerIndividual[ key ] === false ){
                        ifTriggerIndividual[ key ] = true;
                    }
                });
            });

            _.each( updateData, function( value, key ){
                newGrid.style( key, value );
            });

            _.each( ifTriggered, function( value, key ){
                assert.strictEqual( value, true );
            });

            _.each( ifTriggerIndividual, function( value, key ){
                assert.strictEqual( value, true );
            });
            done();
        });

        it( 'children: add', function(done){

            var newGrid = new Grid;
            var childData = {
                x: 10,
                y: 20,
                children: [],
                parent: 'a',
                style: {
                    width: 2,
                    height: 3,
                    marginTop: 10,
                    marginRight: 20,
                    marginBottom: 30,
                    marginLeft: 40,
                    display: 'none',
                    float: 'right',
                    position: 'absolute',
                    clear: 'left'
                }
            };

            var ifTriggered = false;

            newGrid.on( 'change:children', function( model, children ){
                ifTriggered = true;
                assert.deepEqual( children, newGrid.get( 'children' ) );
            });

            var newChild = new Grid( childData );
            newGrid.addChild( newChild );
            assert.equal( newGrid.get( 'children').length, 1 );
            assert.strictEqual( ifTriggered, true );
            done();
        });

        it( 'children: remove', function(done){

            var newGrid = new Grid;
            var childData = {
                x: 10,
                y: 20,
                children: [],
                parent: 'a',
                style: {
                    width: 2,
                    height: 3,
                    marginTop: 10,
                    marginRight: 20,
                    marginBottom: 30,
                    marginLeft: 40,
                    display: 'none',
                    float: 'right',
                    position: 'absolute',
                    clear: 'left'
                }
            };

            var ifTriggered = false;
            var newChild = new Grid( childData );
            newGrid.addChild( newChild );

            newGrid.on( 'change:children', function( model, children ){
                ifTriggered = true;
                assert.deepEqual( children, newGrid.get( 'children' ) );
            });

            assert.equal( newGrid.get( 'children').length, 1 );
            newGrid.removeChild( newChild );
            assert.equal( newGrid.get( 'children').length, 0 );
            assert.strictEqual( ifTriggered, true );
            done();
        });
    });


});