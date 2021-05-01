const Discord = require('discord.js');
const bot = new Discord.Client();
const { MessageEmbed } = require("discord.js");
const { platform } = require('os');
const { ESTALE } = require('constants');
const fs = require("fs");

bot.login("TOKEN")
let prefix = "/";

const bdd = require("./bdd.json");
const bdd2 = require("./bdd2.json");
const bdd3 = require("./bdd3.json");
const bdd4 = require("./bdd4.json");
const bdd5 = require("./bdd5.json");
const talkedRecently_cadeau = new Set();
const timesabotage = new Set();
const timesgrab = new Set();

let niveau1 = 100;
let niveau2 = 500;
let niveau3 = 1500;
let niveau4 = 2500;
let niveau5 = 4000;
let niveau6 = 6000;
let niveau7 = 8500;
let niveau8 = 10000;
let niveau9 = 13000;
let niveau10 = 15000;

bot.on('ready', function() {
  bot.user.setActivity("explorer l'espace")
  console.log("bot 'Space' has been connected sucessfully!");
  console.log("bot lancé le: " + new Date() + " ");
  let a = bot.channels.cache.find(ch => ch.id === "833991271760265257");
  a.send("**bot 'Space' has been connected sucessfully!**");
  a.send("bot lancé le: " + new Date() + " ");
  let InitializeVariable = 1;
});

