import React from "react";
import * as C from './styled'

export default function List(props){
   
  function carregaIcone (likeada){
    return likeada ? require('../assets/img/likeada.png') : 
     require('../assets/img/like.png');
  }
  
  function mostrarLikes(likers){
    if(likers == 0){
      return;
    }
     return(
      <C.Likes>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</C.Likes>
     )
  }
  return(
    <C.Container>
      <C.InstaPerfil>
        <C.ImagemPerfil
          source={{uri:props.data.imgperfil}}
        />
        <C.NomeUsuario>{props.data.nome}</C.NomeUsuario>
      </C.InstaPerfil>
      <C.ImagemPublicacao
        resizeMode="cover"
        source={{uri: props.data.imgPublicacao}}
       />
       <C.ConteinerAreaBtn>
        <C.BtnLike>
          <C.ImagemToast
           source={carregaIcone(props.data.likeada)}
          />
        </C.BtnLike>

        <C.BtnComment>
          <C.ImagemToast
           source={require('../assets/img/comment.png')}
          />
        </C.BtnComment>

        <C.BtnSend>
          <C.ImagemToast
           source={require('../assets/img/send.png')}
          />
        </C.BtnSend>
       </C.ConteinerAreaBtn>
     
        {mostrarLikes(props.data.likers)}
  
       <C.NomePessoa>{props.data.nome}</C.NomePessoa>
       <C.Descricao>{props.data.descricao}</C.Descricao>
    </C.Container>
  )
}