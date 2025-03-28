/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Compares the `x`, `y` and `radius` properties of the two given Circles.
 * Returns `true` if they all match, otherwise returns `false`.
 *
 * @function Phaser.Geom.Circle.Equals
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The first Circle to compare.
 * @param {Phaser.Geom.Circle} toCompare - The second Circle to compare.
 *
 * @return {boolean} `true` if the two Circles equal each other, otherwise `false`.
 */
var Equals = function (circle, toCompare)
{
    return (
        circle.x === toCompare.x &&
        circle.y === toCompare.y &&
        circle.radius === toCompare.radius
    );
};

module.exports = Equals;
