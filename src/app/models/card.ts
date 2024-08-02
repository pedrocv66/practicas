/**
 * modelo = es uanplamtilla que representa a un tipo de objeto,  compartiendo 
 * caracteristicas generales y similares 
 * 
 * Instancias = copia de la clase o modelo del objeto, que tenia definido sus propias caracteristicas 
 * 
 * ej: Persona -> trabajador, estudinte
 * ej: animla -> perro ,gato caballo
 * 
 * interfaces (concepto de lenguaje TyperScript)
 * modelo/ clase (concepto de programacion orientada a objetos) 
 */

export interface Card {
    idCard: string; //alfanumerico, numerico, booleano
    titulo: string;
    descripcion: string;
    imagen: string;
    alt: string;
}

