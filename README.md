# VRM_BVH_test_loader.js

<img width="706" alt="VRM_BVH_test_loader_2021_07" src="https://user-images.githubusercontent.com/83494645/125158693-b1973280-e1ad-11eb-9d20-6ead73724a84.png">

A sample program to read VRM files and characters by BVH files.

- You need to get files regarding three-vrm.js (three.js, three-vrm.js, GLTFLoader.js, BVHLoader.js).

- Please write a descripstion to use "VRM_BVH_test_loader.js"

<script src="./js/VRM_BVH_test_loader.js"></script>

and use read_vrm_file_api(0,input) or read_bvh_file_api(0,input) to read VRM and BVH.

- Please use vrm_character_array, 


	var  vrm_character_array  =  new Array();   // これはjs側に入れる


and set positions and rotation for characters.


	let characters_position = [ 
		[-0.1 , 0.90 , -0.78],
		[ -0.4,  0.84, -0.42],
		[ 0.22,  0.78, -0.22]
	];

	let characters_rotation = [ 
		[0,         2.93,    0],
		[ 0,         4.670,   0],
		[ 0.0349,    6.57,    0]
	];



