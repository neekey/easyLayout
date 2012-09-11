var Class = require( '../class').Class;

/**
 * 点
 * @param x
 * @param y
 * @constructor
 */
var Point = Class.extend({
    init: function( x, y ){
        this.x = x;
        this.y = y;
    },

    /**
     * 与另一个点的距离
     * @param point
     * @return {Number}
     */
    distanceTo: function( point ){
        return Math.sqrt( Math.pow( ( this.x - point.x ), 2 ) + Math.pow( ( this.y - point.y ), 2 ) );
    },

    /**
     * 与另一个点在竖直上是否相同
     * @param point
     * @return {Boolean}
     */
    equal: function( point ){
        return this.x == point.x && this.y == point.y;
    }
});

module.exports = Point;