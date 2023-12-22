import React, { useEffect, useRef } from 'react';

function MatrixBackground({ timeout }) {
    const canvas = useRef();

    useEffect(() => {
        const context = canvas.current.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.current.width = width;
            canvas.current.height = height;
            context.fillStyle = 'rgba(84, 84, 84, 0.97)';
            context.fillRect(0, 0, width, height);
        };

        resizeCanvas(); // Initial sizing

        window.addEventListener('resize', resizeCanvas);

        const columns = Math.floor(width / 15); // Adjust the character density
        const charSize = Math.floor(width / columns);
        const yPositions = Array.from({ length: columns }).fill(0);

        const matrixEffect = () => {
            context.fillStyle = 'rgba(84, 84, 84, 0.04)';
            context.fillRect(0, 0, width, height);
            /** */
            context.fillStyle = 'whitesmoke';
            context.font = `${charSize}px monospace`;

            yPositions.forEach((y, index) => {
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
        <div
            style={{
                background: 'rgba(84, 84, 84, 0.97)',
                overflow: 'hidden',
                position: 'fixed',
                height: '100%',
                width: '100%',
                zIndex: -1,
                left: '0',
                top: '0',
            }}
        >
            <canvas
                ref={canvas}
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    );
}

export default MatrixBackground;
