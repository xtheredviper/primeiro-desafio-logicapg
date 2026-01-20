let heroi = ["Laurel", "Elfa", "Paladina", 9250]

let nivel = ""

if (heroi [3] < 1000) {
    nivel = "Ferro"}
    
else if (heroi [3] >= 1001 && heroi [3] < 2000) {
    nivel = "Bronze"}
    
else if (heroi [3] >= 2001 && heroi [3] < 5000) {
    nivel = "Prata"}
    
else if (heroi [3] >= 5001 && heroi [3] < 7000) {
    nivel = "Ouro"}
   
else if (heroi [3] >= 7001 && heroi [3] < 8000) {
    nivel = "Platina"}
    
else if (heroi [3] >= 8001 && heroi [3] < 9000) {
    nivel = "Ascendente"}
   
else if (heroi [3] >= 9001 && heroi [3] < 10000) {
    nivel = "Imortal"}
    
else {
    nivel = "Radiante"}
    
console.log ("A heroina de nome " + heroi [0] + " está no nível " + nivel)