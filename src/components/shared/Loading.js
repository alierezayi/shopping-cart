import React from 'react'

// Components
import spinner from "../../assets/Spinner-1s-200px.gif"

// Styles
import styles from "./Loading.module.css"


const Loading = () => {
  return (
    <div className={styles.container}>
        <img src={spinner} alt="spinner" />
        <h1>Loading ...</h1>
    </div>
  )
}

export default Loading