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
    ResetBoardColor();

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

  convertNumber = (n) => {
    switch (n) {
      case 0:
        return 7;
      case 1:
        return 6;
      case 2:
        return 5;
      case 3:
        return 4;
      case 4:
        return 3;
      case 5:
        return 2;
      case 6:
        return 1;
      case 7:
        return 0;
    }
  };

  /**
   * Permet de mettre en évidence le cases ou le pion peut bouger
   */
  highlightMove() {
    let x = parseInt(this.square[0]);
    let y = parseInt(this.square[1]);

    y = this.convertNumber(y);

    // Check si la couleur vaut Blanc ou Noir
    if (this.color == "White") {
      // div contient la case ou le pion pourra bouger
      let div = document.getElementById(`${x}${y - 1}`);

      // On met la couleur de fond en rouge pour voir les cases cliquables
      div.style.backgroundColor = "red";

      if (y == 6) {
        div = document.getElementById(`${x}${y - 2}`);

        div.style.backgroundColor = "red";
      }
    } else {
      // div contient la case ou le pion peut avancer
      let div = document.getElementById(`${x}${y + 1}`);

      // Met la couleur de fond à rouge
      div.style.backgroundColor = "red";

      if (y == 1) {
        div = document.getElementById(`${x}${y + 2}`);

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

  convertNumber = (n) => {
    switch (n) {
      case 0:
        return 7;
      case 1:
        return 6;
      case 2:
        return 5;
      case 3:
        return 4;
      case 4:
        return 3;
      case 5:
        return 2;
      case 6:
        return 1;
      case 7:
        return 0;
    }
  };

  highlightMove() {
    // Tableau de contenant des divs
    let divs = [];

    // La lettre de la case d'échecs
    let x = parseInt(this.square[0]);

    // Le chiffre de la case d'échecs
    let y = parseInt(this.square[1]);

    y = this.convertNumber(y);

    // La div ou on travaille
    let div;

    // Boucle pour les coups légales de la tour
    for (let i = 0; i < 8; i++) {
      // Met en mémoire la div du déplacemetn légal de la tour
      div = document.getElementById(`${x + i}${y}`);

      // Check si la div est dans l'échequier
      if (div != undefined) {
        divs.push(div);
      }
    }

    // Boucle sur les coup légales de la tour
    for (let i = 0; i < 8; i++) {
      // Met en mémoire la div du déplacemetn légal de la tour
      div = document.getElementById(`${x - i}${y}`);

      // Check si la div est dans l'échequier
      if (div != undefined) {
        divs.push(div);
      }
    }

    // Boucle sur les coups légales de la tour
    for (let i = 0; i < 8; i++) {
      // Met en mémoire la div de déplacement légal de la tour
      div = document.getElementById(`${x}${y + i}`);

      // Check si la div est dans l'échequier
      if (div != undefined) {
        divs.push(div);
      }
    }

    // Boucle sur les coups légales de la tour
    for (let i = 0; i < 8; i++) {
      // Met en mémoire la div de déplacement légal de la tour
      div = document.getElementById(`${x}${y - i}`);

      // Check si la div est dans l'échequier
      if (div != undefined) {
        divs.push(div);
      }
    }

    // Permet de colorer la color de fond en rouge pour pouvoir apparaître la case
    divs.forEach((d) => {
      try {
        d.style.backgroundColor = "red";
      } catch (error) {
        console.log(error);
      }
    });
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

  convertNumber = (n) => {
    switch (n) {
      case 0:
        return 7;
      case 1:
        return 6;
      case 2:
        return 5;
      case 3:
        return 4;
      case 4:
        return 3;
      case 5:
        return 2;
      case 6:
        return 1;
      case 7:
        return 0;
    }
  };

  /**
   * Permet de mettre en évidence les cases ou la pièce peut bouger
   */
  highlightMove() {
    // Tableau de contenant des divs
    let divs = [];

    // La lettre de la case d'échecs
    let x = parseInt(this.square[0]);

    // Le chiffre de la case d'échecs
    let y = parseInt(this.square[1]);

    y = this.convertNumber(y);

    // La div ou on travaille
    let div;

    // Met en mémoire la div de déplacement légal du cavalier
    div = document.getElementById(`${x + 1}${y + 2}`);

    // Check si la div est en dehors de l'échequier
    if (div != undefined || objectBoard[x + 1][y + 2].color == "Black") {
      divs.push(div);
    }

    // Met en mémoire la div de déplacement légal du cavalier
    div = document.getElementById(`${x - 1}${y + 2}`);

    // Check si la div est en dehors de l'échequier
    if (div != undefined || objectBoard[x - 1][y + 2].color == "Black") {
      divs.push(div);
    }

    // Met en mémoire la div de déplacement légal du cavalier
    div = document.getElementById(`${x - 1}${y - 2}`);

    // Check si la div est en dehors de l'échequier
    if (div != undefined || objectBoard[x - 1][y - 2].color == "Black") {
      divs.push(div);
    }

    // Met en mémoire la div de déplacement légal du cavalier
    div = document.getElementById(`${x + 1}${y - 2}`);

    // Check si la div est en dehors de l'échequier
    if (div != undefined || objectBoard[x + 1][y - 2].color == "Black") {
      divs.push(div);
    }

    // Met en mémoire la div de déplacement légal du cavalier
    div = document.getElementById(`${x + 2}${y + 1}`);

    // Check si la div est en dehors de l'échequier
    if (div != undefined || objectBoard[x + 2][y + 1].color == "Black") {
      divs.push(div);
    }

    // Met en mémoire la div de déplacement légal du cavalier
    div = document.getElementById(`${x + 2}${y - 1}`);

    // Check si la div est en dehors de l'échequier
    if (div != undefined || objectBoard[x + 2][y - 1].color == "Black") {
      divs.push(div);
    }

    // Met en mémoire la div de déplacement légal du cavalier
    div = document.getElementById(`${x - 2}${y + 1}`);

    // Check si la div est en dehors de l'échequier
    if (div != undefined || objectBoard[x - 2][y + 1].color == "Black") {
      divs.push(div);
    }

    // Met en mémoire la div de déplacement légal du cavalier
    div = document.getElementById(`${x - 2}${y - 1}`);
    if (div != undefined || objectBoard[x - 2][y - 1].color == "Black") {
      divs.push(div);
    }

    // Permet de colorer la color de fond en rouge pour pouvoir apparaître la case
    divs.forEach((d) => {
      try {
        d.style.backgroundColor = "red";
      } catch (error) {
        console.log(error);
      }
    });
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
    let x = parseInt(this.square[0]);

    // Le chiffre de la case d'échecs
    let y = parseInt(this.square[1]);

    // La div ou on travaille
    let div;

    // Check si la couleur de la pièce
    if (this.color == "White") {
      // Boucle sur les coup légales du fou
      for (let i = 1; i < 8; i++) {
        // Met en mémoire la div de déplacement légal du fou
        div = document.getElementById(`${x + i}${y + i}`);

        // Check si la div est en dehors de l'échequier
        if (div != undefined) {
          divs.push(div);
        }
      }

      // Boucle sur les coup légales du fou
      for (let i = 1; i < 8; i++) {
        // Met en mémoire la div de déplacement légal du fou
        div = document.getElementById(`${x - i}${y - i}`);

        // Check si la div est en dehors de l'échequier
        if (div != undefined) {
          divs.push(div);
        }
      }

      // Boucle sur les coup légales du fou
      for (let i = 1; i <= 7; i++) {
        // Met en mémoire la div de déplacement légal du fou
        div = document.getElementById(`${x + i}${y - i}`);

        // Check si la div est en dehors de l'échequier
        if (div != undefined) {
          divs.push(div);
        }
      }

      // Boucle sur les coup légales du fou
      for (let i = 1; i <= 7; i++) {
        // Met en mémoire la div de déplacement légal du fou
        div = document.getElementById(`${x - i}${y + i}`);

        // Check si la div est en dehors de l'échequier
        if (div != undefined) {
          divs.push(div);
        }
      }

      // Permet de colorer la color de fond en rouge pour pouvoir apparaître la case
      divs.forEach((d) => {
        try {
          d.style.backgroundColor = "red";
        } catch (error) {
          console.log(error);
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
    let x = parseInt(this.square[0]);

    // Chiffre de la case
    let y = parseInt(this.square[1]);

    // current div
    let div;

    if (this.color == "White") {
      for (let i = 0; i < 8; i++) {
        div = document.getElementById(`${x}${y + i}`);
        if (div != undefined) {
          divs.push(div);
        }
      }

      for (let i = 0; i < 8; i++) {
        div = document.getElementById(`${x}${y - i}`);
        if (div != undefined) {
          divs.push(div);
        }
      }

      for (let i = 0; i < 8; i++) {
        div = document.getElementById(`${x + i}${y}`);
        if (div != undefined) {
          divs.push(div);
        }
      }

      for (let i = 0; i < 8; i++) {
        div = document.getElementById(`${x - i}${y}`);
        if (div != undefined) {
          divs.push(div);
        }
      }

      for (let i = 0; i < 8; i++) {
        div = document.getElementById(`${x + i}${y + i}`);
        if (div != undefined) {
          divs.push(div);
        }
      }

      for (let i = 0; i < 8; i++) {
        div = document.getElementById(`${x - i}${y + i}`);
        if (div != undefined) {
          divs.push(div);
        }
      }

      for (let i = 0; i < 8; i++) {
        div = document.getElementById(`${x + i}${y - i}`);
        if (div != undefined) {
          divs.push(div);
        }
      }

      for (let i = 0; i < 8; i++) {
        div = document.getElementById(`${x - i}${y - i}`);
        if (div != undefined) {
          divs.push(div);
        }
      }

      divs.forEach((d) => {
        try {
          d.style.backgroundColor = "red";
        } catch (error) {
          console.log(error);
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
   * Permet de mettre en évidence les coups légal
   */
  highlightMove() {
    // Tableaux contenant toute les divs
    let divs = [];

    // Lettre de la case
    let x = parseInt(this.square[0]);

    // Chiffre de la case
    let y = parseInt(this.square[1]);

    // current div
    let div;

    // Check si la couleur de la pièce est blanc
    if (this.color == "White") {
      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${x + 1}${y + 1}`);
      if (div != undefined) {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${x - 1}${y - 1}`);
      if (div != undefined) {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${x - 1}${y + 1}`);
      if (div != undefined) {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${x + 1}${y - 1}`);
      if (div != undefined) {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${x + 1}${y}`);
      if (div != undefined) {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${x - 1}${y}`);
      if (div != undefined) {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${x}${y + 1}`);
      if (div != undefined) {
        divs.push(div);
      }

      // Met en mémoire la div de déplacement légal du roi
      div = document.getElementById(`${x}${y - 1}`);
      if (div != undefined) {
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
const ResetBoardColor = () => {
  // Boucle sur les lignes du tableau et surtout permet de boucler sur toute les divs
  for (let row = 0; row < 8; row++) {
    // Boucle sur les colonnes
    for (let col = 0; col < 8; col++) {
      // div contient une case parmis tout le tableau
      let div = document.getElementById(`${col}${row}`);

      // Check pour faire un quadrilllage avec des couleurs foncé et clairs
      if ((row + col) % 2 === 0) {
        div.style.backgroundColor = "rgb(187,190,100)";
      } else {
        div.style.backgroundColor = "rgb(234,240,206)";
      }
    }
  }
};

/**
 * Permet de mettre les images au bonne endroit
 */
const completeBoard = () => {
  let div;
  let img;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      switch (i) {
        case 0:
          if (j == 0 || j == 7) {
            div = document.getElementById(`${j}${i}`);
            img = document.createElement("img");
            img.src = "../Image/RookBlack.png";
            img.alt = "Une Tour Noir";
            div.appendChild(img);
          } else if (j == 1 || j == 6) {
            div = document.getElementById(`${j}${i}`);
            img = document.createElement("img");
            img.src = "../Image/KnightBlack.png";
            img.alt = "Un Cavalier Noir";
            div.appendChild(img);
          } else if (j == 2 || j == 5) {
            div = document.getElementById(`${j}${i}`);
            img = document.createElement("img");
            img.src = "../Image/BishopBlack.png";
            img.alt = "Un Fou Noir";
            div.appendChild(img);
          } else if (j == 3) {
            div = document.getElementById(`${j}${i}`);
            img = document.createElement("img");
            img.src = "../Image/QueenBlack.png";
            img.alt = "Une Dame Noir";
            div.appendChild(img);
          } else {
            div = document.getElementById(`${j}${i}`);
            img = document.createElement("img");
            img.src = "../Image/KingBlack.png";
            img.alt = "Un Roi Noir";
            div.appendChild(img);
          }
          break;
        case 1:
          div = document.getElementById(`${j}${i}`);
          img = document.createElement("img");
          img.src = "../Image/PawnBlack.png";
          img.alt = "Un Pion Noir";
          div.appendChild(img);
          break;
        case 6:
          div = document.getElementById(`${j}${i}`);
          img = document.createElement("img");
          img.src = "../Image/PawnWhite.png";
          img.alt = "Un Pion Blanc";
          div.appendChild(img);
          break;
        case 7:
          if (j == 0 || j == 7) {
            div = document.getElementById(`${j}${i}`);
            img = document.createElement("img");
            img.src = "../Image/RookWhite.png";
            img.alt = "Une Tour Blanche";
            div.appendChild(img);
          } else if (j == 1 || j == 6) {
            div = document.getElementById(`${j}${i}`);
            img = document.createElement("img");
            img.src = "../Image/KnightWhite.png";
            img.alt = "Un Cavalier Blanc";
            div.appendChild(img);
          } else if (j == 2 || j == 5) {
            div = document.getElementById(`${j}${i}`);
            img = document.createElement("img");
            img.src = "../Image/BishopWhite.png";
            img.alt = "Un Fou Blanc";
            div.appendChild(img);
          } else if (j == 3) {
            div = document.getElementById(`${j}${i}`);
            img = document.createElement("img");
            img.src = "../Image/QueenWhite.png";
            img.alt = "Une Dame Blanche";
            div.appendChild(img);
          } else {
            div = document.getElementById(`${j}${i}`);
            img = document.createElement("img");
            img.src = "../Image/KingWhite.png";
            img.alt = "Un Roi Blanc";
            div.appendChild(img);
          }
          break;
      }
    }
  }
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
      div2.id = `${j}${i}`;
      div2.style.width = "100px";
      div2.style.height = "100px";
      // Colorier une case sur deux
      if ((i + j) % 2 === 0) {
        div2.style.backgroundColor = "rgb(187,190,100)";
      } else {
        div2.style.backgroundColor = "rgb(234,240,206)";
      }
      div2.style.border = "solid white 3px";
      // Add a event on the click on the board
      div2.addEventListener("click", (event) => {
        let x = event.clientX;
        let y = event.clientY;
        x = `${x}`;
        y = `${y}`;
        x = x[0];
        y = y[0];
        objectBoard[y][x].colorPiece(x, y);
      });
      div.appendChild(div2);
    }
    count--;
  }
};

// Les différentes lettres pour les cases
const letter = ["A", "B", "C", "D", "E", "F", "G", "H"];

// C'est le tableaux d'objet qui permet de déplacer les pièces
let objectBoard = [
  [
    new Rook("07", "Black"),
    new Knight("17", "Black"),
    new Bishop("27", "Black"),
    new Queen("37", "Black"),
    new King("47", "Black"),
    new Bishop("57", "Black"),
    new Knight("67", "Black"),
    new Rook("77", "Black"),
  ],
  [
    new Pawn("06", "Black"),
    new Pawn("16", "Black"),
    new Pawn("26", "Black"),
    new Pawn("36", "Black"),
    new Pawn("46", "Black"),
    new Pawn("56", "Black"),
    new Pawn("66", "Black"),
    new Pawn("76", "Black"),
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    new Pawn("01", "White"),
    new Pawn("11", "White"),
    new Pawn("21", "White"),
    new Pawn("31", "White"),
    new Pawn("41", "White"),
    new Pawn("51", "White"),
    new Pawn("61", "White"),
    new Pawn("71", "White"),
  ],
  [
    new Rook("00", "White"),
    new Knight("10", "White"),
    new Bishop("20", "White"),
    new Queen("30", "White"),
    new King("40", "White"),
    new Bishop("50", "White"),
    new Knight("60", "White"),
    new Rook("70", "White"),
  ],
];

// permet de créer les divs pour le jeu d'échecs
createBoard();

// permet de mettre les pièces sur l'échequier
completeBoard();
