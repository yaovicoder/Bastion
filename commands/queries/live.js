/**
 * @file live command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = (Bastion, message) => {
  let streamers = Array.from(message.guild.presences.filter(p => p.game && p.game.streaming === true).keys());

  message.channel.send({
    embed: {
      color: Bastion.colors.DARK_PURPLE,
      title: 'Users Streaming',
      description: !streamers.length ? 'No one is currently streaming in this server.' : streamers.length > 10 ? `<@${streamers.splice(0, 10).join('>\n<@')}>\nand ${streamers.length - 10} others are now live.` : `<@${streamers.join('>\n<@')}>`
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [],
  enabled: true
};

exports.help = {
  name: 'live',
  description: 'Shows the list of users in your Discord server who are currently streaming.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'live',
  example: []
};
