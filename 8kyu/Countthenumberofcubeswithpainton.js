let countSquares = function(cuts){
    if(!cuts){
      return 1
    }else {
      let totalCubs = Math.pow(cuts+1, 3)
      let innerCubs = Math.pow(cuts-1, 3)
      return totalCubs - innerCubs
    }
  }