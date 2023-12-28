import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

// Helper function to pick a random element from an array
const pickRandom = (array) => array[Math.floor(Math.random() * array.length)];

const MatrixBackgroundWrapper = styled.div`
  background: rgba(0, 0, 0, 0.97);
  overflow: hidden;
  position: relative; // Changed to relative
  height: 50vh; // Inherit height from parent
  z-index: 1;
  border-radius: 8px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://res.cloudinary.com/doadukwfh/image/upload/v1703787082/DALL_E_2023-12-28_13.03.46_-_Imagine_a_more_muscular_robot_with_defined_powerful-looking_limbs_sitting_at_a_desk._This_robot_is_focused_on_writing_code_on_a_large_advanced_mon_puynif.png'); // Replace with your image URL
    background-size: cover;
    background-position: center;
    opacity: 0.7; // Adjust for desired translucency
    z-index: 2;
  }

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

function MatrixBackground({ timeout }) {
    const canvas = useRef();

    useEffect(() => {
        const brightColors = ['#F0A', '#0FA', '#AF0', '#A0F']; 
        const context = canvas.current.getContext('2d');
        let width = canvas.current.clientWidth;
        let height = canvas.current.clientHeight;

        const resizeCanvas = () => {
            width = canvas.current.clientWidth;
            height = canvas.current.clientHeight;
            canvas.current.width = width;
            canvas.current.height = height;
            context.fillStyle = 'rgba(0, 0, 0, 0.97)';
            context.fillRect(0, 0, width, height);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas(); // Initial sizing

        const columns = Math.floor(width / 15); // Adjust the character density
        const charSize = Math.floor(width / columns);
        const yPositions = Array.from({ length: columns }).fill(0);

        const matrixEffect = () => {
            context.fillStyle = 'rgba(0, 0, 0, 0.04)';
            context.fillRect(0, 0, width, height);
            
            yPositions.forEach((y, index) => {
                context.fillStyle = pickRandom(brightColors);
                context.font = `${charSize}px monospace`;

                const text = String.fromCharCode(Math.random() * 128);
                const x = index * charSize;
                context.fillText(text, x, y);

                if (y > height + Math.random() * 100) {
                    yPositions[index] = 0;
                } else {
                    yPositions[index] = y + charSize;
                }
            });
        };

        const interval = setInterval(matrixEffect, 70);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <MatrixBackgroundWrapper>
            <canvas ref={canvas} />
        </MatrixBackgroundWrapper>
    );
}

export default MatrixBackground;