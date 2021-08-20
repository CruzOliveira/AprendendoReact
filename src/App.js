import React from 'react'
import TheRock from './componentes/img/images.jpg'

export default function APP() {
   const canal=()=>{
     return('Curso')
   }
   function curso(){
     return 'Curso2'
   }
   return(
      <section>

        <p>{'Canal'+ canal() }</p>
        <p>{curso()}</p>
        <img src={TheRock}/>

      </section>
   )

}
