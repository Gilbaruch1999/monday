const colorMap = new Map();
var currentMapIndex = 0;
var colorsArray = ["#00FFFF" , "#008080","#F54927" , "#00FF00" , "#FFFF00" , "#808080" , "#000080" , "#0000FF" , "#FF00FF"
  , "#800000" , "#800080", "#808000", "#000000"]

export function getCardParentColor(parentId : string) : string
{

  if (colorMap.has(parentId))
  {
    return colorMap.get(parentId)
  }
  else
  {
    colorMap.set(parentId , colorsArray[currentMapIndex++])
    if (currentMapIndex == colorsArray.length )
      currentMapIndex = 0;
     return colorsArray[currentMapIndex-1]
  }


}

