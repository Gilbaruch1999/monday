const colorMap = new Map();
let currentMapIndex = 0;
const colorsArray = ["#00FFFF" , "#008080","#CE93D8" , "#4DB6AC" , "#E6EE9C" , "#BCAAA4" , "#000080" , "#00E5FF" , "#B39DDB"
  , "#A1887F" , "#A5D6A7", "#CFD8DC", "#000000"]

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

