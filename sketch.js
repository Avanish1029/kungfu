var Player1;
var Player1_win, Player1_win_still;
var Player1_LS_lose_still;

// Left side
var Player1_LS_anim_norm;
var Player1_LS_anim_move_Left, Player1_LS_anim_move_left;
var Player1_LS_anim_jump, Player1_LS_anim_crouch;
var Player1_LS_anim_punch, Player1_LS_anim_kick;
var Player2_LS_block_still;

// Left side
var Player1_RS_anim_norm;
var Player1_RS_anim_move_Left, Player1_RS_anim_move_left;
var Player1_RS_anim_jump, Player1_RS_anim_crouch;
var Player1_RS_anim_punch, Player1_RS_anim_kick;
var Player2_RS_block_still;

// variable for player 2
var Player2;
var Player2_win, Player2_lose_still;
var Player2_LS_lose_still;

// Left side
var Player2_LS_anim_norm;
var Player2_LS_anim_move_Left, Player2_LS_anim_move_left;
var Player2_LS_anim_jump, Player2_LS_anim_crouch;
var Player2_LS_anim_punch, Player2_LS_anim_kick;
var Player2_LS_block_still;

// Left side
var Player2_RS_anim_norm;
var Player2_RS_anim_move_Left, Player2_RS_anim_move_left;
var Player2_RS_anim_jump, Player2_RS_anim_crouch;
var Player2_RS_anim_punch, Player2_RS_anim_kick;
var Player2_RS_block_still;

// Button for playing in mobile
var Lbtn1,Rbtn1,UPbtn1,DWbtn1;
var UImg1,RImg1,LImg1,DImg1;
var punch1,punchImg1;
var block1,blockImg1;
var kick1,kickImg1;

var Lbtn2,Rbtn2,UPbtn2,DWbtn2;
var UImg2,RImg2,LImg2,DImg2;
var punch2,punchImg2;
var block2,blockImg2;
var kick2,kickImg2;

// variable for ground
var invisibleGround;

//  health
var health1, health2;
var healthBar1, healthBlock1;
var healthLevel1;
var healthBar2;
var healthLevel2,healthBlock2;
var bmode1=0;
var bmode2=0;
var gameState;
var play;
var start;
var redWin;
var blueWin;

