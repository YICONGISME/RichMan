//颜色枚举
var Colors;
(function (Colors) {
    // export const BLACK: number = 0x000000;
    Colors.DIMGRAY = 0x696969;
    Colors.GRAY = 0x808080;
    Colors.DARKGRAY = 0xA9A9A9;
    Colors.SILVER = 0xC0C0C0;
    Colors.LIGHTGREY = 0xD3D3D3;
    Colors.GAINSBORO = 0xDCDCDC;
    Colors.WHITESMOKE = 0xF5F5F5;
    Colors.WHITE = 0xFFFFFF;
    Colors.SNOW = 0xFFFAFA;
    Colors.GHOSTWHITE = 0xF8F8FF;
    Colors.FLORALWHITE = 0xFFFAF0;
    Colors.LINEN = 0xFAF0E6;
    Colors.ANTIQUEWHITE = 0xFAEBD7;
    Colors.PAPAYAWHIP = 0xFFEFD5;
    Colors.BLANCHEDALMOND = 0xFFEBCD;
    Colors.BISQUE = 0xFFE4C4;
    Colors.MOCCASIN = 0xFFE4B5;
    Colors.NAVAJOWHITE = 0xFFDEAD;
    Colors.PEACHPUFF = 0xFFDAB9;
    Colors.MISTYROSE = 0xFFE4E1;
    Colors.LAVENDERBLUSH = 0xFFF0F5;
    Colors.SEASHELL = 0xFFF5EE;
    Colors.OLDLACE = 0xFDF5E6;
    Colors.IVORY = 0xFFFFF0;
    Colors.HONEYDEW = 0xF0FFF0;
    Colors.MINTCREAM = 0xF5FFFA;
    Colors.AZURE = 0xF0FFFF;
    Colors.ALICEBLUE = 0xF0F8FF;
    Colors.LAVENDER = 0xE6E6FA;
    Colors.LIGHTSTEELBLUE = 0xB0C4DE;
    Colors.LIGHTSLATEGRAY = 0x778899;
    Colors.SLATEGRAY = 0x708090;
    Colors.STEELBLUE = 0x4682B4;
    Colors.ROYALBLUE = 0x4169E1;
    Colors.MIDNIGHTBLUE = 0x191970;
    Colors.NAVY = 0x000080;
    Colors.DARKBLUE = 0x00008B;
    Colors.MEDIUMBLUE = 0x0000CD;
    Colors.BLUE = 0x0000FF;
    Colors.DODGERBLUE = 0x1E90FF;
    Colors.CORNFLOWERBLUE = 0x6495ED;
    Colors.DEEPSKYBLUE = 0x00BFFF;
    Colors.LIGHTSKYBLUE = 0x87CEFA;
    Colors.SKYBLUE = 0x87CEEB;
    Colors.LIGHTBLUE = 0xADD8E6;
    Colors.POWDERBLUE = 0xB0E0E6;
    Colors.PALETURQUOISE = 0xAFEEEE;
    Colors.LIGHTCYAN = 0xE0FFFF;
    Colors.CYAN = 0x00FFFF;
    Colors.AQUA = 0x00FFFF;
    Colors.TURQUOISE = 0x40E0D0;
    Colors.MEDIUMTURQUOISE = 0x48D1CC;
    Colors.DARKTURQUOISE = 0x00CED1;
    Colors.LIGHTSEAGREEN = 0x20B2AA;
    Colors.CADETBLUE = 0x5F9EA0;
    Colors.DARKCYAN = 0x008B8B;
    Colors.TEAL = 0x008080;
    Colors.DARKSLATEGRAY = 0x2F4F4F;
    Colors.DARKGREEN = 0x006400;
    Colors.GREEN = 0x008000;
    Colors.FORESTGREEN = 0x228B22;
    Colors.SEAGREEN = 0x2E8B57;
    Colors.MEDIUMSEAGREEN = 0x3CB371;
    Colors.MEDIUMAQUAMARINE = 0x66CDAA;
    Colors.DARKSEAGREEN = 0x8FBC8F;
    Colors.AQUAMARINE = 0x7FFFD4;
    Colors.PALEGREEN = 0x98FB98;
    Colors.LIGHTGREEN = 0x90EE90;
    Colors.SPRINGGREEN = 0x00FF7F;
    Colors.MEDIUMSPRINGGREEN = 0x00FA9A;
    Colors.LAWNGREEN = 0x7CFC00;
    Colors.CHARTREUSE = 0x7FFF00;
    Colors.GREENYELLOW = 0xADFF2F;
    Colors.LIME = 0x00FF00;
    Colors.LIMEGREEN = 0x32CD32;
    Colors.YELLOWGREEN = 0x9ACD32;
    Colors.DARKOLIVEGREEN = 0x556B2F;
    Colors.OLIVEDRAB = 0x6B8E23;
    Colors.OLIVE = 0x808000;
    Colors.DARKKHAKI = 0xBDB76B;
    Colors.PALEGOLDENROD = 0xEEE8AA;
    Colors.CORNSILK = 0xFFF8DC;
    Colors.BEIGE = 0xF5F5DC;
    Colors.LIGHTYELLOW = 0xFFFFE0;
    Colors.LIGHTGOLDENRODYELLOW = 0xFAFAD2;
    Colors.LEMONCHIFFON = 0xFFFACD;
    Colors.WHEAT = 0xF5DEB3;
    Colors.BURLYWOOD = 0xDEB887;
    Colors.TAN = 0xD2B48C;
    Colors.KHAKI = 0xF0E68C;
    Colors.YELLOW = 0xFFFF00;
    Colors.GOLD = 0xFFD700;
    Colors.ORANGE = 0xFFA500;
    Colors.SANDYBROWN = 0xF4A460;
    Colors.DARKORANGE = 0xFF8C00;
    Colors.GOLDENROD = 0xDAA520;
    Colors.PERU = 0xCD853F;
    Colors.DARKGOLDENROD = 0xB8860B;
    Colors.CHOCOLATE = 0xD2691E;
    Colors.SIENNA = 0xA0522D;
    Colors.SADDLEBROWN = 0x8B4513;
    Colors.MAROON = 0x800000;
    Colors.DARKRED = 0x8B0000;
    Colors.BROWN = 0xA52A2A;
    Colors.FIREBRICK = 0xB22222;
    Colors.INDIANRED = 0xCD5C5C;
    Colors.ROSYBROWN = 0xBC8F8F;
    Colors.DARKSALMON = 0xE9967A;
    Colors.LIGHTCORAL = 0xF08080;
    Colors.SALMON = 0xFA8072;
    Colors.LIGHTSALMON = 0xFFA07A;
    Colors.CORAL = 0xFF7F50;
    Colors.TOMATO = 0xFF6347;
    Colors.ORANGERED = 0xFF4500;
    Colors.RED = 0xFF0000;
    Colors.CRIMSON = 0xDC143C;
    Colors.MEDIUMVIOLETRED = 0xC71585;
    Colors.DEEPPINK = 0xFF1493;
    Colors.HOTPINK = 0xFF69B4;
    Colors.PALEVIOLETRED = 0xDB7093;
    Colors.PINK = 0xFFC0CB;
    Colors.LIGHTPINK = 0xFFB6C1;
    Colors.THISTLE = 0xD8BFD8;
    Colors.MAGENTA = 0xFF00FF;
    Colors.FUCHSIA = 0xFF00FF;
    Colors.VIOLET = 0xEE82EE;
    Colors.PLUM = 0xDDA0DD;
    Colors.ORCHID = 0xDA70D6;
    Colors.MEDIUMORCHID = 0xBA55D3;
    Colors.DARKORCHID = 0x9932CC;
    Colors.DARKVIOLET = 0x9400D3;
    Colors.DARKMAGENTA = 0x8B008B;
    Colors.PURPLE = 0x800080;
    Colors.INDIGO = 0x4B0082;
    Colors.DARKSLATEBLUE = 0x483D8B;
    Colors.BLUEVIOLET = 0x8A2BE2;
    Colors.MEDIUMPURPLE = 0x9370DB;
    Colors.SLATEBLUE = 0x6A5ACD;
    Colors.MEDIUMSLATEBLUE = 0x7B68EE;
    Colors.colors = [
        // BLACK,
        Colors.DIMGRAY,
        Colors.GRAY,
        Colors.DARKGRAY,
        Colors.SILVER,
        Colors.LIGHTGREY,
        Colors.GAINSBORO,
        Colors.WHITESMOKE,
        Colors.WHITE,
        Colors.SNOW,
        Colors.GHOSTWHITE,
        Colors.FLORALWHITE,
        Colors.LINEN,
        Colors.ANTIQUEWHITE,
        Colors.PAPAYAWHIP,
        Colors.BLANCHEDALMOND,
        Colors.BISQUE,
        Colors.MOCCASIN,
        Colors.NAVAJOWHITE,
        Colors.PEACHPUFF,
        Colors.MISTYROSE,
        Colors.LAVENDERBLUSH,
        Colors.SEASHELL,
        Colors.OLDLACE,
        Colors.IVORY,
        Colors.HONEYDEW,
        Colors.MINTCREAM,
        Colors.AZURE,
        Colors.ALICEBLUE,
        Colors.LAVENDER,
        Colors.LIGHTSTEELBLUE,
        Colors.LIGHTSLATEGRAY,
        Colors.SLATEGRAY,
        Colors.STEELBLUE,
        Colors.ROYALBLUE,
        Colors.MIDNIGHTBLUE,
        Colors.NAVY,
        Colors.DARKBLUE,
        Colors.MEDIUMBLUE,
        Colors.BLUE,
        Colors.DODGERBLUE,
        Colors.CORNFLOWERBLUE,
        Colors.DEEPSKYBLUE,
        Colors.LIGHTSKYBLUE,
        Colors.SKYBLUE,
        Colors.LIGHTBLUE,
        Colors.POWDERBLUE,
        Colors.PALETURQUOISE,
        Colors.LIGHTCYAN,
        Colors.CYAN,
        Colors.AQUA,
        Colors.TURQUOISE,
        Colors.MEDIUMTURQUOISE,
        Colors.DARKTURQUOISE,
        Colors.LIGHTSEAGREEN,
        Colors.CADETBLUE,
        Colors.DARKCYAN,
        Colors.TEAL,
        Colors.DARKSLATEGRAY,
        Colors.DARKGREEN,
        Colors.GREEN,
        Colors.FORESTGREEN,
        Colors.SEAGREEN,
        Colors.MEDIUMSEAGREEN,
        Colors.MEDIUMAQUAMARINE,
        Colors.DARKSEAGREEN,
        Colors.AQUAMARINE,
        Colors.PALEGREEN,
        Colors.LIGHTGREEN,
        Colors.SPRINGGREEN,
        Colors.MEDIUMSPRINGGREEN,
        Colors.LAWNGREEN,
        Colors.CHARTREUSE,
        Colors.GREENYELLOW,
        Colors.LIME,
        Colors.LIMEGREEN,
        Colors.YELLOWGREEN,
        Colors.DARKOLIVEGREEN,
        Colors.OLIVEDRAB,
        Colors.OLIVE,
        Colors.DARKKHAKI,
        Colors.PALEGOLDENROD,
        Colors.CORNSILK,
        Colors.BEIGE,
        Colors.LIGHTYELLOW,
        Colors.LIGHTGOLDENRODYELLOW,
        Colors.LEMONCHIFFON,
        Colors.WHEAT,
        Colors.BURLYWOOD,
        Colors.TAN,
        Colors.KHAKI,
        Colors.YELLOW,
        Colors.GOLD,
        Colors.ORANGE,
        Colors.SANDYBROWN,
        Colors.DARKORANGE,
        Colors.GOLDENROD,
        Colors.PERU,
        Colors.DARKGOLDENROD,
        Colors.CHOCOLATE,
        Colors.SIENNA,
        Colors.SADDLEBROWN,
        Colors.MAROON,
        Colors.DARKRED,
        Colors.BROWN,
        Colors.FIREBRICK,
        Colors.INDIANRED,
        Colors.ROSYBROWN,
        Colors.DARKSALMON,
        Colors.LIGHTCORAL,
        Colors.SALMON,
        Colors.LIGHTSALMON,
        Colors.CORAL,
        Colors.TOMATO,
        Colors.ORANGERED,
        Colors.RED,
        Colors.CRIMSON,
        Colors.MEDIUMVIOLETRED,
        Colors.DEEPPINK,
        Colors.HOTPINK,
        Colors.PALEVIOLETRED,
        Colors.PINK,
        Colors.LIGHTPINK,
        Colors.THISTLE,
        Colors.MAGENTA,
        Colors.FUCHSIA,
        Colors.VIOLET,
        Colors.PLUM,
        Colors.ORCHID,
        Colors.MEDIUMORCHID,
        Colors.DARKORCHID,
        Colors.DARKVIOLET,
        Colors.DARKMAGENTA,
        Colors.PURPLE,
        Colors.INDIGO,
        Colors.DARKSLATEBLUE,
        Colors.BLUEVIOLET,
        Colors.MEDIUMPURPLE,
        Colors.SLATEBLUE,
        Colors.MEDIUMSLATEBLUE
    ];
})(Colors || (Colors = {}));
