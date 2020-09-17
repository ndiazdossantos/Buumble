const Discord = require('discord.js')
const client = new Discord.Client()
var prefix = '+'

client.on('ready', () => {
    console.log('Bot listo!')
const Discord = require('discord.js')
  
  setInterval(async () => {
    let estados = ["FASE BETA" ,
                   "BUUMBLE BOT",
                   "+help",
                   `${client.guilds.cache.size} serv & ${client.users.cache.size} user!`]

    client.user.setPresence({
      activity: {
        name: estados[Math.floor(Math.random() * estados.length)],
        type: "PLAYING"
      },
      status: 'online'
    })
    
  }, 6000)
  
})

client.on('message', (message) => {
    if(message.author.bot) return
    if(message.channel.type === 'dm') return
    if(message.content.startsWith('numerostatsonlinebuumble')) {
       message.channel.send(`${client.guilds.cache.size} servidores y ${client.users.cache.size} usuarios!`)
      }

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return

    if(command === 'ping'){
        message.channel.send('Pong!')
    }
    if(command === 'stats'){
        message.channel.send(`${client.guilds.cache.size} servidores y ${client.users.cache.size} usuarios!`)
    }
    if(command === '8ball'){
        let pregunta = args.slice(0).join(" ")
        let frase = [
            "Si",
            "No",
            "Tal vez",
            "Pregúntamelo más tarde",
            "No se",
            "Pregúntamelo de nuevo",
            "Muy Probable",
            "Probablemente no"
        ]
        const f = frase[Math.floor(Math.random() * frase.length)]

        if (!pregunta) return message.channel.send('Debes de proporcionar una pregunta.')
        const embed = new Discord.MessageEmbed()
            .addField('Tu pregunta', pregunta)
            .addField('Mi respuesta es:', '``' + f + '``')
            .setColor('RANDOM')
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
        message.channel.send(embed)
    }
    if(command === 'help'){
        const embed = new Discord.MessageEmbed()
            .setTitle('Página de Ayuda')
            .addField('+8ball', 'Proporciona tu pregunta')
            .addField('+stats', 'Servidores y usuario que visualiza Buumble')
            .setColor('RANDOM')
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
        message.channel.send(embed)
    }
const ms = require("ms")
if (command === "tempmute") {
    let tomute =
      message.mentions.members.first() || message.guild.members.get(args[0]);
    const nofind = new Discord.RichEmbed()
      .setDescription(
        "No has mencionado a un usuario <a:cross:692587286935765002>"
      )
      .setColor("RED");
    if (!tomute) return message.reply(nofind);
    const nomute = new Discord.RichEmbed()
      .setDescription(
        "No requieres de los permisos necesarios! <a:cross:692587286935765002>"
      )
      .setColor("RED");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply(nomute);
    let muterole = message.guild.roles.find(`name`, "Muteado");
    if (!muterole) {
      try {
        muterole = message.guild.createRole({
          name: "Muteado",
          color: "#00000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          channel.overwritePermission(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    let razon = args.slice(2).join(" ") || "Razón no definida";

    const reason = new Discord.RichEmbed()
      .setDescription("No has escrito una razón")
      .setColor("RED");
    if (!razon) return message.channel.send(reason);

    const mutetiempo = new Discord.RichEmbed()
      .setDescription(
        "No especificaste el tiempo | Formato: (1s (Segundo) | 1h (Hora) / 1d (Dia))"
      )
      .setColor("RED");
    let mutetime = args[1];
    if (!mutetime) return message.reply(mutetiempo);
    tomute.addRole(muterole.id); // ponlos en el ultimo del todo, pero, no te atravieses, con otros comandos
    const muteadoxd = new Discord.RichEmbed()
      .setTitle("Nuevo Muteo!")
      .addField(`Usuario`, `**${tomute}**`)
      .setColor("GREEN")
      .addField(`Staff`, `**${message.author.username}**`)
      .addField(`Tiempo`, `**${mutetime}**`)
      .addField(`Tiempo en ms`, `**${ms(mutetime)}**`)
      .addField("Razón", `**${razon}**`);
    message.reply(muteadoxd);
    //nada v:
    setTimeout(function() {
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> has been unmuted!`);
    }, ms(mutetime));
  }

})


         


client.login('clientloginapareceendiscord')