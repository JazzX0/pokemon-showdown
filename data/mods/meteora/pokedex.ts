import {ModdedSpeciesData} from '../../../sim/dex-species';



export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {

treecko: {
     inherit: true,
     baseStats: { hp: 65, atk: 30, def: 40, spa: 70, spd: 40, spe: 70 },
},

grovyle: {
     inherit: true,
     baseStats: { hp: 75, atk: 50, def: 50, spa: 90, spd: 50, spe: 95 },
},

sceptile: {
     inherit: true,
     types: ["Grass","Dragon"],
     baseStats: { hp: 95, atk: 70, def: 70, spa: 110, spd: 70, spe: 120 },
},

torchic: {
     inherit: true,
     baseStats: { hp: 40, atk: 65, def: 45, spa: 35, spd: 55, spe: 75 },
},

combusken: {
     inherit: true,
     baseStats: { hp: 55, atk: 90, def: 65, spa: 50, spd: 55, spe: 85 },
},

blaziken: {
     inherit: true,
     baseStats: { hp: 75, atk: 125, def: 75, spa: 75, spd: 75, spe: 110 },
},

mudkip: {
     inherit: true,
     baseStats: { hp: 50, atk: 40, def: 80, spa: 45, spd: 80, spe: 20 },
     abilities: { 0:"Torrent", H: "Sheer Force" },
},

marshtomp: {
     inherit: true,
     baseStats: { hp: 70, atk: 55, def: 100, spa: 55, spd: 100, spe: 30 },
     abilities: { 0:"Torrent", H: "Sheer Force" },
},

swampert: {
     inherit: true,
     baseStats: { hp: 100, atk: 80, def: 120, spa: 75, spd: 120, spe: 40 },
     abilities: { 0:"Torrent", H: "Sheer Force" },
},

poochyena: {
     inherit: true,
     baseStats: { hp: 45, atk: 65, def: 45, spa: 20, spd: 35, spe: 40 },
     abilities: { 0: "Run Away", 1: "Quick Feet", H: "Defiant" },
},

mightyena: {
     inherit: true,
     baseStats: { hp: 80, atk: 100, def: 80, spa: 20, spd: 65, spe: 75 },
     abilities: { 0: "Intimidate", 1: "Quick Feet", H: "Moxie" },
},

zigzagoon: {
     inherit: true,
     baseStats: { hp: 85, atk: 80, def: 10, spa: 10, spd: 10, spe: 75 },
     abilities: { 0: "Pickup", 1: "Gluttony", H: "Reckless" },
},

linoone: {
     inherit: true,
     baseStats: { hp: 125, atk: 120, def: 30, spa: 30, spd: 30, spe: 115 },
     abilities: { 0: "Pickup", 1: "Gluttony", H: "Reckless" },
},

wurmple: {
     inherit: true,
     baseStats: { hp: 60, atk: 40, def: 45, spa: 15, spd: 35, spe: 20 },
     abilities: { 0: "Shield Dust", 1: "Compound Eyes", H: "Run Away" },
},

silcoon: {
     inherit: true,
     baseStats: { hp: 65, atk: 30, def: 65, spa: 20, spd: 65, spe: 15 },
     abilities: { 0: "Shed Skin", 1: "Overcoat", H: "Rain Dish" },
},

// Cascoon got nuked :3

beautifly: {
     inherit: true,
     types: ["Bug", "Dark"],
     baseStats: { hp: 75, atk: 20, def: 50, spa: 115, spd: 50, spe: 95 },
     abilities: { 0: "Shield Dust", 1: "Compound Eyes", H: "Beserk" },
},


dustox: {
     inherit: true,
     types: ["Bug", "Poison"],
     baseStats: { hp: 75, atk: 45, def: 80, spa: 45, spd: 110, spe: 50 },
     abilities: { 0: "Shield Dust", 1: "Compound Eyes", H: "Beserk" },
},


lotad: {
     inherit: true,
     baseStats: { hp: 55, atk: 20, def: 45, spa: 50, spd: 50, spe: 30 },
},

lombre: {
     inherit: true,
     baseStats: { hp: 75, atk: 30, def: 65, spa: 70, spd: 70, spe: 50 },
},

ludicolo: {
     inherit: true,
     baseStats: { hp: 95, atk: 40, def: 85, spa: 100, spd: 100, spe: 70 },
     abilities: { 0: "Swift Swim", 1: "Dancer", H: "Own Tempo" },
},

seedot: {
     inherit: true,
     baseStats: { hp: 30, atk: 60, def: 70, spa: 15, spd: 50, spe: 20 },
     abilities: { 0: "Chlorophyll", 1: "Early Bird", H: "Water Absorb" },
},

nuzleaf: {
     inherit: true,
     baseStats: { hp: 60, atk: 90, def: 60, spa: 30, spd: 60, spe: 50 },
     abilities: { 0: "Chlorophyll", 1: "Early Bird", H: "Water Absorb" },
},

shiftry: {
     inherit: true,
     baseStats: { hp: 80, atk: 120, def: 80, spa: 60, spd: 80, spe: 70 },
     abilities: { 0: "Chlorophyll", 1: "Wind Rider", H: "Water Absorb" },
},

tailow: {
     inherit: true,
     types: ["Flying"],
     baseStats: { hp: 60, atk: 45, def: 55, spa: 15, spd: 45, spe: 85 },
     abilities: { 0: "Guts", 1: "Scrappy", H: "Wind Rider" },
},

swellow: {
     inherit: true,
     types: ["Flying"],
     baseStats: { hp: 80, atk: 75, def: 55, spa: 15, spd: 45, spe: 85 },
     abilities: { 0: "Guts", 1: "Scrappy", H: "Wind Rider" },
},

wingull: {
     inherit: true,
     baseStats: { hp: 70, atk: 20, def: 30, spa: 40, spd: 45, spe: 80 },
},

pelipper: {
     inherit: true,
     baseStats: { hp: 90, atk: 40, def: 100, spa: 80, spd: 85, spe: 60 },
     abilities: { 0: "Compound Eyes", 1: "Drizzle", H: "Gulp Missile" },
},

ralts: {
     inherit: true,
     baseStats: { hp: 40, atk: 10, def: 25, spa: 45, spd: 35, spe: 40 },
     abilities: { 0: "Synchronize", 1: "Trace", H: "Fairy Aura" },
},

kirlia: {
     inherit: true,
     baseStats: { hp: 50, atk: 20, def: 35, spa: 65, spd: 55, spe: 50 },
     abilities: { 0: "Synchronize", 1: "Trace", H: "Fairy Aura" },
},
gardevoir: {
     inherit: true,
     baseStats: { hp: 80, atk: 50, def: 65, spa: 125, spd: 115, spe: 80 },
     abilities: { 0: "Synchronize", 1: "Trace", H: "Fairy Aura" },
},

surskit: {
     inherit: true,
     baseStats: { hp: 40, atk: 10, def: 45, spa: 65, spd: 55, spe: 70 },
     abilities: { 0: "Swift Swim", 1: "Rain Dish", H: "Water Bubble" },
},

masquerain: {
     inherit: true,
     baseStats: { hp: 70, atk: 40, def: 75, spa: 115, spd: 85, spe: 85 },
     abilities: { 0: "Intimidate", 1: "Horrify", H: "Speed Boost" },
},

shroomish: {
     inherit: true,
     baseStats: { hp: 60, atk: 40, def: 40, spa: 40, spd: 60, spe: 55 },
     abilities: { 0: "Effect Spore", 1: "Quick Feet", H: "Poison Heal" },
},

breloom: {
     inherit: true,
     baseStats: { hp: 60, atk: 130, def: 60, spa: 60, spd: 60, spe: 90 },
     abilities: { 0: "Effect Spore", 1: "Quick Feet", H: "Iron Fist" },
},

slakoth: {
     inherit: true,
     baseStats: { hp: 60, atk: 60, def: 60, spa: 35, spd: 35, spe: 30 },
},

vigoroth: {
     inherit: true,
     baseStats: { hp: 80, atk: 80, def: 80, spa: 55, spd: 55, spe: 90 },
},

slaking: {
     inherit: true,
     baseStats: { hp: 150, atk: 160, def: 100, spa: 95, spd: 65, spe: 100 },
},

abra: {
     inherit: true,
     abilities: { 0: "Inner Focus", 1: "Adaptability", H: "Magic Guard" },
},

kadabra: {
     inherit: true,
     abilities: { 0: "Inner Focus", 1: "Adaptability", H: "Magic Guard" },
},

alakazam: {
     inherit: true,
     abilities: { 0: "Inner Focus", 1: "Adaptability", H: "Magic Guard" },
},

nincada: {
     inherit: true,
     baseStats: { hp: 30, atk: 60, def: 90, spa: 25, spd: 25, spe: 40 },
     abilities: { 0: "Compound Eyes", 1: "Run Away", H: "Sap Sipper" },
},

ninjask: {
     inherit: true,
     baseStats: { hp: 60, atk: 105, def: 45, spa: 45, spd: 45, spe: 160 },
     abilities: { 0: "Speed Boost", 1: "Infiltrator", H: "Moxie" },
},

shedinja: {
     inherit: true,
     baseStats: { hp: 1, atk: 100, def: 1, spa: 100, spd: 1, spe: 115 },
},

whismur: {
     inherit: true,
     baseStats: { hp: 65, atk: 25, def: 40, spa: 70, spd: 40, spe: 30 },
     abilities: { 0: "Soundproof", 1: "Scrappy", H: "Amped" },
},

loudred: {
     inherit: true,
     baseStats: { hp: 85, atk: 45, def: 60, spa: 90, spd: 60, spe: 50 },
     abilities: { 0: "Soundproof", 1: "Scrappy", H: "Amped" },
},

exploud: {
     inherit: true,
     baseStats: { hp: 105, atk: 75, def: 80, spa: 110, spd: 80, spe: 70 },
     abilities: { 0: "Soundproof", 1: "Scrappy", H: "Amped" },
},

makuhita: {
     inherit: true,
     baseStats: { hp: 75, atk: 60, def: 45, spa: 10, spd: 45, spe: 25 },
     abilities: { 0: "Thick Fat", 1: "Guts", H: "Sheer Force" },
},

hariyama: {
     inherit: true,
     baseStats: { hp: 150, atk: 120, def: 90, spa: 20, spd: 90, spe: 50 },
     abilities: { 0: "Thick Fat", 1: "Guts", H: "Sheer Force" },
},

goldeen: {
     inherit: true,
     types: ["Water","Normal"],
     baseStats: { hp: 55, atk: 80, def: 65, spa: 30, spd: 40, spe: 85 },
     abilities: { 0: "Storm Force", 1: "Overwhelm", H: "Huge Power" },
},

seaking: {
     inherit: true,
     types: ["Water","Normal"],
     baseStats: { hp: 90, atk: 105, def: 70, spa: 60, spd: 70, spe: 90 },
     abilities: { 0: "Storm Force", 1: "Overwhelm", H: "Huge Power" },
},
}

