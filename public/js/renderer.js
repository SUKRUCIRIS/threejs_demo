import * as threejs from "three";

const camera = new threejs.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 2000 );
camera.position.z = 1;

const scene = new threejs.Scene();

const geometry = new threejs.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new threejs.MeshNormalMaterial();

const mesh = new threejs.Mesh( geometry, material );
scene.add( mesh );
const light = new threejs.AmbientLight( 0x404040 );
scene.add( light );

const renderer = new threejs.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

function animation(time) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );
}

window.onresize =()=>{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
};