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
    }
});

module.exports = Point;