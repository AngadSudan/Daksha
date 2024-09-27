import gsap from 'gsap'
import { useRef, useEffect } from 'react'

export const UseSlidein=()=>{
    const SlideinRef= useRef();

    useEffect(()=>{
        if(SlideinRef.current){
            gsap.set(SlideinRef.current, { x: '-300%', opacity: 0 });

            gsap.to(SlideinRef.current, {
                x: '0%', // Move to original position
                opacity: 1,
                duration: 1,
                delay: 0.3,
                stagger:2,
                ease: 'power2.out',
        })
            // alert("animation triggered")
        }
    },[])
    return SlideinRef;
}

//  created an exported an animation hook . Created a reference of it using useref
//  then used the useEffect hook to animate the element when it mounts

export const UseSlideChild=()=>{
    const SlideinChild= useRef(null);

    useEffect(()=>{
        const children = SlideinChild.current.children;

            gsap.set(children, { x: '-300%', opacity: 0 }); // Set initial styles for children

            gsap.to(children, {
                x: '0%',
                opacity: 1,
                duration: 1,
                stagger: .1, // Stagger each child's animation by 0.2 seconds
                ease: 'power2.out',
            });
    },[])
    return SlideinChild;
}
export const UseFadein=()=>{
    const Fadein= useRef(null);

    useEffect(()=>{
        const children = Fadein.current;

            gsap.set(children,{opacity:0})
            gsap.to(children, {
                opacity: 1,
                duration: 2,
                delay:1,
                ease: 'power3.out',
            });
    },[])
    return Fadein;
}
