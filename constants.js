

const IP    = "165.227.47.243";
const PORT  = 50541;
const MOVE_UP_KEY     = "w";
const MOVE_DOWN_KEY   = "s";
const MOVE_LEFT_KEY   = "a";
const MOVE_RIGHT_KEY  = "d";
const YUMM_KEY        = "3";
const HISS_KEY        = "1";
const PLAYER_NAME = process.argv[2]; //fisrt command line arg will be input as player name



module.exports = {
  IP,
  PORT,
  MOVE_DOWN_KEY,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  YUMM_KEY,
  HISS_KEY,
  PLAYER_NAME
};