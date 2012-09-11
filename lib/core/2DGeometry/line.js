var Class = require( '../class').Class;
var Point = require( './point' );

/**
 * 直线/线段
 * 使用`一般式`作为计算基础
 *
 * @param {Point} start
 * @param {Point} end
 * @constructor
 */
var Line = Class.extend({
    init: function( start, end ){

        // 用于线段构造的两个点
        this.start = start;
        this.end = end;
        // 直线一般式方程的三个参数
        this._a = undefined;
        this._b = undefined;
        this._c = undefined;

        // 初始化
        this._init();
    },

    _init: function(){

        this._a = this.end.y - this.start.y;
        this._b = this.start.x - this.end.x;
        this._c = ( this.end.x * this.start.y - this.start.x * this.end.y );
        // `_a` 和 `_b` 不能同时为 0
        if( this._a == 0 && this._b == 0 ){
            throw new Error( 'Two different point must be specified to build a line.')
        }

        // 斜率
        this.slope = this.getSlope();
    },

    /**
     * 计算斜率
     * @return {*}
     */
    getSlope: function(){

        var start = this.start;
        var end = this.end;
        if( typeof this.slope !== 'undefined' ){
            return this.slope;
        }
        else {
            return Line.getSlope( start, end );
        }
    },

    equal: function( line ){

        return this.getSlope() == line.getSlope() &&
            this._a*line.start.x + this._b*line.start.y + this._c == 0;
    },

    /**
     * 指定点是否在直线上
     * @param point
     */
    contains: function( point ){
        return !( this._a * point.x + this._b * point.y + this._c ) !== 0;
    },

    /**
     * 求与另一条直线的交点
     * @param {Line} line
     * @return {Point} 若两直线平行，则返回undefined
     */
    intersect: function( line ){
        if( line.getSlope() == this.getSlope() ){
            return undefined;
        }
        else {
            var a1 = this._a;
            var b1 = this._b;
            var c1 = this._c;
            var a2 = line._a;
            var b2 = line._b;
            var c2 = line._c;

            // 两条一般式联立
            // A1x + B1y + C1 = 0
            // A2x + B2y + C2 = 0
            var y = ( a2*c1 - c2*a1 ) / ( a1*b2 - a2*b1 );
            var x;
            if( a1 == 0 ){
                x = ( -c2 - b2 * y ) / a2;
            }
            else {
                x = ( -c1 - b1 * y ) / a1;
            }

            return new Point( x, y );
        }
    },

    /**
     * 两条平行线之间的距离
     * @param line
     * @return {Number} 若两直线平行，则返回undefined
     */
    distanceTo: function( line ){

        if( line.getSlope() != this.getSlope()){
            return undefined;
        }
        else {
            var a1 = this._a;
            var b1 = this._b;
            var c1 = this._c;
            var a2 = line._a;
            var b2 = line._b;
            var c2 = line._c;

            // 先要将A,B转化为相同...
            // 若a1为0则a2也为0，则不用转化了
            if( a1 != 0 ){
                var radio = a1 / a2;
            }
            else {
                radio = 1;
            }
            var newC = c2 * radio;
            return Math.abs( c1 - newC ) / Math.sqrt( a1 * a1 + b1 * b1 );
        }
    },

    /**
     * 线到点的距离
     * @param {Point} point
     * @return {Number}
     */
    distanceToPoint: function( point ){
        var x = point.x;
        var y = point.y;
        var a = this._a;
        var b = this._b;
        var c = this._c;

        return Math.abs( a*x + b*y + c ) / Math.sqrt( a*a + b*b );
    }
});

/**
 *
 * @param start
 * @param end
 * @return {Number}
 */
Line.getSlope = function( start, end ){

    // 此时斜率为无穷大
    if( start.x == end.x ){
        return Infinity;
    }
    else {
        if( start.y == end.y ){
            return 0;
        }
        else {
            return ( end.y - start.y ) / ( end.x - start.x );
        }
    }
};

module.exports = Line;