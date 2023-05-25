"use client";

import React, { FC, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber'
import * as THREE from "three"
import { OrbitControls, Stars, useGLTF  } from '@react-three/drei'

import Label from "./Label";
import IconField from "./IconField";
import { useCountdown } from "@/hooks/useCountdown";

export interface RollingEarthProps {
    mapping?: string;
    className?: string;
}

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}


const deg2rad = (degrees:number) => degrees * (Math.PI / 180);

const Sphere: FC = () => {
    const timer = useCountdown();

    const [landTexture, setLandTexture ] = useState<THREE.Texture>();
    

    useEffect (()=>{
        const texture = new THREE.TextureLoader().load('/world/texture/world_land_map-invert.jpg')
        texture.flipY = false
        setLandTexture(texture)
    }, [])

    return (
        <>
            <mesh scale={new THREE.Vector3(1.5, 1.5, 1.5)} rotation-y={deg2rad(timer)}>
                <sphereBufferGeometry />
                <meshStandardMaterial
                    map={landTexture}
                    color= {0xffffff}
                    roughness= {0}
                />
            </mesh>
        </>
    );
};

const Earth: FC<RollingEarthProps> = ({
    className, 
    mapping, 
}) => {

    // Parameters
    const params = {
        glob: {
            lineWidth: 0.008,
            rotateY: 0.05,
            rotateYMultiplier: 1 
        }
    }

    return (        
        <div className={`${className}`}>
            <Canvas 
                camera={{
                    fov: 45, 
                }}
                style={{
                    width: "800px",
                    height: "800px",
                }}
            >
                <perspectiveCamera>
                    <Sphere />
                </perspectiveCamera>
                <ambientLight color={"white"} position={new THREE.Vector3(2,0,0)} />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Earth;
