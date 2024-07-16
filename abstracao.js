class Naruto {
    constructor(nome, habitat) { 
      this.nome = nome; 
      this.habitat = habitat; 
    }
  
    kurama() { 
      console.log(`${this.nome}  de 9 nove cauldas da vila da folha.`); 
    }
  
    shukkaku() { 
      console.log(`${this.nome} domina a areia do deserto e o vento.`); 
    }
  }
  
  
  class Mamifero extends Naruto { 
    constructor(nome, vila_chuva, tipoNijas) { 
      super(nome, vila_chuva); 
      this.tipoNijas = tipoNijas; 
    }
  
    akatsuki() { 
      console.log(`${this.nome} ninjas renegaos de cada vila conhecida.`); 
    }
  }
  
  class sob_areia extends Naruto {
    constructor(nome, deserto, tipoAreia) { 
      super(nome, deserto); 
      this.tipoAreia = tipoAreia;
    }
  
    areia() {
      console.log(`${this.nome} uma caulda.`); 
    }
  }
  const raposa_demonio = new Mamifero("raposa", "vila da folha", "Vermelho"); 
  const demonio_Areia = new sob_areia("shukkaku", "Areia do deserto", "demonio"); 
  const ninjas = new Mamifero("akatsuki", "organizaçao criminosa", "nijas patifes"); 
  
  
  raposa_demonio.kurama(); 
  demonio_Areia.shukkaku(); 
  ninjas.akatsuki(); 
  demonio_Areia.areia(); 
  