
// release 0.88
// 

	var  vrm_character_array  =  new Array();
	var character_load_flg  =  -1;

function read_vrm_file_api(number,input){

	let reader = new FileReader();
	
	reader.addEventListener('load', function() {

		// delete character
		let old_vrm   =  vrm_character_array[number];
		if(typeof old_vrm === "undefined"){
		}else{
			scene.remove(old_vrm.scene);
		}

		let vrm_file_content = reader.result;
		
		character_load_flg = -1;
		vrm_model_load(number,  vrm_file_content,     0,    3, 0  );

		vrm_anime_check_change(character_change_sub , number );

	}, true)
	reader.readAsDataURL(input);
}





function read_bvh_file_api(number,input){

	let reader = new FileReader();
	reader.addEventListener('load', function() {

		let bvh_file_content = reader.result;
		execute_bvh(number, bvh_file_content);

	}, true)

	reader.readAsText(input, 'UTF-8');

}



function execute_bvh(character_id, bvh_file_content){

	const  bvh_loader  =  new THREE.BVHLoader();
	var    bvh_object  =  bvh_loader.parse(bvh_file_content);

//console.log(bvh_object);

	let number_pos = bvh_object.clip.tracks[1].values.length / 4;  
	// count the number of clips

	let   this_vrm  =  vrm_character_array[character_id];
	pose_content    =  this_vrm.humanoid.getPose()  ;

//console.log(pose_content);

	Object.keys(pose_content).forEach((key) => {
		delete pose_content[key].position;
	});

	let num_of_clip = 0;

	for(var c = 0;  c < number_pos;   c++){
		setTimeout(body_pose_set, c * 20, bvh_object, num_of_clip, pose_content, character_id);
		num_of_clip += 4;
	}

}


function body_pose_set(bvh_object, num_of_clip, pose_content, character_id){


//	input_rotation(pose_content.hips.rotation          ,   1 ,bvh_object,num_of_clip);

	input_rotation(pose_content.upperChest.rotation    ,   3 ,bvh_object,num_of_clip);
	input_rotation(pose_content.chest.rotation         ,   5 ,bvh_object,num_of_clip);
	input_rotation(pose_content.neck.rotation          ,   7 ,bvh_object,num_of_clip);
	input_rotation(pose_content.head.rotation          ,   9 ,bvh_object,num_of_clip);
	input_rotation(pose_content.leftUpperArm.rotation  ,  13 ,bvh_object,num_of_clip);
	input_rotation(pose_content.leftLowerArm.rotation  ,  15 ,bvh_object,num_of_clip);
	input_rotation(pose_content.leftHand.rotation      ,  17 ,bvh_object,num_of_clip);
	input_rotation(pose_content.rightUpperArm.rotation ,  21 ,bvh_object,num_of_clip);
	input_rotation(pose_content.rightLowerArm.rotation ,  23 ,bvh_object,num_of_clip);
	input_rotation(pose_content.rightHand.rotation     ,  25 ,bvh_object,num_of_clip);
	input_rotation(pose_content.leftUpperLeg.rotation  ,  27 ,bvh_object,num_of_clip);
	input_rotation(pose_content.leftLowerLeg.rotation  ,  29 ,bvh_object,num_of_clip);
	input_rotation(pose_content.rightUpperLeg.rotation ,  33 ,bvh_object,num_of_clip);
	input_rotation(pose_content.rightLowerLeg.rotation ,  35 ,bvh_object,num_of_clip);




	let   this_vrm = vrm_character_array[character_id];
	this_vrm.humanoid.setPose(pose_content);

	renderer.render(scene, camera);

}


function input_rotation(object, num_parts, bvh_object,  num_clip){
	object[0]    = -bvh_object.clip.tracks[  num_parts  ].values[num_clip +0];
	object[1]    = bvh_object.clip.tracks[  num_parts  ].values[num_clip +1];
	object[2]    = -bvh_object.clip.tracks[  num_parts  ].values[num_clip +2];
	object[3]    = bvh_object.clip.tracks[  num_parts  ].values[num_clip +3];
}


function vrm_model_load(character_id, vrm_file_name, x,y,z){
	my_loader = new THREE.GLTFLoader();
	my_loader.crossOrigin = 'anonymous';

	my_loader.load(  vrm_file_name,  ( gltf ) => {
			THREE.VRMUtils.removeUnnecessaryJoints( gltf.scene );
			THREE.VRM.from( gltf ).then( ( vrm ) => {

				character_load_flg = 0;

				scene.add( vrm.scene );
				vrm.humanoid.getBoneNode( THREE.VRMSchema.HumanoidBoneName.Hips).position.set(x,y,z);

				initCharacter( vrm );
				vrm_character_array[character_id] = vrm;
			} );
		},
		( progress ) => {
			let percent = ( progress.loaded / progress.total ) *100 ;
			console.log("Loading model..."+vrm_file_name+","+percent+"%" );
			display_user_message("Loading model ["+character_id+"] ..."+percent+"%", character_id, true);
		},
			( error ) => console.error( error )
	);
}


function  vrm_rot_Head(character_id, x,y,z){
	body_rotation(THREE.VRMSchema.HumanoidBoneName.Head, character_id, x,y,z);
}


function body_rotation(bone_name, character_id, x,y,z){
	let this_vrm = vrm_character_array[character_id];
	this_vrm.humanoid.getBoneNode(bone_name).rotation.x = x;
	this_vrm.humanoid.getBoneNode(bone_name).rotation.y = y;
	this_vrm.humanoid.getBoneNode(bone_name).rotation.z = z;
	renderer.render(scene, camera);
}


function initCharacter( vrm ) {

	vrm.humanoid.getBoneNode(THREE.VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.z   =   Math.PI /180 * 72;
	vrm.humanoid.getBoneNode(THREE.VRMSchema.HumanoidBoneName.RightUpperArm).rotation.z  =  -Math.PI /180 * 72;

	vrm.humanoid.getBoneNode(THREE.VRMSchema.HumanoidBoneName.LeftLowerArm).rotation.z   =   Math.PI /180 * 15;
	vrm.humanoid.getBoneNode(THREE.VRMSchema.HumanoidBoneName.RightLowerArm).rotation.z  =  -Math.PI /180 * 15;

	renderer.render(scene, camera);
}


function  vrm_rot_Hips(character_id, x,y,z){
	body_rotation(THREE.VRMSchema.HumanoidBoneName.Hips, character_id, x,y,z);
}


function vrm_anime_check_change(callback,number){

	if(character_load_flg == -1){
		setTimeout(vrm_anime_check_change, 700, callback,number);
	}else{
		display_user_message(".completed.", number,false);
		callback(number);	
	}
}


function character_change_sub( number ){

	let this_vrm   =  vrm_character_array[number];

	vrm_rot_Hips( number,  characters_rotation[number][0], characters_rotation[number][1], characters_rotation[number][2]);	
	
	this_vrm.humanoid.getBoneNode( THREE.VRMSchema.HumanoidBoneName.Hips).position.set(
		characters_position[number][0],
		characters_position[number][1],
		characters_position[number][2]
	);
	
	renderer.render(scene, camera);

}


function display_user_message(text, number, add){
	let old_text = "";
	if(add == true){ old_text = document.getElementById("user_message"+number).innerHTML; }
	document.getElementById("user_message"+number).innerHTML  = old_text + text;
}


