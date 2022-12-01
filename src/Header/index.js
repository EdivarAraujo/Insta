import React from "react";
import * as C from './styled'

export default function Header(){
 

  return (
    <C.ContainerHeader>
      <C.Buttao>
        <C.ImageLogo
         source={require('../assets/img/logo.png')}
         
        />
      </C.Buttao>
      <C.Buttao>
        <C.ImageSend
         source={require('../assets/img/send.png')}
        
        />
      </C.Buttao>
    </C.ContainerHeader>
  )
}