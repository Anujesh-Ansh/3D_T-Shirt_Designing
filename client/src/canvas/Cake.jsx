import React from 'react'
import {easing} from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'

import state from '../store'


const Cake = () => {

    const snap =useSnapshot(state);

    const {nodes, materials} = useGLTF('/cake_baked.glb');

    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);

    useFrame((state,delta) => easing.dampC(materials.lambert1.color, snap.fcolor, 0.25, delta)); {/* Add snap.color on place of 'cyan' */ }

    const stateString = JSON.stringify(snap);

    return (
        <group key={stateString}>
            <mesh castShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-roughness={1} dispose={null} >
                {snap.isFullTexture && (
                    <Decal position={[0,0,0]} rotation={[0,0,0]} scale={1} map={fullTexture}/>
                )}
                {snap.isLogoTexture && (
                    <Decal position={[0,0.04,0.15]} rotation={[0,0,0]} scale={0.15} map={logoTexture} mapAnisotropy={16} depthTest={false} depthWrite={true} />
                )}
            </mesh> {/* just find the nameof the node and the material for the cake */}
        </group>
    )
}

export default Cake


//<mesh castShadow geometry={nodes.imagetostl_mesh0.geometry} material={materials.mat0} material-roughness={1} dispose={null} >