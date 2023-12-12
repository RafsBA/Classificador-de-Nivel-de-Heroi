let lvl = 0
let heroi = "Rafael S."
console.log("Olá jovem, este é o Ranking Mundial de nível dos heróis, você apenas passará ao conquistar o nivel Radiante! Seu nível atual é " + lvl)
console.log(" Caro " + heroi + " vamos fazer um treino bem pesado, para conquistar o nível Radiante!");

do{
    lvl += 10001;
    console.log("  Nossa, esse foi um treino pesado ein!");
} while (lvl < 10000);

console.log("   O Herói de nome " + heroi + " está no nível de " + lvl)
console.log("    Agora sim, você está maromba ein!")