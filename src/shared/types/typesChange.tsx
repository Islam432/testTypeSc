export interface Param {
    name: string;
    type: 'text' | 'number' | 'select';
  }
  
 export interface Model {
    params: Param[];
  }