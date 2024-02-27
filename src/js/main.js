class Piece {
  /**
   * Seul constructeur de la classe Piece
   * @param {*} name le nom de la pièce sur cette case
   * @param {*} square l'id de la case où est la pièce
   * @param {*} color la couleur de la pièce
   */
  constructor(name, square, color) {
    this.name = name;
    this.square = square;
    this.color = color;
  }

  /**
   * Permet d'appeller la bonne function
   * @param {*} x coordonnée x d'une pièce 
   * @param {*} y coordonnée y d'une pièce
   */
  colorPiece(x, y) {
    // Permet de reset les couleurs de l'échiquier
    ResteBoardColor();

    // Permet de colorer les cases ou la pièce peut se déplacer
    objectBoard[y][x].highlightMove(x, y);
  }
}

class Pawn extends Piece {
  /**
   * Seul constructeur du Pion
   * @param {*} square l'id de la case où est la pièce
   * @param {*} color la couleur de la pièce
   */
  constructor(square, color) {
    super("Pawn", square, color);
  }

  /**
   * Permet de mettre en évidence le cases ou le pion peut bouger
   */
  highlightMove() {

    // Check si la couleur vaut Blanc ou Noir
    if (this.color == "White") {

      // div contient la case ou le pion pourra bouger
      let div = document.getElementById(`${this.square[0]}${parseInt(this.square[1], 10) + 1}`);

      // On met la couleur de fond en rouge pour voir les cases cliquables
      div.style.backgroundColor = "red";

      // On check si le pions est sur la case 2 car si c'est le cas alors il peut avancer de deux
      if (this.square[1] == "2") {

        // div contient la case ou le pion pourra bouger
        div = document.getElementById(`${this.square[0]}${parseInt(this.square[1], 10) + 2}`);

        // On met la couleur de fond en rouge pour voir les cases cliquables
        div.style.backgroundColor = "red";
      }
    } else {
      // div contient la case ou le pion peut avancer
      let div = document.getElementById(`${this.square[0]}${parseInt(this.square[1], 10) - 1}`);

      // Met la couleur de fond à rouge
      div.style.backgroundColor = "red";

      // Check si le pion est sur la ligne 7 si c'est le cas alors il peut avancer de deux
      if(this.square[1] == "7") {

        // div contient la case ou le pion pourrait avancer
        div = document.getElementById(`${this.square[0]}${parseInt(this.square[1], 10) - 2}`);

        // Met la couleur de ond à rouge
        div.style.backgroundColor = "red";
      }
    }
  }
}

class Rook extends Piece {
  /**
   * Seul constructeur de la classe Tour
   * @param {*} square l'id de la case où est la pièce
   * @param {*} color la couleur de la pièce
   */
  constructor(square, color) {
    super("Rook", square, color);
  }

  highlightMove() {
    // Tableau de contenant des divs
    let divs = [];

    // La lettre de la case d'échecs
    let l = letter.indexOf(this.square[0]);

    // Le chiffre de la case d'échecs
    let n = parseInt(this.square[1], 10);

    // La div ou on travaille
    let div;

    // Check si la couleur est Blanc ou Noir
    if (this.color == "White") {

      // Boucle pour les coups légales de la tour
      for(let i = 0;i <= 7; i++) {

        // Met en mémoire la div du déplacemetn légal de la tour
        div = document.getElementById(`${letter[l + i]}${n}`);

        // Check si la div est dans l'échequier
        if(div != undefined) {
          divs.push(div);
        }
      }

      // Boucle sur les coup légales de la tour
      for(let i = 0;i <= 7; i++) {

        // Met en mémoire la div du déplacemetn légal de la tour
        div = document.getElementById(`${letter[l - i]}${n}`);

        // Check si la div est dans l'échequier
        if(div != undefined) {
          divs.push(div);
        }
      }

      // Boucle sur les coups légales de la tour
      for(let i = 0;i <= 7; i++) {

        // Met en mémoire la div de déplacement légal de la tour
        div = document.getElementById(`${letter[l]}${n + i}`);

        // Check si la div est dans l'échequier
        if(div != undefined) {
          divs.push(div);
        }
      }

      // Boucle sur les coups légales de la tour
      for(let i = 0;i <= 7; i++) {

        // Met en mémoire la div de déplacement légal de la tour
        div = document.getElementById(`${letter[l]}${n - i}`);

        // Check si la div est dans l'échequier
        if(div != undefined) {
          divs.push(div);
        }
      }

      // Permet de colorer la color de fond en rouge pour pouvoir apparaître la case
      divs.forEach((d) => {
        try {
          d.style.backgroundColor = "red";
        } catch (error) {
          console.log(error)
        }
      });
    }
  }
}

