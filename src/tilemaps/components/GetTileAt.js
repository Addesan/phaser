/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var IsInLayerBounds = require('./IsInLayerBounds');

/**
 * Gets a tile at the given tile coordinates from the given layer.
 *
 * @function Phaser.Tilemaps.Components.GetTileAt
 * @since 3.0.0
 *
 * @param {number} tileX - X position to get the tile from (given in tile units, not pixels).
 * @param {number} tileY - Y position to get the tile from (given in tile units, not pixels).
 * @param {boolean} nonNull - For empty tiles, return a Tile object with an index of -1 instead of null.
 * @param {Phaser.Tilemaps.LayerData} layer - The Tilemap Layer to act upon.
 *
 * @return {Phaser.Tilemaps.Tile} The tile at the given coordinates or null if no tile was found or the coordinates were invalid.
 */
var GetTileAt = function (tileX, tileY, nonNull, layer)
{
    if (IsInLayerBounds(tileX, tileY, layer))
    {
        var tile = layer.data[tileY][tileX] || null;

        if (!tile)
        {
            return null;
        }
        else if (tile.index === -1)
        {
            return nonNull ? tile : null;
        }
        else
        {
            return tile;
        }
    }
    else
    {
        return null;
    }
};

module.exports = GetTileAt;
