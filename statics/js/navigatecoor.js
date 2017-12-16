// navigatecoor.js (c) July 2017 by alex
// navigate shader program


//  1----2
//  |  / |
//  | /  |
//  |/   |
//  0----3

var textCoor = new Float32Array([0.0 , 0.0 , 0.0,  0.0 , 0.0 ,
				 0.0 , 0.0 , 0.0,  0.0 , 1.0 ,
				 0.0 , 0.0 , 0.0,  1.0 , 0.0 ,
				 0.0 , 0.0 , 0.0,  1.0 , 1.0 ,
				 
				 0.0 , 0.0 , 0.0,  0.0 , 0.0 ,
				 0.0 , 0.0 , 0.0,  0.0 , 1.0 ,
				 0.0 , 0.0 , 0.0,  1.0 , 0.0 ,
				 0.0 , 0.0 , 0.0,  1.0 , 1.0 ,

				 0.0 , 0.0 , 0.0,  0.0 , 0.0 ,
				 0.0 , 0.0 , 0.0,  0.0 , 1.0 ,
				 0.0 , 0.0 , 0.0,  1.0 , 0.0 ,
				 0.0 , 0.0 , 0.0,  1.0 , 1.0 ]);

var navigateCoor = new Float32Array([ // x-axis coor				     
				     10.0 , 0.0 , 0.0 ,             
				     9.0 , 0.0 , 1.0 ,              
				     9.0 , 0.5 , 0.866025403784 ,   
				     9.0 , 0.866025403784 , 0.5 ,   
				     9.0 , 1.0 , 0.0 ,              
				     9.0 , 0.866025403784 , -0.5 ,  
				     9.0 , 0.5 , -0.866025403784 ,  
				     9.0 , 0.0 , -1.0 ,             
				     9.0 , -0.5 , -0.866025403784 , 
				     9.0 , -0.866025403784 , -0.5 , 
				     9.0 , -1.0 , 0.0 ,             
				     9.0 , -0.866025403784 , 0.5 ,  
				     9.0 , -0.5 , 0.866025403784 ,  
				     9.0 , 0.0 , 1.0 ,              
				     
				     9.0 , 0.0 , 0.0 ,              
				     9.0 , 0.0 , 1.0 ,              
				     9.0 , 0.5 , 0.866025403784 ,   
				     9.0 , 0.866025403784 , 0.5 ,   
				     9.0 , 1.0 , 0.0 ,              
				     9.0 , 0.866025403784 , -0.5 ,  
				     9.0 , 0.5 , -0.866025403784 ,  
				     9.0 , 0.0 , -1.0 ,             
				     9.0 , -0.5 , -0.866025403784 , 
				     9.0 , -0.866025403784 , -0.5 , 
				     9.0 , -1.0 , 0.0 ,             
				     9.0 , -0.866025403784 , 0.5 ,  
				     9.0 , -0.5 , 0.866025403784 ,  
				     9.0 , 0.0 , 1.0 ,              

				     0.0 , 0.0 , 0.2 ,              
				     9.0 , 0.0 , 0.2 ,              
				     0.0 , 0.1 , 0.173205080757 ,   
				     9.0 , 0.1 , 0.173205080757 ,   
				     0.0 , 0.173205080757 , 0.1 ,   
				     9.0 , 0.173205080757 , 0.1 ,   
				     0.0 , 0.2 , 0.0 ,              
				     9.0 , 0.2 , 0.0 ,              
				     0.0 , 0.173205080757 , -0.1 ,  
				     9.0 , 0.173205080757 , -0.1 ,  
				     0.0 , 0.1 , -0.173205080757 ,  
				     9.0 , 0.1 , -0.173205080757 ,  
				     0.0 , 0.0 , -0.2 ,             
				     9.0 , 0.0 , -0.2 ,             
				     0.0 , -0.1 , -0.173205080757 , 
				     9.0 , -0.1 , -0.173205080757 , 
				     0.0 , -0.173205080757 , -0.1 , 
				     9.0 , -0.173205080757 , -0.1 , 
				     0.0 , -0.2 , 0.0 ,             
				     9.0 , -0.2 , 0.0 ,             
				     0.0 , -0.173205080757 , 0.1 ,  
				     9.0 , -0.173205080757 , 0.1 ,  
				     0.0 , -0.1 , 0.173205080757 ,  
				     9.0 , -0.1 , 0.173205080757 ,  
				     0.0 , 0.0 , 0.2 ,              
				     9.0 , 0.0 , 0.2 ,              

				     // y-axis coor
				     0.0 , 10.0 , 0.0 ,             
				     0.0 , 9.0 , 1.0 ,              
				     0.5 , 9.0 , 0.866025403784 ,   
				     0.866025403784 , 9.0 , 0.5 ,   
				     1.0 , 9.0 , 0.0 ,              
				     0.866025403784 , 9.0 , -0.5 ,  
				     0.5 , 9.0 , -0.866025403784 ,  
				     0.0 , 9.0 , -1.0 ,             
				     -0.5 , 9.0 , -0.866025403784 , 
				     -0.866025403784 , 9.0 , -0.5 , 
				     -1.0 , 9.0 , 0.0 ,             
				     -0.866025403784 , 9.0 , 0.5 ,  
				     -0.5 , 9.0 , 0.866025403784 ,  
				     0.0 , 9.0 , 1.0 ,              
				     
				     0.0 , 9.0 , 0.0 ,              
				     0.0 , 9.0 , 1.0 ,              
				     0.5 , 9.0 , 0.866025403784 ,   
				     0.866025403784 , 9.0 , 0.5 ,   
				     1.0 , 9.0 , 0.0 ,              
				     0.866025403784 , 9.0 , -0.5 ,  
				     0.5 , 9.0 , -0.866025403784 ,  
				     0.0 , 9.0 , -1.0 ,             
				     -0.5 , 9.0 , -0.866025403784 , 
				     -0.866025403784 , 9.0 , -0.5 , 
				     -1.0 , 9.0 , 0.0 ,             
				     -0.866025403784 , 9.0 , 0.5 ,  
				     -0.5 , 9.0 , 0.866025403784 ,  
				     0.0 , 9.0 , 1.0 ,              

				     0.0 , 0.0 , 0.2 ,              
				     0.0 , 9.0 , 0.2 ,              
				     0.1 , 0.0 , 0.173205080757 ,   
				     0.1 , 9.0 , 0.173205080757 ,   
				     0.173205080757 , 0.0 , 0.1 ,   
				     0.173205080757 , 9.0 , 0.1 ,   
				     0.2 , 0.0 , 0.0 ,              
				     0.2 , 9.0 , 0.0 ,              
				     0.173205080757 , 0.0 , -0.1 ,  
				     0.173205080757 , 9.0 , -0.1 ,  
				     0.1 , 0.0 , -0.173205080757 ,  
				     0.1 , 9.0 , -0.173205080757 ,  
				     0.0 , 0.0 , -0.2 ,             
				     0.0 , 9.0 , -0.2 ,             
				     -0.1 , 0.0 , -0.173205080757 , 
				     -0.1 , 9.0 , -0.173205080757 , 
				     -0.173205080757 , 0.0 , -0.1 , 
				     -0.173205080757 , 9.0 , -0.1 , 
				     -0.2 , 0.0 , 0.0 ,             
				     -0.2 , 9.0 , 0.0 ,             
				     -0.173205080757 , 0.0 , 0.1 ,  
				     -0.173205080757 , 9.0 , 0.1 ,  
				     -0.1 , 0.0 , 0.173205080757 ,  
				     -0.1 , 9.0 , 0.173205080757 ,  
				     0.0 , 0.0 , 0.2 ,              
				     0.0 , 9.0 , 0.2 ,              

				     // z-axis coor
				     0.0 , 0.0 , 10.0 ,             
				     1.0 , 0.0 , 9.0 ,              
				     0.866025403784 , 0.5 , 9.0 ,   
				     0.5 , 0.866025403784 , 9.0 ,   
				     0.0 , 1.0 , 9.0 ,              
				     -0.5 , 0.866025403784 , 9.0 ,  
				     -0.866025403784 , 0.5 , 9.0 ,  
				     -1.0 , 0.0 , 9.0 ,             
				     -0.866025403784 , -0.5 , 9.0 , 
				     -0.5 , -0.866025403784 , 9.0 , 
				     0.0 , -1.0 , 9.0 ,             
				     0.5 , -0.866025403784 , 9.0 ,  
				     0.866025403784 , -0.5 , 9.0 ,  
				     1.0 , 0.0 , 9.0 ,              
				     
				     0.0 , 0.0 , 9.0 ,              
				     1.0 , 0.0 , 9.0 ,              
				     0.866025403784 , 0.5 , 9.0 ,   
				     0.5 , 0.866025403784 , 9.0 ,   
				     0.0 , 1.0 , 9.0 ,              
				     -0.5 , 0.866025403784 , 9.0 ,  
				     -0.866025403784 , 0.5 , 9.0 ,  
				     -1.0 , 0.0 , 9.0 ,             
				     -0.866025403784 , -0.5 , 9.0 , 
				     -0.5 , -0.866025403784 , 9.0 , 
				     0.0 , -1.0 , 9.0 ,             
				     0.5 , -0.866025403784 , 9.0 ,  
				     0.866025403784 , -0.5 , 9.0 ,  
				     1.0 , 0.0 , 9.0 ,              
				     				     
				     0.2 , 0.0 , 0.0 ,              
				     0.2 , 0.0 , 9.0 ,              
				     0.173205080757 , 0.1 , 0.0 ,   
				     0.173205080757 , 0.1 , 9.0 ,   
				     0.1 , 0.173205080757 , 0.0 ,   
				     0.1 , 0.173205080757 , 9.0 ,   
				     0.0 , 0.2 , 0.0 ,              
				     0.0 , 0.2 , 9.0 ,              
				     -0.1 , 0.173205080757 , 0.0 ,  
				     -0.1 , 0.173205080757 , 9.0 ,  
				     -0.173205080757 , 0.1 , 0.0 ,  
				     -0.173205080757 , 0.1 , 9.0 ,  
				     -0.2 , 0.0 , 0.0 ,             
				     -0.2 , 0.0 , 9.0 ,             
				     -0.173205080757 , -0.1 , 0.0 , 
				     -0.173205080757 , -0.1 , 9.0 , 
				     -0.1 , -0.173205080757 , 0.0 , 
				     -0.1 , -0.173205080757 , 9.0 , 
				     0.0 , -0.2 , 0.0 ,             
				     0.0 , -0.2 , 9.0 ,             
				     0.1 , -0.173205080757 , 0.0 ,  
				     0.1 , -0.173205080757 , 9.0 ,  
				     0.173205080757 , -0.1 , 0.0 ,  
				     0.173205080757 , -0.1 , 9.0 ,  
				     0.2 , 0.0 , 0.0 ,              
				     0.2 , 0.0 , 9.0 ]);

