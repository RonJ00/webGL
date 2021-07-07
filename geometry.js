/*============= Creating a canvas ======================*/
var canvas = document.getElementById('my_Canvas');
gl = canvas.getContext('experimental-webgl');

/*========== Defining and storing the geometry ==========*/

var a = 1;
var vertices = [
    -a,-a,-a, a,-a,-a, a, a,-a, -a, a,-a,  //belakang
    -a,-a, a, a,-a, a, a, a, a, -a, a, a,  // depan
    -a,-a,-a, -a, a,-a, -a, a, a, -a,-a, a, //kiri
    a,-a,-a, a, a,-a, a, a, a, a,-a, a,     // kanan
    a, a, a,  -a, a+a, 0,   a, a+a, 0,   a, a, -a,
    -a, a, -a,  -a, a+a, 0,   a, a+a, 0,   a, a, -a,    // atas de
    a, a, a,  a, a+a, 0,   -a, a+a, 0,   -a, a, a,    // atas be
];

var colors = [
    1,3,7, 1,3,7, 5,3,7, 5,3,7,
    1,0,0, 1,5,3, 1,1,1, 1,1,3,
    0,5,1, 0,1,1, 0,0,1, 0,0,1,
    1,2,0, 1,0,0, 1,0,0, 1,0,0,
    1,1,0, 1,1,0, 1,1,0, 1,1,0,
    1,1,0, 0,1,0, 1,1,0, 0,1,1 ,
    1,0,0, 4,0,0, 0,5,0, 0,2,0 ,
    5,0,0, 5,1,0, 5,0,0, 5,0,0
];

var indices = [
  0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7,
  8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15,
  16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23,
  20, 22, 23, 24, 25, 26, 26, 27, 20, 10, 24, 26
];

// Create and store data into vertex buffer
var vertex_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

// Create and store data into color buffer
var color_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

// Create and store data into index buffer
var index_buffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);