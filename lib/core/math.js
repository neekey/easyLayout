/**
 * 数学相关的方法
 */
module.exports = {
    contains: function( range, target ){

        var edgeLarge = range[ 0 ] > range[ 1 ] ? range[ 0 ] : range[ 1 ];
        var edgeSmall = range[ 0 ] < range[ 1 ] ? range[ 0 ] : range[ 1 ];
        return edgeLarge >= target && edgeSmall <= target;
    }
};