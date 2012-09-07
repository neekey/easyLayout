module.exports = {

    /**
     * Calculate the layout.
     * Parent and the elements of children should be an object with attributes: x, y, width, height.
     * @param {Grid} parent
     * @param {Array} children
     * @return {Array} A copy of children but with calculated margin.
     */
    layout: function( parent, children ){
        return children;
    }
};