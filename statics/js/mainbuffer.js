// mainbuffer.js (c) July 2017 by alex
// mainbuffer shader program

var main_VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec4 a_Normal;\n' +
    'uniform mat4 u_MvpMatrix;\n' +
    'uniform mat4 u_ModelMatrix;\n' +    // Model matrix
    'uniform mat4 u_NormalMatrix;\n' +   // Transformation matrix of the normal
    'uniform int u_IsLine;\n' +
    'varying vec3 v_Normal;\n' +
    'varying vec3 v_Position;\n' +
    'varying float isLine;\n' +
    'void main() {\n' +
    '  isLine = float(u_IsLine);\n' +
    '  vec4 position = u_MvpMatrix * a_Position;\n' +
    //'  if(position.w>0.0 && position.z< -position.w){\n' +
    //'    position.z= -position.w;\n' +
    //'  }\n' +
    '  gl_Position = position;\n' +
    // Calculate the vertex position in the world coordinate
    '  if(isLine==0.0){\n' +
    '    v_Position = vec3(u_ModelMatrix * a_Position);\n' +
    '    v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));\n' +
    '  }\n' +
    '}\n';

// Fragment shader program
var main_FSHADER_SOURCE =
    '#ifdef GL_ES\n' +
    'precision mediump float;\n' +
    '#endif\n' +
    'uniform vec3 u_LightColor;\n' +     // Light color
    'uniform vec3 u_LightPosition;\n' +  // Position of the light source
    'uniform vec3 u_AmbientLight;\n' +   // Ambient light color
    'uniform int u_PickedFace;\n' + // Surface number of selected face
    'uniform int u_CoveredFace;\n' +
    'varying float isLine;\n' +
    'varying vec3 v_Normal;\n' +
    'varying vec3 v_Position;\n' +
    'void main() {\n' +
    '  vec4 color;\n' +
    '  int mark = u_PickedFace + u_CoveredFace ;\n' +
    '  if(isLine==1.0){\n' +
    '    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n' +
    '    return;\n' +
    '  }\n' +
    '  else if(mark==0){\n' +
    '    color = vec4(0.620, 0.702, 0.714, 1.0);\n' +   // no corvered and no picked (158,179,182)
    '  }\n' +
    '  else if(mark==1 && u_PickedFace==1){\n' +
    '    color = vec4(1.0, 0.0, 0.0, 1.0);\n' +  // picked only (255,0,0)
    '  }\n' +
    '  else if(mark==1 && u_CoveredFace==1){\n' +
    '    color = vec4(0.325, 0.408, 0.419, 1.0);\n' +  // covered only (83,104,107)
    '  }\n' +
    '  else {\n' +
    '    color = vec4(0.722, 0.0, 0.047, 1.0);\n' +  // corvered and picked  (184,0,12)
    '  }\n' +
    '  vec3 normal = normalize(v_Normal);\n' +      // Normalize the normal because it is interpolated and not 1.0 in length any more
    '  vec3 lightDirection = normalize(u_LightPosition - v_Position);\n' +      // Calculate the light direction and make its length 1.
    '  float nDotL = max(dot(lightDirection, normal), 0.0);\n' +    // The dot product of the light direction and the orientation of a surface (the normal)
    '  vec3 diffuse = u_LightColor * color.rgb * nDotL;\n' +     // Calculate the final color from diffuse reflection and ambient reflection
    '  vec3 ambient = u_AmbientLight * color.rgb;\n' +
    '  gl_FragColor = vec4(diffuse + ambient, color.a);\n' +
    '}\n';

