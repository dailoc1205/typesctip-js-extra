import { Person } from "./Person";

class Student extends Person{
// thuoc tinh mo rong
private classVti_odd: string;
private testScore_JavaAdvanced: number;


// xay dung ham contructor
constructor(id: number, name: string, address: string,classVti_odd: string,testScore_JavaAdvanced: number) {
    super(id,name,address);
    this.classVti_odd = classVti_odd;
    this.testScore_JavaAdvanced = testScore_JavaAdvanced;
}

   
	public get $classVti_odd(): string {
		return this.classVti_odd;
	}

   
	public get $testScore_JavaAdvanced(): number {
		return this.testScore_JavaAdvanced;
	}

   
	public set $classVti_odd(value: string) {
		this.classVti_odd = value;
	}

  
	public set $testScore_JavaAdvanced(value: number) {
		this.testScore_JavaAdvanced = value;
	}

};

export { Student };