function preload(){
    // background img
    BG=loadImage("arena.jpg");

    // player1 img in left side
    Player1_LS_anim_norm=loadAnimation("Player1/Left/Norm/0.png","Player1/Left/Norm/1.png","Player1/Left/Norm/2.png","Player1/Left/Norm/3.png","Player1/Left/Norm/4.png","Player1/Left/Norm/5.png","Player1/Left/Norm/6.png","Player1/Left/Norm/7.png","Player1/Left/Norm/8.png","Player1/Left/Norm/9.png");
    Player1_LS_anim_move_right=loadAnimation("Player1/Left/Move_Left/0.png","Player1/Left/Move_Left/1.png","Player1/Left/Move_Left/2.png","Player1/Left/Move_Left/3.png","Player1/Left/Move_Left/4.png","Player1/Left/Move_Left/5.png","Player1/Left/Move_Left/6.png","Player1/Left/Move_Left/7.png","Player1/Left/Move_Left/8.png");

    Player1_LS_anim_move_left=loadAnimation("Player1/Left/Move_left/0.png","Player1/Left/Move_left/1.png","Player1/Left/Move_left/2.png","Player1/Left/Move_left/3.png","Player1/Left/Move_left/4.png","Player1/Left/Move_left/5.png","Player1/Left/Move_left/6.png","Player1/Left/Move_left/7.png","Player1/Left/Move_left/8.png");

Player1_LS_anim_jump=loadAnimation("Player1/Left/Jump/0.png","Player1/Left/Jump/1.png","Player1/Left/Jump/2.png","Player1/Left/Jump/3.png","Player1/Left/Jump/4.png");


Player1_LS_anim_punch=loadAnimation("Player1/Left/Punch/0.png","Player1/Left/Punch/1.png","Player1/Left/Punch/2.png","Player1/Left/Punch/3.png","Player1/Left/Punch/4.png");



Player1_LS_anim_kick=loadAnimation("Player1/Left/Kick/0.png","Player1/Left/Kick/1.png","Player1/Left/Kick/2.png","Player1/Left/Kick/3.png","Player1/Left/Kick/4.png","Player1/Left/Kick/5.png");


Player1_LS_anim_crouch=loadAnimation("Player1/Left/Crouch/0.png","Player1/Left/Crouch/1.png","Player1/Left/Crouch/2.png")


Player1_LS_crouch_still=loadAnimation("Player1/Left/Crouch2.png");


Player1_LS_lose_still=loadAnimation("Lose/Player1/Left/8.png");

Player1_LS_block_still=loadAnimation("Block/Player1/Left/2.png");

Player1_win=loadAnimation("Win/Player1/0.png","Win/Player1/1.png","Win/Player1/2.png",
"Win/Player1/3.png",
"Win/Player1/4.png",
"Win/Player1/5.png",
"Win/Player1/6.png",
"Win/Player1/7.png",
"Win/Player1/8.png",
"Win/Player1/9.png");

Player1_win_still=loadAnimation("Win/Player1/9.png");

}

   // player1 img in right side

   Player1_RS_anim_norm=loadAnimation("Player1/Right/Norm/0.png","Player1/Right/Norm/1.png","Player1/Right/Norm/2.png","Player1/Right/Norm/3.png","Player1/Left/Norm/4.png","Player1/Left/Norm/5.png","Player1/Left/Norm/6.png","Player1/Left/Norm/7.png","Player1/Left/Norm/8.png","Player1/Left/Norm/9.png");
   Player1_RS_anim_move_right=loadAnimation("Player1/Left/Move_Left/0.png","Player1/Left/Move_Left/1.png","Player1/Left/Move_Left/2.png","Player1/Left/Move_Left/3.png","Player1/Left/Move_Left/4.png","Player1/Left/Move_Left/5.png","Player1/Left/Move_Left/6.png","Player1/Left/Move_Left/7.png","Player1/Left/Move_Left/8.png");

   Player1_RS_anim_move_left=loadAnimation("Player1/Left/Move_left/0.png","Player1/Left/Move_left/1.png","Player1/Left/Move_left/2.png","Player1/Left/Move_left/3.png","Player1/Left/Move_left/4.png","Player1/Left/Move_left/5.png","Player1/Left/Move_left/6.png","Player1/Left/Move_left/7.png","Player1/Left/Move_left/8.png");

Player1_RS_anim_jump=loadAnimation("Player1/Left/Jump/0.png","Player1/Left/Jump/1.png","Player1/Left/Jump/2.png","Player1/Left/Jump/3.png","Player1/Left/Jump/4.png");


Player1_RS_anim_punch=loadAnimation("Player1/Left/Punch/0.png","Player1/Left/Punch/1.png","Player1/Left/Punch/2.png","Player1/Left/Punch/3.png","Player1/Left/Punch/4.png");



Player1_RS_anim_kick=loadAnimation("Player1/Left/Kick/0.png","Player1/Left/Kick/1.png","Player1/Left/Kick/2.png","Player1/Left/Kick/3.png","Player1/Left/Kick/4.png","Player1/Left/Kick/5.png");


Player1_RS_anim_crouch=loadAnimation("Player1/Left/Crouch/0.png","Player1/Left/Crouch/1.png","Player1/Left/Crouch/2.png")


Player1_RS_crouch_still=loadAnimation("Player1/Left/Crouch2.png");


Player1_RS_lose_still=loadAnimation("Lose/Player1/Left/8.png");

Player1_RS_block_still=loadAnimation("Block/Player1/Left/2.png");

Player1_win=loadAnimation("Win/Player1/0.png","Win/Player1/1.png","Win/Player1/2.png",
"Win/Player1/3.png",
"Win/Player1/4.png",
"Win/Player1/5.png",
"Win/Player1/6.png",
"Win/Player1/7.png",
"Win/Player1/8.png",
"Win/Player1/9.png");

Player1_win_still=loadAnimation("Win/Player1/9.png");