bot.on('message', async message => {
    let c = bot.channels.cache.find(ch => ch.id === "804404931703734314");
    let userID = message.author.id;
    if (message.content === prefix + "ping") { 
        c.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix} ping`);
        message.channel.send("Calcul en cours...").then(msg => {
            setTimeout(() => {
            msg.edit(":ping_pong: | Pong!\nTemps de réponse : **" + `${msg.createdTimestamp - message.createdTimestamp}ms` + "**")
            }, 3000);
        });
    }
});

bot.on('message', message=> {
    let b = bot.channels.cache.find(ch => ch.id === "804404931703734314");
    let userID = message.author.id;
    
    let argument = message.content.trim().split(/ +/g)
    if(argument[0].toLowerCase() === prefix + "info") {
        b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix} info`);
        let member = bot.guilds.cache.get(message.guild.id).members.cache.get(`${argument[1]}`.replace(/<@/g, "").replace(/!/g, "").replace(/>/g, "")) // Récupération d'une ID via une mention/une ID ( argument 1 ) et détection d'utilisateur
        if(!member){
            let cashplayer = `${bdd["cash-utilisateurs"][message.author.id]}`.replace(/undefined/g, 0)
            let bankplayer = `${bdd["bank-utilisateurs"][message.author.id]}`.replace(/undefined/g, 0)
            let pdcplayer = `${bdd["pointdesciences-utilisateurs"][message.author.id]}`.replace(/undefined/g, 0)
            let ft1player = `${bdd2["fusé-tier-1"][message.author.id]}`.replace(/undefined/g, 0)
            let ft2player = `${bdd2["fusé-tier-2"][message.author.id]}`.replace(/undefined/g, 0)
            let ft3player = `${bdd2["fusé-tier-3"][message.author.id]}`.replace(/undefined/g, 0)
            let posséderaggence = `${bdd4["agence"][message.author.id]}`.replace(/undefined/g, "**Vous n'avez pas d'agence**")
            let niveau = `${bdd3["niveauagence"][message.author.id]}`.replace(/undefined/g, 0)

            if(bdd4["agence"][message.author.id] > 0){
                let posséderaggence = `**Vous avez une agence.** \n**Son nom est:** ${bdd4["nom"][message.author.id]} \n**Sa description est:** ${bdd4["desciption"][message.author.id]}\nVotre agence est niveau ${niveau}`
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Vous disposez de:**")
                    .setDescription(`${cashplayer}$ en poche. \n${bankplayer}$ en banque.\n${pdcplayer} points de sciences. \n${ft1player} fusée tiers 1.\n${ft2player} fusée tiers 2.\n${ft3player} fusée tiers 3.\n${posséderaggence}`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
            }else{
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Vous disposez de:**")
                    .setDescription(`${cashplayer}$ en poche. \n${bankplayer}$ en banque.\n${pdcplayer} points de sciences. \n${ft1player} fusée tiers 1.\n${ft2player} fusée tiers 2.\n${ft3player} fusée tiers 3.\n${posséderaggence}`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
            }

        }else{
            let cashplayer = `${bdd["cash-utilisateurs"][member.id]}`.replace(/undefined/g, 0)
            let bankplayer = `${bdd["bank-utilisateurs"][member.id]}`.replace(/undefined/g, 0)
            let pdcplayer = `${bdd["pointdesciences-utilisateurs"][member.id]}`.replace(/undefined/g, 0)
            let ft1player = `${bdd2["fusé-tier-1"][member.id]}`.replace(/undefined/g, 0)
            let ft2player = `${bdd2["fusé-tier-2"][member.id]}`.replace(/undefined/g, 0)
            let ft3player = `${bdd2["fusé-tier-3"][member.id]}`.replace(/undefined/g, 0)
            let posséderaggence = `${bdd4["agence"][member.id]}`.replace(/undefined/g, "**Vous n'avez pas d'agence**")
            let niveau = `${bdd3["niveauagence"][member.id]}`.replace(/undefined/g, 0)

            if(bdd4["agence"][member.id] > 0){
                let posséderaggence = `**Son agence est:** ${bdd4["nom"][member.id]} \n**La description de son agence est :** ${bdd4["desciption"][member.id]}\nElle est niveau ${niveau}`
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Cette personne dispose de:**")
                    .setDescription(`${cashplayer}$ en poche.\n${bankplayer}$ en banque.\n${pdcplayer} points de sciences. \n${ft1player} fusée tiers 1.\n${ft2player} fusée tiers 2.\n${ft3player} fusée tiers 3.\n${posséderaggence}`)
                    .setAuthor(bot.users.cache.get(member.id).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                ) 
            }else{
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Cette personne dispose de:**")
                    .setDescription(`${cashplayer}$ en poche.\n${bankplayer}$ en banque.\n${pdcplayer} points de sciences. \n${ft1player} fusée tiers 1.\n${ft2player} fusée tiers 2.\n${ft3player} fusée tiers 3.\n${posséderaggence}`)
                    .setAuthor(bot.users.cache.get(member.id).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                ) 
            }
            
        }
    }

    if (message.content.startsWith(prefix + 'dep')){
        let deposits = message.content.slice(5)
        if(!deposits)return;
        console.log(deposits)
        if(!bdd4["agence"][message.author.id]){
            message.channel.send(
                let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("**Depôt en banque.**")
                .setDescription(`Pour effectuer cette commande il faut avoir une agence spatial.\nPour cela faite la commande /créer une agence`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
            ) 
        }else{
            if(deposits === "all"){
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Depôt en banque.**")
                    .setDescription(`Tu viens de déposer ${bdd["cash-utilisateurs"][message.author.id]}$ dans ta banque!`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
                b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}dep et a essayer deposser ${bdd["cash-utilisateurs"][message.author.id]}$`);
                bdd["bank-utilisateurs"][message.author.id] = bdd["bank-utilisateurs"][message.author.id] + bdd["cash-utilisateurs"][message.member.id]
                bdd["cash-utilisateurs"][message.author.id] = bdd["cash-utilisateurs"][message.member.id] - bdd["cash-utilisateurs"][message.member.id]
                Savebdd();
            }else{
                let deposit = parseInt(deposits)
                if( deposit <= bdd["cash-utilisateurs"][message.author.id]){
                    bdd["bank-utilisateurs"][message.author.id] = parseInt(bdd["bank-utilisateurs"][message.author.id]) + parseInt(deposit)
                    bdd["cash-utilisateurs"][message.author.id] = parseInt(bdd["cash-utilisateurs"][message.author.id]) - deposit
                    Savebdd();
                    message.channel.send(
                        let = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setTitle("**Depôt en banque.**")
                        .setDescription(`Tu viens de déposer ${deposit}$ dans ta banque!`)
                        .setAuthor(bot.users.cache.get(userID).username)
                        .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                        .setTimestamp()
                    )
                    b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}dep et a deposser ${deposit}$ dans sa banque`);
                }else{
                    message.channel.send(
                        let = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setTitle("**Depôt en banque.**")
                        .setDescription(`Tu ne peut pas déposer ${deposit}$ car tu ne le possède pas en poche!`)
                        .setAuthor(bot.users.cache.get(userID).username)
                        .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                        .setTimestamp()
                    )
                    b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}dep et a essayer deposser ${deposit}$`);
                }
                Savebdd();
            }
        }
    }

    if (message.content.startsWith(prefix + 'retirer')){
        let retirer = message.content.slice(8)
        if(!retirer)return;
        console.log(retirer)
            if(!bdd4["agence"][message.author.id]){
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Retirer de la banque.**")
                    .setDescription(`Pour effectuer cette commande il faut avoir une agence spatial.\nPour cela faite la commande /créer une agence`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                ) 
            }else{
                if(retirer === "all"){
                    message.channel.send(
                        let = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setTitle("**Retirer de la banque.**")
                        .setDescription(`Tu viens de retirer ${bdd["bank-utilisateurs"][message.author.id]}$ de ta banque!`)
                        .setAuthor(bot.users.cache.get(userID).username)
                        .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                        .setTimestamp()
                    )
                    b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}with et deposser ${bdd["bank-utilisateurs"][message.author.id]}$`);
                    bdd["cash-utilisateurs"][message.author.id] = bdd["cash-utilisateurs"][message.author.id] + bdd["bank-utilisateurs"][message.member.id]
                    bdd["bank-utilisateurs"][message.author.id] = bdd["bank-utilisateurs"][message.author.id] - bdd["bank-utilisateurs"][message.author.id]
                    Savebdd();
                }else{
                    let retirer1 = parseInt(retirer)
                    console.log(retirer1)
                   
                        if( retirer <= bdd["bank-utilisateurs"][message.author.id]){
                            bdd["cash-utilisateurs"][message.author.id] = parseInt(bdd["cash-utilisateurs"][message.author.id]) + parseInt(retirer1)
                            bdd["bank-utilisateurs"][message.author.id] = parseInt(bdd["bank-utilisateurs"][message.author.id]) - parseInt(retirer1)
                            Savebdd();
                            message.channel.send(
                                let = new Discord.MessageEmbed()
                                .setColor("#FF0000")
                                .setTitle("**Retirer de la banque.**")
                                .setDescription(`Tu viens de retirer ${retirer1}$ de ta banque!`)
                                .setAuthor(bot.users.cache.get(userID).username)
                                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                                .setTimestamp()
                            )
                            b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}with et a deposser ${retirer1}$ dans sa banque`);
                        }else{
                            message.channel.send(
                                let = new Discord.MessageEmbed()
                                .setColor("#FF0000")
                                .setTitle("**Retirer de la banque.**")
                                .setDescription(`Tu ne peut pas retirer ${retirer1}$ car tu le ne possède pas dans ta banque!`)
                                .setAuthor(bot.users.cache.get(userID).username)
                                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                                .setTimestamp()
                            )
                            b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}wtih et a essayer deposser ${retirer1}$`);
                        }
                        Savebdd();
                    
                    
                }
            }
        
    }

    let args = message.content.trim().split(/ +/g) // Décomposition des arguments de la phrase ( Première valeur = 0 )
    if(args[0].toLowerCase() === prefix + "voler") {
        let id_usr = message.author.id;
        if(!bdd4["agence"][message.author.id]){
            message.channel.send(
                let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("**Vol**")
                .setDescription(`Pour effectuer cette commande il faut avoir une agence spatial.\nPour cela faite la commande /créer une agence`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
            ) 
        }else{
            if (timesgrab.has(id_usr)) {
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Vol**")
                    .setDescription("Il faut attendre 6 heures avant de pouvoir executer la commande de nouveau.")
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
            }else{
                if(!args[1])return;
                let member = bot.guilds.cache.get(message.guild.id).members.cache.get(`${args[1]}`.replace(/<@/g, "").replace(/!/g, "").replace(/>/g, "")) // Récupération d'une ID via une mention/une ID ( argument 1 ) et détection d'utilisateur
                if(!member)return;
                if(!bdd['cash-utilisateurs'][member.id])return; // Si l'utilisateur n'existe pas dans le storage 'cash-utilisateur' alors return;
                let rgrab = Math.floor(Math.random() * (15 - 1) + 1)
                console.log(rgrab)
                let percent = parseInt(bdd['cash-utilisateurs'][member.id])*parseInt(rgrab)/100 // Récupération de la valeur rgrab% de la valeur 'cash-utilisateur' de l'utilisateur
                console.log(Math.round(parseInt(percent)))
                bdd['cash-utilisateurs'][message.author.id] = parseInt(bdd['cash-utilisateurs'][message.author.id]) + parseInt(percent) // Rajoute rgrab% ( percent ) au voleur
                bdd['cash-utilisateurs'][member.id] = parseInt(bdd['cash-utilisateurs'][member.id]) - parseInt(percent) // Enlève rgrab% ( percent ) à la victime
                Savebdd();
                message.channel.send(
                let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("**Vol**")
                .setDescription(`**vous venez de voler** ${bot.guilds.cache.get(message.guild.id).members.cache.get(`${args[1]}`.replace(/<@/g, "").replace(/!/g, "").replace(/>/g, ""))} \n Vous lui avez pris ${percent}$`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
                );
                b.send(`Le personne ${bot.guilds.cache.get(message.guild.id).members.cache.get(`${args[1]}`.replace(/<@/g, "").replace(/!/g, "").replace(/>/g, ""))} c'est fait voler ${percent}$ par ${bot.users.cache.get(userID).username}`);
            }
            
             
            timesgrab.add(id_usr);
                setTimeout(() => {
                  // Removes the user from the set after a minute
                  timesgrab.delete(id_usr);
                }, 21600000);
        }
        
    }

    if( message.content === prefix + "work"){
        if(!bdd4["agence"][message.author.id]){
            message.channel.send(
                let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("**Travail**")
                .setDescription(`Pour effectuer cette commande il faut avoir une agence spatial.\nPour cela faite la commande /créer une agence`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
            ) 
        }else{
            let id_usr = message.author.id;
            if (talkedRecently_cadeau.has(id_usr)) {
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Travail**")
                    .setDescription("Il faut attendre 4 heures avant de pouvoir executer la commande de nouveau.")
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
                b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}work sans attendre 6h`);
            } else {
                let work$ = Math.floor(Math.random() * (parseInt(bdd5["work"][message.author.id]) - 50) + 50);
                let workpds = Math.floor(Math.random() * (201 - 50) + 50);
                bdd["cash-utilisateurs"][message.author.id] = bdd["cash-utilisateurs"][message.member.id] + parseInt(work$)
                bdd["pointdesciences-utilisateurs"][message.author.id] = bdd["pointdesciences-utilisateurs"][message.member.id] + parseInt(workpds)
                Savebdd();
                bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] + parseInt(Math.floor(Math.random() * (20 - 0) + 1))
                Savebdd3();
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Travail**")
                    .setDescription(`Tu viens de gagner ${work$}$ et ${workpds} points de sciences`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
                b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}work et a gagner ${work$}$ et ${workpds} point de sciences`);
            
                talkedRecently_cadeau.add(id_usr);
                setTimeout(() => {
                // Removes the user from the set after a minute
                talkedRecently_cadeau.delete(id_usr);
                },  14400000);
            }
        }
    }

    if(message.content === prefix + "buy tier 1"){
        if(!bdd4["agence"][message.author.id]){
            message.channel.send(
                let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("**Fusée**")
                .setDescription(`Pour effectuer cette commande il faut avoir une agence spatial.\nPour cela faite la commande /créer une agence`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
            ) 
        }else{
            if(bdd["cash-utilisateurs"][message.author.id] >= 5000 && bdd["pointdesciences-utilisateurs"][message.author.id] >= 150){
                if(!bdd2["fusé-tier-1"][message.author.id]){
                    bdd2["fusé-tier-1"][message.author.id] = 1;
                    Savebdd2();
                }else{
                    bdd2["fusé-tier-1"][message.author.id] = parseInt(bdd2["fusé-tier-1"][message.author.id]) + 1;
                    Savebdd2();
                }
                bdd["cash-utilisateurs"][message.author.id] = parseInt(bdd["cash-utilisateurs"][message.author.id]) - 5000
                bdd["pointdesciences-utilisateurs"][message.author.id] = parseInt(bdd["pointdesciences-utilisateurs"][message.author.id]) - 150
                Savebdd();
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Fusée**")
                    .setDescription(`Tu viens d'acheter une fusée de tier 1. \n Tu possède actuellement ${bdd2["fusé-tier-1"][message.author.id]} fusée en ta possession`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
                b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}buy fusée tier 1 et a donc ${bdd2["fusé-tier-1"][message.author.id]} fusé en sa possesion. `);
            }else{
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Fusée**")
                    .setDescription(`Tu ne peut pas acheter cette fusée car tu n'a pas l'argent nésésaire ou les points de science nécessaire.`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
                b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}buy fusé tier 1 mais il avait pas les resoureces suvisant`);
            }  
        }
    }

    if(message.content === prefix + "buy tier 2"){
        if(!bdd4["agence"][message.author.id]){
            message.channel.send(
                let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("**Fusée**")
                .setDescription(`Pour effectuer cette commande il faut avoir une agence spatial.\nPour cela faite la commande /créer une agence`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
            ) 
        }else{
            if(bdd["cash-utilisateurs"][message.author.id] >= 70000 && bdd["pointdesciences-utilisateurs"][message.author.id] >= 1200){
                if(!bdd2["fusé-tier-2"][message.author.id]){
                    bdd2["fusé-tier-2"][message.author.id] = 1;
                    Savebdd2();
                }else{
                    bdd2["fusé-tier-2"][message.author.id] = parseInt(bdd2["fusé-tier-2"][message.author.id]) + 1;
                    Savebdd2();
                }
                bdd["cash-utilisateurs"][message.author.id] = parseInt(bdd["cash-utilisateurs"][message.author.id]) - 70000
                bdd["pointdesciences-utilisateurs"][message.author.id] = parseInt(bdd["pointdesciences-utilisateurs"][message.author.id]) - 1200
                Savebdd();
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Fusé**")
                    .setDescription(`Tu viens d'acheter une fusée de tier 2. \n Tu possède actuellement ${bdd2["fusé-tier-2"][message.author.id]} fusée en ta possession`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
                b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}buy fusé tier 2 et a donc ${bdd2["fusé-tier-2"][message.author.id]} fusé en sa possesion. `);
            }else{
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Fusé**")
                    .setDescription(`Tu ne peut pas acheter cette fusé car tu n'a pas l'argent nécessaire ou les points de science nésésaires.`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
                b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}buy fusé tier 2 mais il avait pas les resoureces suvisant`);
            }
        }
    }

    if(message.content === prefix + "buy tier 3"){
        if(!bdd4["agence"][message.author.id]){
            message.channel.send(
                let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("**Fusée**")
                .setDescription(`Pour effectuer cette commande il faut avoir une agence spatial.\nPour cela faite la commande /créer une agence`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
            ) 
        }else{
            if(bdd["cash-utilisateurs"][message.author.id] >= 200000 && bdd["pointdesciences-utilisateurs"][message.author.id] >= 20000){
                if(!bdd2["fusé-tier-3"][message.author.id]){
                    bdd2["fusé-tier-3"][message.author.id] = 1;
                    Savebdd2();
                }else{
                    bdd2["fusé-tier-3"][message.author.id] = parseInt(bdd2["fusé-tier-3"][message.author.id]) + 1;
                    Savebdd2();
                }
                bdd["cash-utilisateurs"][message.author.id] = parseInt(bdd["cash-utilisateurs"][message.author.id]) - 200000
                bdd["pointdesciences-utilisateurs"][message.author.id] = parseInt(bdd["pointdesciences-utilisateurs"][message.author.id]) - 20000
                Savebdd();
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Fusée**")
                    .setDescription(`Tu viens d'acheter une fusée de tier 3. \n Tu possde actuellement ${bdd2["fusé-tier-3"][message.author.id]} fusée en ta possession`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
                b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}buy fusé tier 2 et a donc ${bdd2["fusé-tier-3"][message.author.id]} fusé en sa possesion. `);
            }else{
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Fusé**")
                    .setDescription(`Tu ne peut pas acheter cette fusée car tu n'a pas l'argent nécessaire ou les points de science nécessaire.`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
                b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}buy fusé tier 3z mais il avait pas les resoureces suvisant`);
            }
        }
    }

    let args2 = message.content.trim().split(/ +/g) // Décomposition des arguments de la phrase ( Première valeur = 0 )
    if(args2[0].toLowerCase() === prefix + "sabotage") {
        if(!bdd4["agence"][message.author.id]){
            message.channel.send(
                let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("**Fusé**")
                .setDescription(`Pour effectuer cette commende il faut avoir une agence spacial.\nPour cela fait la commende /créer une agence`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
            ) 
        }else{
            b.send(`Le personne ${bot.users.cache.get(userID).username} a utliser la commende ${prefix}sabotage`);
            let id_usr = message.author.id;
            if (timesabotage.has(id_usr)) {
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Sabotage**")
                    .setDescription("Il faut attendre 6 heures avant de pouvoir executer la commande de nouveau.")
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
            }else{
                if(!args2[1])return;
                let member = bot.guilds.cache.get(message.guild.id).members.cache.get(`${args2[1]}`.replace(/<@/g, "").replace(/!/g, "").replace(/>/g, ""))
                if(bdd['cash-utilisateurs'][message.author.id] >= 7500){
                    if(!bdd2['fusé-tier-1'][member.id] || !bdd2['fusé-tier-2'][member.id] || !bdd2['fusé-tier-3'][member.id]){
                        if(bdd3['sabotage'][member.id] >= 1){
                            message.channel.send(
                                let = new Discord.MessageEmbed()
                                .setColor("#FF0000")
                                .setTitle("**Sabotage**")
                                .setDescription(`Tu ne peut pas saboter la fusée de cette personne car elle est déja saboter!`)
                                .setAuthor(bot.users.cache.get(userID).username)
                                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                                .setTimestamp()
                            )
                        }else{
                            let chancesabtoage = Math.floor(Math.random() * (10 - 0) + 1);
                            console.log(chancesabtoage)
                            if(chancesabtoage === 6){
                                bdd['cash-utilisateurs'][message.author.id] = parseInt(bdd['cash-utilisateurs'][message.author.id]) - 7500
                                Savebdd();
                                bdd3['sabotage'][member.id] = 1;
                                Savebdd3();
                                message.channel.send(
                                    let = new Discord.MessageEmbed()
                                    .setColor("#FF0000")
                                    .setTitle("**Sabotage**")
                                    .setDescription(`Bravo tu viens de saboter sa fusée!`)
                                    .setAuthor(bot.users.cache.get(userID).username)
                                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                                    .setTimestamp()
                                )
                            }else{
                                message.channel.send(
                                    let = new Discord.MessageEmbed()
                                    .setColor("#FF0000")
                                    .setTitle("**Sabotage**")
                                    .setDescription(`Ton sabotage n'a pas marché!! dommage!`)
                                    .setAuthor(bot.users.cache.get(userID).username)
                                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                                    .setTimestamp()
                                )
                            }
                        
                        }
                    }else{
                        message.channel.send(
                            let = new Discord.MessageEmbed()
                            .setColor("#FF0000")
                            .setTitle("**Sabotage**")
                            .setDescription(`Tu ne peut pas saboter cette personne car elle n'a pas de fusée!!!`)
                            .setAuthor(bot.users.cache.get(userID).username)
                            .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                            .setTimestamp()
                        )
                    }
            
                }else{
                    message.channel.send(
                        let = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setTitle("**Sabotage**")
                        .setDescription(`Tu n'a pas l'argent nécessaire pour saboter!`)
                        .setAuthor(bot.users.cache.get(userID).username)
                        .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                        .setTimestamp()
                    )
                }
            }

            timesabotage.add(id_usr);
                setTimeout(() => {
                // Removes the user from the set after a minute
                timesabotage.delete(id_usr);
            }, 21600000);
        
        }
    }

    if(message.content === prefix + "launch tier 1"){
        if(!bdd4["agence"][message.author.id]){
            message.channel.send(
                let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("**Launch**")
                .setDescription(`Pour effectuer cette commende il faut avoir une agence spacial.\nPour cela fait la commende /créer une agence`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
            ) 
        }else{
            if(!bdd2["fusé-tier-1"][message.author.id] || bdd2["fusé-tier-1"][message.author.id] === 0){
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Launch**")
                    .setDescription(`Tu n'a pas de fusée!!!`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
            }else{
                if(bdd3['sabotage'][message.author.id] >= 1){
                    message.channel.send(
                        let = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setTitle("**Launch**")
                        .setDescription(`Ta fusée est saboter. \nFait la commande: ${prefix}réparer pour la réparer.`)
                        .setAuthor(bot.users.cache.get(userID).username)
                        .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                        .setTimestamp()
                    )
                }else{
                    bdd2["fusé-tier-1"][message.author.id] = parseInt(bdd2["fusé-tier-1"][message.author.id]) - 1
                    Savebdd2();
                    message.channel.send(
                        let = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setTitle("**Launch**")
                        .setDescription(`**Préparation de ta fusé!**`)
                        .setAuthor(bot.users.cache.get(userID).username)
                        .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                        .setTimestamp()
                    )
                    setTimeout(() => {
                        message.channel.send("**3**")
                        setTimeout(() => {
                            message.channel.send("**2**")
                            setTimeout(() => {
                                message.channel.send("**1**")
                                setTimeout(() => {
                                    let boom = Math.floor(Math.random() * (20 - 0) + 1)
                                    if(boom === 8){
                                        message.channel.send(
                                            let = new Discord.MessageEmbed()
                                            .setColor("#FF0000")
                                            .setTitle("**Launch**")
                                            .setDescription(`**Votre fusée a explosé, dommage!**`)
                                            .setAuthor(bot.users.cache.get(userID).username)
                                            .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                                            .setTimestamp()
                                        )
                                    }else{
                                        bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] + parseInt(Math.floor(Math.random() * (2000 - 500) + 1))
                                        Savebdd3();
                                        message.channel.send(
                                            let = new Discord.MessageEmbed()
                                            .setColor("#FF0000")
                                            .setTitle("**Launch**")
                                            .setDescription(`**Votre fusée viens de décoller avec succès!!**`)
                                            .setAuthor(bot.users.cache.get(userID).username)
                                            .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                                            .setTimestamp()
                                        )
                                    }
                                }, 4000);
                            }, 1500);
                        }, 1500);
                    }, 1500);
                }
            }
        }
    }

    if(message.content === prefix + "launch tier 2"){
        if(!bdd4["agence"][message.author.id]){
            message.channel.send(
                let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("**Launch**")
                .setDescription(`Pour effectuer cette commende il faut avoir une agence spacial.\nPour cela fait la commende /créer une agence`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
            ) 
        }else{
            if(!bdd2["fusé-tier-2"][message.author.id] || bdd2["fusé-tier-2"][message.author.id] === 0){
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Launch**")
                    .setDescription(`Tu n'a pas de fusée!!!`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
            }else{
                if(bdd3['sabotage'][message.author.id] >= 1){
                    message.channel.send(
                        let = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setTitle("**Launch**")
                        .setDescription(`Ta fusée est saboter. \nFait la commande: ${prefix}réparer pour la réparer.`)
                        .setAuthor(bot.users.cache.get(userID).username)
                        .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                        .setTimestamp()
                    )
                }else{
                    bdd2["fusé-tier-2"][message.author.id] = parseInt(bdd2["fusé-tier-2"][message.author.id]) - 1
                    Savebdd2();
                    message.channel.send(
                        let = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setTitle("**Launch**")
                        .setDescription(`**Préparation de ta fusée!**`)
                        .setAuthor(bot.users.cache.get(userID).username)
                        .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                        .setTimestamp()
                    )
                    setTimeout(() => {
                        message.channel.send("**3**")
                        setTimeout(() => {
                            message.channel.send("**2**")
                            setTimeout(() => {
                                message.channel.send("**1**")
                                setTimeout(() => {
                                    let boom = Math.floor(Math.random() * (10 - 0) + 1)
                                    if(boom === 8){
                                        message.channel.send(
                                            let = new Discord.MessageEmbed()
                                            .setColor("#FF0000")
                                            .setTitle("**Launch**")
                                            .setDescription(`**Votre fusée a explosé, dommage!**`)
                                            .setAuthor(bot.users.cache.get(userID).username)
                                            .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                                            .setTimestamp()
                                        )
                                    }else{
                                        bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] + parseInt(Math.floor(Math.random() * (4000 - 1000) + 1))
                                        Savebdd3();
                                        message.channel.send(
                                            let = new Discord.MessageEmbed()
                                            .setColor("#FF0000")
                                            .setTitle("**Launch**")
                                            .setDescription(`**Votre fusée viens de décoller avec succès!!**`)
                                            .setAuthor(bot.users.cache.get(userID).username)
                                            .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                                            .setTimestamp()
                                        )
                                    }
                                }, 4000);
                            }, 1500);
                        }, 1500);
                    }, 1500);
                }
            }
        }
    }

    if(message.content === prefix + "launch tier 3"){
        if(!bdd4["agence"][message.author.id]){
            message.channel.send(
                let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("**Launch**")
                .setDescription(`Pour effectuer cette commende il faut avoir une agence spacial.\nPour cela fait la commende /créer une agence`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
            ) 
        }else{
            if(!bdd2["fusé-tier-3"][message.author.id] || bdd2["fusé-tier-3"][message.author.id] === 0){
                message.channel.send(
                    let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Launch**")
                    .setDescription(`Tu n'a pas de fusée!!!`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
            }else{
                if(bdd3['sabotage'][message.author.id] >= 1){
                    message.channel.send(
                        let = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setTitle("**Launch**")
                        .setDescription(`Ta fusée est saboter. \nFait la commande: ${prefix}réparer pour la réparer.`)
                        .setAuthor(bot.users.cache.get(userID).username)
                        .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                        .setTimestamp()
                    )
                }else{
                    bdd2["fusé-tier-3"][message.author.id] = parseInt(bdd2["fusé-tier-3"][message.author.id]) - 1
                    Savebdd2();
                    message.channel.send(
                        let = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setTitle("**Launch**")
                        .setDescription(`**Préparation de ta fusée!**`)
                        .setAuthor(bot.users.cache.get(userID).username)
                        .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                        .setTimestamp()
                    )
                    setTimeout(() => {
                        message.channel.send("**3**")
                        setTimeout(() => {
                            message.channel.send("**2**")
                            setTimeout(() => {
                                message.channel.send("**1**")
                                setTimeout(() => {
                                    let boom = Math.floor(Math.random() * (5 - 0) + 1)
                                    if(boom === 3){
                                        message.channel.send(
                                            let = new Discord.MessageEmbed()
                                            .setColor("#FF0000")
                                            .setTitle("**Launch**")
                                            .setDescription(`**Votre fusée a explosé, dommage!**`)
                                            .setAuthor(bot.users.cache.get(userID).username)
                                            .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                                            .setTimestamp()
                                        )
                                    }else{
                                        bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] + parseInt(Math.floor(Math.random() * (6000 - 2500) + 1))
                                        Savebdd3();
                                        message.channel.send(
                                            let = new Discord.MessageEmbed()
                                            .setColor("#FF0000")
                                            .setTitle("**Launch**")
                                            .setDescription(`**Votre fusée viens de décoller avec succès!!**`)
                                            .setAuthor(bot.users.cache.get(userID).username)
                                            .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                                            .setTimestamp()
                                        )
                                    }
                                }, 4000);
                            }, 1500);
                        }, 1500);
                    }, 1500);
                }
            }
        }
    }

    if(message.content === prefix + "réparer"){
        if(!bdd4["agence"][message.author.id]){
            message.channel.send(
                let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("**Launch**")
                .setDescription(`Pour effectuer cette commende il faut avoir une agence spacial.\nPour cela fait la commende /créer une agence`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
            ) 
        }else{
            if(!bdd3["sabotage"][message.author.id] || bdd3["sabotage"][message.author.id] === 0){
                message.channel.send(
                    let = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setTitle("**repare:**")
                        .setDescription(`Vous n'avez pas de fusée saboté`)
                        .setAuthor(bot.users.cache.get(userID).username)
                        .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                        .setTimestamp()
                )
            }else{
                if(bdd["cash-utilisateurs"][message.author.id] >= 2000 && bdd["pointdesciences-utilisateurs"][message.author.id] >= 20){
                    bdd["cash-utilisateurs"][message.author.id] = parseInt(bdd["cash-utilisateurs"][message.author.id]) - 2000
                    bdd["pointdesciences-utilisateurs"][message.author.id] = parseInt(bdd["pointdesciences-utilisateurs"][message.author.id]) - 20
                    Savebdd();
                    bdd3["sabotage"][message.author.id] = 0;
                    Savebdd3();
                    message.channel.send(
                        let = new Discord.MessageEmbed()
                            .setColor("#FF0000")
                            .setTitle("**repare:**")
                            .setDescription(`Vous venez de réparer votre fusée qui était saboté`)
                            .setAuthor(bot.users.cache.get(userID).username)
                            .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                            .setTimestamp()
                    )
                }else{
                    message.channel.send(
                        let = new Discord.MessageEmbed()
                            .setColor("#FF0000")
                            .setTitle("**repare:**")
                            .setDescription(`Vous n'avez  pas l'argent ou les points de science nécessaire pour réparer votre fusée saboté.`)
                            .setAuthor(bot.users.cache.get(userID).username)
                            .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                            .setTimestamp()
                    )
                }
            }
        }
    }

    if(message.content === prefix + "créer une agence"){
        if(!bdd4["agence"][message.author.id]){
            bdd4["agence"][message.author.id] = 1
            Savebdd4();
            bdd["cash-utilisateurs"][message.author.id] = 1;
            bdd["bank-utilisateurs"][message.author.id] = 1;
            bdd["pointdesciences-utilisateurs"][message.author.id] = 1;
            Savebdd();
            bdd5["work"][message.author.id] = 500;
            bdd5["workmin"][message.author.id] = 50;
            bdd5["nbfuséelancée"][message.author.id] = 0;
            Savebdd5();
            message.channel.send(
                let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Agence:**")
                    .setDescription(`Vous venez de créer votre agence spatial. \nPour lui donner un nom faite la commande /nomagence [le nom que vous voulez mettre]\nPour lui donner une description faite /descriptionagence [votre description]`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
            )
            bdd3["xp"][message.author.id] = 50;
            Savebdd3();
        }else{
            message.channel.send(
                let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**agence:**")
                    .setDescription(`vous avez déja créer votre agence spatial. \n Si vous voulez changer son nom faite la commande /nomagence [le nom que vous voulez mettre] \n Si vous voulez changer la description faite /descriptionagence [votre description]`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
            )
        }
    }

    if (message.content.startsWith(prefix + "nomagence ")){
        if(bdd4["agence"][message.author.id] > 0){
            let argsnom = message.content.slice(11);
            bdd4["nom"][message.author.id] = argsnom
            Savebdd4();
            message.channel.send(
                let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Agence:**")
                    .setDescription(`Le nom de votre agence est maintenant ${argsnom} \nSi vous voulez changer la description faite /descriptionagence [votre description]`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
            )
            if(!bdd3["niveauagence"][message.author.id]){
                bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] + parseInt(25);
                Savebdd3();
            }
        }else{
            message.channel.send(
                let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Agence:**")
                    .setDescription(`Vous ne pouvez pas mettre ou changer le nom de votre agence car vous n'en avez pas. \nFaite la commande /créer une agence pour en avoir une.`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
            )
        }
    }

    if (message.content.startsWith(prefix + "descriptionagence ")){
        if(bdd4["agence"][message.author.id] > 0){
            let argsdes = message.content.slice(19);
            bdd4["desciption"][message.author.id] = argsdes
            Savebdd4();
            message.channel.send(
                let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Agence:**")
                    .setDescription(`La description de votre agence est maintenant ${argsdes} \n Si vous voulez changer son nom faite la commande /nomagence [le nom que vous voulez mettre]`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
            )
            if(!bdd3["niveauagence"][message.author.id]){
                bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] + parseInt(25);
                Savebdd3();
            }
        }else{
            message.channel.send(
                let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Agence:**")
                    .setDescription(`Vous ne pouvez pas mettre ou changer la description de votre agence car vous n'en avez pas. \nFaite la commande /créer une agence pour en avoir une.`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
            )
        }
    }

    if(message.content === prefix + "help" || message.content === prefix + "aide"){
        message.channel.send(
            let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("__**Aide:**__")
                .setDescription(`**/créer une agence** : *créer votre agence spatial.* \n**/nomagence [suivi du nom que vous voulez donner]** : *modifie le nom de votre agence.*\n**/descriptionagence [suivi de la description que vous voulez donner]** : *modifie la description de votre agence.*\n**/info** : *vous donne toutes les infos de vous et votre agence.*\n**/market** : *vous permet de savoir le prix des choses que vous pouvez acheter* \n**/work** : *vous permet toutes les 4 heures de gagner de l'argent et des points de science*\n**/dep all ou /dep [suivi du nombre que vous voulez déposer]** : *dépose en banque le montant d'argent indiqué*\n**/retirer all ou /retirer [suivi du nombre que vous voulez retirer]** : *retire de la banque le montant d'argent indiqué*\n**/voler [@unjoueur]** : *permet de voler une parti du montant en poche du joueur mentionné*\n**/sabotage [@unjoueur]** : *permet de saboter la fusée du joueur mentionné*\n**/réparer** : *permet de réparer une fusée saboté*\n**/buy tiers 1** : *permet d'acheter une fusée tiers 1*\n**/buy tiers 2** : *permet d'acheter une fusée tiers 2*\n**/buy tiers 3** : *permet d'acheter une fusée tiers 3*\n**/launch tiers 1** : *permet de lancer une fusée tiers 1*\n**/launch tiers 2** : *permet de lancer une fusée tiers 2*\n**/launch tiers 3** : *permet de lancer une fusée tiers 3*`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
        )
    }

    if(message.content === prefix + "market"){
        message.channel.send(
            let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("__**Market**__")
                .setDescription(`**Saboter coût:** 7500$\n**Réparer sa fusé saboter coût:** *2000$ et 20 points de science*\n**Fusée de tiers 1 coût:** *5000$ et 150 points de science*\n**Fusée de tiers 2 coût:** *70 000$ et 1200 points de science*\n**Fusée de tiers 3 coût:** *200 000$ et 2000 points de science*`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
        )
    }

    if(message.content){
        if(bdd3["xp"][message.author.id] >= niveau1 && bdd3["xp"][message.author.id] < niveau2){
            bdd3["niveauagence"][message.author.id] = 1;
            Savebdd3();
            bdd3["xp"][message.author.id] = 0;
            Savebdd3();
            message.channel.send(
                let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**Agence:**")
                    .setDescription(`Votre agence spatial est maintenant au niveau 1`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
            )
        }
        if(bdd3["xp"][message.author.id] >= niveau2 && bdd3["xp"][message.author.id] < niveau3){
            if(bdd3["niveauagence"][message.author.id] === 1){
                bdd3["niveauagence"][message.author.id] = 2;
                Savebdd3();
                bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] - parseInt(niveau2);
                Savebdd3();
                bdd5["work"][message.author.id] = bdd5["work"][message.author.id] + 75;
                Savebdd5();
                message.channel.send(
                let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**agence:**")
                    .setDescription(`Votre agence spacial est maintenant au niveau 2`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
            )
            }
        }
        if(bdd3["xp"][message.author.id] >= niveau3 && bdd3["xp"][message.author.id] < niveau4){
            if(bdd3["niveauagence"][message.author.id] < 3){
                bdd3["niveauagence"][message.author.id] = 3;
                Savebdd3();
                bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] - parseInt(niveau3);
                Savebdd3();
                bdd5["work"][message.author.id] = bdd5["work"][message.author.id] + 75;
                Savebdd5();
                message.channel.send(
                let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**agence:**")
                    .setDescription(`Votre agence spacial est maintenant au niveau 3`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
            }
        }
        if(bdd3["xp"][message.author.id] >= niveau4 && bdd3["xp"][message.author.id] < niveau5){
            if(bdd3["niveauagence"][message.author.id] < 4){
                bdd3["niveauagence"][message.author.id] = 4;
                Savebdd3();
                bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] - parseInt(niveau4);
                Savebdd3();
                bdd5["work"][message.author.id] = bdd5["work"][message.author.id] + 75;
                Savebdd5();
                message.channel.send(
                let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**agence:**")
                    .setDescription(`Votre agence spacial est maintenant au niveau 4`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
            }
        }
    
    if(bdd3["xp"][message.author.id] >= niveau5 && bdd3["xp"][message.author.id] < niveau6){
            if(bdd3["niveauagence"][message.author.id] < 5){
                bdd3["niveauagence"][message.author.id] = 5;
                Savebdd3();
                bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] - parseInt(niveau5);
                Savebdd3();
                bdd5["work"][message.author.id] = bdd5["work"][message.author.id] + 75;
                Savebdd5();
                message.channel.send(
                let = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("**agence:**")
                    .setDescription(`Votre agence spacial est maintenant au niveau 5`)
                    .setAuthor(bot.users.cache.get(userID).username)
                    .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                    .setTimestamp()
                )
            }
        }
        if(bdd3["xp"][message.author.id] >= niveau6 && bdd3["xp"][message.author.id] < niveau7){
          if(bdd3["niveauagence"][message.author.id] < 6){
              bdd3["niveauagence"][message.author.id] = 6;
              Savebdd3();
              bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] - parseInt(niveau6);
              Savebdd3();
              bdd5["work"][message.author.id] = bdd5["work"][message.author.id] + 75;
              Savebdd5();
              message.channel.send(
              let = new Discord.MessageEmbed()
                  .setColor("#FF0000")
                  .setTitle("**agence:**")
                  .setDescription(`Votre agence spacial est maintenant au niveau 6`)
                  .setAuthor(bot.users.cache.get(userID).username)
                  .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                  .setTimestamp()
              )
          }
      }
      if(bdd3["xp"][message.author.id] >= niveau7 && bdd3["xp"][message.author.id] < niveau8){
        if(bdd3["niveauagence"][message.author.id] < 7){
            bdd3["niveauagence"][message.author.id] = 7;
            Savebdd3();
            bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] - parseInt(niveau7);
            Savebdd3();
            bdd5["work"][message.author.id] = bdd5["work"][message.author.id] + 75;
            Savebdd5();
            message.channel.send(
            let = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("**agence:**")
                .setDescription(`Votre agence spacial est maintenant au niveau 7`)
                .setAuthor(bot.users.cache.get(userID).username)
                .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
                .setTimestamp()
            )
        }
    }
    if(bdd3["xp"][message.author.id] >= niveau8 && bdd3["xp"][message.author.id] < niveau9){
      if(bdd3["niveauagence"][message.author.id] < 8){
          bdd3["niveauagence"][message.author.id] = 8;
          Savebdd3();
          bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] - parseInt(niveau8);
          Savebdd3();
          bdd5["work"][message.author.id] = bdd5["work"][message.author.id] + 75;
          Savebdd5();
          message.channel.send(
          let = new Discord.MessageEmbed()
              .setColor("#FF0000")
              .setTitle("**agence:**")
              .setDescription(`Votre agence spacial est maintenant au niveau 8`)
              .setAuthor(bot.users.cache.get(userID).username)
              .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
              .setTimestamp()
          )
      }
    }
    if(bdd3["xp"][message.author.id] >= niveau9 && bdd3["xp"][message.author.id] < niveau10){
      if(bdd3["niveauagence"][message.author.id] < 9){
          bdd3["niveauagence"][message.author.id] = 9;
          Savebdd3();
          bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] - parseInt(niveau9);
          Savebdd3();
          bdd5["work"][message.author.id] = bdd5["work"][message.author.id] + 75;
          Savebdd5();
          message.channel.send(
          let = new Discord.MessageEmbed()
              .setColor("#FF0000")
              .setTitle("**agence:**")
              .setDescription(`Votre agence spacial est maintenant au niveau 9`)
              .setAuthor(bot.users.cache.get(userID).username)
              .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
              .setTimestamp()
          )
      }
    }
    if(bdd3["xp"][message.author.id] >= niveau10){
      if(bdd3["niveauagence"][message.author.id] < 10){
          bdd3["niveauagence"][message.author.id] = 10;
          Savebdd3();
          bdd3["xp"][message.author.id] = bdd3["xp"][message.author.id] - parseInt(niveau10);
          Savebdd3();
          bdd5["work"][message.author.id] = bdd5["work"][message.author.id] + 75;
          Savebdd5();
          message.channel.send(
          let = new Discord.MessageEmbed()
              .setColor("#FF0000")
              .setTitle("**agence:**")
              .setDescription(`Votre agence spacial est maintenant au niveau 10`)
              .setAuthor(bot.users.cache.get(userID).username)
              .setThumbnail("https://cdn.discordapp.com/attachments/809346706986631208/809351393831026708/unknown.png")
              .setTimestamp()
          )
      }
    }
    }
})

function Savebdd() {
  fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
      if (err) message.channel.send("Une erreur est survenue(bdd).");
  });
}

function Savebdd2() {
    fs.writeFile("./bdd2.json", JSON.stringify(bdd2, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue(bdd2).");
    });
}

function Savebdd3() {
    fs.writeFile("./bdd3.json", JSON.stringify(bdd3, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue(bdd3).");
    });
}

function Savebdd4() {
    fs.writeFile("./bdd4.json", JSON.stringify(bdd4, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue(bdd4).");
    });
}

function Savebdd5() {
    fs.writeFile("./bdd5.json", JSON.stringify(bdd5, null, 5), (err) => {
        if (err) message.channel.send("Une erreur est survenue(bdd5).");
    });
}