class Knight extends Piece {
  /**
   * Seul constructeur de la classe Cavalier
   * @param {*} square l'id de la case ou est la pièce
   * @param {*} color la couleur de la pièce
   */
  constructor(square, color) {
    super("Knight", square, color);
  }

  /**
   * Permet de mettre en évidence les cases ou la pièce peut bouger
   */
  highlightMove() {

    // Tableau de contenant des divs
    let divs = [];

    // La lettre de la case d'échecs
    let l = letter.indexOf(this.square[0]);

    // Le chiffre de la case d'échecs
    let n = parseInt(this.square[1], 10);

    // La div ou on travaille
    let div;

    // Check si la couleur de la pièce est Blanche
    if (this.color == "White") {

      // Met en mémoire la div de déplacement légal du cavalier
      div = document.getElementById(`${letter[l + 1]}${n + 2}`);

      // Check si la div est en dehors de l'échequier
      if(div != undefined) {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du cavalier
      div = document.getElementById(`${letter[l - 1]}${n + 2}`);
      
      // Check si la div est en dehors de l'échequier   
      if(div != undefined) {     
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du cavalier
      div = document.getElementById(`${letter[l - 1]}${n - 2}`);
      
      // Check si la div est en dehors de l'échequier 
      if(div != undefined) {       
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du cavalier
      div = document.getElementById(`${letter[l + 1]}${n - 2}`);
      
      // Check si la div est en dehors de l'échequier 
      if(div != undefined) {       
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du cavalier
      div = document.getElementById(`${letter[l + 2]}${n + 1}`);
      
      // Check si la div est en dehors de l'échequier 
      if(div != undefined) {      
        divs.push(div);
      }
      
      // Met en mémoire la div de déplacement légal du cavalier
      div = document.getElementById(`${letter[l + 2]}${n - 1}`);
      
      // Check si la div est en dehors de l'échequier  
      if(div != undefined) {      
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du cavalier
      div = document.getElementById(`${letter[l - 2]}${n + 1}`);
      
      // Check si la div est en dehors de l'échequier 
      if(div != undefined) {    
        divs.push(div);
      };
      
      // Met en mémoire la div de déplacement légal du cavalier
      div = document.getElementById(`${letter[l - 2]}${n - 1}`);
      if(div != undefined) {

      // Check si la div est en dehors de l'échequier        
        divs.push(div);
      }

      // Permet de colorer la color de fond en rouge pour pouvoir apparaître la case
      divs.forEach((d) => {
        try {
          d.style.backgroundColor = "red";
        } catch (error) {
          console.log(error)
        }
      });
    }
  }
}

class Bishop extends Piece {
  /**
   * Seul constructeur de la classe Fous
   * @param {*} square l'id de la case où est la pièce
   * @param {*} color la couleur de la pièce
   */
  constructor(square, color) {
    super("Bishop", square, color);
  }

  highlightMove() {
    // Tableau de contenant des divs
    let divs = [];

    // La lettre de la case d'échecs
    let l = letter.indexOf(this.square[0]);

    // Le chiffre de la case d'échecs
    let n = parseInt(this.square[1], 10);

    // La div ou on travaille
    let div;

    // Check si la couleur de la pièce
    if (this.color == "White") {

      // Boucle sur les coup légales du fou
      for(let i = 1;i <= 7;i++) {

        // Met en mémoire la div de déplacement légal du fou        
        div = document.getElementById(`${letter[l + i]}${n + i}`);

        // Check si la div est en dehors de l'échequier
        if(div != undefined) {
          divs.push(div);
        }
      }

      // Boucle sur les coup légales du fou
      for(let i = 1;i <= 7;i++) {

        // Met en mémoire la div de déplacement légal du fou        
        div = document.getElementById(`${letter[l - i]}${n - i}`);

        // Check si la div est en dehors de l'échequier
        if(div != undefined) {
          divs.push(div);
        }
      }

      // Boucle sur les coup légales du fou
      for(let i = 1;i <= 7;i++) {

        // Met en mémoire la div de déplacement légal du fou        
        div = document.getElementById(`${letter[l + i]}${n - i}`);

        // Check si la div est en dehors de l'échequier
        if(div != undefined) {
          divs.push(div);
        }
      }

      // Boucle sur les coup légales du fou
      for(let i = 1;i <= 7;i++) {

        // Met en mémoire la div de déplacement légal du fou        
        div = document.getElementById(`${letter[l - i]}${n + i}`);

        // Check si la div est en dehors de l'échequier
        if(div != undefined) {
          divs.push(div);
        }
      }

      // Permet de colorer la color de fond en rouge pour pouvoir apparaître la case
      divs.forEach((d) => {
        try {
          d.style.backgroundColor = "red";
        } catch (error) {
          console.log(error)
        }
      });
    }
  }
}

class Queen extends Piece {
  /**
   * Seul constructeur de la classe Dame
   * @param {*} square l'id de la case où est la pièce
   * @param {*} color la couleur de la pièce
   */
  constructor(square, color) {
    super("Queen", square, color);
  }

  highlightMove() {
    // Tableaux contenant toute les divs
    let divs = [];

    // Lettre de la case
    let l = letter.indexOf(this.square[0]);

    // Chiffre de la case
    let n = parseInt(this.square[1], 10);

    // current div
    let div;

    if (this.color == "White") {
      for(let i=0;i <= 7;i++) {
        div = document.getElementById(`${letter[l]}${n + i}`);
        if(div != undefined) {
          divs.push(div);
        }
      }

      for(let i=0;i <= 7;i++) {
        div = document.getElementById(`${letter[l]}${n - i}`);
        if(div != undefined) {
          divs.push(div);
        }
      }

      for(let i=0;i <= 7;i++) {
        div = document.getElementById(`${letter[l + i]}${n}`);
        if(div != undefined) {
          divs.push(div);
        }
      }

      for(let i=0;i <= 7;i++) {
        div = document.getElementById(`${letter[l - i]}${n}`);
        if(div != undefined) {
          divs.push(div);
        }
      }

      for(let i=0;i <= 7;i++) {
        div = document.getElementById(`${letter[l + i]}${n + i}`);
        if(div != undefined) {
          divs.push(div);
        }
      }


      for(let i=0;i <= 7;i++) {
        div = document.getElementById(`${letter[l - i]}${n + i}`);
        if(div != undefined) {
          divs.push(div);
        }
      }

      for(let i=0;i <= 7;i++) {
        div = document.getElementById(`${letter[l + i]}${n - i}`);
        if(div != undefined) {
          divs.push(div);
        }
      }

      for(let i=0;i <= 7;i++) {
        div = document.getElementById(`${letter[l - i]}${n - i}`);
        if(div != undefined) {
          divs.push(div);
        }
      }

      divs.forEach((d) => {
        try {
          d.style.backgroundColor = "red";
        } catch (error) {
          console.log(error)
        }
      });
    }
  }
}

class King extends Piece {
  /**
   * Seul constructeur de la classe Roi
   * @param {*} square l'id de la case où est la pièce
   * @param {*} color la couleur de la pièce
   */
  constructor(square, color) {
    super("King", square, color);
  }

  /**
   * Convertit le nombre pour l'utilisation avec this.square
   * @param {*} n le nombre de l'id de la div
   * @returns le nombre converti 
   */
  convertNumber(n) {
    // switch sur la valeur n
    switch(n) {
      case 1:
        return 7;
      case 2:
        return 6;
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return 3;
      case 6:
        return 2;
      case 7:
        return 1;
    }
  }

  /**
   * Permet de mettre en évidence les coups légal
   */
  highlightMove() {
    // Tableaux contenant toute les divs
    let divs = [];

    // Lettre de la case
    let l = letter.indexOf(this.square[0]);

    // Chiffre de la case
    let n = parseInt(this.square[1], 10);

    // current div
    let div;

    // Check si la couleur de la pièce est blanc
    if (this.color == "White") {

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${letter[l + 1]}${n + 1}`);

      // Change les coordonnées pour correspondre au pièces autour de lui
      let newn = this.convertNumber(n + 1);

      // Check si la pièce est de couleur noir
      if(objectBoard[newn][l].color == "Black") {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${letter[l - 1]}${n - 1}`);

      // Change les coordonnées pour correspondre au pièces autour de lui
      newn = this.convertNumber(n);

      // Check si la pièce est de couleur noir
      if(objectBoard[newn][l + 2].color == "Black") {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${letter[l - 1]}${n + 1}`);

      // Change les coordonnées pour correspondre au pièces autour de lui
      newn = this.convertNumber(n);

      // Check si la pièce est de couleur noir
      if(objectBoard[newn][l + 2].color == "Black") {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${letter[l + 1]}${n - 1}`);

      // Change les coordonnées pour correspondre au pièces autour de lui
      newn = this.convertNumber(n);

      // Check si la pièce est de couleur noir
      if(objectBoard[newn][l].color == "Black") {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${letter[l + 1]}${n}`);

      // Change les coordonnées pour correspondre au pièces autour de lui
      newn = this.convertNumber(n);

      // Check si la pièce est de couleur noir
      if(objectBoard[newn][l].color == "Black") {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${letter[l - 1]}${n}`);

      // Change les coordonnées pour correspondre au pièces autour de lui
      newn = this.convertNumber(n);

      // Check si la pièce est de couleur noir
      if(objectBoard[newn][l].color == "Black") {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${letter[l]}${n + 1}`);

      // Change les coordonnées pour correspondre au pièces autour de lui
      newn = this.convertNumber(n);

      // Check si la pièce est de couleur noir
      if(objectBoard[newn][l].color == "Black") {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${letter[l]}${n - 1}`);

      // Change les coordonnées pour correspondre au pièces autour de lui
      newn = this.convertNumber(n);

      // Check si la pièce est de couleur noir
      if(objectBoard[newn][l].color == "Black") {
        divs.push(div);
      }

      // Boucle sur les divs ou il y a des coups légales
      divs.forEach((d) => {
        d.style.backgroundColor = "red";
      });
    }
  }
}

/**
 * Permet de remettre les couleurs de l'écequier
 */
const ResteBoardColor = () => {
  // Boucle sur les lignes du tableau et surtout permet de boucler sur toute les divs
  for (let row = 1; row <= 8; row++) {

    // Boucle sur les colonnes
    for (let col = 0; col < 8; col++) {
      // div contient une case parmis tout le tableau
      let div = document.getElementById(`${letter[col]}${row}`);

      // Check pour faire un quadrilllage avec des couleurs foncé et clairs
      if((row + col) % 2 === 0) {
        div.style.backgroundColor = "rgb(187,190,100)";
      } else {
        div.style.backgroundColor = "rgb(234,240,206)";
      }
    }
  }
};

/**
 * Permet d'arrondir un nombre
 * @param {*} n un grand nombre
 * @returns le nombre arrondi
 */
const round = (n) => {
  if (n > 0 && n <= 100) {
    return 0;
  } else if (n > 100 && n <= 200) {
    return 1;
  } else if (n > 200 && n <= 300) {
    return 2;
  } else if (n > 300 && n <= 400) {
    return 3;
  } else if (n > 400 && n <= 500) {
    return 4;
  } else if (n > 500 && n <= 600) {
    return 5;
  } else if (n > 600 && n <= 700) {
    return 6;
  } else {
    return 7;
  }
};

/**
 * Permet de mettre les images au bonne endroit
 */
const completeBoard = () => {
  squares.forEach((square) => {
    let img;
    switch (square[1]) {

      // Tout ces pièces sont sur la dernière rangée
      case "8":

        // Si la case correspond au coordonnée des tours
        if (square[0] == "A" || square[0] == "H") {
          let divTb = document.getElementById(square);
          img = document.createElement("img");
          img.src = "../Image/RookBlack.png";
          img.alt = "Une Tour Noir";
          divTb.appendChild(img);

          // Si la case correspond au cavalier
        } else if (square[0] == "B" || square[0] == "G") {
          let divNb = document.getElementById(square);
          img = document.createElement("img");
          img.src = "../Image/KnightBlack.png";
          img.alt = "Un Cavalier Noir";
          divNb.appendChild(img);

          // Si la case correspond au fou
        } else if (square[0] == "C" || square[0] == "F") {
          let divBb = document.getElementById(square);
          img = document.createElement("img");
          img.src = "../Image/BishopBlack.png";
          img.alt = "Un Fou Noir";
          divBb.appendChild(img);

          // Si la case correspond à une dame
        } else if (square[0] == "D") {
          let divQb = document.getElementById(square);
          img = document.createElement("img");
          img.src = "../Image/QueenBlack.png";
          img.alt = "Une Dame Noir";
          divQb.appendChild(img);

          // Sinon elle correspond à un Roi
        } else {
          let divKb = document.getElementById(square);
          img = document.createElement("img");
          img.src = "../Image/KingBlack.png";
          img.alt = "Un Roi Noir";
          divKb.appendChild(img);
        }
        break;

      // Tout cette rangée est faite de pion
      case "7":
        let divPb = document.getElementById(square);
        img = document.createElement("img");
        img.src = "../Image/PawnBlack.png";
        img.alt = "Un Pion Noir";
        divPb.appendChild(img);
        break;

      // Toute cette rangée es faite de pion
      case "2":
        let divPw = document.getElementById(square);
        img = document.createElement("img");
        img.src = "../Image/PawnWhite.png";
        img.alt = "Un Pion Blanc";
        divPw.appendChild(img);
        break;

      // Toute ces pièces sont sur la première rangée
      case "1":

        // Check si la case correspond au coordonnée d'une tour
        if (square[0] == "A" || square[0] == "H") {
          let divTw = document.getElementById(square);
          img = document.createElement("img");
          img.src = "../Image/RookWhite.png";
          img.alt = "Une Tour Blanc";
          divTw.appendChild(img);

          // Check si la case correspond au coordonnée d'un cavalier
        } else if (square[0] == "B" || square[0] == "G") {
          let divNw = document.getElementById(square);
          img = document.createElement("img");
          img.src = "../Image/KnightWhite.png";
          img.alt = "Un Cavalier Blanc";
          divNw.appendChild(img);

          // Check si la case correspond au coordonnée d'un fou
        } else if (square[0] == "C" || square[0] == "F") {
          let divBw = document.getElementById(square);
          img = document.createElement("img");
          img.src = "../Image/BishopWhite.png";
          img.alt = "Un Fou Blanc";
          divBw.appendChild(img);

          // Check si la case correspond au coordonnée d'une dame
        } else if (square[0] == "D") {
          let divQw = document.getElementById(square);
          img = document.createElement("img");
          img.src = "../Image/QueenWhite.png";
          img.alt = "Une Dame Blanc";
          divQw.appendChild(img);
        } else {

          // Sinon c'est forcément un roi
          let divKw = document.getElementById(square);
          img = document.createElement("img");
          img.src = "../Image/KingWhite.png";
          img.alt = "Un Roi Blanc";
          divKw.appendChild(img);
        }
        break;
    }
  });
};

/**
 * Permet de créer tout les divs pour l'échequier
 */
const createBoard = () => {
  // Sélectionne le body
  const body = document.querySelector("body");

  // Nombre de cases de l'échequier
  let count = 8;

  // Boucle sur les lignes
  for (let i = 0; i < 8; i++) {
    // creation de div pour la ligne
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.width = "1000px";
    div.style.height = "100px";
    body.appendChild(div);

    // Boucle sur les colonnes
    for (let j = 0; j < 8; j++) {
      // Creation de la div pour chaque case
      let div2 = document.createElement("div");
      div2.id = `${letter[j]}${count}`;
      div2.style.width = "100px";
      div2.style.height = "100px";
      // Colorier une case sur deux
      if((i + j) % 2 === 0) {
        div2.style.backgroundColor = "rgb(187,190,100)";
      } else {
        div2.style.backgroundColor = "rgb(234,240,206)";
      }
      div2.style.border = "solid white 3px";
      // Add a event on the click on the board 
      div2.addEventListener("click", (event) => {
        let x = event.clientX;
        let y = event.clientY;
        x = round(x);
        y = round(y);
        objectBoard[y][x].colorPiece(x, y);
      });
      div.appendChild(div2);
    }
    count--;
  }
};

// Les différentes lettres pour les cases
const letter = ["A", "B", "C", "D", "E", "F", "G", "H"];

// Tout les cases de l'échequier
const squares = [
  "A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8",
  "A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7",
  "A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6",
  "A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5",
  "A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4",
  "A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3",
  "A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2",
  "A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1",
];

// C'est le tableaux d'objet qui permet de déplacer les pièces
let objectBoard = [
  [
    new Rook("A8", "Black"),
    new Knight("B8", "Black"),
    new Bishop("C8", "Black"),
    new Queen("D8", "Black"),
    new King("E8", "Black"),
    new Bishop("F8", "Black"),
    new Knight("G8", "Black"),
    new Rook("H8", "Black"),
  ],
  [
    new Pawn("A7", "Black"),
    new Pawn("B7", "Black"),
    new Pawn("C7", "Black"),
    new Pawn("D7", "Black"),
    new Pawn("E7", "Black"),
    new Pawn("F7", "Black"),
    new Pawn("G7", "Black"),
    new Pawn("H7", "Black"),
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    new Pawn("A2", "White"),
    new Pawn("B2", "White"),
    new Pawn("C2", "White"),
    new Pawn("D2", "White"),
    new Pawn("E2", "White"),
    new Pawn("F2", "White"),
    new Pawn("G2", "White"),
    new Pawn("H2", "White"),
  ],
  [
    new Rook("A1", "White"),
    new Knight("B1", "White"),
    new Bishop("C1", "White"),
    new Queen("D1", "White"),
    new King("E1", "White"),
    new Bishop("F1", "White"),
    new Knight("G1", "White"),
    new Rook("H1", "White"),
  ],
];

// permet de créer les divs pour le heu d'échecs
createBoard();

// permet de mettre les pièces sur l'échequier
completeBoard();
