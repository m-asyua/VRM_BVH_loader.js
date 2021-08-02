# VRM_BVH_loader.js

<img width="705" alt="sample_img" src="https://user-images.githubusercontent.com/83494645/127798094-54087216-1898-466a-a7f8-4c3770621ef3.png">

A sample program to read VRM and BVH files.

- You need to get files regarding three-vrm.js (three.js, three-vrm.js, GLTFLoader.js, and BVHLoader.js).

- Please write a descripstion to use "VRM_BVH_loader-min.js"
```
<script src="./js/VRM_BVH_loader.js"></script>
```
and use read_vrm_file_api,and  read_bvh_file_api to read VRM and BVH files.


```
....
read_vrm_file_api(0,input) 
....
....
read_bvh_file_api(0,input) 
....

```
Numbers(0-2) represent unique number for each VRM character(0-2).

- Please set positions and rotations for VRM characters 0-2.

```
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

```

