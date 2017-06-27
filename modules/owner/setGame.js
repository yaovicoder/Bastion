/**
 * @file setGame command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

const string = require('../../handlers/languageHandler');

exports.run = (Bastion, message, args) => {
  if (!Bastion.credentials.ownerId.includes(message.author.id)) {
    /**
     * User has missing permissions.
     * @fires userMissingPermissions
     */
    return Bastion.emit('userMissingPermissions', this.help.userPermission);
  }

  if (args.length >= 1) {
    Bastion.user.setGame(args.join(' ')).then(() => {
      message.channel.send({
        embed: {
          color: Bastion.colors.yellow,
          description: `${Bastion.user.username}'s game is now set to **${args.join(' ')}**`
        }
      }).catch(e => {
        Bastion.log.error(e);
      });
    }).catch(e => {
      Bastion.log.error(e);
    });
  }
  else {
    Bastion.user.setGame(Bastion.config.game).then(() => {
      message.channel.send({
        embed: {
          color: Bastion.colors.green,
          description: `${Bastion.user.username}'s game is now set to the default game **${Bastion.config.game}**`
        }
      }).catch(e => {
        Bastion.log.error(e);
      });
    }).catch(e => {
      Bastion.log.error(e);
    });
  }
};

exports.config = {
  aliases: [ 'setg' ],
  enabled: true
};

exports.help = {
  name: 'setgame',
  description: string('setGame', 'commandDescription'),
  botPermission: '',
  userPermission: 'BOT_OWNER',
  usage: 'setGame [text]',
  example: [ 'setGame with minions!', 'setGame' ]
};
