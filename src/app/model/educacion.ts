export class Educacion {
	id? : number;
	nombreEdu : string;
	descripcionEdu : string;
	fechaEdu : string;
	linkEdu : string;

	constructor(nombreEdu: string, descripcionEdu: string, fechaEdu: string, linkEdu: string){
		this.nombreEdu = nombreEdu;
		this.descripcionEdu = descripcionEdu;
		this.fechaEdu = fechaEdu;
		this.linkEdu = linkEdu;
	}
	
}
