var math = require( '../math' );
var Line = require( './line' );
var Point = require( './point' );

var LineSegment = Line.extend({
    init: function( start, end ){
        this._super( start, end );
    },

    equal: function( lineSegment ){
        return this.start.equal( lineSegment.start ) && this.end.equal( lineSegment.end );
    },

    contains: function( point ){
        if( this._super.contains( point ) ){
            return math.contains( [ this.start.x, this.end.x ], point.x ) &&
                math.contains( [ this.start.y, this.end.y ], point.y );
        }
    },

    /**
     * 当前线段与直线或者另一条线段是否有交点
     * @param {Line|LineSegment} line
     * @return {Point} 若没有焦点则为undefined
     */
    intersect: function( line ){
        var lineIntersect = this._super.intersect( line );
        if( lineIntersect === undefined ){
            return undefined;
        }
        else {
            if( this.contains( lineIntersect ) && line.contains( lineIntersect ) ){
                return lineIntersect;
            }
            else {
                return undefined;
            }
        }
    }
});

module.exports = LineSegment;