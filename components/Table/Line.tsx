import React from "react";
import Card from "./Card";
import styles from './styles.module.css'


export default function Line({photoLinks} : {photoLinks: string[]}){
    return (
        <div className={styles.lineContainer}>
            {photoLinks.map(
                (item,key) => (
                    <div key={key} >
                        <Card link={item}></Card>
                    </div>
                )
            )}
        </div>
    )
}