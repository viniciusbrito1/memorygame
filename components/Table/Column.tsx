import React from "react";
import Line from "./Line";
import styles from './styles.module.css'

type PhotoType = {
    link: string;
    flippedState: any;
}

export default function Column({photoLinks} : {photoLinks: string[][]}){
    return (
        <div className={styles.container}>
            {photoLinks.map(
                (vetor,key) => (
                    <div key={key}>
                        <Line photoLinks={vetor}></Line>
                    </div>
                )
            )}
        </div>
    )
}