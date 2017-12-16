// framebuffer.js (c) July 2017 by alex
// framebuffer shader program

var frame_VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'uniform mat4 u_MvpMatrix;\n' +
    'varying float v_Depth;\n' +
    'void main() {\n' +
    '  vec4 position = u_MvpMatrix * a_Position;\n' +
    //'  if(position.w>0.0 && position.z< -position.w){\n' +
    //'    position.z= -position.w;\n' +
    //'  }\n' +
    '  gl_Position = position;\n' +
    // Calculate the vertex position in the world coordinate
    '  v_Depth = (position.z / position.w + 1.0 ) / 2.0;\n' +
    '}\n';

var frame_FSHADER_SOURCE =
    '#ifdef GL_ES\n' +
    'precision mediump float;\n' +
    '#endif\n' +
    'uniform int u_FaceID;\n' +
    'varying float v_Depth;\n' +
    'void main() {\n' +
    '  gl_FragColor = vec4(float( mod( float(u_FaceID),200.0) )/255.0,float(u_FaceID/200)/255.0, 0.0, 1.0);\n' +
    '}\n';

function initFramebufferObject(gl,program) {
    var framebuffer, colorBuffer, depthBuffer;
    
    program.frame = initShaders(gl,frame_VSHADER_SOURCE,frame_FSHADER_SOURCE);
    if(!program.frame){
	console.log('Failed to intialize frame shaders.');
	return 0;
    }

    program.frame.a_Position  = gl.getAttribLocation(program.frame, 'a_Position');
    program.frame.u_MvpMatrix = gl.getUniformLocation(program.frame, 'u_MvpMatrix');
    program.frame.u_FaceID    = gl.getUniformLocation(program.frame, 'u_FaceID');

  if(program.frame.a_Position<0 || !program.frame.u_MvpMatrix || !program.frame.u_FaceID){
      console.log('Failed to get the storage location of variables from frame shader');
      return 0;
  }

  // Define the error handling function
  var error = function() {
    if (program.framebuffer) gl.deleteFramebuffer(framebuffer);
    if (colorBuffer) gl.deleteTexture(texture);
    if (depthBuffer) gl.deleteRenderbuffer(depthBuffer);
    return 0;
  }

  // Create a frame buffer object (FBO)
  program.framebuffer = gl.createFramebuffer();
  if (!program.framebuffer) {
    console.log('Failed to create frame buffer object');
    return error();
  }

  colorBuffer = gl.createTexture();
  if (!colorBuffer) {
    console.log('Failed to create color buffer object');
    return error();
  }
  gl.bindTexture(gl.TEXTURE_2D, colorBuffer); // Bind the object to target
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.canvas.width, gl.canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  program.framebuffer.texture = colorBuffer; // Store the texture object

  // Create a renderbuffer object and Set its size and parameters
  depthBuffer = gl.createRenderbuffer(); // Create a renderbuffer object
  if (!depthBuffer) {
    console.log('Failed to c0reate renderbuffer object');
    return error();
  }
  gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer); // Bind the object to target
  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, gl.canvas.width, gl.canvas.height);

  // Attach the texture and the renderbuffer object to the FBO
  gl.bindFramebuffer(gl.FRAMEBUFFER, program.framebuffer);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, colorBuffer, 0);
  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);

  // Check if FBO is configured correctly
  var e = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
  if (gl.FRAMEBUFFER_COMPLETE !== e) {
    console.log('Frame buffer object is incomplete: ' + e.toString());
    return error();
  }
  // Unbind the buffer object
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.bindTexture(gl.TEXTURE_2D, null);
  gl.bindRenderbuffer(gl.RENDERBUFFER, null);

  return 1;
}

function drawFrame(gl,program,geometry){
    var i;
    var FSIZE = geometry.surface.BYTES_PER_ELEMENT;
    var normalMatrix = new Matrix4(); // Transformation matrix for normals
    var mvpMatrix=new Matrix4();

    gl.useProgram(program.frame);
    gl.program = program.frame;

    //gl.bindFramebuffer(gl.FRAMEBUFFER,null);
    gl.bindFramebuffer(gl.FRAMEBUFFER,program.framebuffer);
    // Caliculate The model view projection matrix and pass it to u_MvpMatrix
    gl.clearColor(1.0, 1.0, 1.0, 1.0); // Set clear color (the color is slightly changed)
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);  // Clear FBO

    gl.uniformMatrix4fv(program.frame.u_MvpMatrix, false, program.g_mvpMatrix.elements);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, program.main.surfBuffer);
    gl.vertexAttribPointer(program.frame.a_Position, 3, gl.FLOAT, false, FSIZE*6, 0);
    // Enable the assignment to a_attribute variable
    gl.enableVertexAttribArray(program.frame.a_Position);

    for(i=0;i<geometry.faceNum;i++){
	if(program.visible[i]){
	    gl.uniform1i(program.frame.u_FaceID,i+1);
	    gl.drawArrays(gl.TRIANGLE_STRIP, geometry.surfOffset[i], geometry.surfCount[i]);
	}
    }
    drawNavi(gl,program,1);
}