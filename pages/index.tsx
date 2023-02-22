import React, {useState} from "react";
import Column from "@/components/Table/Column";

export default function Home() {
  const lea = "https://cdn.shibe.online/shibes/1904b1ae5a087f1bfcff87f5dc34c466daab717b.jpg"
  const baba = "https://www.petlove.com.br/images/breeds/197837/profile/original/shiba-p.jpg?1532540015"
  const linkado =[
    [lea,baba,lea],
    [baba,lea],
    [lea],
    [lea],
    [lea,baba],
    [baba,lea,baba]
  ]
  const [mapa, setMapa] = useState(linkado);
  return (
    <>
     <Column photoLinks={mapa}></Column>
    </>
  )
}
