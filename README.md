# VRM_BVH_loader.js

<img width="721" alt="VRM_BVH_test_loader_2021_07_p2" src="https://user-images.githubusercontent.com/83494645/125167148-0fda0a80-e1da-11eb-85d6-8266be7ae8fc.png">

A sample program to read VRM and BVH files.

- You need to get files regarding three-vrm.js (three.js, three-vrm.js, GLTFLoader.js, and BVHLoader.js).

- Please write a descripstion to use "VRM_BVH_loader-min.js"
```
<script src="./js/VRM_BVH_loader-min.js"></script>
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

