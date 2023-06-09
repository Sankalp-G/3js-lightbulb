/*1
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 bulb.glb --transform --simplify
*/

import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

const glassMaterial = new THREE.MeshPhysicalMaterial({
  roughness: 0.05,
  transmission: 0.9,
  thickness: 1.5,
  metalness: 0.1,
  depthWrite: false
});

const wireMaterial = new THREE.MeshBasicMaterial({
  color: '#111111'
})

const emissionMaterial = new THREE.MeshLambertMaterial({
  color: 'yellow',
  emissive: '#f9f06b',
  emissiveIntensity: 10,
})

export default function Model(props) {
  const { nodes, materials } = useGLTF('/3js-lightbulb/bulb-transformed.glb')

  return (
    <group {...props} dispose={null}>
      <group position={[-0.51, -0.59, 0.04]} rotation={[0.06, 0.29, -0.36]}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials.metal} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={wireMaterial} />
      </group>
      <mesh geometry={nodes.insides.geometry} material={glassMaterial} position={[-0.17, 0.34, 0]} rotation={[0.06, 0.29, -0.36]} scale={[0.13, 0.15, 0.13]} depth renderOrder={1} />
      <mesh geometry={nodes.wire_2.geometry} material={wireMaterial} position={[0.07, 0.69, -0.05]} rotation={[-0.86, -1.12, -2.44]} scale={0.59} />
      <mesh geometry={nodes.wire_1.geometry} material={wireMaterial} position={[-0.15, 0.75, 0.02]} rotation={[-0.86, -1.12, -2.44]} scale={0.59} />
      <mesh geometry={nodes.filament.geometry} material={emissionMaterial} position={[0.01, 2.03, 0.05]} rotation={[0.06, 0.29, -1.93]} scale={1.11} />
      <mesh geometry={nodes.filament_wire.geometry} material={wireMaterial} position={[0.31, 1.79, -0.05]} rotation={[-0.86, -1.12, -2.44]} scale={0.24} />
      <mesh geometry={nodes.bulb.geometry} material={glassMaterial} position={[0, 0.83, -0.02]} rotation={[0.06, 0.29, -0.36]} scale={0.6} />
    </group>
  )
}

useGLTF.preload('/3js-lightbulb/bulb-transformed.glb')
