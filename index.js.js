const cores = ["AliceBlue" ,"AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
"Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk",
"Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta",
"DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray",
"DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick",
"FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow",
"HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon",
"LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink",
"LightSalmon" ,"LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
"Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple",
"MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue",
"MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed",
"Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink",
"Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown",
"SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
"SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]

function escolheCor() {
    return cores[Math.floor(Math.random() * cores.length)];
}

var color_options = [];

var right_choice = escolheCor();
color_options.push(right_choice);

while (color_options.length < 10) {
    let new_color = escolheCor();

    if (color_options.indexOf(new_color) == -1) {
        color_options.push(new_color);    
    }   
}
color_options.sort();

function check(guess) {
    if (color_options.includes(guess)){
        return true;
    }
    return false;
}

function start(){

    while (true){

        let guess = prompt("Estou pensando em uma dessas cores, você consegue advinhar qual é ? Informe o respectivo nome dela.\n\n" +
    color_options[0]+
         + ", " + color_options[1]  + '\n' + color_options[2]  + ', ' + color_options[3] + '\n' + color_options[4]
         + ', ' + color_options[5] + '\n' + color_options[6] + ', ' + color_options[7] + '\n' + color_options[8]
         + ', ' + color_options[9]);

        if (guess == 'stop'){
            return false;
        
        } 
        
        if (right_choice == guess) {
            document.body.style.backgroundColor = right_choice;
            alert("Parabéns você acertou!!!");
            return true;
        }
        
        if (!check(guess)){
            alert("Ops, essa não é uma escolha válida"); 
        } else if (guess > right_choice) {
            alert('Errado !  A cor que eu escolhi começa com uma letra menor' );
        } else if (guess < right_choice){
            alert('Errado !  A cor que eu escolhi começa com uma letra maior ! ')
        }
        
    }
    

}


console.log(color_options);
console.log(right_choice);