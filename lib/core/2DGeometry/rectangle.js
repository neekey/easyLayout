var Class = require( '../class').Class;
var Line = require( './line' );
var LineSegment = require( './lineSegment' );
var Point = require( './point' );

var Rectangle = Class.extend({

    /**
     * 矩形初始化. 两种方式
     *      1、四个参数分别为：左上角顶点
     * @param x
     * @param y
     * @param w
     * @param h
     */
    init: function( x, y, w, h ){

        if( typeof x == 'number' ){
            this.width = w;
            this.height = h;
            this.x = x;
            this.y = y;

            this._init();
        }
        // 若给定了三个点
        else if( x instanceof Point ){
            // 计算width 和 height
            var points = arguments;
            var pointsLength = points.length;
            var index;
            var point;
            var maxX = undefined;
            var maxY = undefined;
            var minX = undefined;
            var minY = undefined;
            var maxXPoint;
            var maxYPoint;
            var minXPoint;
            var minYPoint;

            // 计算最小的x\y和最大的x\y
            for( index = 0; index < pointsLength; index++ ){
                point = points[ index ];
                if( maxX === undefined ){
                    maxX = point.x;
                    maxXPoint = Point;
                }
                else {
                    if( point.x > maxX ){
                        maxX = point.x;
                        maxXPoint = point;
                    }
                }

                if( maxY === undefined ){
                    maxY = point.y;
                    maxYPoint = Point;
                }
                else {
                    if( point.y > maxY ){
                        maxY = point.y;
                        maxYPoint = point;
                    }
                }

                if( minX === undefined ){
                    minX = point.x;
                    minXPoint = Point;
                }
                else {
                    if( point.x < minX ){
                        minX = point.x;
                        minXPoint = point;
                    }
                }

                if( minY === undefined ){
                    minY = point.y;
                    minYPoint = Point;
                }
                else {
                    if( point.y < minY ){
                        minY = point.y;
                        minYPoint = point;
                    }
                }
            }

            this.width = maxX - minX;
            this.height = maxY - minY;
            this.x = minX;
            this.y = maxY;
            this._init();
        }
    },

    /**
     * 根据左上角的点坐标和矩形的宽高，确定其他四个顶点以及四条边
     * @private
     */
    _init: function(){
        var x = this.x;
        var y = this.y;
        var w = this.width;
        var h = this.height;
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
            right: new Line( this.points.rightTop, this.points.rightBottom ),
            bottom: new Line( this.points.rightBottom, this.points.leftBottom ),
            left: new Line( this.points.leftTop, this.points.leftBottom )
        };
    },

    equal: function( rectangle ){
        return this.x == rectangle.x && this.y == rectangle.y &&
            this.width == rectangle.width && this.height == rectangle.height;
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

    /**
     * 与制定的矩形是否重叠
     * @param {Rectangle|Line|LineSegment} shape
     */
    intersect: function( shape ){


    },

    _intersectRectangle: function( rectangle ){
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

                switch( pointType ){

                }
            }
            else if( intersectCount == 2 ){

            }
            else if( intersectCount == 4 ){
                return rectangle;
            }
            else {
                return undefined;
            }
        }
    },

    _intersectLine: function( line ){

        var lineType;
        var intersectPoints = [];
        var intersectPoint = undefined;

        for( lineType in this.lines ){
            intersectPoint = this.lines[ lineType ].intersect( line );
            if( intersectPoint ){
                intersectPoints.push( intersectPoint );
            }
            intersectPoint = undefined;
        }

        return intersectPoints;
    }
});

module.exports = Rectangle;