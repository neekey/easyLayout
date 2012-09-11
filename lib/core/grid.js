//var EventEmitter = require( 'events').EventEmitter;
//var Util = require( 'util' );
var _ = require( 'underscore' );
var Model = require( 'backbone').Model;

var Grid = module.exports = Model.extend({

    defaults: {
        x: 0,
        y: 0,
        children: undefined,
        parent: undefined,
        style: {},
        attributes: {}
    },

    initialize: function(){
        var self = this;
        var style = this.get( 'style' ) || {};
        var defaultStyle = {
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

        var children = this.get( 'children' ) || [];
        this.set( 'children', [] );
        children.forEach(function( child ){
            self.addChild( child );
        });

        style = _.defaults( style, defaultStyle );
        this.set( 'style', new Model( style ) );
    },

    toJSON: function(){
        var data = Model.prototype.toJSON.apply( this );
        data.style = this.get( 'style').toJSON();
        var children = this.get( 'children' );
        var _children = [];
        _.each( children, function( child ){
            _children.push( child.toJSON() );
        });
        return data;
    },

    style: function( attr, value ){
        if( attr ){
            if( value ){
                this.get( 'style').set( attr , value );
            }
            else if( _.isString( attr ) ){
                return this.get( 'style').get( attr );
            }
            else if(_.isObject( attr )){
                return this.get( 'style').set( attr );
            }
            else {
                return this.get( 'style').toJSON();
            }
        }
        else {
            return this.get( 'style').toJSON();
        }
    },

    onStyle: function(){
        var style = this.get( 'style' );
        style.on.apply( style, arguments );
    },

    offStyle: function(){
        var style = this.get( 'style' );
        style.off.apply( style, arguments );
    },

    triggerStyle: function(){
        var style = this.get( 'style' );
        style.trigger.apply( style, arguments );
    },

    addChild: function( child ){

        if( child ){
            var children = this.get( 'children' );
            if( child.constructor == Grid ){
                children.push( child );
            }
            else {
                children.push( new Grid(child));

            }
            this.set( 'children', children );
            this.trigger( 'change:children', this, this.get( 'children' ) );
        }
    },

    removeChild: function( child ){
        var children = this.get( 'children' );
        var index = _.indexOf( children, child );
        if( index >= 0 ){
            children.splice( index, 1 );
            this.set( 'children', children );
            this.trigger( 'change:children', this, this.get( 'children' ) );
        }
    },

    layout: function(){

    }
});