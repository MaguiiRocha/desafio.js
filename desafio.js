//JUGADORES:
//No modificar los valores de estos objetos hasta el final del desafio

const  jugadorUno  =  {
    nombre : "Marce" ,
    habilidades : {
      ataque : 70 ,
      velocidad : 30 ,
      vida : 60 ,
      magia : 120 ,
    } ,
    articulos : [ "espada" ,  "escudo" ,  "varita" ] ,
  } ;
  
  const  jugadorDos  =  {
    nombre : "Flor" ,
    habilidades : {
      ataque : 73 ,
      velocidad : 30 ,
      vida : 80 ,
      magia : 100 ,
    } ,
    articulos : [ "escudo" ,  "varita" ,  "capa" , "pocion" ] ,
  } ;
 
  //PUNTOS INICIALES DEL JUEGO:
  var  contadorPuntosJug1  =  0 ;
  var  contadorPuntosJug2  =  0 ;
  


  //------------------------------------------------ -----------------------//
   
  //La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
  // contador. Según la condición que se cumpla, se irán sumando los puntos.
  
  //EJEMPLO ESTRUCTURA DE COMPARACION
  //if  ( habilidadACompararJugador1  >  habilidadACompararJugador2 )  {
  //  contadorPuntosJug1  =  contadorPuntosJug1  +  1 ;
  //}  else  if  ( condiciónCasoContrario )  {
  //  contadorPuntosJug2 ++ ;
  //}  más  {
  //  contadorPuntosJug1 ++ ;
  // contadorPuntosJug2 ++ ;
  //}
  
  // COMPARACION POR ATAQUE 
    if  ( jugadorUno.habilidades.ataque  >  jugadorDos.habilidades.ataque )  {
      contadorPuntosJug1  =  contadorPuntosJug1  + 1 ;
    }  else if ( jugadorUno.habilidades.ataque  <  jugadorDos.habilidades.ataque ) 
    {contadorPuntosJug2 ++ ;
    } else 
     {contadorPuntosJug1 ++ ;
        contadorPuntosJug2 ++ ;
     };
 //COMPARACIÓN POR NIVEL DE VELOCIDAD: 
    if  ( jugadorUno.habilidades.velocidad  >  jugadorDos.habilidades.velocidad )  {
      contadorPuntosJug1  =  contadorPuntosJug1  +1 ;
    }  else if ( jugadorUno.habilidades.velocidad  <  jugadorDos.habilidades.velocidad ) 
    {contadorPuntosJug2 ++ ;
    } else
     {contadorPuntosJug1 ++ ;
        contadorPuntosJug2 ++ ;
      };
    //COMPARACIÓN POR NIVEL DE VIDA:
    if  ( jugadorUno.habilidades.vida  >  jugadorDos.habilidades.vida )  {
      contadorPuntosJug1  =  contadorPuntosJug1  +1 ;
    }  else if ( jugadorUno.habilidades.vida  <  jugadorDos.habilidades.vida ) 
    {contadorPuntosJug2 ++ ;
    } else
     {contadorPuntosJug1 +1, contadorPuntosJug2 +1 ;
      };
  //COMPARACIÓN POR MAGIA:
  if  ( jugadorUno.habilidades.magia  >  jugadorDos.habilidades.magia )  {
    contadorPuntosJug1  =  contadorPuntosJug1  +1 ;
  }  else if ( jugadorUno.habilidades.magia  <  jugadorDos.habilidades.magia ) 
  {contadorPuntosJug2 ++ ;
  } else
   {contadorPuntosJug1 +1, contadorPuntosJug2 +1 ;
  };
  //COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
  
  if(jugadorUno.articulos.length>jugadorDos.articulos.length)  {
    contadorPuntosJug1  =  contadorPuntosJug1  +1 ;
  }  else if ( jugadorUno.articulos.length <  jugadorDos.articulos.length ) 
  {contadorPuntosJug2 ++ ;
  } else
   {contadorPuntosJug1 +1, contadorPuntosJug2 +1 ;
  };

  //------------------------------------------------ -----------------------//
  //DEFINIENDO EL GANADOR DE LA PARTIDA
 
  //Ganador:
  var  ganador = resultado;

  if(contadorPuntosJug1>contadorPuntosJug2)  {
    ganador  =  jugadorUno.nombre
  } else if  ( contadorPuntosJug1 < contadorPuntosJug2 ) 
  {ganador = jugadorDos.nombre
  }else
  {
    ganador = jugadorDos.nombre + " y " + jugadorUno.nombre
  };
 
  //ejemplo:
  var resultado = {
  [jugadorUno.nombre]: contadorPuntosJug1,
  [jugadorDos.nombre]: contadorPuntosJug2,
  ganador : ganador
  };


  console.log(resultado);
