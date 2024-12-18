import React from 'react'
import ui from "../index.module.css"

const ArrowButtons = ({ handleOnClick = () => {} }) => {
    return (
      <div className={ui.arrowButtons}>
        <button
          type="button"
          title="Anterior"
          onClick={() => {
            handleOnClick(-1);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M14.9282 8.04698H4.47999L10.7336 2.61841C10.8336 2.53091 10.7728 2.36841 10.6407 2.36841H9.06035C8.9907 2.36841 8.92463 2.39341 8.87285 2.43805L2.12463 8.29341C2.06283 8.34698 2.01326 8.41322 1.97929 8.48762C1.94532 8.56203 1.92773 8.64287 1.92773 8.72466C1.92773 8.80645 1.94532 8.88729 1.97929 8.9617C2.01326 9.0361 2.06283 9.10233 2.12463 9.15591L8.91213 15.047C8.93892 15.0702 8.97106 15.0827 9.00499 15.0827H10.6389C10.7711 15.0827 10.8318 14.9184 10.7318 14.8327L4.47999 9.40412H14.9282C15.0068 9.40412 15.0711 9.33984 15.0711 9.26127V8.18984C15.0711 8.11127 15.0068 8.04698 14.9282 8.04698Z"
              fill="black"
              fillOpacity="0.85"
            />
          </svg>
        </button>
        <button
          type="button"
          title="Siguiente"
          onClick={() => {
            handleOnClick(1);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M14.8751 8.29341L8.12871 2.43805C8.07693 2.39341 8.01085 2.36841 7.94121 2.36841H6.36085C6.22871 2.36841 6.168 2.53269 6.268 2.61841L12.5216 8.04698H2.07157C1.993 8.04698 1.92871 8.11127 1.92871 8.18984V9.26127C1.92871 9.33984 1.993 9.40412 2.07157 9.40412H12.5198L6.26621 14.8327C6.16621 14.9202 6.22693 15.0827 6.35907 15.0827H7.993C8.02693 15.0827 8.06085 15.0702 8.08585 15.047L14.8751 9.15769C14.937 9.10394 14.9865 9.03754 15.0205 8.96299C15.0545 8.88844 15.072 8.80747 15.072 8.72555C15.072 8.64363 15.0545 8.56266 15.0205 8.48811C14.9865 8.41356 14.937 8.34717 14.8751 8.29341Z"
              fill="black"
              fillOpacity="0.85"
            />
          </svg>
        </button>
      </div>
    );
  };

export default ArrowButtons