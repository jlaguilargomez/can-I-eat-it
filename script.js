var arrFood=[
	{
	id:"melocoton",
	tipo : "fruta",
	vegetariana : true,
	vegana: true,
	mediterranea: true,
	ricaEnFibra: false,
	sinGluten: true,
	},
	{
  id:"ajo",
	tipo : "raiz",
	vegetariana : true,
	vegana: true,
	mediterranea: true,
	ricaEnFibra: false,
	sinGluten: true,
	},
	{
  id:"calabacin",
	tipo : "verdura",
	vegetariana : true,
	vegana: true,
	mediterranea: true,
	ricaEnFibra: false,
	sinGluten: true,
	},
	{
  id:"pollo",
	tipo : "carne",
	vegetariana : false,
	vegana: false,
	mediterranea: true,
	ricaEnFibra: false,
	sinGluten: true,
	},
	{
  id:"judia verde",
	tipo : "verdura",
	vegetariana : true,
	vegana: true,
	mediterranea: true,
	ricaEnFibra: true,
	sinGluten: true,
	},
	{
  id:"brocoli",
	tipo : "verdura",
	vegetariana : true,
	vegana: true,
	mediterranea: true,
	ricaEnFibra: true,
	sinGluten: true,
	},
	{
  id:"patata",
	tipo : "raiz",
	vegetariana : true,
	vegana: true,
	mediterranea: true,
	ricaEnFibra: true,
	sinGluten: true,
  }
];


//Execute program

const executeProgram=()=>{

    //Return an array (userSelection) with [user name , diet type, food type]. RETURN: array
    const getUserInput=()=>{
        let userName=document.getElementById('user-name');
        let dietType=document.getElementById('diet');
        let foodType=document.getElementById('food');  
        let userSelection=[userName.value,dietType.value,foodType.value];
        return userSelection;
    };

    //Get an Array of objects and an Array of strings at look for the third element in the first array into de second one. RETURN: true-false
    const analyze=(arrObj,arrStr)=>{
        let selectObj=arrObj.find(x => x.id==arrStr[2]);
        return selectObj[arrStr[1]];
    };


    if(analyze(arrFood,getUserInput())){
        document.getElementById('answer').innerHTML = (`Sí ${getUserInput()[0]}, con tu dieta ${getUserInput()[1]} puedes comer ${getUserInput()[2]} sin problema`);
        document.getElementById('img').src='media/happy.svg'
    }else{
        document.getElementById('answer').innerHTML = (`¡No, ${getUserInput()[0]}!, ¡no comas ${getUserInput()[2]} si sigues una dieta ${getUserInput()[1]}!`);
        document.getElementById('img').src='media/tomb.svg'
    }
    // //Return the "string" with the result. RETURN: string
    // const solveQuestion=(condition)=>{
    //     if(condition){
    //         console.log('Piña');
    //     }else{
    //         console.log('Manzana')
    //     };

    // };

};






// function getUserInput(){
//     var userSelection=[];
//     var dietType=document.getElementById('diet');
//     var foodType=document.getElementById('food');  
//     userSelection=[dietType.value,foodType.value];
//     document.getElementById('img').src = "media/tomb.svg";
//     console.log(userSelection);
// }


// const esValida=(obj,dieta)=>{
//   if(obj[dieta]==true){
//     console.log(`Sí que puedes comer ${obj.id}`)
//   }else{console.log(`No puedes comer ${obj.id}`)}
// };


// let dietaSelect='ricaEnFibra';

// alimentos.filter(esValida(dietaSelect));




