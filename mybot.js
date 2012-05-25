
var board
var items = []
var targetedItems = []
var targetedIndex = 0

function new_game() {

   board = get_board()

   items = []
   targetedItems = []
   targetedIndex = 0

   for (var i = 0; i < WIDTH; i++) {
     for (var j = 0; j < HEIGHT; j++) {
         if (has_item(board[i][j])) {
            !items && (items = [])
            !items[board[i][j]] && (items[board[i][j]] = [])
            items[board[i][j]].push(new node(i, j, null))
         }
      }
   }

   targetedItems = items[items.length-1]
}

function make_move() {
   // we found an item! take it!
   var item = targetedItems[targetedIndex]
   if(get_my_x() == item.x && get_my_y() == item.y) {
      targetedItems.length > targetedIndex && targetedIndex++
      if (board[get_my_x()][get_my_y()] > 0) {
         return TAKE
      }
   }

   if (get_my_x() < targetedItems[targetedIndex].x) {
      return EAST
   } else if (get_my_x() > targetedItems[targetedIndex].x) {
      return WEST
   } else if (get_my_y() > targetedItems[targetedIndex].y) {
      return NORTH
   } else if (get_my_y() < targetedItems[targetedIndex].y) {
      return SOUTH
   } 

   return PASS;
}

function node(x, y, move) {
    this.x = x;
    this.y = y;
    this.move = move;
}