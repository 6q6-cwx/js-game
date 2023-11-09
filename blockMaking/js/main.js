
// 游戏主函数
let _main = {
    LV: 1,                               // 初始关卡
    MAXLV: 2,                            // 最终关卡
    scene: null,                         // 场景对象
    blockList: null,                     // 所有砖块对象集合
    ball: null,                          // 小球对象
    paddle: null,                        // 挡板对象
    score: null,                         // 计分板对象
    ball_x: 491,                         // 小球默认x轴坐标
    ball_y: 432,                         // 小球默认y轴坐标
    paddle_x: 449,                       // 挡板默认x轴坐标
    paddle_y: 450,                       // 挡板默认y轴坐标
    score_x: 10,                         // 计分板默认x轴坐标
    score_y: 30,                         // 计分板默认y轴坐标
    fps: 60,                             // 游戏运行帧数
    game: null,                          // 游戏主要逻辑对象
    start: function () {                 // 游戏启动函数
      let self = this
      self.scene = new Scene(self.LV)
      self.blockList = self.scene.initBlockList()
      self.ball = new Ball(self)
      self.paddle = new Paddle(self)
      self.score = new Score(self)
      self.game = new Game(self)
      self.game.init(self)
    }
  }
  _main.start()