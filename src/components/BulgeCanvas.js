import React from 'react';
import styled from 'styled-components';

const GradientBackground = styled.div`
  background: linear-gradient(45deg, #6DD5FA, #FF758C);
  // Add any additional styling you need for this container
`;


const BulgeCanvas = () => {
  return (
    <GradientBackground>
        
    <div className="style_works__item__inner__BHJdd">
      <div
        className="style_media__FqPrd style_media--fixed-ratio__l6HhH style_media--has-hover-parent__3TING style_works__item__image__E0hGU"
        data-intersect-id="11523ff8-fda4-42d2-804e-527f21b97a77"
        data-appeared-once="true"
      >
        <div
          className="style_media__spacer__di83X"
          style={{ '--media-aspect-ratio': 'calc(0.8571428571428571)' }}
        ></div>
        <div
          className="style_inner__dPBBM style_inner--appear__B4QKg"
          style={{ transform: 'none' }}
        >
          <div className="style_bulge__BH8xb style_show__NGfON">
            <div
              className="style_bulge__canvas__4fu2D"
              data-intersect-id="fee9f9cb-fa3f-4494-9327-7222c84ad454"
              data-appeared-once="true"
            >
              <canvas
                width="453"
                height="529"
                className="bulge__canvas"
                style={{ width: '453px', height: '529px', position: 'absolute', left: '0px', top: '0px' }}
              ></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="style_works__item__button__xhbQf">
        <div className="jsx-455051979 style_button__o0K5p style_button--icon-only__jdJtp style_button--icon-only--small__g63sM style_button--has-hover-parent__c2KeV">
          <span className="style_button__icon__hXjT2">
            <span className="style_icon__ZHekF">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m10 5 3 3-3 3"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                ></path>
                <path
                  d="M3 8h10"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
              </svg>
            </span>
          </span>
        </div>
      </div>
    </div>
    </GradientBackground>
  );
};

export default BulgeCanvas;