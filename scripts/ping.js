module.exports = function(robot) {
  robot.respond(/ping/i, function(res) {
    res.reply('pong');
  });
};
