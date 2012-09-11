var Class = require( '../class').Class;
var Line = require( './line' );
var LineSegment = require( './lineSegment' );
var Point = require( './point' );

var Rectangle = Class.extend({
    init: function( x, y, w, h ){

        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;

        // 矩形的四个端点
        this.points = {
            leftTop: new Point( x, y ),
            rightTop: new Point( x + w, y ),
            rightBottom: new Point( x + w, y - h ),
            leftBottom: new Point( x, y - h )
        };

        // 矩形的四条边
        this.lines = {
            top: new Line( this.points.leftTop, this.points.rightTop ),
            right: new Line( this.rightTop, this.rightBottom ),
            bottom: new Line( this.rightBottom, this.leftBottom ),
            left: new Line( this.leftTop, this.leftBottom )
        };
    },

    /**
     * 制定点是否在矩形中
     * @param {Point} Point
     * @return {Boolean}
     */
    contains: function( Point ){
        return this.leftTop.x <= Point.x && this.rightBottom.x > Point.x &&
            this.leftTop.y >= Point.y && this.rightBottom.y <= Point.y;
    },

    intersectLine: function(){

    },

    /**
     * 与制定的矩形是否重叠
     * @param rectangle
     */
    intersect: function( rectangle ){

        var containPoints = [];
        var pointType;

        for( pointType in rectangle.points ){
            if( this.contains( rectangle.points[ pointType ] ) ){
                containPoints.push( pointType );
            }
        }

        var intersectCount = containPoints.length;

        // 没有重叠
        if( intersectCount == 0 ){
            return undefined;
        }
        // 有重叠，计算相交区域
        else {
            if( intersectCount == 1 ){

            }
        }
    }
});

module.exports = Rectangle;