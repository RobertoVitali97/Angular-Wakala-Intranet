export interface News {
  ID: number;
  Data: string;
  Testo: string;
  Titolo: string;
  Tipologia: Tipologia;
  Altro: string;
}

interface Tipologia {
  Descrizione: string;
  ID: number;
  Icon: string;
  IconCssClass: string;
}
