function validar(){
    var nombre, telefono,correo, expresion;
    nombre = document.getElementById("nombre").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("email").value;

    expresion=/\w+@\w+\.+[a-z]/;
    if(nombre===""||telefono === ""||correo===""){
        alert("Debe completar este campo");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre es muy largo");
    }
    else if (correo.length>50){
        alert("El correo es muy largo");
    }
    else if(isNaN(telefono)){
        alert("El teléfono ingresado no es un número");
        return false;
    }
    else if (!expresion.test(correo)) {
        alert("El correo no es válido");
        return false;
    }


    
}