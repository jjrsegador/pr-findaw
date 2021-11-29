export interface Contacto {
  id: string;
  nombre: string;
  apellidos: string;
  organizacion?: string;
  mail: string;
  telefono: number;
  infoadic?: string;
  fechaCreacion: Date;
}