function initMain(gl,program) {
    program.main = initShaders(gl, main_VSHADER_SOURCE, main_FSHADER_SOURCE);
    // Initialize shaders
    if (!program.main) {
	console.log('Failed to initialize main shaders.');
	return false;
    }
    // Get the storage locations of uniform variables
    program.main.a_Position      = gl.getAttribLocation(program.main, 'a_Position');
    program.main.a_Normal        = gl.getAttribLocation(program.main, 'a_Normal');
    program.main.u_ModelMatrix   = gl.getUniformLocation(program.main, 'u_ModelMatrix');
    program.main.u_MvpMatrix     = gl.getUniformLocation(program.main, 'u_MvpMatrix');
    program.main.u_NormalMatrix  = gl.getUniformLocation(program.main, 'u_NormalMatrix');
    program.main.u_LightColor    = gl.getUniformLocation(program.main, 'u_LightColor');
    program.main.u_LightPosition = gl.getUniformLocation(program.main, 'u_LightPosition');
    program.main.u_AmbientLight  = gl.getUniformLocation(program.main, 'u_AmbientLight');
    program.main.u_PickedFace    = gl.getUniformLocation(program.main, 'u_PickedFace');
    program.main.u_CoveredFace   = gl.getUniformLocation(program.main, 'u_CoveredFace');
    program.main.u_IsLine        = gl.getUniformLocation(program.main, 'u_IsLine');

    if(program.main.a_Position<0 || !program.main.a_Normal<0 || !program.main.u_ModelMatrix || !program.main.u_MvpMatrix || !program.main.u_NormalMatrix || !program.main.u_LightColor || !program.main.u_LightPosition || !program.main.u_AmbientLight || !program.main.u_PickedFace || !program.main.u_CoveredFace || !program.main.u_IsLine){
	console.log('Failed to get the storage location of variables from main shader');
	return false;
    }
    // Write vertex information to buffer object
    program.main.surfBuffer = gl.createBuffer();
    if (!program.main.surfBuffer){
	console.log('Failed to create the buffer object');
	return false;
    }
    program.main.lineBuffer = gl.createBuffer();
    if (!program.main.lineBuffer){
	console.log('Failed to create the buffer object');
	return false;
    }
    return true;
}

function drawGeometry(gl,program,geometry){
    var i;
    var FSIZE = geometry.surface.BYTES_PER_ELEMENT;
    var normalMatrix = new Matrix4(); // Transformation matrix for normals

    gl.useProgram(program.main);
    gl.program = program.main;
    
    gl.bindFramebuffer(gl.FRAMEBUFFER,null);

    normalMatrix.setInverseOf(program.g_modelMatrix);
    normalMatrix.transpose();

    gl.uniformMatrix4fv(program.main.u_MvpMatrix, false, program.g_mvpMatrix.elements);
    gl.uniformMatrix4fv(program.main.u_NormalMatrix, false, normalMatrix.elements);

    // Set the light color (white)
    gl.uniform3f(program.main.u_LightColor, 1.0, 1.0, 1.0);
    // Set the light direction (in the world coordinate)
    gl.uniform3f(program.main.u_LightPosition, 0.0, 0.0, 1.0);
    // Set the ambient light
    gl.uniform3f(program.main.u_AmbientLight, 0.2, 0.2, 0.2);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, program.main.surfBuffer);
    
    gl.vertexAttribPointer(program.main.a_Position, 3, gl.FLOAT, false, FSIZE*6, 0);
    // Enable the assignment to a_attribute variable
    gl.enableVertexAttribArray(program.main.a_Position);
    gl.vertexAttribPointer(program.main.a_Normal, 3, gl.FLOAT, false, FSIZE*6, FSIZE*3);
    // Enable the assignment to a_attribute variable
    gl.enableVertexAttribArray(program.main.a_Normal);
    gl.uniform1i(program.main.u_IsLine,0);

    gl.clearColor(1.0, 1.0, 1.0, 0.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);     // Clear buffers
    
    for(i=0;i<geometry.faceNum;i++){
	if(program.visible[i]){
	    gl.uniform1i(program.main.u_PickedFace,program.facePicked[i]);
	    if (program.faceCoverd == i+1) {
		gl.uniform1i(program.main.u_CoveredFace,1);
	    }
	    else {
		gl.uniform1i(program.main.u_CoveredFace,0);
	    }
	    gl.drawArrays(gl.TRIANGLE_STRIP, geometry.surfOffset[i], geometry.surfCount[i]);
	}
    }
    gl.disableVertexAttribArray(program.main.a_Normal);
    gl.bindBuffer(gl.ARRAY_BUFFER, program.main.lineBuffer);
    gl.vertexAttribPointer(program.main.a_Position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(program.main.a_Position);
    
    gl.uniform1i(program.main.u_IsLine,1);

    for(i=0;i<geometry.faceNum;i++){
	if(program.visible[i]){
	    gl.drawArrays(gl.LINES, geometry.lineOffset[i], geometry.lineCount[i]);
	}
    }
    drawNavi(gl,program , 0);
}

