module.exports = { name: "crytype", run(client, msg, args) {
  //text altering command
  var arg = args.join(" ");
  var cry = client.splitter.splitGraphemes(arg); //one of my friends wanted me to fix it so that it doesn't break up emojis into unrecognized characters... so behold
  if (args.length === 0) { //if no argument is given
    return msg.channel.send(new client.discord.RichEmbed().setColor(client.color).setDescription("❗️Plea;se giv,ee a pHrase!")).then(msg => {msg.delete(2000).then(()=>{console.log("sent")}).catch(err => {console.error(err)})}).catch(console.error);
  }
  const AMT = 2; //amount of times to repeat
  var crying = {
    text: cry,
    comma: function (i) { //inserts commas
      var txt = this.text;
      var repeat = Math.ceil(Math.random() * AMT);
      txt.splice(i,0,",".repeat(repeat));
      this.text = txt;
    },
    semicolon: function (i) { //inserts semicolons
      var txt = this.text;
      var repeat = Math.ceil(Math.random() * AMT);
      txt.splice(i,0,";".repeat(repeat));
      this.text = txt;
    },
    space: function (i) { //inserts spaces
      var txt = this.text;
      var repeat = Math.ceil(Math.random() * AMT);
      txt.splice(i,0," ".repeat(repeat));
      this.text = txt;
    },
    repeat: function (i) { //repeats letters
      var txt = this.text;
      if (i > 0) {
       txt.splice(i,0,txt[i-1]);
       this.text = txt;
      }
    },
    symbol: function (i) { //inserts a random symbol
      var txt = this.text;
      var rand = Math.floor(Math.random() * 9);
      var symbol;
      switch (rand) {
        case 0:
          symbol = "/";
          break;
        case 1:
          symbol = ".";
          break;
        case 2:
          symbol = "'";
          break;
        case 3: 
          symbol = "-";
          break;
        case 4:
          symbol = "\\";
          break;
        case 5: 
          symbol = "[";
          break;
        case 6:
          symbol = "]";
          break;
        case 7: 
          symbol = "0";
          break;
        case 8:
          symbol = "=";
          break;
      }
      txt.splice(i,0,symbol);
      this.text = txt;
    },
    upper: function (i) { //randomly capitalizes letters
      var txt = this.text;
      txt.splice(i,1,txt[i].toUpperCase());
      this.text = txt;
    },
    random: function(i) { //just inserts a random letter
      var txt = this.text;
      var rand = Math.floor(Math.random() * 26) + 97;
      txt.splice(i,0,String.fromCharCode(rand));
      this.text = txt;
    }
  };
  var i = 0;
  while (i < crying.text.length) { //as long as you don't reach the end of the string
    var chanceOf = Math.floor(Math.random() * 4); //chance of messing with the text
    var qChance = Math.floor(Math.random() * 7); //chooses which edit to do for the text
      if (chanceOf == 0) {
        switch (qChance) {
          case 0:
            crying.comma(i);
            i += 1;
            break;
          case 1:
            crying.semicolon(i);
            i += 1;
            break;
          case 2:
            crying.space(i);
            i += 1;
            break;
          case 3:
            crying.repeat(i);
            i += 1;
            break;
          case 4:
            crying.upper(i);
            break;
          case 5:
            crying.symbol(i);
            break;
          case 6:
            crying.random(i);
            break;
        }
      }
    i += 1;
  }
  var final = crying.text.join("");
  msg.channel.send(new client.discord.RichEmbed().setColor(client.color).setDescription(final));
},}