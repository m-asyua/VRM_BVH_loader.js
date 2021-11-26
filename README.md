# VRM_BVH_loader.js

#  You can try it on <a href="https://social-exp.site/VRM_BVH_loader.js/release0.9/index.html">this site</a>.

<img width="369" alt="tmp0" src="https://user-images.githubusercontent.com/83494645/143512380-d618fad7-f9ee-4f60-ad47-c2f92a060bc1.png">

<img width="341" alt="tmp2" src="https://user-images.githubusercontent.com/83494645/143029462-63b5ca5a-95a3-43ef-a76f-09a990e1f4df.png">


A sample program to read VRM and BVH files.

- You need to get files regarding three-vrm.js (three.js, three-vrm.js, GLTFLoader.js, and BVHLoader.js).

- Please write a descripstion to use "VRM_BVH_loader.js"
```
<script src="VRM_BVH_loader.js"></script>
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

- Please set positions and rotations for VRM characters 0-2. [] in characters_position means position.x, position.y, and position.z for each character. [] in characters_rotation means rotation.x, rotation.y and rotation.z. 

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

