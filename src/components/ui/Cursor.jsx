import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = ({isActive}) => {
    const circle = useRef(null);
    const delayedMouse = useRef({x: 0, y: 0});
    const rafId = useRef();
    const size = isActive ? 200 : 30;

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        delayedMouse.current = {
            x: clientX,
            y: clientY
        };
    };

    const moveCircle = () => {
        gsap.to(circle.current, {
            x: delayedMouse.current.x,
            y: delayedMouse.current.y,
            xPercent: -50,
            yPercent: -50,
            duration: 0.1
        });
    };

    const animate = () => {
        const { x, y } = delayedMouse.current;
        delayedMouse.current.x = lerp(x, delayedMouse.current.x, 0.075);
        delayedMouse.current.y = lerp(y, delayedMouse.current.y, 0.075);
        moveCircle();
        rafId.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        document.body.style.cursor = 'none'; // Hide default cursor
        rafId.current = requestAnimationFrame(animate);
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            document.body.style.cursor = ''; // Restore default cursor
            window.removeEventListener("mousemove", manageMouseMove);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <div className='fixed inset-0 pointer-events-none'>
            <div 
                ref={circle}
                style={{
                    width: size,
                    height: size,
                    backgroundColor: "#f9a8d4",
                    position: 'absolute', 
                    borderRadius: '50%',

                    filter: `opacity(${isActive ? 0.5 : 1}`,
                    transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`
                }}
                className='top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none -z-10 opacity-65' 
            />
        </div>
    );
}

export default Cursor;