var Nav_VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec2 a_TexCoord;\n' +
    'uniform mat4 u_MvpMatrix;\n' +
    'uniform int u_isText;\n' +
    'varying vec2 v_TexCoord;\n' +
    'varying float v_isText;\n' +
    'void main() {\n' +
    '  v_isText = float(u_isText);\n' +
    '  if(v_isText!=0.0){\n' +
    '    v_TexCoord = a_TexCoord;\n' +
    '  }\n' +
    '  gl_Position = u_MvpMatrix * a_Position;\n' +
    '}\n';

var Nav_FSHADER_SOURCE =
    'precision mediump float;\n' +
    'uniform sampler2D u_Sampler;\n' +
    'uniform vec4 u_Color;\n' +
    'varying vec4 v_Color;\n' +
    'varying vec2 v_TexCoord;\n' +
    'varying float v_isText;\n' +
    'void main() {\n' +
    '  if(v_isText!=0.0){\n' +
    '    gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n' +
    '  }\n' +
    '  else {\n' +
    '    gl_FragColor = u_Color;\n' +
    '  }\n' +
    '}\n';

var textCanvas;
var text;

function initNavigate(gl,program){
    program.navigate = initShaders(gl,Nav_VSHADER_SOURCE,Nav_FSHADER_SOURCE);
    if(!program.navigate){
	console.log('Failed to initialize navigate shaders.');
	return false;
    }

    program.navigate.a_Position  = gl.getAttribLocation(program.navigate, 'a_Position');
    program.navigate.a_TexCoord  = gl.getAttribLocation(program.navigate, 'a_TexCoord');
    program.navigate.u_Color     = gl.getUniformLocation(program.navigate, 'u_Color');
    program.navigate.u_MvpMatrix = gl.getUniformLocation(program.navigate, 'u_MvpMatrix');
    program.navigate.u_isText    = gl.getUniformLocation(program.navigate, 'u_isText');
    program.navigate.u_Sampler   = gl.getUniformLocation(program.navigate, 'u_Sampler');
    if(program.navigate.a_Position<0 || program.navigate.a_Color<0 || program.navigate.a_TexCoord<0 || !program.navigate.u_MvpMatrix || !program.navigate.u_isText || !program.navigate.u_Sampler){
	console.log('Failed to get the storage location of variables from navigate shader');
	return false;
    }

    program.navigate.pbuffer = gl.createBuffer();
    if(!program.navigate.pbuffer){
	console.log('Failed to create the buffer object');
	return false;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, program.navigate.pbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, navigateCoor, gl.STATIC_DRAW);


    program.navigate.tbuffer = gl.createBuffer();
    if(!program.navigate.tbuffer){
	console.log('Failed to create the buffer object');
	return false;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    program.navigate.texture = gl.createTexture();
    if(!program.navigate.texture){
	console.log('Failed to create the texture buffer object');
	return false;
    }

    textCanvas = document.createElement("canvas");
    textCanvas.width = 100;
    textCanvas.height = 100;
    text = textCanvas.getContext("2d");
    text.font = 'italic normal 900 100px arial';
    text.textBaseline = 'middle';
    
    return true;
}

function drawNavi(gl, program, isFrame){
    var FSIZE = navigateCoor.BYTES_PER_ELEMENT;
    var i,j;
    var mMatrix = new Matrix4();
    var vpMatrix = new Matrix4();
    var mvpMatrix = new Matrix4();
    var point = new Vector4(4);
    var color = new Vector4(4);
    
    gl.clear(gl.DEPTH_BUFFER_BIT);
    gl.useProgram(program.navigate);
    gl.program = program.navigate;

    mvpMatrix.set(program.g_modelMatrix);
    mvpMatrix.elements[3]=0.0;
    mvpMatrix.elements[7]=0.0;
    mvpMatrix.elements[11]=0.0;
    mvpMatrix.elements[12]=0.0;
    mvpMatrix.elements[13]=0.0; 
    mvpMatrix.elements[14]=0.0;
    mMatrix.set(mvpMatrix);
    vpMatrix.setOrtho(-15,  -15+gl.canvas.width/5, -15, -15+gl.canvas.height/5, -1000.0, 1000.0);
    mvpMatrix.multiply(vpMatrix);

    point = mMatrix.multiplyVector4(new Vector4([ 12.0 , 0.0 , 0.0 , 1.0 ]));
    for(i=0;i<3;i++){
	textCoor[i]   =point.elements[i];
    }
    point = mMatrix.multiplyVector4(new Vector4([ 0.0 , 12.0 , 0.0 , 1.0 ]));
    for(i=0;i<3;i++){
	textCoor[20+i]=point.elements[i];
    }
    point = mMatrix.multiplyVector4(new Vector4([ 0.0 , 0.0 , 12.0 , 1.0 ]));
    for(i=0;i<3;i++){
	textCoor[40+i]=point.elements[i];
    }
    updateText();
    gl.bindBuffer(gl.ARRAY_BUFFER, program.navigate.tbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, textCoor, gl.STATIC_DRAW);

    // Set texture parameters
    gl.bindTexture(gl.TEXTURE_2D, program.navigate.texture);
    gl.uniform1i(program.navigate.u_Sampler, 0);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);  // Flip the image Y coordinate
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);    
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    
    // set x-axis color
    if(isFrame)	{
	text.fillStyle = 'rgba(255, 0, 0, 1.0)';
	color.set(new Vector4([1.0, 0.0, 0.0, 1.0]));
    }
    else{
	if(program.faceCoverd == -1){
	    text.fillStyle = 'rgba(255, 115, 121, 1.0)';
	    color.set(new Vector4([1.0, 0.451, 0.4745, 1.0]));
	}
	else{
	    text.fillStyle = 'rgba(230,  27,  27, 1.0)';
	    color.set(new Vector4([0.902, 0.1059, 0.1059, 1.0]));
	}
    }
    // draw 'x' axis
    gl.disableVertexAttribArray(program.navigate.a_TexCoord);
    gl.bindBuffer(gl.ARRAY_BUFFER, program.navigate.pbuffer);
    gl.vertexAttribPointer(program.navigate.a_Position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(program.navigate.a_Position);

    gl.uniform1i(program.navigate.u_isText, 0);
    gl.uniform4fv(program.navigate.u_Color, color.elements);
    gl.uniformMatrix4fv(program.navigate.u_MvpMatrix, false, mvpMatrix.elements);
    
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 14);
    gl.drawArrays(gl.TRIANGLE_FAN, 14, 14);
    gl.drawArrays(gl.TRIANGLE_STRIP, 28, 26);
    
    // draw 'x' text
    gl.bindBuffer(gl.ARRAY_BUFFER, program.navigate.tbuffer);
    gl.vertexAttribPointer(program.navigate.a_Position, 3, gl.FLOAT, false, FSIZE*5, 0);
    gl.enableVertexAttribArray(program.navigate.a_Position);
    gl.vertexAttribPointer(program.navigate.a_TexCoord, 2, gl.FLOAT, false, FSIZE*5, FSIZE*3);
    gl.enableVertexAttribArray(program.navigate.a_TexCoord);
    
    gl.uniform1i(program.navigate.u_isText, 1);
    gl.uniformMatrix4fv(program.navigate.u_MvpMatrix, false, vpMatrix.elements);

    gl.bindTexture(gl.TEXTURE_2D, program.navigate.texture);
    text.clearRect(0, 0, textCanvas.width, textCanvas.height);
    if(isFrame){
	text.fillRect(0,0,textCanvas.width,textCanvas.height);
    }else{
	text.fillText('X',0,50);
    }
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    // set y-axis color
    if(isFrame){
	text.fillStyle = 'rgba(0, 255, 0, 1.0)';
	color.set(new Vector4([0.0, 1.0, 0.0, 1.0]));
    }
    else{
	if(program.faceCoverd == -2){
	    text.fillStyle = 'rgba(102, 255, 143, 1.0)';
	    color.set(new Vector4([0.4, 1.0, 0.5608, 1.0]));
	}
	else{
	    text.fillStyle = 'rgba(0,   200,  74, 1.0)';
	    color.set(new Vector4([0.0, 0.7843, 0.2902, 1.0]));
	}
    }
    // draw 'y' axis
    gl.disableVertexAttribArray(program.navigate.a_TexCoord);
    gl.bindBuffer(gl.ARRAY_BUFFER, program.navigate.pbuffer);
    gl.vertexAttribPointer(program.navigate.a_Position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(program.navigate.a_Position);
    
    gl.uniform1i(program.navigate.u_isText, 0);
    gl.uniform4fv(program.navigate.u_Color, color.elements);
    gl.uniformMatrix4fv(program.navigate.u_MvpMatrix, false, mvpMatrix.elements);
    
    gl.drawArrays(gl.TRIANGLE_FAN, 54, 14);
    gl.drawArrays(gl.TRIANGLE_FAN, 68, 14);
    gl.drawArrays(gl.TRIANGLE_STRIP, 82, 26);
    // draw 'y' text
    gl.bindBuffer(gl.ARRAY_BUFFER, program.navigate.tbuffer);
    gl.vertexAttribPointer(program.navigate.a_Position, 3, gl.FLOAT, false, FSIZE*5, 0);
    gl.enableVertexAttribArray(program.navigate.a_Position);
    gl.vertexAttribPointer(program.navigate.a_TexCoord, 2, gl.FLOAT, false, FSIZE*5, FSIZE*3);
    gl.enableVertexAttribArray(program.navigate.a_TexCoord);
    
    gl.uniform1i(program.navigate.u_isText, 1);
    gl.uniformMatrix4fv(program.navigate.u_MvpMatrix, false, vpMatrix.elements);

    gl.bindTexture(gl.TEXTURE_2D, program.navigate.texture);
    text.clearRect(0, 0, textCanvas.width, textCanvas.height);
    if(isFrame){
	text.fillRect(0,0,textCanvas.width,textCanvas.height);
    }else{
	text.fillText('Y',0,50);
    }
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
    gl.drawArrays(gl.TRIANGLE_STRIP, 4, 4);
    

    // set z-axis color
    if(isFrame){
	text.fillStyle = 'rgba(0, 0, 255, 1.0)';
	color.set(new Vector4([0.0, 0.0, 1.0, 1.0]));
    }
    else{
	if(program.faceCoverd == -3){
	    text.fillStyle = 'rgba(177, 164, 255, 1.0)';
	    color.set(new Vector4([0.6941, 0.6431, 1.0, 1.0]));
	}
	else{
	    text.fillStyle = 'rgba(124,  91, 255, 1.0)';
	    color.set(new Vector4([0.4863, 0.3569, 1.0, 1.0]));
	}
    }
    // draw 'z' axis
    gl.disableVertexAttribArray(program.navigate.a_TexCoord);
    gl.bindBuffer(gl.ARRAY_BUFFER, program.navigate.pbuffer);
    gl.vertexAttribPointer(program.navigate.a_Position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(program.navigate.a_Position);
    
    gl.uniform1i(program.navigate.u_isText, 0);
    gl.uniform4fv(program.navigate.u_Color, color.elements);
    gl.uniformMatrix4fv(program.navigate.u_MvpMatrix, false, mvpMatrix.elements);
    
    gl.drawArrays(gl.TRIANGLE_FAN, 108, 14);
    gl.drawArrays(gl.TRIANGLE_FAN, 122, 14);
    gl.drawArrays(gl.TRIANGLE_STRIP, 136, 26);
    // draw 'z' text
    gl.bindBuffer(gl.ARRAY_BUFFER, program.navigate.tbuffer);
    gl.vertexAttribPointer(program.navigate.a_Position, 3, gl.FLOAT, false, FSIZE*5, 0);
    gl.enableVertexAttribArray(program.navigate.a_Position);
    gl.vertexAttribPointer(program.navigate.a_TexCoord, 2, gl.FLOAT, false, FSIZE*5, FSIZE*3);
    gl.enableVertexAttribArray(program.navigate.a_TexCoord);
    
    gl.uniform1i(program.navigate.u_isText, 1);
    gl.uniformMatrix4fv(program.navigate.u_MvpMatrix, false, vpMatrix.elements);

    gl.bindTexture(gl.TEXTURE_2D, program.navigate.texture);
    text.clearRect(0, 0, textCanvas.width, textCanvas.height);
    if(isFrame){
	text.fillRect(0,0,textCanvas.width,textCanvas.height);
    }else{
	text.fillText('Z',0,50);
    }
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
    gl.drawArrays(gl.TRIANGLE_STRIP, 8, 4);
}

function updateText(){
    var i,j,k;
    for(i=0;i<3;i++){
	for(j=1;j<4;j++){
	    textCoor[20*i +5*j+ 0 ]= textCoor[20*i +0]+ textCoor[20*i + 5*j +3]*5;
	    textCoor[20*i +5*j+ 1 ]= textCoor[20*i +1]+ textCoor[20*i + 5*j +4]*5;
	    textCoor[20*i +5*j+ 2 ]= textCoor[20*i +2];
	}
    }
}