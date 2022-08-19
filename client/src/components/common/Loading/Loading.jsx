import React from 'react'
import {Rings} from "react-loader-spinner"
import "./loading.scss";


const Loading = () => {
  return (
    <div className="loading-container">
      <Rings
        height="200"
        width="200"
        radius="6"
        color="#3fe0d0"
        wrapperStyle={{}}
        wrapperClass="loading-ring"
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
}

export default Loading