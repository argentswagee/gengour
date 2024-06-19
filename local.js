function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Fonction pour choisir un mot au hasard dans une liste
  function getRandomWord(words) {
    const randomIndex = getRandomInt(0, words.length - 1);
    return words[randomIndex];
  }
  
  // Objet associant chaque mot à un score
  const wordScores1 = {
    "ton baobab": 9,
    "ton arbre": 9,
    "ton gourmand": 10,
    "ton gras": 8,
    "ton seum": 7,
    "ton caca": 7,
    "ton sylvain": 5,
    "ton baka": 4,
    "ton pays": 5,
    "ton saperlipopette": 4,
    "ton neuille ": 4,
    "ta gourmandise": 10,
    "ton argument": 5,
    "ton infection": 3,
    "ton pensement": 3,
    "ton dimanche": 6,
    "ta salopette": 7,
    "ton C15": 7,
    "ton singe": 8,
    "ton bouffon": 8,
    "ta morve": 8,
    "ton pupitre": 8,
    "ton bonjour": 7,
    "ton coucou": 7,
    "ton hirondelle": 5,
  };
  
  const verbescore1 = {
"va dormir dans " : 8,
 "ravale " : 9,
 "va manger " : 9,
 "déguste " : 8,
 "reste dans " : 7,
 "retourne dans " : 8,
 "Lis dans " : 6,
 "va courir dans " : 5,
 "va nager dans " : 5,
 "Chante dans " : 6,
 "va jouer dans " : 5,
 "Graille ": 7,
 "témoigne ": 6,
 "édifie " : 8,
  };
  
  // Fonction pour calculer le score basé sur les mots choisis
  function calculateScore1(word) {
    return wordScores1[word] || 0; // Retourne le score ou 0 si le mot n'est pas dans l'objet
  }

  function calculateScorecomplet1(word1) {
    return verbescore1[word1] || 0; // Retourne le score ou 0 si le mot n'est pas dans l'objet
  }
  
  document.getElementById('gen1').addEventListener('click', function(){
    const wordList2 = ["ton baobab", "ton arbre", "ton gourmand", "ton gras", "ton seum", "ton caca", "ton sylvain", "ton baka", "ton pays", "ton saperlipopette", "ton neuille ", "ta gourmandise", "ton argument", "ton infection", "ton pensement", "ton dimanche", "ta salopette", "ton C15", "ton singe", "ton bouffon", "ta morve", "ton pupitre", "ton bonjour", "ton coucou", "ton hirondelle"];
    const randomWord2j1 = getRandomWord(wordList2);
    console.log("Mot choisi au hasard :", randomWord2j1);
  
    const wordList = ["va dormir dans ", "ravale ", "va manger ", "déguste ", "reste dans ", "retourne dans ", "Lis dans ", "va courir dans ", "va nager dans ", "Chante dans ", "va jouer dans ", "Graille ", "témoigne ", "édifie "];
    const randomWordj1 = getRandomWord(wordList);
    console.log("Mot choisi au hasard :", randomWordj1);
  
    const phrase = randomWordj1 + randomWord2j1;
    document.getElementById('txt1').textContent = phrase;
  
    // Calculer le score
    const score1 = calculateScore1(randomWord2j1);

    const scoreverbe1 = calculateScorecomplet1(randomWordj1);
    console.log("Score:", scoreverbe1 + score1);
    const scorej1 = scoreverbe1 + score1;
  });



// Fonction pour générer un entier aléatoire entre min et max (inclus)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Fonction pour choisir un mot au hasard dans une liste
  function getRandomWord(words) {
    const randomIndex = getRandomInt(0, words.length - 1);
    return words[randomIndex];
  }
  
  // Objet associant chaque mot à un score
  const wordScores = {
    "ton baobab": 9,
    "ton arbre": 9,
    "ton gourmand": 10,
    "ton gras": 8,
    "ton seum": 7,
    "ton caca": 7,
    "ton sylvain": 5,
    "ton baka": 4,
    "ton pays": 5,
    "ton saperlipopette": 4,
    "ton neuille ": 4,
    "ta gourmandise": 10,
    "ton argument": 5,
    "ton infection": 3,
    "ton pensement": 3,
    "ton dimanche": 6,
    "ta salopette": 7,
    "ton C15": 7,
    "ton singe": 8,
    "ton bouffon": 8,
    "ta morve": 8,
    "ton pupitre": 8,
    "ton bonjour": 7,
    "ton coucou": 7,
    "ton hirondelle": 5,
  };
  
  const verbescore = {
"va dormir dans " : 8,
 "ravale " : 9,
 "va manger " : 9,
 "déguste " : 8,
 "reste dans " : 7,
 "retourne dans " : 8,
 "Lis dans " : 6,
 "va courir dans " : 5,
 "va nager dans " : 5,
 "Chante dans " : 6,
 "va jouer dans " : 5,
 "Graille ": 7,
 "témoigne ": 6,
 "édifie " : 8,
  };
  
  // Fonction pour calculer le score basé sur les mots choisis
  function calculateScore(word) {
    return wordScores[word] || 0; // Retourne le score ou 0 si le mot n'est pas dans l'objet
  }

  function calculateScorecomplet(word1) {
    return verbescore[word1] || 0; // Retourne le score ou 0 si le mot n'est pas dans l'objet
  }
  
  document.getElementById('gen2').addEventListener('click', function(){
    const wordList2 = ["ton baobab", "ton arbre", "ton gourmand", "ton gras", "ton seum", "ton caca", "ton sylvain", "ton baka", "ton pays", "ton saperlipopette", "ton neuille ", "ta gourmandise", "ton argument", "ton infection", "ton pensement", "ton dimanche", "ta salopette", "ton C15", "ton singe", "ton bouffon", "ta morve", "ton pupitre", "ton bonjour", "ton coucou", "ton hirondelle"];
    const randomWord2j2 = getRandomWord(wordList2);
    console.log("Mot choisi au hasard :", randomWord2j2);
  
    const wordList = ["va dormir dans ", "ravale ", "va manger ", "déguste ", "reste dans ", "retourne dans ", "Lis dans ", "va courir dans ", "va nager dans ", "Chante dans ", "va jouer dans ", "Graille ", "témoigne ", "édifie "];
    const randomWordj2 = getRandomWord(wordList);
    console.log("Mot choisi au hasard :", randomWordj2);
  
    const phrase = randomWordj2 + randomWord2j2;
    document.getElementById('txt2').textContent = phrase;
  
    // Calculer le score
    const score = calculateScore(randomWord2j2);

    const scoreverbe = calculateScorecomplet(randomWordj2);
    console.log("Score:", scoreverbe + score);
    const scorej2 = scoreverbe + score;
  });


  

document.getElementById('histoire').addEventListener('click', function(){
  window.location.href = 'histoire.html';
})

document.getElementById('local').addEventListener('click', function(){
  window.location.href = 'local.html';
});

window.onload("click", function () {
    var audio = document.getElementById("music");
    audio.play();
  });


